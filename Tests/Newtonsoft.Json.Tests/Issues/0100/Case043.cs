using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Globalization;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#43 - {0}")]
    public class Case43
    {
        [Test]
        public static void TestCultureInfo()
        {
            var settings = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects };
            var c = new CultureInfo("iv");
            var j = JsonConvert.SerializeObject(c, settings);
            Assert.AreEqual("\"iv\"", j);

            var obj = JsonConvert.DeserializeObject<CultureInfo>("\"iv\"", settings);
            Assert.NotNull(obj);
            Assert.AreEqual("iv", obj.Name);
        }
    }
}