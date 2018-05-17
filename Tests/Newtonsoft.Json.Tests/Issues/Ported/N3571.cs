using Bridge.Test.NUnit;
using System;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Ported Issues")]
    [TestFixture(TestNameFormat = "#3571 - {0}")]
    public class Bridge3571
    {
        // Original code provided at the issue and deck https://deck.net/4753d511370fd4bf9f51764079565e06
        // ** Reproduction of an issue during JSON deserializing of 'Object' properties
        // By Christian "ChrML" Lundheim (https://github.com/ChrML)

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
        public static void ElaborateTest()
        {
            // Make an original object and serialize to a JSON string
            var OriginalObject = new DomRoot();
            OriginalObject.SubElement = new SpecificClass();
            OriginalObject.SubSpecific = new SpecificClass();
            var Str = Serialize(OriginalObject);

            // Reconstruct new of same type
            var ReconstructObject = Deserialize<DomRoot>(Str);

            // Output: DomRoot			Correct: DomRoot
            // So far so good
            //Console.WriteLine($"ReconstructObject =\t\t{ReconstructObject.GetType().Name}");
            // This assertionwas not affected by this issue and is left for reference only.
            Assert.AreEqual("DomRoot", ReconstructObject.GetType().Name, "Serialized object has the expected type when deserialized back specifying its original type.");

            // Reconstruct a new using general Object also fails, even though type is specific in the JSON string
            // Output: String 			Correct: DomRoot
            var Reconstruct2 = Deserialize<Object>(Str);
            //Console.WriteLine($"Reconstruct2 =\t\t\t{Reconstruct2.GetType().Name}");
            Assert.AreEqual("DomRoot", ReconstructObject.GetType().Name, "Serialized object has the expected type when deserialized back specifying a general/'object' type.");

            // Output: SpecificClass	Correct: SpecificClass
            // Still good, even though property is of type IGeneralInterface, it used Specific to construct the object because the JSON string says so
            //Console.WriteLine($"ReconstructObject.SubSpecific =\t{ReconstructObject.SubSpecific.GetType().Name}");
            // This assertionwas not affected by this issue and is left for reference only.
            Assert.AreEqual("SpecificClass", ReconstructObject.SubSpecific.GetType().Name, "Serialized object has the expected member type when deserialized back, for members with specific type definition.");

            // Output: String			Correct: SpecificClass
            // Here not so good :(. Property is of type object, but the JSON string tells it should use the type 'SpecificClass' to reconstruct this property value.
            //Console.WriteLine($"ReconstructObject.SubElement =\t{ReconstructObject.SubElement.GetType().Name}");
            Assert.AreEqual("SpecificClass", ReconstructObject.SubElement.GetType().Name, "Serialized object has the expected member type when deserialized back, for members with general/'object' type definition.");
        }
    }
}