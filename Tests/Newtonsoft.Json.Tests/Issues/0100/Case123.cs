using Bridge.Test.NUnit;
using System;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// Ensures deserializing a DateTimeOffset serialized string does not lead
    /// to an exception in Bridge.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#123 - {0}")]
    public class Case123
    {
        public class ContentApiModel
        {
            /// <summary>
            /// The creation date (UTC) of the content
            /// </summary>
            public DateTimeOffset? CreatedDate { get; set; }

            /// <summary>
            /// The last modified date (UTC) of the content
            /// </summary>
            public DateTimeOffset? LastModifiedDate { get; set; }
        }

        /// <summary>
        /// Crafts a serialized string then deserializes it into the
        /// DateTimeOffset-driven class, expecting the values to match.
        /// </summary>
        [Test]
        public static void TestSingleQuotes()
        {
            var dto = JsonConvert.DeserializeObject<ContentApiModel>(@"{'CreatedDate':'2018-01-22T11:18:00.8820874+00:00','LastModifiedDate':'2017-12-06T09:22:22.6865867+00:00'}");

            Assert.NotNull(dto.CreatedDate, "Deserialized 1st dto field is not null.");
            Assert.AreEqual(2018, dto.CreatedDate.Value.Year, "Year component of 1st dto field is correct.");
            Assert.AreEqual(1, dto.CreatedDate.Value.Month, "Month component of 1st dto field is correct.");
            Assert.AreEqual(22, dto.CreatedDate.Value.Day, "Day component of 1st dto field is correct.");
            Assert.AreEqual(11, dto.CreatedDate.Value.Hour, "Hour component of 1st dto field is correct.");
            Assert.AreEqual(18, dto.CreatedDate.Value.Minute, "Minute component of 1st dto field is correct.");
            Assert.AreEqual(00, dto.CreatedDate.Value.Second, "Second component of 1st dto field is correct.");
            Assert.AreEqual(882, dto.CreatedDate.Value.Millisecond, "Millisecond component of 1st dto field is correct.");

            Assert.NotNull(dto.LastModifiedDate, "Deserialized 2nd dto field is not null.");
            Assert.AreEqual(2017, dto.LastModifiedDate.Value.Year, "Year component of 2nd dto field is correct.");
            Assert.AreEqual(12, dto.LastModifiedDate.Value.Month, "Year component of 2nd dto field is correct.");
            Assert.AreEqual(6, dto.LastModifiedDate.Value.Day, "Year component of 2nd dto field is correct.");
            Assert.AreEqual(09, dto.LastModifiedDate.Value.Hour, "Hour component of 2nd dto field is correct.");
            Assert.AreEqual(22, dto.LastModifiedDate.Value.Minute, "Minute component of 2nd dto field is correct.");
            Assert.AreEqual(22, dto.LastModifiedDate.Value.Second, "Second component of 2nd dto field is correct.");
            Assert.AreEqual(686, dto.LastModifiedDate.Value.Millisecond, "Millisecond component of 2nd dto field is correct.");
        }
    }
}