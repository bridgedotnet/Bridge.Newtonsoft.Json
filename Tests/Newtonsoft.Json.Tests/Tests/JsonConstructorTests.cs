using Bridge;
using Newtonsoft.Json.Serialization;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests
{
    // Case #6
    [Category("JsonConstructor")]
    [TestFixture]
    public class JsonConstructorTests
    {
        #region Test data

        public class User
        {
            public string UserName
            {
                get; private set;
            }

            public bool Enabled
            {
                get; private set;
            }

            public User()
            {
            }

            [JsonConstructor]
            public User(string userName, bool enabled)
            {
                UserName = userName;
                Enabled = enabled;
            }
        }

        public class MyOtherString
        {
            public static MyOtherString Empty { get; } = new MyOtherString("");

            [JsonConstructor]
            private MyOtherString(string value)
            {
                Value = value;
            }

            public string Value
            {
                get;
            }

            public MyOtherString Add(string value)
            {
                return new MyOtherString(Value + value);
            }
        }

        public class MultipleJsonConstructors
        {
            [JsonConstructor]
            public MultipleJsonConstructors(string s)
            {
            }

            [JsonConstructor]
            public MultipleJsonConstructors(int i)
            {
            }
        }

        #endregion Test data

        [Test]
        public static void TestJsonConstructor()
        {
            var u = new User("Frank", true);

            var json = JsonConvert.SerializeObject(u);
            Assert.AreEqual("{\"Enabled\":true,\"UserName\":\"Frank\"}", json);

            var cloneU = JsonConvert.DeserializeObject<User>(json);

            Assert.NotNull(cloneU);
            Assert.AreEqual("Frank", cloneU.UserName);
            Assert.AreEqual(true, cloneU.Enabled);
        }

        [Test]
        public static void TestJsonConstructorMyOtherString()
        {
            var x = MyOtherString.Empty.Add("abc");
            var json = JsonConvert.SerializeObject(x);
            Assert.AreEqual("{\"Value\":\"abc\"}", json);

            var cloneX = JsonConvert.DeserializeObject<MyOtherString>(json);
            Assert.NotNull(cloneX);
            Assert.AreEqual("abc", cloneX.Value);
        }

        [Test]
        public static void TestMultipleJsonConstructor()
        {
            Assert.Throws<JsonException>(() =>
            {
                JsonConvert.DeserializeObject<MultipleJsonConstructors>("{}");
            });
        }
    }
}