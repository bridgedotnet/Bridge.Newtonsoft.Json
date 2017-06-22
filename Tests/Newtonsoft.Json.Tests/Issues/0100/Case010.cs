using System;
using System.Collections;
using Bridge;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#10 - {0}")]
    public class Case10
    {
        public sealed class ClassWithMissingProperty
        {
            public ClassWithMissingProperty(object prop1, object prop2)
            {
                Prop1 = prop1;
                Prop2 = prop2;
            }

            public object Prop1 { get; private set; }
            public object Prop2 { get; private set; }
        }

        [Test]
        public static void TestPropertiesWithSameReferenceValue()
        {
            var a = new object();

            var json = JsonConvert.SerializeObject(
                new ClassWithMissingProperty(a, a),
                new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects }
            );

            Assert.AreEqual("{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case10+ClassWithMissingProperty, Newtonsoft.Json.Tests\",\"Prop1\":{\"$type\":\"System.Object, mscorlib\"},\"Prop2\":{\"$type\":\"System.Object, mscorlib\"}}", json);
        }
    }
}