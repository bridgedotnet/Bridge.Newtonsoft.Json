using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// 
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#126 - {0}")]
    public class Case126
    {
        [Test]
        public static void TestSystemVersion()
        {
            var vers = new Version(4, 3, 2, 1);
            var serial = JsonConvert.SerializeObject(vers);

            Assert.AreEqual("4.3.2.1", vers.ToString());
            Assert.AreEqual("{\"Build\":2,\"Major\":4,\"MajorRevision\":0,\"Minor\":3,\"MinorRevision\":1,\"Revision\":1}", serial);

            var deserial = JsonConvert.DeserializeObject<Version>(serial);

            Assert.AreEqual("4.3.2.1", deserial.ToString());
        }
    }
}