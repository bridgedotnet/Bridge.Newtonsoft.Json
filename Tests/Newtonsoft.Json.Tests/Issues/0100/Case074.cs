using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// 
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#74 - {0}")]
    public class Case74
    {
        public struct MyKey : IEquatable<MyKey>
        {
            public MyKey(int value) { Value = value; }

            public int Value { get; }

            public static explicit operator int(MyKey value) => value.Value;
            public static explicit operator MyKey(int value) => new MyKey(value);
            public static bool operator ==(MyKey a, MyKey b) => a.Value == b.Value;
            public static bool operator !=(MyKey a, MyKey b) => a.Value != b.Value;

            public bool Equals(MyKey o) => Value.Equals(o.Value);
            public override bool Equals(object o) => o is MyKey && Equals((MyKey)o);
            public override int GetHashCode() => Value.GetHashCode();
            public override string ToString() => Value.ToString();
        }

        public static string Serialize<T>(T thing, bool alt)
        {
            if (alt)
            {
                return JsonConvert.SerializeObject(thing, new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects });
            }
            else
            {
                return JsonConvert.SerializeObject(thing);
            }
        }

        [Test]
        public static void TestCustomDictionaryKey()
        {
            var key = new MyKey(1);
            var listingLevelNames = new Dictionary<MyKey, string>();
            listingLevelNames.Add(key, "None");

            Assert.AreEqual("{\"Value\":1}", Serialize(key, false), "Object serialized correctly.");
            Assert.AreEqual("{\"1\":\"None\"}", Serialize(listingLevelNames, false), "Custom dictionary serialized correctly.");

            Assert.AreEqual("{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case74+MyKey, Newtonsoft.Json.Tests\",\"Value\":1}", Serialize(key, true), "Object serialized correctly (detailed).");
            Assert.AreEqual("{\"$type\":\"System.Collections.Generic.Dictionary`2[[Newtonsoft.Json.Tests.Issues.Case74+MyKey, Newtonsoft.Json.Tests],[System.String, mscorlib]], mscorlib\",\"1\":\"None\"}", Serialize(listingLevelNames, true), "Custom dictionary serialized correctly (detailed).");

            var dict = new Dictionary<int, string>();
            dict.Add(5, "five");

            Assert.AreEqual("{\"5\":\"five\"}", Serialize(dict, false), "Basic dictionary serialized correctly.");
            Assert.AreEqual("{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.Int32, mscorlib],[System.String, mscorlib]], mscorlib\",\"5\":\"five\"}", Serialize(dict, true), "Basic dictionary serialized correctly (detailed).");
        }
    }
}