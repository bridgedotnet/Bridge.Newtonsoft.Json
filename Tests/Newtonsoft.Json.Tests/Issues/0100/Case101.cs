using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// 
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#101 - {0}")]
    public class Case101
    {
        public class MyCustomClass
        {
            public object Value { get; set; }
        }

        [Test]
        public static void Test()
        {
            var obj = new MyCustomClass { Value = true };
            var str = JsonConvert.SerializeObject(obj);
            var deser = JsonConvert.DeserializeObject<MyCustomClass>(str);
            Assert.True((bool)deser.Value);
        }
    }
}