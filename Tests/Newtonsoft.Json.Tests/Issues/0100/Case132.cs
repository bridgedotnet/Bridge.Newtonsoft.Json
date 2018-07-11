using Bridge.Test.NUnit;
using System;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// This test ensures structs with multiple constructors works with
    /// Bridge's Newtonsoft.Json serializing forth and back.
    /// </summary>
    /// <remarks>
    /// Bug report by: Christian "ChrML" Lundheim - 08.07.2018
    /// </remarks>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#132 - {0}")]
    public class Case132
    {
        /// <summary>
        /// Struct with two constructors differing only by their parameters'
        /// types.
        /// </summary>
        public struct Point
        {
            [JsonIgnore]
            public string ctorType;

            public Point(float X, float Y)
            {
                Point.CtorCalled = true;
                this.X = X;
                this.Y = Y;
                this.ctorType = "float";
            }

            public Point(double X, double Y)
            {
                Point.CtorCalled = true;
                this.X = Convert.ToSingle(X);
                this.Y = Convert.ToSingle(Y);
                this.ctorType = "double";
            }

            /// <summary>
            /// Control to know when the constructor has been called.
            /// </summary>
            public static bool CtorCalled = false;

            public float X { get; set; }
            public float Y { get; set; }
        }

        /// <summary>
        /// Struct 
        /// </summary>
        public struct Point2
        {
            [JsonIgnore]
            public string ctorType;

            public Point2(float X, float Y)
            {
                Point2.CtorCalled = true;
                this.X = X;
                this.Y = Y;
                this.ctorType = "float";
            }

            [JsonConstructor]
            public Point2(double X, double Y)
            {
                Point2.CtorCalled = true;
                this.X = Convert.ToSingle(X);
                this.Y = Convert.ToSingle(Y);
                this.ctorType = "double";
            }

            /// <summary>
            /// Control to know when the constructor has been called.
            /// </summary>
            public static bool CtorCalled = false;

            public float X { get; set; }
            public float Y { get; set; }
        }

        /// <summary>
        /// Struct with just one constructor. It shouldn't get the constructor
        /// called twice, second time with an empty 'Y' value.
        /// </summary>
        public struct Point_Single_Ctor
        {
            [JsonIgnore]
            public string ctorType;

            public Point_Single_Ctor(float X, float Y)
            {
                // We don't mean to call this with a null/empty/NaN Y, so
                // throw an assertion fail if so.
                if (float.IsNaN(Y))
                {
                    Assert.Fail("Single constructor struct's constructor called with invalid Y parameter.");
                }

                Point_Single_Ctor.CtorCalled = true;
                this.X = X;
                this.Y = Y;
                this.ctorType = "float";
            }

            /// <summary>
            /// Control to ensure the constructor will not be called when
            /// deserializing.
            /// </summary>
            public static bool CtorCalled = false;

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

            // Tests first use case: two constructors, serialize then
            // deserialize.
            Point.CtorCalled = false;
            Point Test1 = Deserialize<Point>(Json);
            Assert.False(Point.CtorCalled, "Dual constructor class' constructor not called while deserializing.");
            Assert.Null(Test1.ctorType, "Dual constructor class' JsonIgnore'd, constructor-filled variable is null after deserializing object representation string.");
            Assert.AreEqual(10, Test1.X, "Dual constructor class' member value could be filled (X).");
            Assert.AreEqual(20, Test1.Y, "Dual constructor class' member value could be filled (Y).");

            // Just try to deserialize by inlining the object instance instead
            // of passing the instance reference to the call.
            Json = Serialize(new Point2(11, 21));
            Point2.CtorCalled = false;
            Point2 Test2 = Deserialize<Point2>(Json);
            Assert.True(Point2.CtorCalled, "Dual constructor inlined class' constructor called while deserializing.");
            Assert.AreEqual("double", Test2.ctorType, "Dual constructor inlined class' JsonIgnore'd, constructor-filled variable is set after deserializing object representation string.");
            Assert.AreEqual(11, Test2.X, "Dual constructor inlined class' member value could be filled (X).");
            Assert.AreEqual(21, Test2.Y, "Dual constructor inlined class' member value could be filled (Y).");

            // Tests second use case: single constructor, shouldn't call constructor twice, and it also shouldn't
            Point_Single_Ctor Test_single = new Point_Single_Ctor(12, 22);
            Json = Serialize(Test_single);
            Point_Single_Ctor.CtorCalled = false;
            Point_Single_Ctor Test3 = Deserialize<Point_Single_Ctor>(Json);
            Assert.False(Point_Single_Ctor.CtorCalled, "Single constructor class' constructor not called when deserializing.");
            Assert.Null(Test3.ctorType, "Single constructor class' JsonIgnore'd variable null after deserializing the object representation string.");
            Assert.AreEqual(12, Test3.X, "Single constructor class' member value could be filled (X).");
            Assert.AreEqual(22, Test3.Y, "Single constructor class' member value could be filled (Y).");
        }
    }
}