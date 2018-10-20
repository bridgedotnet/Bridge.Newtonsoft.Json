using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Test.NUnit;
using Newtonsoft.Json.Serialization;

namespace Newtonsoft.Json.Tests.Tests
{
    [Category("SerializationBinder")]
    [TestFixture]
    public class SerializationBinderTests
    {
        [Test]
        public void KnownTypesBinderTest()
        {
            #region Usage
            KnownTypesBinder knownTypesBinder = new KnownTypesBinder
            {
                KnownTypes = new List<Type> { typeof(Car) }
            };

            Car car = new Car
            {
                Maker = "Ford",
                Model = "Explorer"
            };

            var json = JsonConvert.SerializeObject(car, Formatting.Indented, new JsonSerializerSettings
            {
                TypeNameHandling = TypeNameHandling.Objects,
                SerializationBinder = knownTypesBinder
            });

            var newValue = JsonConvert.DeserializeObject<object>(json, new JsonSerializerSettings
            {
                TypeNameHandling = TypeNameHandling.Objects,
                SerializationBinder = knownTypesBinder
            });
            #endregion

            Assert.AreEqual("Car", newValue.GetType().Name);
        }
    }

    #region Types
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

    public class Car
    {
        public string Maker { get; set; }
        public string Model { get; set; }
    }
    #endregion
}
