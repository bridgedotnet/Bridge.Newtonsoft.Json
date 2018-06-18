using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// 
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

        [Test]
        public static void TestSingleQuotes()
        {
            var dto = JsonConvert.DeserializeObject<ContentApiModel>(@"{'CreatedDate':'2018-01-22T11:18:00.8820874+00:00','LastModifiedDate':'2017-12-06T09:22:22.6865867+00:00'}");

            Assert.NotNull(dto.CreatedDate);
            Assert.AreEqual(2018, dto.CreatedDate.Value.Year);
            Assert.AreEqual(1, dto.CreatedDate.Value.Month);
            Assert.AreEqual(22, dto.CreatedDate.Value.Day);

            Assert.NotNull(dto.LastModifiedDate);
            Assert.AreEqual(2017, dto.LastModifiedDate.Value.Year);
            Assert.AreEqual(12, dto.LastModifiedDate.Value.Month);
            Assert.AreEqual(6, dto.LastModifiedDate.Value.Day);
        }
    }
}