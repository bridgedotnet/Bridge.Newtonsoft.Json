using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#138 - {0}")]
    public class Case138
    {
        public class ItemClass
        {
            public string A { get; set; }
            public string B { get; set; }
        }

        public class SubClass
        {
            public List<ItemClass> Items { get; } = new List<ItemClass>();
        }

        public class ContainerClass
        {
            public SubClass Inst { get; } = new SubClass();
        }

        public static void WorksAsExpected()
        {
            SubClass Test = new SubClass();
            Test.Items.Add(new ItemClass { A = "WorksAsExpected.Test1A", B = "WorksAsExpected.Test1B" });
            Test.Items.Add(new ItemClass { A = "WorksAsExpected.Test2A", B = "WorksAsExpected.Test2B" });

            JsonSerializerSettings Settings = new JsonSerializerSettings();
            Settings.TypeNameHandling = TypeNameHandling.Objects;

            string Json = JsonConvert.SerializeObject(Test, Formatting.Indented, Settings);
            
            SubClass Result = JsonConvert.DeserializeObject<SubClass>(Json, Settings);
            Assert.AreEqual(2, Result.Items.Count);
            Assert.AreEqual("WorksAsExpected.Test1A", Result.Items[0].A);
            Assert.AreEqual("WorksAsExpected.Test1B", Result.Items[0].B);
            Assert.AreEqual("WorksAsExpected.Test2A", Result.Items[1].A);
            Assert.AreEqual("WorksAsExpected.Test2B", Result.Items[1].B);
        }

        public static void NotWorkAsExpected()
        {
            // Create an instance with an extra level, with 2 items in its list and serialize it to JSON
            ContainerClass Test = new ContainerClass();
            Test.Inst.Items.Add(new ItemClass { A = "NotWorkAsExpected.Test1A", B = "NotWorkAsExpected.Test1B" });
            Test.Inst.Items.Add(new ItemClass { A = "NotWorkAsExpected.Test2A", B = "NotWorkAsExpected.Test2B" });
            JsonSerializerSettings Settings = new JsonSerializerSettings();
            Settings.TypeNameHandling = TypeNameHandling.Objects;

            string Json = JsonConvert.SerializeObject(Test, Formatting.Indented, Settings);

            ContainerClass Result = JsonConvert.DeserializeObject<ContainerClass>(Json, Settings);
            Assert.AreEqual(2, Result.Inst.Items.Count);
            Assert.AreEqual("NotWorkAsExpected.Test1A", Result.Inst.Items[0].A);
            Assert.AreEqual("NotWorkAsExpected.Test1B", Result.Inst.Items[0].B);
            Assert.AreEqual("NotWorkAsExpected.Test2A", Result.Inst.Items[1].A);
            Assert.AreEqual("NotWorkAsExpected.Test2B", Result.Inst.Items[1].B);
        }

        [Test]
        public static void TestNestedList()
        {
            WorksAsExpected();
            NotWorkAsExpected();
        }
    }
}