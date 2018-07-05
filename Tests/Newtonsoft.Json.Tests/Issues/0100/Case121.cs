using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// 
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#121 - {0}")]
    public class Case121
    {
        public class TestDto
        {
            public bool? A { get; set; }
            public bool? B { get; set; }
            public bool? C { get; set; }
        }

        [Test]
        public static void TestNullable()
        {
            var test = new TestDto();
            test.A = true;
            test.B = false;
            test.C = null;

            var serialized = JsonConvert.SerializeObject(test);
            Assert.AreEqual("{\"A\":true,\"B\":false,\"C\":null}", serialized);

            var deserialized = JsonConvert.DeserializeObject<TestDto>(serialized);

            Assert.True(deserialized.A.Value);
            Assert.False(deserialized.B.Value);
            Assert.Null(deserialized.C);
        }
    }
}