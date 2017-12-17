using Bridge;
using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace Newtonsoft.Json.Tests.Issues
{
    [Category("Issues")]
    [TestFixture(TestNameFormat = "#72 - {0}")]
    public class Case72
    {
        public class Videogame
        {
            [JsonProperty("name")]
            public string Name { get; set; }

            [JsonProperty("release_date")]
            public DateTime ReleaseDate { get; set; }
        }

        public class Account
        {
            public string EmailAddress { get; set; }

            // appear last
            [JsonProperty(Order = 1)]
            public bool Deleted { get; set; }

            [JsonProperty(Order = 2)]
            public DateTime DeletedDate { get; set; }

            // appear first
            [JsonProperty(Order = -2)]
            public string FullName { get; set; }
        }

        public class Videogame2
        {
            [JsonProperty(Required = Required.Always)]
            public string Name { get; set; }

            [JsonProperty(Required = Required.AllowNull)]
            public DateTime? ReleaseDate { get; set; }
        }

        public class Vessel
        {
            [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
            public string Name { get; set; }

            [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
            public string Class { get; set; }

            [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
            public DateTime? LaunchDate { get; set; }
        }

    [Test]
        public static void TestJsonProperty()
        {
            Videogame starcraft = new Videogame
             {
                 Name = "Starcraft",
                 ReleaseDate = new DateTime(1998, 1, 1)
             };
            
             string json = JsonConvert.SerializeObject(starcraft);
             Assert.AreEqual("{\"name\":\"Starcraft\",\"release_date\":\"1998-01-01T00:00:00\"}", json);
        }

        [Test]
        public static void TestJsonPropertyOrder()
        {
             Account account = new Account
             {
                 FullName = "Aaron Account",
                 EmailAddress = "aaron@example.com",
                 Deleted = true,
                 DeletedDate = new DateTime(2013, 1, 25)
             };

            string json = JsonConvert.SerializeObject(account);
            Assert.AreEqual("{\"FullName\":\"Aaron Account\",\"EmailAddress\":\"aaron@example.com\",\"Deleted\":true,\"DeletedDate\":\"2013-01-25T00:00:00\"}", json);
        }

        [Test]
        public static void TestJsonPropertyRequire()
        {
            Assert.Throws<JsonSerializationException>(() => {
                var game1 = JsonConvert.DeserializeObject<Videogame2>("{}");
            });

            Assert.Throws<JsonSerializationException>(() => {
                var game2 = JsonConvert.DeserializeObject<Videogame2>("{\"ReleaseDate\": null}");
            });

            var game = JsonConvert.DeserializeObject<Videogame2>("{\"Name\": \"Starcraft III\",\"ReleaseDate\": null}");

            Assert.AreEqual("Starcraft III", game.Name);
            Assert.Null(game.ReleaseDate);
        }

        [Test]
        public static void TestJsonPropertyNullValue()
        {
            Assert.AreEqual("{}", JsonConvert.SerializeObject(new Vessel()));
            Assert.AreEqual("{\"Name\":\"vessel\"}", JsonConvert.SerializeObject(new Vessel { Name = "vessel" }));
        }
    }
}