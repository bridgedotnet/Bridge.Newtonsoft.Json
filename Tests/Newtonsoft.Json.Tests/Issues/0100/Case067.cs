using Bridge.Test.NUnit;
using System;

namespace TestCase67
{
    class Optional<T>
    {
        public Optional(T value)
        {
            Value = value;
        }

        public T Value { get; }
    }

    class SubClass
    {
        public class Optional<T>
        {
            public Optional(T value)
            {
                Value = value;
            }

            public T Value { get; }
        }
    }
}

namespace TestCase67.SubNameSpace
{
    class Optional<T>
    {
        public Optional(T value)
        {
            Value = value;
        }

        public T Value { get; }
    }

    class SubClass
    {
        public class Optional<T>
        {
            public Optional(T value)
            {
                Value = value;
            }

            public T Value { get; }
        }
    }
}

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// The test here consists in verifying whether generic types are correctly
    /// serialized in different class and namespaces situations and when
    /// System.Uri is used as generics' specialization.
    /// </summary>
    /// <remarks>
    /// System.Uri should output System and not mscorlib, and class depth
    /// delimiter must be '+' and not '.'.
    /// </remarks>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#67 - {0}")]
    public class Case67
    {
        /// <summary>
        /// A test object implementing C# generics.
        /// </summary>
        class Optional<T>
        {
            public Optional(T value)
            {
                Value = value;
            }

            public T Value { get; }
        }

        /// <summary>
        /// The test here basically checks if the serialized string has the
        /// same output generated by an analog console application using the
        /// C# version of Newtonsoft.Json.
        /// </summary>
        /// <remarks>
        /// A transcript of Program.cs equivalent to this sequence of tests
        /// that can be used to fetch the expected output from a pure C#
        /// application is commented out at the end of this source file.
        /// </remarks>
        [Test]
        public static void TestTypeGenericSerialize()
        {
            var settings = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects };

            Console.WriteLine("{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case67+Optional`1[[System.Int32, mscorlib]], Newtonsoft.Json.Tests\",\"Value\":1}");
            Console.WriteLine(JsonConvert.SerializeObject(new Optional<int>(1), settings));
            // First, the console application output, then our equivalent.
            Assert.AreEqual(
                "{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case67+Optional`1[[System.Int32, mscorlib]], Newtonsoft.Json.Tests\",\"Value\":1}",
                JsonConvert.SerializeObject(new Optional<int>(1), settings),
                "Simple int. Local object to the test method.");
            Assert.AreEqual(
                "{\"$type\":\"TestCase67.Optional`1[[System.Int32, mscorlib]], Newtonsoft.Json.Tests\",\"Value\":1}",
                JsonConvert.SerializeObject(new TestCase67.Optional<int>(1), settings),
                "Simple int. Root object on a root namespace.");

            // sub classes have a '+' separator between the object depths
            Assert.AreEqual(
                "{\"$type\":\"TestCase67.SubClass+Optional`1[[System.Int32, mscorlib]], Newtonsoft.Json.Tests\",\"Value\":1}",
                JsonConvert.SerializeObject(new TestCase67.SubClass.Optional<int>(1), settings),
                "Simple int. Subclass object on a root namespace.");
            Assert.AreEqual(
                "{\"$type\":\"TestCase67.SubNameSpace.Optional`1[[System.Int32, mscorlib]], Newtonsoft.Json.Tests\",\"Value\":1}",
                JsonConvert.SerializeObject(new TestCase67.SubNameSpace.Optional<int>(1), settings),
                "Simple int. Root object on a sub namespace.");
            Assert.AreEqual(
                "{\"$type\":\"TestCase67.SubNameSpace.SubClass+Optional`1[[System.Int32, mscorlib]], Newtonsoft.Json.Tests\",\"Value\":1}",
                JsonConvert.SerializeObject(new TestCase67.SubNameSpace.SubClass.Optional<int>(1), settings),
                "Simple int. Subclass object on a sub namespace.");

            var myUri = new Uri("http://www.google.com/");
            Assert.AreEqual(
                "{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case67+Optional`1[[System.Uri, System]], Newtonsoft.Json.Tests\",\"Value\":\"http://www.google.com/\"}",
                JsonConvert.SerializeObject(new Optional<Uri>(myUri), settings),
                "System.Uri. Local object to the test method.");
            Assert.AreEqual(
                "{\"$type\":\"TestCase67.Optional`1[[System.Uri, System]], Newtonsoft.Json.Tests\",\"Value\":\"http://www.google.com/\"}",
                JsonConvert.SerializeObject(new TestCase67.Optional<Uri>(myUri), settings),
                "System.Uri. Root object on a root namespace.");

            // sub classes have a '+' separator between the object depths
            Assert.AreEqual(
                "{\"$type\":\"TestCase67.SubClass+Optional`1[[System.Uri, System]], Newtonsoft.Json.Tests\",\"Value\":\"http://www.google.com/\"}",
                JsonConvert.SerializeObject(new TestCase67.SubClass.Optional<Uri>(myUri), settings),
                "System.Uri. Subclass object on a root namespace.");
            Assert.AreEqual(
                "{\"$type\":\"TestCase67.SubNameSpace.Optional`1[[System.Uri, System]], Newtonsoft.Json.Tests\",\"Value\":\"http://www.google.com/\"}",
                JsonConvert.SerializeObject(new TestCase67.SubNameSpace.Optional<Uri>(myUri), settings),
                "System.Uri. Root object on a sub namespace.");
            Assert.AreEqual(
                "{\"$type\":\"TestCase67.SubNameSpace.SubClass+Optional`1[[System.Uri, System]], Newtonsoft.Json.Tests\",\"Value\":\"http://www.google.com/\"}",
                JsonConvert.SerializeObject(new TestCase67.SubNameSpace.SubClass.Optional<Uri>(myUri), settings),
                "System.Uri. Subclass object on a sub namespace.");
        }
    }
}

