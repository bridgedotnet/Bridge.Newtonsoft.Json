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

            Assert.AreEqual(0, ts.Hours, "Hours could be parsed from a time span string.");
            Assert.AreEqual(0, ts.Minutes, "Minutes could be parsed from a time span string.");
            Assert.AreEqual(1, ts.Seconds, "Seconds could be parsed from a time span string.");

            var str = JsonConvert.SerializeObject(ts);
            Assert.AreEqual("\"00:00:01\"", str, "TimeSpan value could be serialized into a json string.");
        }
    }
}