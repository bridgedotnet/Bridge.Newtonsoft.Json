using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// Ensures constructor-bound values are honored when deserializing a
    /// structure.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#114 - {0}")]
    public class Case114
    {
        /// <summary>
        /// Class defining a constructor that fills one of its properties'
        /// value.
        /// </summary>
        public class MyClass
        {
            /// <summary>
            /// Constructor giving a value to class' Items.Parent.
            /// </summary>
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

        /// <summary>
        /// Serialize and deserialize an instance of the constructor-driven
        /// class and checks whether the constructor's side effects are
        /// retained.
        /// </summary>
        [Test]
        public static void TestPropertyInitInCtor()
        {
            // These tests were double-checked by Native .NET:
            // https://dotnetfiddle.net/LzWk2E
            var msg = new MyClass();
            Assert.AreEqual("123", msg.Items.Parent, "Value of object instance is '123'.");
            var str = JsonConvert.SerializeObject(msg);
            // This shouldn't be empty at all -- but that's how the native .net version works.
            Assert.AreEqual("{\"Items\":[]}", str, "Serialized class' items property is empty.");

            var obj = JsonConvert.DeserializeObject<MyClass>(str);
            Assert.True((object)obj.Items is MyList, "Deserialized object's items type is MyList.");
            Assert.AreEqual("123", obj.Items.Parent, "When serializing back, the value gets overridden by the class' constructor.");

            var msg2 = new MyClass() { Items = new MyList() { Parent = "456" } };
            Assert.AreEqual("456", msg2.Items.Parent, "Value of object instance is '456'.");
            var str2 = JsonConvert.SerializeObject(msg2);
            // This shouldn't be empty at all -- but that's how the native .net version works.
            Assert.AreEqual("{\"Items\":[]}", str2, "Serialized 2nd class' items property is empty.");

            var obj2 = JsonConvert.DeserializeObject<MyClass>(str2);
            Assert.AreEqual("123", obj2.Items.Parent, "When serializing back 2nd class, the value gets overridden by the class' constructor.");

            var msg3 = new MyClass();
            msg3.Items.Parent = "456";
            Assert.AreEqual("456", msg3.Items.Parent, "Value of object instance is '456'.");
            var str3 = JsonConvert.SerializeObject(msg3);
            // This shouldn't be empty at all -- but that's how the native .net version works.
            Assert.AreEqual("{\"Items\":[]}", str3, "Serialized 3rd class' items property is empty.");

            var obj3 = JsonConvert.DeserializeObject<MyClass>(str3);
            Assert.AreEqual("123", obj3.Items.Parent, "When serializing back 3rd class, the value gets overridden by the class' constructor.");
        }
    }
}