using System;
using System.Collections;
using Bridge;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#8 - {0}")]
    public class Case8
    {
        public sealed class ApiResponse<T>
        {
        }

        public sealed class PageEditData
        {
        }

        [Test]
        public static void TestGenericTypeHandling()
        {
            var settings = new JsonSerializerSettings
            {
                TypeNameHandling = TypeNameHandling.Objects
            };

            var x = new ApiResponse<PageEditData>();
            var json = JsonConvert.SerializeObject(x, settings);

            Assert.AreEqual("{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+ApiResponse`1[[Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests\"}", json);

            object result = JsonConvert.DeserializeObject<ApiResponse<PageEditData>>(
                json,
                settings
            );

            Assert.True(result is ApiResponse<PageEditData>);
        }
    }
}