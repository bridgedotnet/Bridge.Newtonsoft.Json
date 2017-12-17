using Bridge;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Globalization;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// Checks whether the 'JasonIgnore' setting properly works on objects
    /// while serializing and deserializing.
    /// </summary>
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

        /// <summary>
        /// The test consists in making an instance of the Product object,
        /// serializing it, and then deserializing. The properties with the
        /// attribute should not come back from the object, and the serialized
        /// string should not contain text unique to those ignored properties.
        /// </summary>
        [Test]
        public static void TestJsonIgnore()
        {
            var x = new Product
            {
                Name = "Apple",
                ExpiryDate = DateTime.Now,
                Price = 3.99,
                Sizes = new string[] { "S", "M", "L" }
            };
            var json = JsonConvert.SerializeObject(x);
            Assert.AreEqual("{\"Name\":\"Apple\",\"Price\":3.99}", json, "Output serialized JSON has the expected fields.");

            var clone = JsonConvert.DeserializeObject<Product>(json);

            Assert.True((object)clone is Product, "Just serialized object deserializes back to the same object.");
            Assert.AreEqual("Apple", clone.Name, "Serialized JSON string correctly fills the object when deserialized.");

            var new_json = "{\"Name\":\"Apple\",\"Price\":3.99,\"Sizes\":[\"A\",\"B\",\"C\"]}";
            var deserialized = JsonConvert.DeserializeObject<Product>(new_json);

            Assert.True((object)deserialized is Product, "Fresh JSON string deserializes to a Product obejct.");
            Assert.AreEqual("Apple", deserialized.Name, "Fresh JSON string correctly fills the object when deserialized back in.");

            Assert.Null(deserialized.Sizes);
        }
    }
}