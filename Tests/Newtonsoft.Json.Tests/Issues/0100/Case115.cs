using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
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

        [Test]
        public static void TestOrder()
        {
            var request = new Dictionary<AddressType, Address>()
            {
                { AddressType.Home, new Address { Street = "test", City = "test", State = "test", Zip = "test"} }
            };

            var serialized = Newtonsoft.Json.JsonConvert.SerializeObject(request, new JsonSerializerSettings() { TypeNameHandling = TypeNameHandling.Objects });
            var match = "{\"$type\":\"System.Collections.Generic.Dictionary`2[[Newtonsoft.Json.Tests.Issues.Case115+AddressType, Newtonsoft.Json.Tests],[Newtonsoft.Json.Tests.Issues.Case115+Address, Newtonsoft.Json.Tests]], mscorlib\",\"Home\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case115+Address, Newtonsoft.Json.Tests\",\"City\":\"test\",\"State\":\"test\",\"Street\":\"test\",\"Zip\":\"test\"}}";
            Assert.AreEqual(match, serialized);
        }
    }
}