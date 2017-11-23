using Bridge;
using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// The test here consists in verifying whether a serialized IEnumerable
    /// extension's elements values are deserialized back.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#68 - {0}")]
    public class Case68
    {
        /// <summary>
        /// A test object implementing a 'string' property to check against.
        /// </summary>
        sealed class Test
        {
            public Test(string name) { Name = name; }
            public string Name { get; }
        }

        /// <summary>
        /// An extension to IEnumerable that will use the Test class above.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        public sealed class NonNullList<T> : IEnumerable<T>
        {
            private readonly static NonNullList<T> _empty = new NonNullList<T>((Node)null);
            public static NonNullList<T> Empty { get { return _empty; } }

            private readonly Node _headIfAny;
            private NonNullList(Node headIfAny)
            {
                _headIfAny = headIfAny;
            }
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

        /// <summary>
        /// The test here should basically check if the serialized object has
        /// value on its properties once it is deserialized.
        /// </summary>
        [Test]
        public static void TestCustomIEnumerable()
        {
            var o1 = new NonNullList<Test>(new[] { new Test("bla1") });
            var s = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects };
            var json = JsonConvert.SerializeObject(o1, s);
            var o2 = JsonConvert.DeserializeObject<NonNullList<Test>>(json, s);

            Assert.AreEqual(1, o2.Count(), "Number of elements retained over serialization.");
            Assert.AreEqual("bla1", o2.First().Name, "First element's value retained over serialization.");

            o1 = new NonNullList<Test>(new[] { new Test("bla1"), new Test("bla2") });
            json = JsonConvert.SerializeObject(o1, s);
            o2 = JsonConvert.DeserializeObject<NonNullList<Test>>(json, s);

            Assert.AreEqual(2, o2.Count(), "Number of elements retained over serialization when there are two elements in the list.");
            Assert.AreEqual("bla1", o2.First().Name, "First element's value retained over serialization.");
            Assert.AreEqual("bla2", o2.Skip(1).First().Name, "Second element's value retained over serialization.");
        }
    }
}