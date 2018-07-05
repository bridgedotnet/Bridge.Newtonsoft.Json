using Bridge.Test.NUnit;
using System;
using System.Linq;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// Ensures deserializing interface collections
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#111 - {0}")]
    public class Case111
    {
        /// <summary>
        /// First test batch, ICollection tests.
        /// </summary>
        public class Node
        {
            public string Name;
            public ICollection<Node> Children;
        }

        public class Response
        {
            public ICollection<Node> Nodes;
        }

        /// <summary>
        /// For the IList-related tests.
        /// </summary>
        public class ListNode
        {
            public string Name;
            public IList<string> Colors;

        }

        /// <summary>
        /// For the IDictionary-related tests.
        /// </summary>
        public class DictResponse
        {
            public IDictionary<int, ListNode> Nodes;
        }

        [Test]
        public static void TestInterfaceCollection()
        {
            string json = @"
            {  
               ""Nodes"": [
                    {
                        ""Name"": ""First"",
                        ""Children"": []
                    },
                    {
                        ""Name"": ""Second"",
                        ""Children"": []
                    }
                ]
            }";

            string json2 = "{ \"Nodes\": [ {\"Name\": \"First\", \"Children\": [] }, { \"Name\": \"Second\", \"Children\": [] } ] }";

            var response = JsonConvert.DeserializeObject<Response>(json);
            Assert.AreEqual(2, response.Nodes.Count, "Nodes Count is 2.");
            Assert.AreEqual("First", response.Nodes.First().Name, "First node's name is 'First'.");

            var response2 = JsonConvert.DeserializeObject<Response>(json2);
            Assert.AreEqual(2, response2.Nodes.Count, "Nodes2 Count is 2.");
            Assert.AreEqual("First", response2.Nodes.First().Name, "First node2's name is 'First'.");

            var response3 = new Response();
            response3.Nodes = new List<Node>();
            response3.Nodes.Add(new Node() { Name = "First", Children = new List<Node>() });
            response3.Nodes.Add(new Node() { Name = "Second", Children = new List<Node>() });

            var json3 = JsonConvert.SerializeObject(response3);
            Assert.AreEqual("{\"Nodes\":[{\"Children\":[],\"Name\":\"First\"},{\"Children\":[],\"Name\":\"Second\"}]}", json3, "Serialized list of nodes3 is right.");

            var response4 = JsonConvert.DeserializeObject<Response>(json3);
            Assert.AreEqual(2, response4.Nodes.Count, "Nodes4 Count is 2.");
            Assert.AreEqual("First", response4.Nodes.First().Name, "First node4's name is 'First'.");
        }

        [Test]
        public static void TestListAndDictInterfaces()
        {
            string json = @"
            {
			    ""Nodes"": {
				    ""1"": {
					    ""Name"": ""First"",
					    ""Colors"": []
				    },
				    ""2"": {
					    ""Name"": ""Second"",
					    ""Colors"": []
				    }
			    }
		    }";

            string json2 = "{\"Nodes\":{\"1\":{\"Name\":\"First\",\"Colors\":[]},\"2\":{\"Name\":\"Second\",\"Colors\":[]}}}";

            var response = JsonConvert.DeserializeObject<DictResponse>(json);
            Assert.AreEqual(2, response.Nodes.Count, "Nodes Count is 2.");
            Assert.AreEqual("First", response.Nodes.First().Value.Name, "First node's name is 'First'.");
            Assert.AreEqual(0, response.Nodes.First().Value.Colors.Count(), "First node's color count is 0.");

            var response2 = JsonConvert.DeserializeObject<DictResponse>(json2);
            Assert.AreEqual(2, response2.Nodes.Count, "Nodes2 Count is 2.");
            Assert.AreEqual("First", response2.Nodes.First().Value.Name, "First node2's name is 'First'.");
            Assert.AreEqual(0, response2.Nodes.First().Value.Colors.Count(), "First node2's color count is 0.");

            var response3 = new DictResponse();
            response3.Nodes = new Dictionary<int, ListNode>();
            response3.Nodes.Add(1, new ListNode() { Name = "First", Colors = new List<string>() { "black", "red", "yellow" } });
            response3.Nodes.Add(2, new ListNode() { Name = "Second", Colors = new List<string>() { "blackStain", "redStain", "yellowStain" } });

            // We get an odd result here where t he name-colors output is switched, but that should not be an issue.
            var json3 = JsonConvert.SerializeObject(response3);
            Assert.True(
                json3 == "{\"Nodes\":{\"1\":{\"Name\":\"First\",\"Colors\":[\"black\",\"red\",\"yellow\"]},\"2\":{\"Name\":\"Second\",\"Colors\":[\"blackStain\",\"redStain\",\"yellowStain\"]}}}" ||
                json3 == "{\"Nodes\":{\"1\":{\"Colors\":[\"black\",\"red\",\"yellow\"],\"Name\":\"First\"},\"2\":{\"Colors\":[\"blackStain\",\"redStain\",\"yellowStain\"],\"Name\":\"Second\"}}}",
                "Serialized list of nodes3 is right.");

            var response4 = JsonConvert.DeserializeObject<DictResponse>(json3);
            Assert.AreEqual(2, response4.Nodes.Count, "Nodes4 Count is 2.");
            Assert.AreEqual("First", response4.Nodes.First().Value.Name, "First node4's name is 'First'.");
            Assert.AreEqual(3, response4.Nodes.First().Value.Colors.Count(), "First node4's color count is 3.");
        }
    }
}