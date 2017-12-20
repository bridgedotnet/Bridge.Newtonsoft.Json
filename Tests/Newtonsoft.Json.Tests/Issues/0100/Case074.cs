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
        }
    }
}