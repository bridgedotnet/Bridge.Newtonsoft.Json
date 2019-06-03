using Bridge.Test.NUnit;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// The tests here ensures 
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#154 - {0}")]
    public class Case154
    {
        /// <summary>
        /// A class with a member using a custom type.
        /// </summary>
        private class Example
        {
            public SpecialID ID { get; set; }
        }

        /// <summary>
        /// Custom type for the class above, implementing an explicit operator
        /// for value binding.
        /// </summary>
        private class SpecialID
        {
            public SpecialID(string value)
            {
                Value = value;
            }

            public string Value { get; set; }

            public static explicit operator SpecialID(string value)
            {
                return new SpecialID(value);
            }
        }

        /// <summary>
        /// Tests by trying to deserialize a simple-crafted json string into
        /// the class that implements a member which type has an explicit
        /// operator assigned to it.
        /// </summary>
        [Test]
        public static void TestSerializeMemberWithExplicitOperator()
        {
            // AS the JSON has a string value but the "ID" property of Example is of type "SpecialID",
            // the explicit operator on the SpecialID class is used in the deserialisation process
            var json = "{ \"ID\": \"abc\" }";
            var value = JsonConvert.DeserializeObject<Example>(json);
            Assert.AreEqual("abc", value.ID.Value, "Deserializing json strings into classes with custom types with explicit operators, works.");
        }
    }
}