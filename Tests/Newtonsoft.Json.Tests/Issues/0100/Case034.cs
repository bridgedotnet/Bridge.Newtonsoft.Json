using System;
using System.Collections;
using Bridge;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#34 - {0}")]
    public class Case34
    {
        public class Test1
        {
            public Guid? GUID
            {
                get;
                set;
            }

            public int? IntProp
            {
                get;
                set;
            }
        }

        [Test]
        public static void TestGuid()
        {
            var guid = Guid.NewGuid();
            var obj = new Test1 { GUID = guid, IntProp = 1 };

            var json = JsonConvert.SerializeObject(obj);
            Assert.AreEqual($"{{\"GUID\":\"{guid.ToString()}\",\"IntProp\":1}}", json);
            obj = JsonConvert.DeserializeObject<Test1>(json);
            Assert.AreEqual(guid.ToString(), obj.GUID.ToString());
            Assert.AreEqual(1, obj.IntProp.Value);

            obj = new Test1();

            json = JsonConvert.SerializeObject(obj);
            Assert.AreEqual("{\"GUID\":null,\"IntProp\":null}", json);
            obj = JsonConvert.DeserializeObject<Test1>(json);
            Assert.Null(obj.GUID);
            Assert.Null(obj.IntProp);
        }
    }
}