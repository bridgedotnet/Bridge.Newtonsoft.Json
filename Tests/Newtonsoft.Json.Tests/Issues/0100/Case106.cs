using Bridge.Test.NUnit;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// The tests here ensures ISerializationBinder implementation is correct.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#106 - {0}")]
    public class Case106
    {
        /// <summary>
        /// A class implementing ISerializationBinder, which will then be used
        /// to serialize and de-serialize a class.
        /// </summary>
        public class KnownTypesBinder : ISerializationBinder
        {
            public IList<Type> KnownTypes { get; set; }

            public Type BindToType(string assemblyName, string typeName)
            {
                return KnownTypes.SingleOrDefault(t => t.Name == typeName);
            }

            public void BindToName(Type serializedType, out string assemblyName, out string typeName)
            {
                assemblyName = null;
                typeName = serializedType.Name;
            }
        }

        /// <summary>
        /// A Simple class to be tested against.
        /// </summary>
        public class Car
        {
            public string Maker { get; set; }
            public string Model { get; set; }
        }

        /// <summary>
        /// Sets up the serialization with KnownTypesBinder defined above, then
        /// serializes and deserializes, checking whether the result is sane.
        /// </summary>
        [Test]
        public static void TestSerializationBinderInterface()
        {
            KnownTypesBinder knownTypesBinder = new KnownTypesBinder
            {
                KnownTypes = new List<Type> { typeof(Car) }
            };

            Car car = new Car
            {
                Maker = "Ford",
                Model = "Explorer"
            };

            string json = JsonConvert.SerializeObject(car, Formatting.None, new JsonSerializerSettings
            {
                TypeNameHandling = TypeNameHandling.Objects,                
                SerializationBinder = knownTypesBinder
            });

            Assert.AreEqual("{\"$type\":\"Car\",\"Maker\":\"Ford\",\"Model\":\"Explorer\"}", json,
                "Serialized string is the expected one.");

            object newValue = JsonConvert.DeserializeObject(json, new JsonSerializerSettings
            {
                TypeNameHandling = TypeNameHandling.Objects,
                SerializationBinder = knownTypesBinder
            });

            Assert.AreEqual("Car", newValue.GetType().Name,
                "Serialized representation of the Car object is correctly deserialized.");
        }
    }
}