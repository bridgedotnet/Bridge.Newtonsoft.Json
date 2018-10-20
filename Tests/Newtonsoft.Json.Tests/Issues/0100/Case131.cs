using Bridge.Test.NUnit;

namespace Newtonsoft.Json.Tests.Issues._0100
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#131 - {0}")]
    public class Case131
    {
        public class MyClass
        {
            public string SomeString { get; set; }
        }

        [Test]
        public static void TestNoTypeNameHandling()
        {
            // Create a test object and serialize it
            MyClass Test = new MyClass { SomeString = "Hello World" };
            var settings = new JsonSerializerSettings
            {
                TypeNameHandling = TypeNameHandling.All
            };
            var Json = JsonConvert.SerializeObject(Test, settings);

            settings.TypeNameHandling = TypeNameHandling.None;
            var Result = JsonConvert.DeserializeObject<object>(Json, settings);
            Assert.True(Result.GetType() == typeof(object), "Deserialized as simple object");
        }
    }
}
