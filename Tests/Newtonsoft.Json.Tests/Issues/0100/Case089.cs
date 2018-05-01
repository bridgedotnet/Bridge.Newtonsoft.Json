using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// 
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#89 - {0}")]
    public class Case89
    {
        [Test]
        public static void TimeSpanSerializationWorks()
        {
            TimeSpan ts = (TimeSpan)JsonConvert.DeserializeObject("\"00:00:01\"", typeof(TimeSpan));

            Assert.AreEqual(1, ts.Seconds);
            Assert.AreEqual(0, ts.Hours);
            Assert.AreEqual(0, ts.Minutes);

            var str = JsonConvert.SerializeObject(ts);
            Assert.AreEqual("\"00:00:01\"", str);
        }
    }
}