using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

using Bridge.Test.NUnit;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#26 - {0}")]
    public class Case26
    {
        public class Product
        {
            public string Name { get; set; }

            public DateTime ExpiryDate { get; set; }

            public double Price { get; set; }

            public string[] Sizes { get; set; }
        }

        [Test]
        public static void TestInvalidJson()
        {
            Assert.Throws<JsonException>(() => {
                var product = JsonConvert.DeserializeObject<Product>("fiherifuer");
            });

            Assert.Throws<JsonException>(() => {
                var product = JsonConvert.DeserializeObject<Product>("{Name:\"name\"");
            });

            Assert.AreEqual(0, JsonConvert.DeserializeObject<int>("0"));
        }
    }
}