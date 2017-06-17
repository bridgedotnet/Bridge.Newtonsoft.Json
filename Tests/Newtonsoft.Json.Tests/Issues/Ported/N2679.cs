using Bridge;
using Bridge.Test.NUnit;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Ported Issues")]
    [TestFixture(TestNameFormat = "#2679 - {0}")]
    public class Bridge2679
    {
        [Reflectable(true)]
        public class Test1
        {
            public Test1(int value)
            {
                Value = value;
            }

            public int Value
            {
                get; private set;
            }
        }

        [Reflectable(true)]
        public class Test2<T>
        {
            public Test2(T value)
            {
                Value = value;
            }

            public T Value
            {
                get; private set;
            }
        }

        [Test]
        public static void TestTypeNameHandling()
        {
            var obj1 = new Test1(1);
            var obj2 = new Test2<int>(2);

            var json1 = JsonConvert.SerializeObject(obj1, new JsonSerializerSettings() { TypeNameHandling = TypeNameHandling.Objects });
            Assert.AreEqual("{\"$type\":\"" + typeof(Test1).AssemblyQualifiedName + "\",\"Value\":1}", json1);

            var json2 = JsonConvert.SerializeObject(obj2, new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects });
            Assert.AreEqual("{\"$type\":\"" + typeof(Test2<int>).AssemblyQualifiedName + "\",\"Value\":2}", json2);
        }
    }
}