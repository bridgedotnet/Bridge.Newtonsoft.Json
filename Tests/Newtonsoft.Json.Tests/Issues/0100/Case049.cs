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
            // String bound to object.
            var json = @"{""Member1"": ""spaghetti""}";
            Assert.Throws<System.ArgumentException>(() => JsonConvert.DeserializeObject<MyClass>(json));

            // String bound to int
            json = @"{""InField"": ""spaghetti""}";
            Assert.Throws<JsonException>(() => JsonConvert.DeserializeObject<MyClass>(json));

            // Float bound to int
            json = @"{""InField"": 15.1}";
            Assert.Throws<JsonException>(() => JsonConvert.DeserializeObject<MyClass>(json));

            // Nested string bound to object
            json = @"{""InField"": 15, ""Member1"": { ""Member1"": ""spaghetti""}";
            Assert.Throws<JsonException>(() => JsonConvert.DeserializeObject<MyClass>(json));

            // Nested int bound to object
            json = @"{""InField"": 15, ""Member1"": { ""Member1"": 18}";
            Assert.Throws<JsonException>(() => JsonConvert.DeserializeObject<MyClass>(json));

            // Nested float bound to int
            json = @"{""InField"": 15, ""Member1"": { ""InField"": 18.2}";
            Assert.Throws<JsonException>(() => JsonConvert.DeserializeObject<MyClass>(json));
        }
    }
}