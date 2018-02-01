using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// This test consists in verifying the serialization of a string
    /// representing true/false into a boolean accordingly.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#79 - {0}")]
    public class Case79
    {
        /// <summary>
        /// The test will just manually create the serialized version of the 
        /// object and deserialize it, then verifying if the expected value
        /// is inferred.
        /// </summary>
        [Test]
        public static void TestCustomDictionaryKey()
        {
            var serializedStringFalse = "{\"IsItReal\":\"false\"}";
            var serializedStringTrue = "{\"IsItReal\":\"true\"}";
            var deserializeFalse = JsonConvert.DeserializeObject<SuperClass>(serializedStringFalse);

            var deserializeTrue = JsonConvert.DeserializeObject<SuperClass>(serializedStringTrue);

            Assert.False(deserializeFalse.IsItReal, "The \"false\" string is deserialized as boolean false.");
            Assert.True(deserializeTrue.IsItReal, "The \"true\" string is deserialized as boolean true.");
        }

        public class SuperClass
        {
            public bool IsItReal { get; set; }
        }
    }
}