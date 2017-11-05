using Bridge.Test.NUnit;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// This test cases consists in double-checking whether a static string is
    /// populated in the expected sequence, then checking if the resulting
    /// sequence is the expected one.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#50 - {0}")]
    public class Case50
    {
        /// <summary>
        /// Static string builder to store the sequence.
        /// </summary>
        static System.Text.StringBuilder sb;

        /// <summary>
        /// Class definition. It will update the sequence above as the class
        /// is used throughout the application life cycle.
        /// </summary>
        public class Person
        {
            private int _id, _somethingElse;

            /// <summary>
            /// Constructor.
            /// </summary>
            /// <param name="id"></param>
            /// <param name="name"></param>
            public Person(int id, string name)
            {
                // Append a '1' to the static string builder sequence
                // whenever the class is instantiated.
                sb.Append("1");
                Id = id;
                Name = name;
            }

            /// <summary>
            /// Id
            /// </summary>
            public int Id
            {
                get { return _id; }
                set
                {
                    // Append a '2' to the static string builder sequence
                    // whenever the class instance's Id is modified.
                    sb.Append("2");
                    _id = value;
                }
            }

            /// <summary>
            /// An additional arbitrary property.
            /// </summary>
            public int SomethingElse
            {
                get { return _somethingElse; }
                set
                {
                    // Append a '3' to the static string builder sequence
                    // whenever the class instance's SomethingElse is modified.
                    sb.Append("3");
                    _somethingElse = value;
                }
            }

            /// <summary>
            /// A readonly name property.
            /// </summary>
            public string Name { get; }
        }

        /// <summary>
        /// The test consists in resetting the string sequencer, instantiating
        /// the class, running the serialization/deserialization calls, then
        /// verifying the end result in the string sequence against the
        /// expected result.
        /// </summary>
        [Test]
        public static void TestDeserializationConstructor()
        {
            sb = new System.Text.StringBuilder();

            var person = new Person(123, "Dan")
            {
                SomethingElse = 456
            };
            var settings = new JsonSerializerSettings
            {
                TypeNameHandling = TypeNameHandling.Objects
            };
            var json = JsonConvert.SerializeObject(person, settings);
            var clone = JsonConvert.DeserializeObject<Person>(json);

            // If the unnecessary call is happening, the "2" will be appended
            // twice the second time it appears (deserialization) and the
            // sequence will be "1231223".
            Assert.AreEqual("123123", sb.ToString());
        }
    }
}