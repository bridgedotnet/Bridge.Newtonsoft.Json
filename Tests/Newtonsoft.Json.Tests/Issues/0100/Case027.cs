using System;
using System.Collections;
using Bridge;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#27 - {0}")]
    public class Case27
    {
        public class Product
        {
            public string Name { get; set; }

            public double Price { get; set; }
        }


        [Test]
        public static void TestEnumJson()
        {
            Product product = new Product();

            product.Name = "Apple";
            product.Price = 3.99;

            var json = JsonConvert.SerializeObject(product);
            Assert.AreEqual("{\"Name\":\"Apple\",\"Price\":3.99}", json);

            product = JsonConvert.DeserializeObject<Product>(json);
            Assert.AreEqual("Apple", product.Name);
            Assert.AreEqual(3.99, product.Price);
        }
    }
}