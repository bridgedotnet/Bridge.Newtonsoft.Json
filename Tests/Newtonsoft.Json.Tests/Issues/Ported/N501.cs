using Bridge;
using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    [Reflectable]
    public class Bridge501A : List<int>
    {
        // internal List<> uses items, conflict here
        public string Items = "12";
    }

    [Reflectable]
    public class Bridge501B : List<int>
    {
        // just empty
    }

    // Bridge[#501]
    [Category("Ported Issues")]
    [TestFixture(TestNameFormat = "#501 - {0}")]
    public class Bridge501
    {
        [Test(ExpectedCount = 5)]
        public static void TestUseCase()
        {
            var list = new List<int> { 7 };
            var z = JsonConvert.SerializeObject(list); // this is ok
            Assert.AreEqual("[7]", z, "List<int>");

            var b = new Bridge501B() { 1, 2 };
            var y = JsonConvert.SerializeObject(b); // wrong, missing items
            Assert.AreEqual("[1,2]", y, "Bridge501B");

            var a = new Bridge501A() { 7 }; // sine items is defined as member, push fails
            var x = JsonConvert.SerializeObject(a);
            Assert.AreEqual("[7]", x, "Bridge501A");

            var c = JsonConvert.DeserializeObject<Bridge501A>(x);
            Assert.AreEqual("12", c.Items, "Bridge501A Parse c.Items");
            Assert.AreEqual(7, c[0], "Bridge501A Parse c[0]");
        }
    }
}