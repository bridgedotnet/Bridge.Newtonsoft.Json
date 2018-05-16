using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// 
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#107 - {0}")]
    public class Case107
    {
        private static string BCtorArg;
        public class B
        {
            public B(string foo)
            {
                BCtorArg = foo;

                list = new List<string> { foo };
            }            
            public List<string> list;
        }

        [Test]
        public static void Test()
        {
            BCtorArg = "default";

            var b = new B("foo");

            b.list.Add("baz");

            string s = JsonConvert.SerializeObject(b);

            Assert.AreEqual("{\"list\":[\"foo\",\"baz\"]}", s);

            var bb = JsonConvert.DeserializeObject<B>(s);
            Assert.Null(BCtorArg);
            Assert.AreEqual(2, bb.list.Count);
            Assert.AreEqual("foo", bb.list[0]);
            Assert.AreEqual("baz", bb.list[1]);
        }
    }
}