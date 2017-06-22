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
            public T Value;
        }

        public sealed class PageEditData
        {
            public int Data
            {
                get; set;
            }
        }

        public sealed class ApiResponse<T, K>
        {
            public T Value1;
            public K Value2
            {
                get; set;
            }
        }

        public sealed class PageEditData<T>
        {
            public T Data
            {
                get; set;
            }
        }

        [Test]
        public static void TestGenericTypeHandling()
        {
            var settings = new JsonSerializerSettings
            {
                TypeNameHandling = TypeNameHandling.Objects
            };

            var x = new ApiResponse<PageEditData>();

            x.Value = new PageEditData()
            {
                Data = 7
            };

            var json = JsonConvert.SerializeObject(x, settings);

            Assert.AreEqual("{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+ApiResponse`1[[Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests\",\"Value\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests\",\"Data\":7}}", json);

            object result = JsonConvert.DeserializeObject<ApiResponse<PageEditData>>(
                json,
                settings
            );

            Assert.NotNull(result);

            var typedResult = result as ApiResponse<PageEditData>;
            Assert.NotNull(typedResult);

            Assert.AreEqual(7, typedResult.Value.Data);
        }

        [Test]
        public static void TestGenericTypeHandlingMoreGenericLevel()
        {
            var settings = new JsonSerializerSettings
            {
                TypeNameHandling = TypeNameHandling.Objects
            };

            var x = new ApiResponse<PageEditData<string>, PageEditData<PageEditData>>();

            x.Value1 = new PageEditData<string>
            {
                Data = "Hi"
            };

            x.Value2 = new PageEditData<PageEditData>
            {
                Data = new PageEditData
                {
                    Data = 8
                }
            };

            var json = JsonConvert.SerializeObject(x, settings);

            Assert.AreEqual("{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+ApiResponse`2[[Newtonsoft.Json.Tests.Issues.Case8+PageEditData`1[[System.String, mscorlib]], Newtonsoft.Json.Tests],[Newtonsoft.Json.Tests.Issues.Case8+PageEditData`1[[Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests\",\"Value1\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+PageEditData`1[[System.String, mscorlib]], Newtonsoft.Json.Tests\",\"Data\":\"Hi\"},\"Value2\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+PageEditData`1[[Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests\",\"Data\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests\",\"Data\":8}}}", json);

            object result = JsonConvert.DeserializeObject<ApiResponse<PageEditData<string>, PageEditData<PageEditData>>>(
                json,
                settings
            );

            Assert.NotNull(result);

            var typedResult = result as ApiResponse<PageEditData<string>, PageEditData<PageEditData>>;
            Assert.NotNull(typedResult);

            Assert.AreEqual("Hi", typedResult.Value1.Data);
            Assert.AreEqual(8, typedResult.Value2.Data.Data);
        }
    }
}