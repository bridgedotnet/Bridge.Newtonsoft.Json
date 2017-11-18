using System;
using System.Collections;
using Bridge;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Newtonsoft.Json.Tests.Issues
{
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

            Assert.AreEqual("james@example.com", account.Email);
            Assert.False(account.Active);
            Assert.AreEqual("User, Admin, Expired", string.Join(", ", account.Roles.ToArray()));
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

            Assert.AreEqual("Serialize All The Things", s.Name);
            Assert.AreEqual(new DateTime(2014, 6, 4), s.Date);
        }

        [Test]
        public static void PopulateObjectWithHeaderComment()
        {
            string json = @"{""prop"": 1.0}";

            PopulateTestObject o = new PopulateTestObject();
            JsonConvert.PopulateObject(json, o);

            Assert.True(1m == o.Prop);
        }

        [Test]
        public static void PopulatePerson()
        {
            Person p = new Person();

            JsonConvert.PopulateObject(@"{""Name"":""James""}", p);

            Assert.AreEqual("James", p.Name);
        }

        [Test]
        public static void PopulateArray()
        {
            IList<Person> people = new List<Person>
            {
                new Person { Name = "Initial" }
            };

            JsonConvert.PopulateObject(@"[{""Name"":""James""}, null]", people);

            Assert.AreEqual(3, people.Count);
            Assert.AreEqual("Initial", people[0].Name);
            Assert.AreEqual("James", people[1].Name);
            Assert.AreEqual(null, people[2]);
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

            Assert.AreEqual(3, people.Count);
            Assert.AreEqual("key3, key4, key5", string.Join(", ", people.Keys.ToArray()));
            Assert.AreEqual("Initial3_1", people["key3"].Name);
            Assert.AreEqual(0, people["key3"].Tag);
            Assert.AreEqual("Initial4", people["key4"].Name);
            Assert.AreEqual("Initial5", people["key5"].Name);
        }
    }
}