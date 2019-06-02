using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#157 - {0}")]
    public class Case157
    {
        public class Class1
        {
            public string Uid { get; set; }
        }

        public class Class2
        {
            public string Uid { get; set; }
        }

        [Test]
        public static void TestExpectedType()
        {
            var settings = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects };
            var a = new Class1
            {
                Uid = "HelloWorld"
            };
            var json = JsonConvert.SerializeObject(a, settings);
            var newjson = json.Replace("Class1", "Class2");

            Assert.Throws<JsonSerializationException>(() => {
                var newresult = JsonConvert.DeserializeObject<Class1>(newjson);
            });

            var result = JsonConvert.DeserializeObject<Class1>(json);
            Assert.NotNull(result);
        }
    }
}