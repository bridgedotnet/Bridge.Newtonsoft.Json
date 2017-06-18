using System;
using System.Collections;
using Bridge;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Newtonsoft.Json.Tests.Issues
{
    // [#4]
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#4 - {0}")]
    public class Case4
    {
        public class MyString
        {
            public MyString(string value)
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException($"Null/blank {nameof(value)} specified");
                }

                Value = value;
            }

            public string Value
            {
                get;
            }
        }

        public sealed class MyList<T> : IEnumerable<T>
        {
            private readonly IEnumerable<T> _values;
            public MyList(IEnumerable<T> values)
            {
                _values = values;
            }

            public IEnumerator<T> GetEnumerator()
            {
                return _values.GetEnumerator();
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return GetEnumerator();
            }
        }

        [Test]
        public static void TestConstructorWithArgument()
        {
            var x = new MyString("abc");
            var json = JsonConvert.SerializeObject(x);
            var cloneX = JsonConvert.DeserializeObject<MyString>(json);

            Assert.AreEqual("abc", cloneX.Value);
        }

        [Test]
        public static void TestConstructorWithIEnumerable()
        {
            var list = new MyList<string>(new[] { "a", "b" });
            var json = JsonConvert.SerializeObject(list);
            var clone = JsonConvert.DeserializeObject<MyList<string>>(json);

            Assert.AreEqual("[\"a\",\"b\"]", json);
            Assert.AreEqual(list.ToArray(), clone.ToArray());
        }
    }
}