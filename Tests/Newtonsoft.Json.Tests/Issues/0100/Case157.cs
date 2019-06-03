using Bridge.Test.NUnit;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// The tests here ensures when an instance of a class is serialized, yet
    /// the serialized string is mangled to describe it as being from another
    /// class, throws an exception when trying to deserialize it back into
    /// its original class.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#157 - {0}")]
    public class Case157
    {
        /// <summary>
        /// A base class to serialize with.
        /// </summary>
        public class Class1
        {
            public string Uid { get; set; }
        }

        /// <summary>
        /// Another class, compatible with the above, to which the serialized
        /// string will be renamed to.
        /// </summary>
        public class Class2
        {
            public string Uid { get; set; }
        }

        /// <summary>
        /// Tests by creating an instance of Class1, serializing it, and then
        /// mangle it to point as if it was a Class2 instance. Then try to
        /// deserialize, expecting an exception to be thrown.
        /// </summary>
        [Test]
        public static void TestExpectedType()
        {
            var settings = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects };
            var a = new Class1
            {
                Uid = "HelloWorld"
            };
            var json = JsonConvert.SerializeObject(a, settings);
            var newjson = json.Replace("Class1", "Class2");

            Assert.Throws<JsonSerializationException>(() => {
                var newresult = JsonConvert.DeserializeObject<Class1>(newjson);
            }, "Serializing Class1, mangling to Class2, then trying to deserialize back as Class1 incurs an exception.");

            var result = JsonConvert.DeserializeObject<Class1>(json);
            Assert.NotNull(result, "Serializing Class1 then deserializing back as Class1 works.");
        }
    }
}