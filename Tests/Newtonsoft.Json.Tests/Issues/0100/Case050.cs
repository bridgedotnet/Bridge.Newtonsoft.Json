using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Globalization;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#50 - {0}")]
    public class Case50
    {
        static System.Text.StringBuilder sb;

        public class Person
        {
            private int _id, _somethingElse;
            
            public Person(int id, string name)
            {
                sb.Append("1");
                Id = id;
                Name = name;
            }
            public int Id
            {
                get { return _id; }
                set
                {
                    sb.Append("2");
                    _id = value;
                }
            }
            public int SomethingElse
            {
                get { return _somethingElse; }
                set
                {
                    sb.Append("3");
                    _somethingElse = value;
                }
            }
            public string Name { get; }
        }

        [Test]
        public static void TestDeserializationConstructor()
        {
            sb = new System.Text.StringBuilder();

            var person = new Person(123, "Dan")
            {
                SomethingElse = 456
            };
            var settings = new JsonSerializerSettings
            {
                TypeNameHandling = TypeNameHandling.Objects
            };
            var json = JsonConvert.SerializeObject(person, settings);
            var clone = JsonConvert.DeserializeObject<Person>(json);

            Assert.AreEqual("123123", sb.ToString());
        }
    }
}