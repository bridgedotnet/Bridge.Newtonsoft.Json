using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// 
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#99 - {0}")]
    public class Case99
    {
        public enum EnuVals
        {
            One,
            Two
        }

        [Test]
        public static void EnumAsDictionaryKeyWorks()
        {
            var dic = new Dictionary<EnuVals, int>();
            dic.Add(EnuVals.One, 1);
            dic.Add(EnuVals.Two, 2);

            var dic_s = JsonConvert.SerializeObject(dic);
            Assert.AreEqual("{\"One\":1,\"Two\":2}", dic_s, "Serialized string results in the expected output.");

            var dic2 = new Dictionary<int, EnuVals>();
            dic2.Add(1, EnuVals.One);
            dic2.Add(2, EnuVals.Two);

            var dic2_s = JsonConvert.SerializeObject(dic2);
            Assert.AreEqual("{\"1\":0,\"2\":1}", dic2_s, "Serialized string results in the expected output.");
        }
    }
}