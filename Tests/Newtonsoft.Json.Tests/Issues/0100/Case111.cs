using Bridge.Test.NUnit;
using System;
using System.Linq;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#111 - {0}")]
    public class Case111
    {
        public class Node
        {
            public string Name;
            public ICollection<Node> Children;
        }

        public class Response
        {
            public ICollection<Node> Nodes;
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
    }
}