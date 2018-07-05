using Bridge.Test.NUnit;
using System;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// Ensures a serialized System.Version object can be serialized back and
    /// forth.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#126 - {0}")]
    public class Case126
    {
        /// <summary>
        /// Define this class in a similar way System.Version is:
        /// https://github.com/dotnet/corefx/blob/master/src/Common/src/CoreLib/System/Version.cs
        /// </summary>
        public class VersionMock
        {
            private int _a;
            private int _a0;
            private int _b;
            private int _c;

            public VersionMock(int a, int b, int c)
            {
                _a = a;
                _a0 = 0;
                _b = b;
                _c = c;
            }

            public int A {
                get
                {
                    return _a;
                }
            }

            public int A0
            {
                get
                {
                    return _a0;
                }
            }

            public int B
            {
                get
                {
                    return _b;
                }
            }

            public int C
            {
                get
                {
                    return _c;
                }
            }

            public override string ToString()
            {
                return _a + "." + _b + "." + _c;
            }
        }

        /// <summary>
        /// Instantiates a System.Version object, serialize it, and
        /// deserialize, always checking whether the current state is right.
        /// </summary>
        [Test]
        public static void TestSystemVersion()
        {
            var vers = new Version(4, 3, 2, 1);
            Assert.AreEqual("4.3.2.1", vers.ToString(), "The version object's string resolves to the expected value.");

            var serial = JsonConvert.SerializeObject(vers);
            Assert.AreEqual("{\"Build\":2,\"Major\":4,\"MajorRevision\":0,\"Minor\":3,\"MinorRevision\":1,\"Revision\":1}", serial, "The serialized result of the System.Version is correct.");

            var deserial = JsonConvert.DeserializeObject<Version>(serial);
            Assert.AreEqual("4.3.2.1", deserial.ToString(), "A System.Version json string representation can be deserialized.");
        }

        [Test]
        public static void TestVersionLikes()
        {
            var vers = new VersionMock(4, 3, 2);
            Assert.AreEqual("4.3.2", vers.ToString(), "An object like System.Version's string resolves to the expected value.");

            var serial = JsonConvert.SerializeObject(vers);
            Assert.AreEqual("{\"A\":4,\"A0\":0,\"B\":3,\"C\":2}", serial, "The serialized result of the object similar to System.Version is correct.");

            var deserial = JsonConvert.DeserializeObject<VersionMock>(serial);
            Assert.AreEqual("4.3.2", deserial.ToString(), "A json string representation of an object similar to System.Version can be deserialized.");
        }

    }
}