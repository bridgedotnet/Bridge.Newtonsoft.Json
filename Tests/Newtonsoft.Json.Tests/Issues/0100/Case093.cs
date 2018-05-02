using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// 
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#93 - {0}")]
    public class Case93
    {
        public class Person
        {
            public Dictionary<AddressType, Address> Addresses { get; set; }
            public Dictionary<string, Address> StringAddresses { get; set; }
            public List<Address> ListAddresses { get; set; }
            public Address[] ArrayAddresses { get; set; }
        }

        public enum AddressType
        {
            Home,
            Work
        }

        public class Address
        {
            public string Street { get; set; }
            public string City { get; set; }
            public string State { get; set; }
            public string PostalCode { get; set; }
        }

        [Test]
        public static void TestDictionary()
        {
            var person = new Person();
            person.Addresses = new Dictionary<AddressType, Address>();
            person.Addresses.Add(AddressType.Home, new Address { Street = "test" });

            var serialized = Newtonsoft.Json.JsonConvert.SerializeObject(person, new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects });
            var match = "{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Person, Newtonsoft.Json.Tests\",\"Addresses\":{\"Home\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests\",\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"},\"$type\":\"System.Collections.Generic.Dictionary`2[[Newtonsoft.Json.Tests.Issues.Case93+AddressType, Newtonsoft.Json.Tests],[Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests]], mscorlib\"},\"ArrayAddresses\":null,\"ListAddresses\":null,\"StringAddresses\":null}";
            Assert.AreEqual(match, serialized);

            var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<Person>(serialized);
            Assert.AreEqual("test", deserialized.Addresses[AddressType.Home].Street);
        }

        [Test]
        public static void TestAll()
        {
            var person = new Person();
            person.StringAddresses = new Dictionary<string, Address>();
            person.ListAddresses = new List<Address>();
            person.ArrayAddresses = new Address[1];
            person.StringAddresses.Add("Home", new Address { Street = "test" });
            person.ListAddresses.Add(new Address { Street = "test" });
            person.ArrayAddresses[0] = new Address { Street = "test" };

            var serialized = Newtonsoft.Json.JsonConvert.SerializeObject(person, new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.All });
            var match = "{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Person, Newtonsoft.Json.Tests\",\"Addresses\":null,\"ArrayAddresses\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Address[]\",\"$values\":[{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests\",\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"}]},\"ListAddresses\":{\"$type\":\"System.Collections.Generic.List`1[[Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests]], mscorlib\",\"$values\":[{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests\",\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"}]},\"StringAddresses\":{\"Home\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests\",\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"},\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, mscorlib],[Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests]], mscorlib\"}}";
            Assert.AreEqual(match, serialized);

            var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<Person>(serialized);
            Assert.AreEqual("test", deserialized.StringAddresses["Home"].Street);
            Assert.AreEqual("test", deserialized.ListAddresses[0].Street);
            Assert.AreEqual("test", deserialized.ArrayAddresses[0].Street);
        }

        [Test]
        public static void TestAuto()
        {
            var person = new Person();
            person.StringAddresses = new Dictionary<string, Address>();
            person.ListAddresses = new List<Address>();
            person.ArrayAddresses = new Address[1];
            person.StringAddresses.Add("Home", new Address { Street = "test" });
            person.ListAddresses.Add(new Address { Street = "test" });
            person.ArrayAddresses[0] = new Address { Street = "test" };

            var serialized = Newtonsoft.Json.JsonConvert.SerializeObject(person, new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Auto });
            var match = "{\"Addresses\":null,\"ArrayAddresses\":[{\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"}],\"ListAddresses\":[{\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"}],\"StringAddresses\":{\"Home\":{\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"}}}";
            Assert.AreEqual(match, serialized);

            var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<Person>(serialized);
            Assert.AreEqual("test", deserialized.StringAddresses["Home"].Street);
            Assert.AreEqual("test", deserialized.ListAddresses[0].Street);
            Assert.AreEqual("test", deserialized.ArrayAddresses[0].Street);
        }

        [Test]
        public static void TestArrays()
        {
            var person = new Person();
            person.StringAddresses = new Dictionary<string, Address>();
            person.ListAddresses = new List<Address>();
            person.ArrayAddresses = new Address[1];
            person.StringAddresses.Add("Home", new Address { Street = "test" });
            person.ListAddresses.Add(new Address { Street = "test" });
            person.ArrayAddresses[0] = new Address { Street = "test" };

            var serialized = Newtonsoft.Json.JsonConvert.SerializeObject(person, new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Arrays });
            var match = "{\"Addresses\":null,\"ArrayAddresses\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Address[]\",\"$values\":[{\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"}]},\"ListAddresses\":{\"$type\":\"System.Collections.Generic.List`1[[Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests]], mscorlib\",\"$values\":[{\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"}]},\"StringAddresses\":{\"Home\":{\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"}}}";
            Assert.AreEqual(match, serialized);

            var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<Person>(serialized);
            Assert.AreEqual("test", deserialized.StringAddresses["Home"].Street);
            Assert.AreEqual("test", deserialized.ListAddresses[0].Street);
            Assert.AreEqual("test", deserialized.ArrayAddresses[0].Street);
        }
    }
}