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
        public class Product1
        {
            public string Name { get; set; }

            public double Price { get; set; }
        }

        public class Product2
        {
            public string Name;

            public int Price;
        }


        [Test]
        public static void TestValueTypeProperty()
        {
            Product1 product = new Product1();

            product.Name = "Apple";
            product.Price = 3.99;

            var json = JsonConvert.SerializeObject(product);
            Assert.AreEqual("{\"Name\":\"Apple\",\"Price\":3.99}", json);

            product = JsonConvert.DeserializeObject<Product1>(json);
            Assert.AreEqual("Apple", product.Name);
            Assert.AreEqual(3.99, product.Price);
        }

        [Test]
        public static void TestValueTypeField()
        {
            Product2 product = new Product2();

            product.Name = "Apple";
            product.Price = 4;

            var json = JsonConvert.SerializeObject(product);
            Assert.AreEqual("{\"Name\":\"Apple\",\"Price\":4}", json);

            product = JsonConvert.DeserializeObject<Product2>(json);
            Assert.AreEqual("Apple", product.Name);
            Assert.AreEqual(4, product.Price);
        }
    }
}