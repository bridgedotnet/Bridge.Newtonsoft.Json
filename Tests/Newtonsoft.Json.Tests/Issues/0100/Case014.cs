using System;
using System.Collections;
using Bridge;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#14 - {0}")]
    public class Case14
    {
        public sealed class Multiple<T>
        {
            #region Properties
            public bool Done { get; set; }
            public int Code { get; set; }
            public T[] Data { get; set; }
            #endregion
        }

        [Test]
        public static void TestCaseInsensitiveMatch()
        {
            var msg1 = "{\"data\": [1, 2, 3],\"done\": true, \"code\": 16}";
            var test1 = JsonConvert.DeserializeObject<Multiple<int>>(msg1);
            Assert.True(test1.Done);
            Assert.AreEqual(16, test1.Code);
            Assert.AreEqual(3, test1.Data.Length);
            Assert.AreEqual(1, test1.Data[0]);
            Assert.AreEqual(2, test1.Data[1]);
            Assert.AreEqual(3, test1.Data[2]);

            var msg2 = "{\"Data\": [1, 2, 3],\"Done\": true, \"Code\": 16}";
            var test2 = JsonConvert.DeserializeObject<Multiple<int>>(msg2);
            Assert.True(test2.Done);
            Assert.AreEqual(16, test2.Code);
            Assert.AreEqual(3, test2.Data.Length);
            Assert.AreEqual(1, test2.Data[0]);
            Assert.AreEqual(2, test2.Data[1]);
            Assert.AreEqual(3, test2.Data[2]);
        }
    }
}