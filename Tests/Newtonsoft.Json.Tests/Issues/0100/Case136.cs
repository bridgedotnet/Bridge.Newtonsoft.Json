using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// Ensures GUID structures can be deserialized.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#136 - {0}")]
    public class Case136
    {
        /// <summary>
        /// This simply creates some GUIDs, serializes and de-serializes; then
        /// checking whether the full Guid class behavior is retained after
        /// deserialization.
        /// </summary>
        [Test]
        public static void TestTuple()
        {
            List<Tuple<Guid, int>> guids = new List<Tuple<Guid, int>>();

            for (int i = 0; i < 5; ++i)
            {
                Guid guid = new Guid(i, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
                Tuple<Guid, int> tuple = new Tuple<Guid, int>(guid, i);
                guids.Add(tuple);
            }

            string json = Newtonsoft.Json.JsonConvert.SerializeObject(guids);
            List<Tuple<Guid, int>> newGuids = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Tuple<Guid, int>>>(json);
            Guid guid2 = new Guid(3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

            int value = newGuids.Find(x => x.Item1 == guid2).Item2;
            Assert.AreEqual(3, value, "System.Guid structure can be correctly deserialized.");
        }
    }
}