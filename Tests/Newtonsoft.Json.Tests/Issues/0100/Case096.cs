using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// 
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#96 - {0}")]
    public class Case96
    {
        public class SerializationEventTestObject
        {
            // 2222
            // This member is serialized and deserialized with no change.
            public int Member1 { get; set; }

            // The value of this field is set and reset during and 
            // after serialization.
            public string Member2 { get; set; }

            // This field is not serialized. The OnDeserializedAttribute 
            // is used to set the member value after serialization.
            [JsonIgnore]
            public string Member3 { get; set; }

            // This field is set to null, but populated after deserialization.
            public string Member4 { get; set; }

            public SerializationEventTestObject()
            {
                Member1 = 11;
                Member2 = "Hello World!";
                Member3 = "This is a nonserialized value";
                Member4 = null;
            }

            [OnSerializing]
            internal void OnSerializingMethod(StreamingContext context)
            {
                Member2 = "This value went into the data file during serialization.";
            }

            [OnSerialized]
            internal void OnSerializedMethod(StreamingContext context)
            {
                Member2 = "This value was reset after serialization.";
            }

            [OnDeserializing]
            internal void OnDeserializingMethod(StreamingContext context)
            {
                Member3 = "This value was set during deserialization";
            }

            [OnDeserialized]
            internal void OnDeserializedMethod(StreamingContext context)
            {
                Member4 = "This value was set after deserialization.";
            }
        }

        [Test]
        public static void TestSerializationCallbacks()
        {
            SerializationEventTestObject obj = new SerializationEventTestObject();

            Assert.AreEqual(11, obj.Member1);
            Assert.AreEqual("Hello World!", obj.Member2);
            Assert.AreEqual("This is a nonserialized value", obj.Member3);
            Assert.Null(obj.Member4);

            string json = JsonConvert.SerializeObject(obj, Formatting.Indented);

            Assert.AreEqual(11, obj.Member1);
            Assert.AreEqual("This value was reset after serialization.", obj.Member2);
            Assert.AreEqual("This is a nonserialized value", obj.Member3);
            Assert.Null(obj.Member4);

            obj = JsonConvert.DeserializeObject<SerializationEventTestObject>(json);

            Assert.AreEqual(11, obj.Member1);
            Assert.AreEqual("This value went into the data file during serialization.", obj.Member2);
            Assert.AreEqual("This value was set during deserialization", obj.Member3);
            Assert.AreEqual("This value was set after deserialization", obj.Member4);
        }
    }
}