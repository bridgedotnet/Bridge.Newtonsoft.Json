using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// Ensures arbitrarily nested lists can be deserialized.
    /// </summary>
    /// <remarks>
    /// Test case based on code provided by Christian "ChrML" Lundheim
    /// Original deck reproducing the issue: https://deck.net/ec6366bb9284fb56f99e423e60fc7733
    /// </remarks>
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

        /// <summary>
        /// The tests here worked by the time of the issue, and were used as 
        /// reference for the breaking batch of tests.
        /// </summary>
        public static void ReferenceTestBatch()
        {
            var name = "Reference test batch: ";
            SubClass Test = new SubClass();
            Test.Items.Add(new ItemClass { A = "WorksAsExpected.Test1A", B = "WorksAsExpected.Test1B" });
            Test.Items.Add(new ItemClass { A = "WorksAsExpected.Test2A", B = "WorksAsExpected.Test2B" });

            JsonSerializerSettings Settings = new JsonSerializerSettings();
            Settings.TypeNameHandling = TypeNameHandling.Objects;

            string Json = JsonConvert.SerializeObject(Test, Formatting.Indented, Settings);
            
            SubClass Result = JsonConvert.DeserializeObject<SubClass>(Json, Settings);
            Assert.AreEqual(2, Result.Items.Count, name + "Amount of items is right.");
            Assert.AreEqual("WorksAsExpected.Test1A", Result.Items[0].A, name + "Item 0, property A is right.");
            Assert.AreEqual("WorksAsExpected.Test1B", Result.Items[0].B, name + "Item 0, property B is right.");
            Assert.AreEqual("WorksAsExpected.Test2A", Result.Items[1].A, name + "Item 1, property A is right.");
            Assert.AreEqual("WorksAsExpected.Test2B", Result.Items[1].B, name + "Item 1, property B is right.");
        }

        /// <summary>
        /// This code used to break in version 1.9.0.
        /// </summary>
        public static void OffendingTestBatch()
        {
            var name = "Offending test batch: ";
            // Create an instance with an extra level, with 2 items in its list and serialize it to JSON
            ContainerClass Test = new ContainerClass();
            Test.Inst.Items.Add(new ItemClass { A = "NotWorkAsExpected.Test1A", B = "NotWorkAsExpected.Test1B" });
            Test.Inst.Items.Add(new ItemClass { A = "NotWorkAsExpected.Test2A", B = "NotWorkAsExpected.Test2B" });
            JsonSerializerSettings Settings = new JsonSerializerSettings();
            Settings.TypeNameHandling = TypeNameHandling.Objects;

            string Json = JsonConvert.SerializeObject(Test, Formatting.Indented, Settings);

            ContainerClass Result = JsonConvert.DeserializeObject<ContainerClass>(Json, Settings);
            Assert.AreEqual(2, Result.Inst.Items.Count, name + "Amount of items is right.");
            Assert.AreEqual("NotWorkAsExpected.Test1A", Result.Inst.Items[0].A, name + "Item 0, property A is right.");
            Assert.AreEqual("NotWorkAsExpected.Test1B", Result.Inst.Items[0].B, name + "Item 0, property B is right.");
            Assert.AreEqual("NotWorkAsExpected.Test2A", Result.Inst.Items[1].A, name + "Item 1, property A is right.");
            Assert.AreEqual("NotWorkAsExpected.Test2B", Result.Inst.Items[1].B, name + "Item 1, property B is right.");
        }

        /// <summary>
        /// Just call the two batches of tests; the assertions will be made
        /// therein.
        /// </summary>
        [Test]
        public static void TestNestedList()
        {
            ReferenceTestBatch();
            OffendingTestBatch();
        }
    }
}