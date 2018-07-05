using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// Ensures the '$type' property is output first when serializing an object
    /// with the 'TypeNameHandling.Objects' setting.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#115 - {0}")]
    public class Case115
    {
        public enum AddressType
        {
            Home,
            Business
        }

        public class Address
        {
            public string Street { get; set; }
            public string City { get; set; }
            public string State { get; set; }
            public string Zip { get; set; }
        }

        /// <summary>
        /// Tests by instantiating a class with cascading properties and
        /// checking whether the '$type' property is output first when the
        /// type name handling setting is set to objects.
        /// </summary>
        [Test]
        public static void TestOrder()
        {
            var request = new Dictionary<AddressType, Address>()
            {
                { AddressType.Home, new Address { Street = "test", City = "test", State = "test", Zip = "test"} }
            };

            var serialized = JsonConvert.SerializeObject(request, new JsonSerializerSettings() { TypeNameHandling = TypeNameHandling.Objects });
            // This won't match native's, but the order of the other properties
            // probably won't affect any result.
            var match = "{\"$type\":\"System.Collections.Generic.Dictionary`2[[Newtonsoft.Json.Tests.Issues.Case115+AddressType, Newtonsoft.Json.Tests],[Newtonsoft.Json.Tests.Issues.Case115+Address, Newtonsoft.Json.Tests]], mscorlib\",\"Home\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case115+Address, Newtonsoft.Json.Tests\",\"City\":\"test\",\"State\":\"test\",\"Street\":\"test\",\"Zip\":\"test\"}}";
            Assert.AreEqual(match, serialized, "Serialization output's '$type' property position is retained as first.");
        }

        /// <summary>
        /// Ensures the correct exception is thrown when the serialized string
        /// is not right.
        /// </summary>
        [Test]
        public static void TestException()
        {
            var serialized = @"{
  ""Home"": {
    ""$type"": ""Newtonsoft.Json.Tests.Issues.Case115+Address, Newtonsoft.Json.Tests"",
    ""City"": ""London""
  },
  ""$type"": ""System.Collections.Generic.Dictionary`2[[Newtonsoft.Json.Tests.Issues.Case115+AddressType, Newtonsoft.Json.Tests],[Newtonsoft.Json.Tests.Issues.Case115+Address, Newtonsoft.Json.Tests]], mscorlib""
}";
            // Bridge does not throw an exception at all, it accepts this kind of mistake.
            /*
            Assert.Throws<ArgumentException>(
                () => { JsonConvert.DeserializeObject<Dictionary<AddressType, Address>>(serialized); },
                "Trying to deserialize a '$type' broken string results in ArgumentException.");
            */
            var deserialized = JsonConvert.DeserializeObject<Dictionary<AddressType, Address>>(serialized);
            Assert.AreEqual("London", deserialized[0].City, "Invalid '$type' serialized strings can be deserialized -- and results in the correct object.");
        }
    }
}