using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// The test here consists in checking whether it is possible to
    /// deserialize nullable variables.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#82 - {0}")]
    public class Case82
    {
        public class Test
        {
            public int? IntID;
            public long? LowID;
            public long? ID;
            public long? HighID;
            public float? FltID;
            public double? DblID;
            public byte? BytID;

            public Test()
            {
                IntID = int.MaxValue - 2500;
                LowID = long.MinValue + 5;
                ID = 3;
                HighID = long.MaxValue - 5000;
                FltID = 2.5f;
                DblID = 2.5;
                BytID = 8;
            }
        }

        [Test]
        public static void TestNullableDeserialization()
        {
            var settings = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects };
            Test test = new Test();

            var json = JsonConvert.SerializeObject(test, settings);
            test = JsonConvert.DeserializeObject<Test>(json, settings);

            Assert.True(test.IntID == int.MaxValue - 2500, "Nullable int can be deserialized.");
            Assert.True(test.LowID == long.MinValue + 5, "Nullable long with MinValue base can be deserialized.");
            Assert.True(test.ID == 3, "Nullable long can be deserialized.");
            Assert.True(test.HighID == long.MaxValue - 5000, "Nullable long with MaxValue base can be deserialized.");
            Assert.True(test.FltID == 2.5f, "Nullable float can be deserialized.");
            Assert.True(test.DblID == 2.5, "Nullable double can be deserialized.");
            Assert.True(test.BytID == 8, "Nullable byte can be deserialized.");
        }
    }
}