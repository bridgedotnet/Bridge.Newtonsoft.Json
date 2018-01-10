using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#82 - {0}")]
    public class Case82
    {
        public class Test
        {
            public long? ID;

            public Test()
            {
                ID = 3;
            }
        }

        [Test]
        public static void TestNullableDeserialization()
        {
            var settings = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects };
            Test test = new Test();

            var json = JsonConvert.SerializeObject(test, settings);
            test = JsonConvert.DeserializeObject<Test>(json, settings);

            Assert.True(test.ID == 3);
        }
    }
}