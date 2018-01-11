using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#81 - {0}")]
    public class Case81
    {
        sealed class Test
        {
            public Test(string name) { Name = name; }
            public string Name { get; set; }
        }

        sealed class Test2
        {
            public Test2(string name1)
            {
                Name = name1;
            }
            public string Name { get; set; }
        }

        sealed class Test3
        {
            public string Name { get; set; }
        }

        public sealed class NonNullList<T> : IEnumerable<T>
        {

            private readonly Node _headIfAny;

            public NonNullList(IEnumerable<T> values) // This was only added for Bridge.Newtonsoft.Json but it probably doesn't hurt to make it available for general use
            {
                Node node = null;
                foreach (var value in values.Reverse())
                {
                    node = new Node
                    {
                        Count = ((node == null) ? 0 : node.Count) + 1,
                        Item = value,
                        NextIfAny = node
                    };
                }
                _headIfAny = node;
            }

            public IEnumerator<T> GetEnumerator()
            {
                var node = _headIfAny;
                while (node != null)
                {
                    yield return node.Item;
                    node = node.NextIfAny;
                }
            }

            IEnumerator IEnumerable.GetEnumerator() { return GetEnumerator(); }

            private sealed class Node
            {
                public int Count;
                public T Item;
                public Node NextIfAny;
            }
        }



        [Test]
        public static void TestConstructors()
        {
            var s = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects };

            var o1 = new NonNullList<Test>(new[] { new Test("bla1"), new Test("bla2") });
            var json = JsonConvert.SerializeObject(o1, s);
            var o2 = JsonConvert.DeserializeObject<NonNullList<Test>>(json, s);

            var arr1 = o2.ToArray();
            Assert.AreEqual("bla1", arr1[0].Name);
            Assert.AreEqual("bla2", arr1[1].Name);

            var d1 = new NonNullList<Test2>(new[] { new Test2("bla1"), new Test2("bla2") });
            json = JsonConvert.SerializeObject(d1, s);
            var d2 = JsonConvert.DeserializeObject<NonNullList<Test2>>(json, s);

            var arr2 = d2.ToArray();
            Assert.AreEqual("bla1", arr2[0].Name);
            Assert.AreEqual("bla2", arr2[1].Name);

            var t1 = new NonNullList<Test3>(new[] { new Test3 { Name = "bla1" }, new Test3 { Name = "bla2" } });
            json = JsonConvert.SerializeObject(t1, s);
            var t2 = JsonConvert.DeserializeObject<NonNullList<Test3>>(json, s);

            var arr3 = t2.ToArray();
            Assert.AreEqual("bla1", arr3[0].Name);
            Assert.AreEqual("bla2", arr3[1].Name);
        }
    }
}