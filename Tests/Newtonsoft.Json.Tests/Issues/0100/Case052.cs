using Bridge;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Globalization;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#52 - {0}")]
    public class Case52
    {
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class Person
        {
            public Person(DateTime value)
            {
                Value = value;
            }

            public DateTime Value { get; }
        }

        [Test]
        public static void TestObjectLiteral()
        {
            var settings = new JsonSerializerSettings
            {
                TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects
            };

            var x = new Person(DateTime.Now);
            var json = JsonConvert.SerializeObject(x, settings);
            var clone = JsonConvert.DeserializeObject<Person>(json, settings);

            Assert.True((object)clone.Value is DateTime);
        }
    }
}