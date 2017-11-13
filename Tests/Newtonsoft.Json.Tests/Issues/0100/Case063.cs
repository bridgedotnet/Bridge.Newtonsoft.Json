using Bridge;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Globalization;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#63 - {0}")]
    public class Case63
    {
        public class Product
        {
            public string Name { get; set; }

            [JsonIgnore]
            public DateTime ExpiryDate { get; set; }

            public double Price { get; set; }

            [JsonIgnore]
            public string[] Sizes { get; set; }
        }

        [Test]
        public static void TestJsonIgnore()
        {
            var x = new Product { Name = "Apple", ExpiryDate = DateTime.Now, Price = 3.99, Sizes = new string[] { "S", "M", "L" } };
            var json = JsonConvert.SerializeObject(x);
            Assert.AreEqual("{\"Name\":\"Apple\",\"Price\":3.99}", json);

            var clone = JsonConvert.DeserializeObject<Product>(json);

            Assert.True((object)clone is Product);
            Assert.AreEqual("Apple", clone.Name);
        }
    }
}