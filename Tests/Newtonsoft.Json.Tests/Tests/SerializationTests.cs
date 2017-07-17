using Bridge;
using Newtonsoft.Json.Serialization;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Newtonsoft.Json.Tests
{
    [Category("Serialization")]
    [TestFixture]
    public class SerializationTests
    {
        #region Test data

        public enum E1
        {
            Item1,
            Item2,
            Item3
        }

        [Reflectable]
        public class ClassWithFields
        {
            public byte[] byteArrayField = new byte[] { 1, 2, 3 };
            public Guid guidField = Guid.NewGuid();
            public Type typeField = typeof(SerializationTests);
            public char charField = 'a';
            public long longField;
            public ulong ulongField;
            public decimal decimalField;
            public DateTime dateField = new DateTime(2010, 6, 10, 12, 0, 0, 0);
            public E1 enumField;
            public int[] arrayField = new[] { 1, 2, 3 };
            public IList<E1> listField = new List<E1> { E1.Item1, E1.Item2, E1.Item3 };

            public IDictionary<string, E1> dictField = new Dictionary<string, E1>
            {
                ["i1"] = E1.Item1,
                ["i2"] = E1.Item2,
                ["i3"] = E1.Item3
            };
        }

        [Reflectable]
        public class Class1
        {
            public SubClass1 Sub1
            {
                get; set;
            }

            public SubClass2 Sub2
            {
                get; set;
            }
        }

        [Reflectable]
        public class SubClass1
        {
            public Class1 Owner
            {
                get; set;
            }

            public List<E1> List1
            {
                get; set;
            }
        }

        [Reflectable]
        public class SubClass2
        {
            public Class1 Owner
            {
                get; set;
            }

            public List<char> List1
            {
                get; set;
            }
        }

        [Reflectable]
        public class Class2
        {
            public int IntProp
            {
                get;
                set;
            }
        }

        [Reflectable]
        public class Class3
        {
            public string StringProp
            {
                get;
                set;
            }
        }

        #endregion Test data

        [Test]
        public static void ByteArrayWorks()
        {
            byte[] arr = new byte[] { 1, 2, 3 };
            Assert.AreEqual("\"" + System.Convert.ToBase64String(arr) + "\"", JsonConvert.SerializeObject(arr));
        }

        [Test]
        public static void GuidWorks()
        {
            var guid = Guid.NewGuid();
            Assert.AreEqual("\"" + guid.ToString() + "\"", JsonConvert.SerializeObject(guid));
        }

        [Test]
        public static void TypeWorks()
        {
            Assert.AreEqual("\"" + typeof(System.Collections.Generic.List<string>).FullName + "\"", JsonConvert.SerializeObject(typeof(System.Collections.Generic.List<string>)));
        }

        [Test]
        public static void CharWorks()
        {
            char c = 'a';
            Assert.AreEqual("\"a\"", JsonConvert.SerializeObject(c));
        }

        [Test]
        public static void Int64Works()
        {
            long value = long.MaxValue;
            Assert.AreEqual(long.MaxValue.ToDynamic().toNumber(), JsonConvert.SerializeObject(value));

            value = long.MinValue;
            Assert.AreEqual(long.MinValue.ToDynamic().toNumber(), JsonConvert.SerializeObject(value));
        }

        [Test]
        public static void UInt64Works()
        {
            ulong value = ulong.MaxValue;
            Assert.AreEqual(ulong.MaxValue.ToDynamic().toNumber(), JsonConvert.SerializeObject(value));

            value = ulong.MinValue;
            Assert.AreEqual(ulong.MinValue.ToDynamic().toNumber(), JsonConvert.SerializeObject(value));
        }

        [Test]
        public static void DecimalWorks()
        {
            decimal value = decimal.MaxValue;
            Assert.AreEqual(decimal.MaxValue.ToDynamic().toFloat(), JsonConvert.SerializeObject(value));

            value = decimal.MinValue;
            Assert.AreEqual(decimal.MinValue.ToDynamic().toFloat(), JsonConvert.SerializeObject(value));

            value = decimal.MinusOne;
            Assert.AreEqual(decimal.MinusOne.ToDynamic().toFloat(), JsonConvert.SerializeObject(value));

            value = decimal.One;
            Assert.AreEqual(decimal.One.ToDynamic().toFloat(), JsonConvert.SerializeObject(value));

            value = decimal.Zero;
            Assert.AreEqual(decimal.Zero.ToDynamic().toFloat(), JsonConvert.SerializeObject(value));
        }

        [Test]
        public static void DateTimeWorks()
        {
            DateTime dt = new DateTime(2010, 6, 10, 12, 0, 0, 0);
            var s = JsonConvert.SerializeObject(dt);

            Assert.AreEqual("\"" + dt.ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'Z'") + "\"", s, "Result: " + s);
        }

        [Test]
        public static void ArrayWorks()
        {
            int[] intArr = new[] { 1, 2, 3 };
            Assert.AreEqual("[1,2,3]", JsonConvert.SerializeObject(intArr));

            long[] longArr = new[] { 1L, 2, 3L };
            Assert.AreEqual("[1,2,3]", JsonConvert.SerializeObject(longArr));

            E1[] enumArr = new[] { E1.Item1, E1.Item2, E1.Item3 };
            Assert.AreEqual("[\"Item1\",\"Item2\",\"Item3\"]", JsonConvert.SerializeObject(enumArr));
        }

        [Test]
        public static void EnumWorks()
        {
            Assert.AreEqual("\"Item1\"", JsonConvert.SerializeObject(E1.Item1));
        }

        [Test]
        public static void IListWorks()
        {
            var list = new List<E1> { E1.Item1, E1.Item2, E1.Item3 };
            Assert.AreEqual("[\"Item1\",\"Item2\",\"Item3\"]", JsonConvert.SerializeObject(list));
        }

        [Test]
        public static void IDictionaryWorks()
        {
            var dict = new Dictionary<string, E1>
            {
                ["i1"] = E1.Item1,
                ["i2"] = E1.Item2,
                ["i3"] = E1.Item3
            };

            Assert.AreEqual("{\"i1\":\"Item1\",\"i2\":\"Item2\",\"i3\":\"Item3\"}", JsonConvert.SerializeObject(dict));
        }

        [Test]
        public static void TypeWithFieldWorks()
        {
            var c = new ClassWithFields();
            dynamic raw = null;
            //@ raw = Newtonsoft.Json.JsonConvert.SerializeObject(c, 0, {}, true);

            Assert.AreEqual(System.Convert.ToBase64String(c.byteArrayField), raw.byteArrayField, "#1");
            Assert.AreEqual(c.guidField.ToString(), raw.guidField, "#2");
            Assert.AreEqual(typeof(SerializationTests).FullName, raw.typeField, "#3");
            Assert.AreEqual("a", raw.charField, "#4");
            Assert.AreEqual(0, raw.longField, "#5");
            Assert.AreEqual(0, raw.ulongField, "#6");
            Assert.AreEqual(0, raw.decimalField, "#7");
            Assert.NotNull(raw.dateField, "#8");

            dynamic rawDateField = null;
            //@ rawDateField = System.DateTime.format(c.dateField, "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'Z'");
            Assert.AreEqual(rawDateField, raw.dateField, "#9 " + raw.dateField);
            Assert.AreEqual("Item1", raw.enumField, "#10");
            Assert.AreEqual(new int[] { 1, 2, 3 }, raw.arrayField, "#11");
            Assert.AreEqual(new string[] { "Item1", "Item2", "Item3" }, raw.listField, "#12");
            Assert.AreDeepEqual(Script.ToPlainObject(new { i1 = "Item1", i2 = "Item2", i3 = "Item3" }), raw.dictField, "#12");
        }

        [Test]
        public static void ComplexPropertiesWorks()
        {
            var c = new Class1();

            c.Sub1 = new SubClass1
            {
                Owner = c,
                List1 = new List<E1>
                {
                    E1.Item1,
                    E1.Item2,
                    E1.Item3
                }
            };

            c.Sub2 = new SubClass2
            {
                Owner = c,
                List1 = new List<char>
                {
                    'a',
                    'b',
                    'c'
                }
            };

            string json = JsonConvert.SerializeObject(c);
            Assert.AreEqual("{\"Sub1\":{\"List1\":[\"Item1\",\"Item2\",\"Item3\"]},\"Sub2\":{\"List1\":[\"a\",\"b\",\"c\"]}}", json);
        }

        [Test]
        public static void CamelCaseSettingWorks()
        {
            var c = new Class2();
            var json = JsonConvert.SerializeObject(c, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
            Assert.AreEqual("{\"intProp\":0}", json);

            json = JsonConvert.SerializeObject(c);
            Assert.AreEqual("{\"IntProp\":0}", json);
        }

        [Test]
        public static void IgnoreNullValueWorks()
        {
            var c = new Class3();
            var json = JsonConvert.SerializeObject(c, new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore });
            Assert.AreEqual("{}", json);

            json = JsonConvert.SerializeObject(c);
            Assert.AreEqual("{\"StringProp\":null}", json);
        }

        [Test]
        public static void TypeNameHandlingWorks()
        {
            var c = new Class3();

            var json = JsonConvert.SerializeObject(c, new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.Objects });

            Assert.AreEqual("{\"$type\":\"Newtonsoft.Json.Tests.SerializationTests+Class3, Newtonsoft.Json.Tests\",\"StringProp\":null}", json);
        }

        [Test]
        public static void AnonymousTypesWorks()
        {
            var v = new { Amount = 108, Message = "Hello" };
            var json = JsonConvert.SerializeObject(v);

            Assert.AreEqual("{\"Amount\":108,\"Message\":\"Hello\"}", json);
        }

        [Test]
        public static void FormattingWorks()
        {
            var v = new { Amount = 108, Message = "Hello" };
            var json = JsonConvert.SerializeObject(v, Formatting.Indented);

            Assert.AreEqual("{\n  \"Amount\": 108,\n  \"Message\": \"Hello\"\n}", json);
        }
    }
}