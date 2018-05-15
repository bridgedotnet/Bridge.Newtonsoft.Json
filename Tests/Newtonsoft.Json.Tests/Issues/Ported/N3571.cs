using Bridge.Test.NUnit;
using System;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Ported Issues")]
    [TestFixture(TestNameFormat = "#3571 - {0}")]
    public class Bridge3571
    {
        public interface IGeneralInterface
        {
        }

        public class SpecificClass : IGeneralInterface
        {
        }

        public class DomRoot
        {
            public Object SubElement { get; set; }
            public IGeneralInterface SubSpecific { get; set; }
        }

        // Method to serialize an object into a type-specified JSON string
        static string Serialize(Object Obj)
        {
            var Settings = new Newtonsoft.Json.JsonSerializerSettings();
            Settings.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects;
            return Newtonsoft.Json.JsonConvert.SerializeObject(Obj, Newtonsoft.Json.Formatting.Indented, Settings);
        }

        // Method to deserialize the type-specified JSON string back to an object
        static T Deserialize<T>(string JSON)
        {
            Newtonsoft.Json.JsonSerializerSettings Settings = new Newtonsoft.Json.JsonSerializerSettings();
            Settings.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects;
            return Newtonsoft.Json.JsonConvert.DeserializeObject<T>(JSON, Settings);
        }

        [Test]
        public static void Test3571()
        {
            var OriginalObject = new DomRoot();
            OriginalObject.SubElement = new SpecificClass();
            OriginalObject.SubSpecific = new SpecificClass();
            var Str = Serialize(OriginalObject);
            Console.WriteLine(Str);

            var ReconstructObject = Deserialize<DomRoot>(Str);
            Assert.AreEqual("DomRoot", ReconstructObject.GetType().Name);
            Assert.AreEqual("SpecificClass", ReconstructObject.SubSpecific.GetType().Name);
            Assert.AreEqual("SpecificClass", ReconstructObject.SubElement.GetType().Name);

            var Reconstruct2 = Deserialize<Object>(Str);
            Assert.AreEqual("DomRoot", Reconstruct2.GetType().Name);
        }
    }
}