// For convenience a whole transcript of the actual Program.cs for the Console
// Application equivalent used for output gathering is commented out below.
// The console application project name should be "Newtonsoft.Json.Tests for
// the output to be consistent to the one expected here.
/*

using System;

namespace TestCase67
{
    class Optional<T>
    {
        public Optional(T value)
        {
            Value = value;
        }

        public T Value { get; }
    }

    class SubClass
    {
        public class Optional<T>
        {
            public Optional(T value)
            {
                Value = value;
            }

            public T Value { get; }
        }
    }
}

namespace TestCase67.SubNameSpace
{
    class Optional<T>
    {
        public Optional(T value)
        {
            Value = value;
        }

        public T Value { get; }
    }

    class SubClass
    {
        public class Optional<T>
        {
            public Optional(T value)
            {
                Value = value;
            }

            public T Value { get; }
        }
    }
}

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// The test here consists in verifying whether generic types are correctly
    /// serialized when type name is serialized with the object.
    /// </summary>
    //[Category("Issues")]
    //[TestFixture(TestNameFormat = "#67 - {0}")]
    public class Case67
    {
        /// <summary>
        /// A test object implementing C# generics.
        /// </summary>
        class Optional<T>
        {
            public Optional(T value)
            {
                Value = value;
            }

            public T Value { get; }
        }

        /// <summary>
        /// The test here should basically check if the serialized object has
        /// value on its properties once it is deserialized.
        /// </summary>
        //[Test]
        public static void TestTypeGenericSerialize()
        {
            var settings = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects };

            Console.WriteLine(JsonConvert.SerializeObject(new Optional<int>(1), settings).Replace("\"", "\\\""));
            Console.WriteLine(JsonConvert.SerializeObject(new TestCase67.Optional<int>(1), settings).Replace("\"", "\\\""));
            Console.WriteLine(JsonConvert.SerializeObject(new TestCase67.SubClass.Optional<int>(1), settings).Replace("\"", "\\\""));
            Console.WriteLine(JsonConvert.SerializeObject(new TestCase67.SubNameSpace.Optional<int>(1), settings).Replace("\"", "\\\""));
            Console.WriteLine(JsonConvert.SerializeObject(new TestCase67.SubNameSpace.SubClass.Optional<int>(1), settings).Replace("\"", "\\\""));

            var myUri = new Uri("http://www.google.com/");
            Console.WriteLine(JsonConvert.SerializeObject(new Optional<Uri>(myUri), settings).Replace("\"", "\\\""));
            Console.WriteLine(JsonConvert.SerializeObject(new TestCase67.Optional<Uri>(myUri), settings).Replace("\"", "\\\""));
            Console.WriteLine(JsonConvert.SerializeObject(new TestCase67.SubClass.Optional<Uri>(myUri), settings).Replace("\"", "\\\""));
            Console.WriteLine(JsonConvert.SerializeObject(new TestCase67.SubNameSpace.Optional<Uri>(myUri), settings).Replace("\"", "\\\""));
            Console.WriteLine(JsonConvert.SerializeObject(new TestCase67.SubNameSpace.SubClass.Optional<Uri>(myUri), settings).Replace("\"", "\\\""));
        }
    }
}

namespace Newtonsoft.Json.Tests
{
    /// <summary>
    ///  Console application entry point
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            Newtonsoft.Json.Tests.Issues.Case67.TestTypeGenericSerialize();
        }
    }
}

 */