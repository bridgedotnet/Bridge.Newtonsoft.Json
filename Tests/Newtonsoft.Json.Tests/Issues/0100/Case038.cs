using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#38 - {0}")]
    public class Case38
    {
        [Test]
        public static void TestKeyValuePair()
        {
            var settings = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects };

            var json = JsonConvert.SerializeObject(new KeyValuePair<int, string>(1, "bla1"), settings);

            Assert.AreEqual("{\"$type\":\"System.Collections.Generic.KeyValuePair`2[[System.Int32, mscorlib],[System.String, mscorlib]], mscorlib\",\"Key\":1,\"Value\":\"bla1\"}", json);

            var obj = JsonConvert.DeserializeObject<KeyValuePair<int, string>>(json, settings);

            Assert.AreEqual(1, obj.Key);
            Assert.AreEqual("bla1", obj.Value);
        }
    }
}