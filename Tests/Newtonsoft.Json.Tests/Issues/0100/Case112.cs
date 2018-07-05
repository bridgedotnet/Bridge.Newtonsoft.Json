using Bridge.Test.NUnit;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// Ensures serialization of Long types works.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#112 - {0}")]
    public class Case112
    {
        /// <summary>
        /// Creates a constant long then checks if it can be serialized.
        /// </summary>
        [Test]
        public static void TestInt64()
        {
            long a = 19L;
            var serialized = JsonConvert.SerializeObject(a);
            Assert.True((object)serialized is string, "Type long variables' SerializeObject() result is a string.");
            Assert.AreEqual(2, serialized.Length, "The string length matches the number of digits in the variable.");
            Assert.AreEqual("19", serialized, "The serialized string matches the expected value.");
        }
    }
}