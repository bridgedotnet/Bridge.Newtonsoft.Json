using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#114 - {0}")]
    public class Case114
    {
        public class MyClass
        {
            public MyClass()
            {
                Items = new MyList();
                Items.Parent = "123";
            }

            public MyList Items { get; set; }
        }

        public class MyList : List<string>
        {
            public string Parent { get; set; }
        }

        [Test]
        public static void TestPropertyInitInCtor()
        {
            var msg = new MyClass();
            var str = JsonConvert.SerializeObject(msg);
            Assert.AreEqual("{\"Items\":[]}", str);
            var obj = JsonConvert.DeserializeObject<MyClass>(str);
            Assert.True((object)obj.Items is MyList);
            Assert.AreEqual("123", obj.Items.Parent);
        }
    }
}