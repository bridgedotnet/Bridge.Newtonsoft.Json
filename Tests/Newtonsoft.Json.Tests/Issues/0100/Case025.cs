using System;
using System.Collections;
using Bridge;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using Demo25;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#25 - {0}")]
    public class Case25
    {
        [Test]
        public static void TestSerializerSettings()
        {
            var s = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects };

            var json1 = "{    \"$type\": \"Demo25.ApiResponse`1[[Demo25.NonNullList`1[[Demo25.KeyValuePairDataModel, Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests\",    \"ResultIfSuccessful\": []}";
            var json2 = "{       \"ToolboxControls\": [        {            \"$type\": \"System.String\",            \"Text\": \"Placeholder header\"        }    ]}";

            Newtonsoft.Json.JsonConvert.DeserializeObject<ApiResponse<NonNullList<KeyValuePairDataModel>>>(json1, s);
            var a = Newtonsoft.Json.JsonConvert.DeserializeObject<Demo25.Danny>(json2, s);
            Assert.AreEqual(1, a.ToolboxControls.Count);
        }
    }
}

namespace Demo25
{
    public class Danny
    {
        public List<string> ToolboxControls { get; set; }
    }

    public sealed class KeyValuePairDataModel
    {
    }

    public sealed class ApiResponse<T>
    {
        [JsonConstructor]
        public ApiResponse(T resultIfSuccessful)
        {
            ResultIfSuccessful = resultIfSuccessful;
        }

        public T ResultIfSuccessful { get; }
    }

    public sealed class NonNullList<T> : IEnumerable<T>
    {
        private readonly Node _headIfAny;
        private NonNullList(Node headIfAny)
        {
            _headIfAny = headIfAny;
        }
        public NonNullList(IEnumerable<T> values)
        {
            Node node = null;
            foreach (var value in values.Reverse())
            {
                node = new Node
                {
                    Count = ((node == null) ? 0 : node.Count) + 1,
                    Item = value,
                    NextIfAny = node
                };
            }
            _headIfAny = node;
        }

        public uint Count { get { return (_headIfAny == null) ? 0 : (uint)_headIfAny.Count; } }

        public IEnumerator<T> GetEnumerator()
        {
            var node = _headIfAny;
            while (node != null)
            {
                yield return node.Item;
                node = node.NextIfAny;
            }
        }

        IEnumerator IEnumerable.GetEnumerator() { return GetEnumerator(); }

        private sealed class Node
        {
            public int Count;
            public T Item;
            public Node NextIfAny;
        }
    }
}