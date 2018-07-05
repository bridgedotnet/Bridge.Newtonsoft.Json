using Bridge.Test.NUnit;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// Ensures a nullable bool does not serialize to 'null' when it is
    /// 'false'.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#121 - {0}")]
    public class Case121
    {
        /// <summary>
        /// A class with a series of nullable bool to be subject to the test.
        /// </summary>
        public class TestDto
        {
            public bool? A { get; set; }
            public bool? B { get; set; }
            public bool? C { get; set; }
        }

        /// <summary>
        /// Gives the three different possible values to the three nullable
        /// booleans in the test class and ensures they are serialized forth
        /// and back to the correct values.
        /// </summary>
        [Test]
        public static void TestNullable()
        {
            var test = new TestDto();
            test.A = true;
            test.B = false;
            test.C = null;

            var serialized = JsonConvert.SerializeObject(test);
            Assert.AreEqual("{\"A\":true,\"B\":false,\"C\":null}", serialized, "Serializing nullable booleans results in a string that reflects the corresponding values.");

            var deserialized = JsonConvert.DeserializeObject<TestDto>(serialized);

            Assert.True(deserialized.A == test.A && deserialized.B == test.B && deserialized.C == test.C,
                "Deserializing back results in equivalence between the object values.");
            Assert.True(deserialized.A.Value, "Nullable boolean set to 'true' serializes back and forth to 'true'.");
            Assert.False(deserialized.B.Value, "Nullable boolean set to 'false' serializes back and forth to 'false'.");
            Assert.Null(deserialized.C, "Nullable boolean set to 'null' (or not set at all) serializes back and forth to its 'null' correspondence.");
        }
    }
}