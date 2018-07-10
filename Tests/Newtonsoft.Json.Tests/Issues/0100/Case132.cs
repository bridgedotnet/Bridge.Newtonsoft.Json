using Bridge.Test.NUnit;
using System;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#132 - {0}")]
    public class Case132
    {
        public struct Point
        {
            [JsonIgnore]
            public string ctorType;

            public Point(float X, float Y)
            {
                this.X = X;
                this.Y = Y;
                this.ctorType = "float";
            }

            public Point(double X, double Y)
            {
                this.X = Convert.ToSingle(X);
                this.Y = Convert.ToSingle(Y);
                this.ctorType = "double";
            }

            public float X { get; set; }
            public float Y { get; set; }
        }

        public struct Point2
        {
            [JsonIgnore]
            public string ctorType;

            public Point2(float X, float Y)
            {
                this.X = X;
                this.Y = Y;
                this.ctorType = "float";
            }

            [JsonConstructor]
            public Point2(double X, double Y)
            {
                this.X = Convert.ToSingle(X);
                this.Y = Convert.ToSingle(Y);
                this.ctorType = "double";
            }

            public float X { get; set; }
            public float Y { get; set; }
        }

        static string Serialize(Object Obj)
        {
            var Settings = new Newtonsoft.Json.JsonSerializerSettings();
            Settings.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects;
            return Newtonsoft.Json.JsonConvert.SerializeObject(Obj, Newtonsoft.Json.Formatting.Indented, Settings);
        }

        static T Deserialize<T>(string JSON)
        {
            Newtonsoft.Json.JsonSerializerSettings Settings = new Newtonsoft.Json.JsonSerializerSettings();
            Settings.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects;
            return Newtonsoft.Json.JsonConvert.DeserializeObject<T>(JSON, Settings);
        }

        [Test]
        public static void TestStructCtors()
        {
            // Create a test object and serialize it
            Point Test = new Point(10, 20);
            string Json = Serialize(Test);

            Point Test1 = Deserialize<Point>(Json);
            Assert.Null(Test1.ctorType);
            Assert.AreEqual(10, Test1.X);
            Assert.AreEqual(20, Test1.Y);


            Json = Serialize(new Point2(10, 20));
            Point2 Test2 = Deserialize<Point2>(Json);
            Assert.AreEqual("double", Test2.ctorType);
            Assert.AreEqual(10, Test2.X);
            Assert.AreEqual(20, Test2.Y);
        }
    }
}