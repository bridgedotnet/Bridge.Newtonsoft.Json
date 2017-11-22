using System;
using System.Collections;
using Bridge;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Newtonsoft.Json.Tests.Issues
{
    /// <summary>
    /// Tests for the PopulateObject and related methods.
    /// </summary>
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#16 - {0}")]
    public class Case16
    {
        #region Types
        public class Account
        {
            public string Email { get; set; }
            public bool Active { get; set; }
            public DateTime CreatedDate { get; set; }
            public List<string> Roles { get; set; }
        }

        public class Session
        {
            public string Name { get; set; }
            public DateTime Date { get; set; }
        }

        public class PopulateTestObject
        {
            public decimal Prop { get; set; }
        }

        public class Person
        {
            public int Tag { get; set; }
            public string Name { get; set; }
        }
        #endregion

        [Test]
        public static void TestPopulateObject()
        {
            Account account = new Account
            {
                Email = "james@example.com",
                Active = true,
                CreatedDate = new DateTime(2013, 1, 20, 0, 0, 0, DateTimeKind.Utc),
                Roles = new List<string>
                {
                    "User",
                    "Admin"
                }
            };

            string json = @"{
              ""Active"": false,
              ""Roles"": [
                ""Expired""
              ]
            }";

            JsonConvert.PopulateObject(json, account);

            Assert.AreEqual("james@example.com", account.Email, "Previously feed string is intact.");
            Assert.False(account.Active, "Boolean propery updated from json.");
            Assert.AreEqual("User, Admin, Expired", string.Join(", ", account.Roles.ToArray()), "Old list members kept and new list entry populated in the object.");
        }

        [Test]
        public static void DeserializationBasics2()
        {
            Session s = new Session();
            s.Date = new DateTime(2014, 6, 4);

            string j = @"{
              ""Name"": ""Serialize All The Things""
            }";

            JsonConvert.PopulateObject(j, s);

            Assert.AreEqual("Serialize All The Things", s.Name, "Deserialized json string populated in object.");
            Assert.AreEqual(new DateTime(2014, 6, 4), s.Date, "Date not included in json deserialization is kept intact.");
        }

        [Test]
        public static void PopulateObjectWithHeaderComment()
        {
            string json = @"{""prop"": 1.0}";

            PopulateTestObject o = new PopulateTestObject();
            JsonConvert.PopulateObject(json, o);

            Assert.True(1m == o.Prop, "Decimal property from deserialized json reflected into object.");
        }

        [Test]
        public static void PopulatePerson()
        {
            Person p = new Person();

            JsonConvert.PopulateObject(@"{""Name"":""James""}", p);

            Assert.AreEqual("James", p.Name, "String property from deserialized json populated into object.");
        }

        [Test]
        public static void PopulateArray()
        {
            IList<Person> people = new List<Person>
            {
                new Person { Name = "Initial" }
            };

            JsonConvert.PopulateObject(@"[{""Name"":""James""}, null]", people);

            Assert.AreEqual(3, people.Count, "Array length updated/appended on populate.");
            Assert.AreEqual("Initial", people[0].Name, "Array position of first entry remained at first position.");
            Assert.AreEqual("James", people[1].Name, "Populated entry appended in the array.");
            Assert.AreEqual(null, people[2], "Last populated entry placed last in the array.");
        }

        [Test]
        public static void PopulateDictionary()
        {
            IDictionary<string, Person> people = new Dictionary<string, Person>
            {
                {"key3", new Person { Tag = 3, Name = "Initial3" } },
                {"key4", new Person { Name = "Initial4" } }
            };

            JsonConvert.PopulateObject(@"{""key3"":{""Name"":""Initial3_1""},""key5"":{""Name"":""Initial5""}}", people);

            Assert.AreEqual(3, people.Count, "Dictionary length increased by populating it. Existing entry updated.");
            Assert.AreEqual("key3, key4, key5", string.Join(", ", people.Keys.ToArray()), "Keys' sequence follow expected order in dictionary.");
            Assert.AreEqual("Initial3_1", people["key3"].Name, "'key3' entry updated accordingly after populating it.");
            Assert.AreEqual(0, people["key3"].Tag, "Updated key's object fully renewed (new instance).");
            Assert.AreEqual("Initial4", people["key4"].Name, "Unchanged key remained intact.");
            Assert.AreEqual("Initial5", people["key5"].Name, "Appended key name has json string's provided value.");
        }
    }
}