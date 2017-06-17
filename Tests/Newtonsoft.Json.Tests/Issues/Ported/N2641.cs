using Bridge;
using Newtonsoft.Json.Serialization;
using Bridge.Test.NUnit;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Ported Issues")]
    [TestFixture(TestNameFormat = "#2641 - {0}")]
    public class Bridge2641
    {
        [Reflectable]
        public class Class1
        {
            public int Field1;
            public int field2;
        }

        [Test]
        public static void TestJsonCamelCaseForFields()
        {
            var c = new Class1 { Field1 = 1, field2 = 2 };
            var json = JsonConvert.SerializeObject(c, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
            Assert.AreEqual("{\"field1\":1,\"field2\":2}", json);
            var deserialized = JsonConvert.DeserializeObject<Class1>(json, new JsonSerializerSettings() { ContractResolver = new CamelCasePropertyNamesContractResolver() });
            Assert.AreEqual(1, deserialized.Field1);
            Assert.AreEqual(2, deserialized.field2);

            json = JsonConvert.SerializeObject(c);
            Assert.AreEqual("{\"Field1\":1,\"field2\":2}", json);
            deserialized = JsonConvert.DeserializeObject<Class1>(json);
            Assert.AreEqual(1, deserialized.Field1);
            Assert.AreEqual(2, deserialized.field2);
        }
    }
}