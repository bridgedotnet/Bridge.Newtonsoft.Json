using System;
using Bridge;
using Bridge.Test.NUnit;

namespace Newtonsoft.Json.Tests
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#2 - {0}")]
    public class Case2
    {
        [Reflectable(false)]
        public class Class1
        {
            public int Prop1
            {
                get; set;
            }
        }

        public class Class2 : Class1
        {
            new public int Prop1
            {
                get; set;
            }
        }

        [Reflectable(false)]
        public interface I1
        {
            int Prop1
            {
                get; set;
            }
        }

        public class Class3 : I1
        {
            public int Prop1
            {
                get; set;
            }
        }

        [Test]
        public static void TestMetadata()
        {
            Assert.Throws<InvalidOperationException>(() =>
            {
                var o = JsonConvert.SerializeObject(new Class2());
            });

            Assert.Throws<InvalidOperationException>(() =>
            {
                var o = JsonConvert.SerializeObject(new Class1());
            });

            var json = JsonConvert.SerializeObject(new Class3());
            Assert.AreEqual("{\"Prop1\":0}", json);
        }
    }
}