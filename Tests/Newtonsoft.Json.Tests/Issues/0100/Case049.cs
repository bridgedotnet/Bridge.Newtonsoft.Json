using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Globalization;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#49 - {0}")]
    public class Case49
    {
        public class MyClass
        {
            public int InField;
            public MyClass Member1;
        }

        [Test]
        public static void TestInvalidSchema()
        {
            var json = @"{""Member1"": ""spaghetti""}";
            Assert.Throws<System.ArgumentException>(() => JsonConvert.DeserializeObject<MyClass>(json));

            json = @"{""InField"": ""spaghetti""}";
            Assert.Throws<JsonException>(() => JsonConvert.DeserializeObject<MyClass>(json));

            json = @"{""InField"": 15.1}";
            Assert.Throws<JsonException>(() => JsonConvert.DeserializeObject<MyClass>(json));
        }
    }
}