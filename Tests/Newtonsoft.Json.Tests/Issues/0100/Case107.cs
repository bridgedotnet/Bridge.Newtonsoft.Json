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
        public static void TestJsonReplaceList()
        {
            BCtorArg = "default";

            var b = new B("foo");

            b.list.Add("baz");

            string s = JsonConvert.SerializeObject(b);

            Assert.AreEqual("{\"list\":[\"foo\",\"baz\"]}", s, "Serialized string representation of class is correct.");

            var bb = JsonConvert.DeserializeObject<B>(s);
            Assert.Null(BCtorArg, "Change assigned by constructor is reflected in code when deserialization is called.");
            Assert.AreEqual(2, bb.list.Count, "List within deserialized object has the expected number of entries.");
            Assert.AreEqual("foo", bb.list[0], "List within deserialized object has the expected element in first position.");
            Assert.AreEqual("baz", bb.list[1], "List within deserialized object has the expected element in second position.");
        }
    }
}