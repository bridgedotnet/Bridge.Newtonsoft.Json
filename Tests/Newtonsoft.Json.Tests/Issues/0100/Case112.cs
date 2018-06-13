using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#112 - {0}")]
    public class Case112
    {
        [Test]
        public static void TestInt64()
        {
            long a = 19L;
            var serialized = JsonConvert.SerializeObject(a);
            Assert.True((object)serialized is string);
            Assert.AreEqual(2, serialized.Length);
            Assert.AreEqual("19", serialized);
        }
    }
}