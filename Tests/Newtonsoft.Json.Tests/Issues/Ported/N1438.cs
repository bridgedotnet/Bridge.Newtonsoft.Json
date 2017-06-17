using Bridge.Test.NUnit;
using Bridge;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Ported Issues")]
    [TestFixture(TestNameFormat = "#1438 - {0}")]
    public class Bridge1438
    {
        [Reflectable]
        public class Foo
        {
            public int Value
            {
                get; set;
            }

            public string SomeMethod()
            {
                return "I'm " + this.GetType().FullName + " and my value is " + this.Value;
            }
        }

        [Test(ExpectedCount = 4)]
        public static void TestJSONParse()
        {
            var serialized = JsonConvert.SerializeObject(new Foo() { Value = 100 });

            Assert.NotNull(serialized, " serialized should not be null");

            var result = JsonConvert.DeserializeObject<Foo>(serialized);

            Assert.NotNull(result, " result should not be null");
            Assert.AreEqual("Newtonsoft.Json.Tests.Issues.Bridge1438+Foo", result.GetType().FullName, "Check result type name");
            Assert.AreEqual(100, result.Value, "result.Value = 100");
        }

        [Test(ExpectedCount = 7)]
        public static void TestJSONParseAsArray()
        {
            var serialized = JsonConvert.SerializeObject(new[] { new Foo() { Value = 101 } });

            Assert.NotNull(serialized, " serialized should not be null");

            var result = JsonConvert.DeserializeObject<Foo[]>(serialized);

            Assert.NotNull(result, " result should not be null");
            Assert.AreEqual("Newtonsoft.Json.Tests.Issues.Bridge1438+Foo[]", result.GetType().FullName, "Check result type name");
            Assert.AreEqual(1, result.Length, "Check result length");
            Assert.NotNull(result[0], " result[0] should not be null");
            Assert.AreEqual("Newtonsoft.Json.Tests.Issues.Bridge1438+Foo", result[0].GetType().FullName, "Check result[0] type name");
            Assert.AreEqual(101, result[0].Value, "result[0].Value = 101");
        }
    }
}