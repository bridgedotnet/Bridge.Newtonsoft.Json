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
            var match = "{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Person, Newtonsoft.Json.Tests\",\"Addresses\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[Newtonsoft.Json.Tests.Issues.Case93+AddressType, Newtonsoft.Json.Tests],[Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests]], mscorlib\",\"Home\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests\",\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"}},\"ArrayAddresses\":null,\"ListAddresses\":null,\"StringAddresses\":null}";
            Assert.AreEqual(match, serialized, "Object with dictionary members and dictionary enum keys can be serialized.");

            var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<Person>(serialized);
            Assert.AreEqual("test", deserialized.Addresses[AddressType.Home].Street, "Object with dictionary members and dictionary enum keys can be deserialized.");
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
            var match = "{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Person, Newtonsoft.Json.Tests\",\"Addresses\":null,\"ArrayAddresses\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Address[]\",\"$values\":[{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests\",\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"}]},\"ListAddresses\":{\"$type\":\"System.Collections.Generic.List`1[[Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests]], mscorlib\",\"$values\":[{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests\",\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"}]},\"StringAddresses\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, mscorlib],[Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests]], mscorlib\",\"Home\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case93+Address, Newtonsoft.Json.Tests\",\"City\":null,\"PostalCode\":null,\"State\":null,\"Street\":\"test\"}}}";
            Assert.AreEqual(match, serialized, "Complex object with Dictionary, List, and array members can be serialized.");

            var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<Person>(serialized);
            Assert.AreEqual("test", deserialized.StringAddresses["Home"].Street, "Complex object's dictionary member can be deserialized.");
            Assert.AreEqual("test", deserialized.ListAddresses[0].Street, "Complex object's list member can be deserialized.");
            Assert.AreEqual("test", deserialized.ArrayAddresses[0].Street, "Complex object's array member can be deserialized.");
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
            Assert.AreEqual(match, serialized, "Complex object with TypeNameHandling as 'auto' can be serialized.");

            var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<Person>(serialized);
            Assert.AreEqual("test", deserialized.StringAddresses["Home"].Street, "TypeNameHandling=Auto serialized object's dictionary member can be deserialized.");
            Assert.AreEqual("test", deserialized.ListAddresses[0].Street, "TypeNameHandling=Auto serialized object's list member can be deserialized.");
            Assert.AreEqual("test", deserialized.ArrayAddresses[0].Street, "TypeNameHandling=Auto serialized object's array member can be deserialized.");
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
            Assert.AreEqual(match, serialized, "Complex object with TypeNameHandling as 'array' can be serialized.");

            var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<Person>(serialized);
            Assert.AreEqual("test", deserialized.StringAddresses["Home"].Street, "TypeNameHandling=Array serialized object's dictionary member can be deserialized.");
            Assert.AreEqual("test", deserialized.ListAddresses[0].Street, "TypeNameHandling=Array serialized object's dictionary member can be deserialized.");
            Assert.AreEqual("test", deserialized.ArrayAddresses[0].Street, "TypeNameHandling=Array serialized object's dictionary member can be deserialized.");
        }
    }
}