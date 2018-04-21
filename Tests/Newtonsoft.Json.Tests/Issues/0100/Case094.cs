using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// Test that DateTimeOffset Serialization and Deserialization works
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#94 - {0}")]
    public class Case94
    {
        [Test]
        public static void DateTimeOffsetSerializationAndDeserializationWorks()
        {
            var dto1 = new DateTimeOffset(2018, 3, 30, 16, 21, 15, 750, new TimeSpan(5, 0, 0));

            var dto1Serialized = JsonConvert.SerializeObject(dto1);

            var dto1Deserialized = JsonConvert.DeserializeObject<DateTimeOffset>(dto1Serialized);

            Assert.AreEqual(dto1.Offset.Hours, 5, "Offset is correct");
            Assert.AreEqual(dto1.Ticks, 636580236757500000, "Ticks are correct");
            Assert.AreEqual(dto1.Year, 2018, "Year is correct");
            Assert.AreEqual(dto1.Month, 3, "Month is correct");
            Assert.AreEqual(dto1.Day, 30, "Day is correct");
            Assert.AreEqual(dto1.Hour, 16, "Hour is correct");
            Assert.AreEqual(dto1.Minute, 21, "Minute is correct");
            Assert.AreEqual(dto1.Second, 15, "Second is correct");
            Assert.AreEqual(dto1.Millisecond, 750, "Millisecond is correct");

            var dto2 = new DateTimeOffset(2018, 3, 30, 16, 21, 15, 750, new TimeSpan(-5, 0, 0));

            var dto2Serialized = JsonConvert.SerializeObject(dto2);

            var dto2Deserialized = JsonConvert.DeserializeObject<DateTimeOffset>(dto2Serialized);

            Assert.AreEqual(dto2.Offset.Hours, -5, "Offset is correct");
            Assert.AreEqual(dto2.Ticks, 636580236757500000, "Ticks are correct");
            Assert.AreEqual(dto2.Year, 2018, "Year is correct");
            Assert.AreEqual(dto2.Month, 3, "Month is correct");
            Assert.AreEqual(dto2.Day, 30, "Day is correct");
            Assert.AreEqual(dto2.Hour, 16, "Hour is correct");
            Assert.AreEqual(dto2.Minute, 21, "Minute is correct");
            Assert.AreEqual(dto2.Second, 15, "Second is correct");
            Assert.AreEqual(dto2.Millisecond, 750, "Millisecond is correct");
        }
    }
}