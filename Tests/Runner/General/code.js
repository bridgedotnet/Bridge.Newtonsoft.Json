/**
 * Newtonsoft.Json Test library
 * @version 1.0.0-beta3
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2017 Object.NET, Inc.
 * @compiler Bridge.NET 16.0.0-beta3
 */
Bridge.assembly("Newtonsoft.Json.Tests", function ($asm, globals) {
    "use strict";

    Bridge.define("Newtonsoft.Json.Tests.Case2", {
        statics: {
            methods: {
                TestMetadata: function () {
                    Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, $asm.$.Newtonsoft.Json.Tests.Case2.f1);

                    Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, $asm.$.Newtonsoft.Json.Tests.Case2.f2);

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(new Newtonsoft.Json.Tests.Case2.Class3());
                    Bridge.Test.NUnit.Assert.AreEqual("{\"Prop1\":0}", json);
                }
            }
        }
    });

    Bridge.ns("Newtonsoft.Json.Tests.Case2", $asm.$);

    Bridge.apply($asm.$.Newtonsoft.Json.Tests.Case2, {
        f1: function () {
            var o = Newtonsoft.Json.JsonConvert.SerializeObject(new Newtonsoft.Json.Tests.Case2.Class2());
        },
        f2: function () {
            var o = Newtonsoft.Json.JsonConvert.SerializeObject(new Newtonsoft.Json.Tests.Case2.Class1());
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Case2.Class1", {
        props: {
            Prop1: 0
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Case2.I1", {
        $kind: "interface"
    });

    Bridge.define("Newtonsoft.Json.Tests.DeserializationTests", {
        statics: {
            methods: {
                ByteArrayWorks: function () {
                    var arr = System.Array.init([1, 2, 3], System.Byte);
                    Bridge.Test.NUnit.Assert.AreEqual(arr, Newtonsoft.Json.JsonConvert.DeserializeObject(System.String.concat("\"", System.Convert.toBase64String(arr, null, null, null), "\""), System.Array.type(System.Byte)));
                },
                GuidWorks: function () {
                    var guid = System.Guid.newGuid();
                    Bridge.Test.NUnit.Assert.AreEqual(guid.toByteArray(), Newtonsoft.Json.JsonConvert.DeserializeObject("\"" + guid + "\"", System.Guid).toByteArray());
                },
                TypeWorks: function () {
                    Bridge.Test.NUnit.Assert.AreEqual(System.Collections.Generic.List$1(System.String), Newtonsoft.Json.JsonConvert.DeserializeObject(System.String.concat("\"", Bridge.Reflection.getTypeFullName(System.Collections.Generic.List$1(System.String)), "\""), Function));
                },
                CharWorks: function () {
                    Bridge.Test.NUnit.Assert.AreEqual(97, Newtonsoft.Json.JsonConvert.DeserializeObject("\"a\"", System.Char));
                },
                Int64Works: function () {
                    var value = System.Int64(2147483647);
                    var intValue = 2147483647;
                    Bridge.Test.NUnit.Assert.True(value.equals(Newtonsoft.Json.JsonConvert.DeserializeObject(intValue.toString(), System.Int64)));

                    value = System.Int64.MinValue;
                    Bridge.Test.NUnit.Assert.True(value.equals(Newtonsoft.Json.JsonConvert.DeserializeObject(System.Int64.MinValue.toString(), System.Int64)));
                },
                UInt64Works: function () {
                    var value = System.UInt64(2147483647);
                    var intValue = 2147483647;
                    Bridge.Test.NUnit.Assert.True(value.equals(Newtonsoft.Json.JsonConvert.DeserializeObject(intValue.toString(), System.UInt64)));

                    value = System.UInt64.MinValue;
                    Bridge.Test.NUnit.Assert.True(value.equals(Newtonsoft.Json.JsonConvert.DeserializeObject(System.UInt64.MinValue.toString(), System.UInt64)));
                },
                DecimalWorks: function () {
                    Bridge.Test.NUnit.Assert.True(System.Decimal.MinusOne.equalsT(Newtonsoft.Json.JsonConvert.DeserializeObject("-1", System.Decimal)));
                    Bridge.Test.NUnit.Assert.True(System.Decimal.One.equalsT(Newtonsoft.Json.JsonConvert.DeserializeObject("1", System.Decimal)));
                    Bridge.Test.NUnit.Assert.True(System.Decimal.Zero.equalsT(Newtonsoft.Json.JsonConvert.DeserializeObject("0", System.Decimal)));
                },
                DateTimeWorks: function () {
                    var dt = new Date(2010, 6 - 1, 10, 12, 0, 0, 0);
                    var jsonDt = Newtonsoft.Json.JsonConvert.DeserializeObject("\"2010-06-10T09:00:00.000\"", System.DateTime);
                    Bridge.Test.NUnit.Assert.AreEqual(dt.getFullYear(), jsonDt.getFullYear());
                    Bridge.Test.NUnit.Assert.AreEqual((dt.getMonth() + 1), (jsonDt.getMonth() + 1));
                    Bridge.Test.NUnit.Assert.AreEqual(dt.getDate(), jsonDt.getDate());
                },
                ArrayWorks: function () {
                    var intArr = System.Array.init([1, 2, 3], System.Int32);
                    Bridge.Test.NUnit.Assert.AreEqual(intArr, Newtonsoft.Json.JsonConvert.DeserializeObject("[1,2,3]", System.Array.type(System.Int32)));

                    var longArr = System.Array.init([System.Int64(1), System.Int64(2), System.Int64(3)], System.Int64);
                    var jsonLongArr = Newtonsoft.Json.JsonConvert.DeserializeObject("[1,2,3]", System.Array.type(System.Int64));
                    Bridge.Test.NUnit.Assert.AreEqual(longArr.length, jsonLongArr.length);
                    Bridge.Test.NUnit.Assert.True(longArr[System.Array.index(0, longArr)].equals(jsonLongArr[System.Array.index(0, jsonLongArr)]));
                    Bridge.Test.NUnit.Assert.True(longArr[System.Array.index(1, longArr)].equals(jsonLongArr[System.Array.index(1, jsonLongArr)]));
                    Bridge.Test.NUnit.Assert.True(longArr[System.Array.index(2, longArr)].equals(jsonLongArr[System.Array.index(2, jsonLongArr)]));

                    var enumArr = System.Array.init([Newtonsoft.Json.Tests.DeserializationTests.E1.Item1, Newtonsoft.Json.Tests.DeserializationTests.E1.Item2, Newtonsoft.Json.Tests.DeserializationTests.E1.Item3], Newtonsoft.Json.Tests.DeserializationTests.E1);
                    Bridge.Test.NUnit.Assert.AreEqual(enumArr, Newtonsoft.Json.JsonConvert.DeserializeObject("[\"Item1\",\"Item2\",\"Item3\"]", System.Array.type(Newtonsoft.Json.Tests.DeserializationTests.E1)));
                },
                ComplexArrayWorks: function () {
                    var c1 = Newtonsoft.Json.Tests.DeserializationTests.CreateComplex(Newtonsoft.Json.Tests.DeserializationTests.E1.Item1, Newtonsoft.Json.Tests.DeserializationTests.E1.Item2, Newtonsoft.Json.Tests.DeserializationTests.E1.Item3, 97, 98, 99);
                    var c2 = Newtonsoft.Json.Tests.DeserializationTests.CreateComplex(Newtonsoft.Json.Tests.DeserializationTests.E1.Item3, Newtonsoft.Json.Tests.DeserializationTests.E1.Item1, Newtonsoft.Json.Tests.DeserializationTests.E1.Item2, 99, 97, 98);

                    var a = System.Array.init([c1, c2], Newtonsoft.Json.Tests.DeserializationTests.Class1);

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(a);
                    var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject(json, System.Array.type(Newtonsoft.Json.Tests.DeserializationTests.Class1));

                    Bridge.Test.NUnit.Assert.NotNull(deserialized, "#1");
                    Bridge.Test.NUnit.Assert.AreEqual("Newtonsoft.Json.Tests.DeserializationTests+Class1[]", Bridge.Reflection.getTypeFullName(Bridge.getType(deserialized)), "#2");
                    Bridge.Test.NUnit.Assert.AreEqual(deserialized.length, deserialized.length, "#3");
                    Bridge.Test.NUnit.Assert.NotNull(deserialized[System.Array.index(0, deserialized)], "#4");
                    Bridge.Test.NUnit.Assert.NotNull(deserialized[System.Array.index(1, deserialized)], "#5");

                    var dc1 = deserialized[System.Array.index(0, deserialized)];
                    Newtonsoft.Json.Tests.DeserializationTests.AssertComplex(dc1, Newtonsoft.Json.Tests.DeserializationTests.E1.Item1, Newtonsoft.Json.Tests.DeserializationTests.E1.Item2, Newtonsoft.Json.Tests.DeserializationTests.E1.Item3, 97, 98, 99);

                    var dc2 = deserialized[System.Array.index(1, deserialized)];
                    Newtonsoft.Json.Tests.DeserializationTests.AssertComplex(dc2, Newtonsoft.Json.Tests.DeserializationTests.E1.Item3, Newtonsoft.Json.Tests.DeserializationTests.E1.Item1, Newtonsoft.Json.Tests.DeserializationTests.E1.Item2, 99, 97, 98);
                },
                EnumWorks: function () {
                    Bridge.Test.NUnit.Assert.AreEqual(Newtonsoft.Json.Tests.DeserializationTests.E1.Item1, Newtonsoft.Json.JsonConvert.DeserializeObject("\"Item1\"", Newtonsoft.Json.Tests.DeserializationTests.E1));
                },
                IListWorks: function () {
                    var list = $asm.$.Newtonsoft.Json.Tests.DeserializationTests.f1(new (System.Collections.Generic.List$1(Newtonsoft.Json.Tests.DeserializationTests.E1))());
                    var jsonList = Newtonsoft.Json.JsonConvert.DeserializeObject("[\"Item1\",\"Item2\",\"Item3\"]", System.Collections.Generic.List$1(Newtonsoft.Json.Tests.DeserializationTests.E1));
                    Bridge.Test.NUnit.Assert.AreEqual(list.Count, jsonList.Count);
                    Bridge.Test.NUnit.Assert.True(list.getItem(0) === jsonList.getItem(0));
                    Bridge.Test.NUnit.Assert.True(list.getItem(1) === jsonList.getItem(1));
                    Bridge.Test.NUnit.Assert.True(list.getItem(2) === jsonList.getItem(2));
                },
                IDictionaryWorks: function () {
                    var dict = $asm.$.Newtonsoft.Json.Tests.DeserializationTests.f2(new (System.Collections.Generic.Dictionary$2(System.String,Newtonsoft.Json.Tests.DeserializationTests.E1))());

                    var jsonDict = Newtonsoft.Json.JsonConvert.DeserializeObject("{\"i1\":\"Item1\",\"i2\":\"Item2\",\"i3\":\"Item3\"}", System.Collections.Generic.Dictionary$2(System.String,Newtonsoft.Json.Tests.DeserializationTests.E1));

                    Bridge.Test.NUnit.Assert.AreEqual(dict.count, jsonDict.count);
                    Bridge.Test.NUnit.Assert.AreEqual(dict.get("i1"), jsonDict.get("i1"));
                    Bridge.Test.NUnit.Assert.AreEqual(dict.get("i2"), jsonDict.get("i2"));
                    Bridge.Test.NUnit.Assert.AreEqual(dict.get("i3"), jsonDict.get("i3"));
                },
                TypeWithFieldWorks: function () {
                    var c = new Newtonsoft.Json.Tests.DeserializationTests.ClassWithFields();
                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(c);
                    var jsonC = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.DeserializationTests.ClassWithFieldsAndNoInit);

                    Bridge.Test.NUnit.Assert.AreEqual(c.byteArrayField, jsonC.byteArrayField, "#1");
                    Bridge.Test.NUnit.Assert.AreEqual(c.guidField.toByteArray(), jsonC.guidField.toByteArray(), "#2");
                    Bridge.Test.NUnit.Assert.AreEqual(c.typeField, jsonC.typeField, "#3");
                    Bridge.Test.NUnit.Assert.AreEqual(c.charField, jsonC.charField, "#4");
                    Bridge.Test.NUnit.Assert.AreEqual(c.longField.toString(), jsonC.longField.toString(), "#5");
                    Bridge.Test.NUnit.Assert.AreEqual(c.ulongField.toString(), jsonC.ulongField.toString(), "#6");
                    Bridge.Test.NUnit.Assert.AreEqual(Bridge.Int.format(c.decimalField, "G"), Bridge.Int.format(jsonC.decimalField, "G"), "#7");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.format(c.dateField), System.DateTime.format(jsonC.dateField), "#8");
                    Bridge.Test.NUnit.Assert.AreEqual(c.enumField, jsonC.enumField, "#9");
                    Bridge.Test.NUnit.Assert.AreEqual(c.arrayField, jsonC.arrayField, "#10");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Array.getCount(c.listField, Newtonsoft.Json.Tests.DeserializationTests.E1), System.Array.getCount(jsonC.listField, Newtonsoft.Json.Tests.DeserializationTests.E1), "#11");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Array.getItem(c.listField, 0, Newtonsoft.Json.Tests.DeserializationTests.E1), System.Array.getItem(jsonC.listField, 0, Newtonsoft.Json.Tests.DeserializationTests.E1), "#12");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Array.getItem(c.listField, 1, Newtonsoft.Json.Tests.DeserializationTests.E1), System.Array.getItem(jsonC.listField, 1, Newtonsoft.Json.Tests.DeserializationTests.E1), "#13");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Array.getItem(c.listField, 2, Newtonsoft.Json.Tests.DeserializationTests.E1), System.Array.getItem(jsonC.listField, 2, Newtonsoft.Json.Tests.DeserializationTests.E1), "#14");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Array.getCount(c.dictField, System.Collections.Generic.KeyValuePair$2(System.String,Newtonsoft.Json.Tests.DeserializationTests.E1)), System.Array.getCount(jsonC.dictField, System.Collections.Generic.KeyValuePair$2(System.String,Newtonsoft.Json.Tests.DeserializationTests.E1)), "#15");
                    Bridge.Test.NUnit.Assert.AreEqual(c.dictField.System$Collections$Generic$IDictionary$2$System$String$Newtonsoft$Json$Tests$DeserializationTests$E1$getItem("i1"), jsonC.dictField.System$Collections$Generic$IDictionary$2$System$String$Newtonsoft$Json$Tests$DeserializationTests$E1$getItem("i1"), "#16");
                    Bridge.Test.NUnit.Assert.AreEqual(c.dictField.System$Collections$Generic$IDictionary$2$System$String$Newtonsoft$Json$Tests$DeserializationTests$E1$getItem("i2"), jsonC.dictField.System$Collections$Generic$IDictionary$2$System$String$Newtonsoft$Json$Tests$DeserializationTests$E1$getItem("i2"), "#17");
                    Bridge.Test.NUnit.Assert.AreEqual(c.dictField.System$Collections$Generic$IDictionary$2$System$String$Newtonsoft$Json$Tests$DeserializationTests$E1$getItem("i3"), jsonC.dictField.System$Collections$Generic$IDictionary$2$System$String$Newtonsoft$Json$Tests$DeserializationTests$E1$getItem("i3"), "#18");
                },
                ComplexPropertiesWorks: function () {
                    var c = Newtonsoft.Json.Tests.DeserializationTests.CreateComplex(Newtonsoft.Json.Tests.DeserializationTests.E1.Item1, Newtonsoft.Json.Tests.DeserializationTests.E1.Item2, Newtonsoft.Json.Tests.DeserializationTests.E1.Item3, 97, 98, 99);

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(c);
                    var jsonC = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.DeserializationTests.Class1);

                    Newtonsoft.Json.Tests.DeserializationTests.AssertComplex(jsonC, Newtonsoft.Json.Tests.DeserializationTests.E1.Item1, Newtonsoft.Json.Tests.DeserializationTests.E1.Item2, Newtonsoft.Json.Tests.DeserializationTests.E1.Item3, 97, 98, 99);
                },
                CreateComplex: function (item1, item2, item3, l1, l2, l3) {
                    var $t;
                    var c = new Newtonsoft.Json.Tests.DeserializationTests.Class1();

                    c.Sub1 = ($t = new Newtonsoft.Json.Tests.DeserializationTests.SubClass1(), $t.Owner = c, $t.List1 = function (_o5) {
                            _o5.add(item1);
                            _o5.add(item2);
                            _o5.add(item3);
                            return _o5;
                        }(new (System.Collections.Generic.List$1(Newtonsoft.Json.Tests.DeserializationTests.E1))()), $t);

                    c.Sub2 = ($t = new Newtonsoft.Json.Tests.DeserializationTests.SubClass2(), $t.Owner = c, $t.List1 = function (_o6) {
                            _o6.add(l1);
                            _o6.add(l2);
                            _o6.add(l3);
                            return _o6;
                        }(new (System.Collections.Generic.List$1(System.Char))()), $t);

                    return c;
                },
                AssertComplex: function (c, item1, item2, item3, l1, l2, l3) {
                    Bridge.Test.NUnit.Assert.NotNull(c, "ac #1");
                    Bridge.Test.NUnit.Assert.NotNull(c.Sub1, "ac #2");

                    //Cycle references are ignored during serialization therefore deserialization will not restore it
                    //Assert.NotNull(c.Sub1.Owner, "ac #3");
                    //Assert.True(c.Sub1.Owner == c, "ac #4");

                    Bridge.Test.NUnit.Assert.NotNull(c.Sub2, "ac #5");

                    //Cycle references are ignored during serialization therefore deserialization will not restore it
                    //Assert.NotNull(c.Sub2.Owner, "ac #6");
                    //Assert.True(c.Sub2.Owner == c, "ac #7");

                    Bridge.Test.NUnit.Assert.True(Bridge.is(c.Sub1, Newtonsoft.Json.Tests.DeserializationTests.SubClass1), "ac #8");
                    Bridge.Test.NUnit.Assert.True(Bridge.is(c.Sub2, Newtonsoft.Json.Tests.DeserializationTests.SubClass2), "ac #9");
                    Bridge.Test.NUnit.Assert.True(Bridge.is(c.Sub1.List1, System.Collections.Generic.List$1(Newtonsoft.Json.Tests.DeserializationTests.E1)), "ac #10");
                    Bridge.Test.NUnit.Assert.True(Bridge.is(c.Sub2.List1, System.Collections.Generic.List$1(System.Char)), "ac #11");
                    Bridge.Test.NUnit.Assert.AreEqual(3, c.Sub1.List1.Count, "ac #12");
                    Bridge.Test.NUnit.Assert.AreEqual(3, c.Sub2.List1.Count, "ac #13");

                    Bridge.Test.NUnit.Assert.AreEqual(item1, c.Sub1.List1.getItem(0), "ac #14");
                    Bridge.Test.NUnit.Assert.AreEqual(item2, c.Sub1.List1.getItem(1), "ac #15");
                    Bridge.Test.NUnit.Assert.AreEqual(item3, c.Sub1.List1.getItem(2), "ac #16");

                    Bridge.Test.NUnit.Assert.AreEqual(l1, c.Sub2.List1.getItem(0), "ac #17");
                    Bridge.Test.NUnit.Assert.AreEqual(l2, c.Sub2.List1.getItem(1), "ac #18");
                    Bridge.Test.NUnit.Assert.AreEqual(l3, c.Sub2.List1.getItem(2), "ac #19");
                },
                CamelCaseSettingWorks: function () {
                    var $t;
                    var json = "{\"intProp\":10}";
                    var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.DeserializationTests.Class2, ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.ContractResolver = new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver(), $t));
                    Bridge.Test.NUnit.Assert.AreEqual(10, deserialized.IntProp);

                    json = "{\"IntProp\":10}";
                    deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.DeserializationTests.Class2);
                    Bridge.Test.NUnit.Assert.AreEqual(10, deserialized.IntProp);
                },
                IgnoreNullValueWorks: function () {
                    var $t;
                    var json = "{}";
                    var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.DeserializationTests.Class3);
                    Bridge.Test.NUnit.Assert.Null(deserialized.StringProp);

                    json = "{\"StringProp\":null}";
                    deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.DeserializationTests.Class3);
                    Bridge.Test.NUnit.Assert.Null(deserialized.StringProp);

                    var jsonSettings = ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore, $t);

                    json = "{}";
                    deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.DeserializationTests.Class3, jsonSettings);
                    Bridge.Test.NUnit.Assert.Null(deserialized.StringProp);

                    json = "{\"StringProp\":null}";
                    deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.DeserializationTests.Class3, jsonSettings);
                    Bridge.Test.NUnit.Assert.Null(deserialized.StringProp);
                },
                AnonymousTypesWorks: function () {
                    var v = new $asm.$AnonymousType$1(108, "Hello");
                    var json = "{\"Amount\":108,\"Message\":\"Hello\"}";

                    var item = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Bridge.getType(v));
                    Bridge.Test.NUnit.Assert.AreEqual(108, item.Amount);
                    Bridge.Test.NUnit.Assert.AreEqual("Hello", item.Message);

                    var dynItem = Newtonsoft.Json.JsonConvert.DeserializeObject(json, System.Object);
                    Bridge.Test.NUnit.Assert.AreEqual(108, Bridge.cast(dynItem.Amount, System.Int32));
                    Bridge.Test.NUnit.Assert.AreEqual("Hello", Bridge.cast(dynItem.Message, System.String));
                },
                TypeNameHandlingWorks: function () {
                    var $t;
                    var persons = System.Array.init([new Newtonsoft.Json.Tests.DeserializationTests.Person(System.Guid.parse("{CEADF3CA-0EB4-43F3-A813-1266E16498AC}"), "John", "New-York", "Fifth Avenue"), new Newtonsoft.Json.Tests.DeserializationTests.Person(System.Guid.parse("{64F09E69-39FE-4D9C-BDB3-108CA2CCFAD9}"), "Mary", "London", "St Mary Axe")], Newtonsoft.Json.Tests.DeserializationTests.Person);

                    var serialized = Newtonsoft.Json.JsonConvert.SerializeObject(persons, ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects, $t));
                    var entities = Newtonsoft.Json.JsonConvert.DeserializeObject(serialized, System.Array.type(Newtonsoft.Json.Tests.DeserializationTests.INamedEntity), ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects, $t));

                    Bridge.Test.NUnit.Assert.AreEqual(persons.length, entities.length);

                    Bridge.Test.NUnit.Assert.True(Bridge.is(entities[System.Array.index(0, entities)], Newtonsoft.Json.Tests.DeserializationTests.Person));
                    Bridge.Test.NUnit.Assert.True(Bridge.is(entities[System.Array.index(1, entities)], Newtonsoft.Json.Tests.DeserializationTests.Person));

                    var entity = Bridge.cast(entities[System.Array.index(0, entities)], Newtonsoft.Json.Tests.DeserializationTests.Person);
                    Bridge.Test.NUnit.Assert.AreEqual(persons[System.Array.index(0, persons)].Name, entities[System.Array.index(0, entities)].Newtonsoft$Json$Tests$DeserializationTests$INamedEntity$Name);
                    Bridge.Test.NUnit.Assert.True(System.Guid.op_Equality(persons[System.Array.index(0, persons)].Id, entity.Id));
                    Bridge.Test.NUnit.Assert.NotNull(entity.Address);
                    Bridge.Test.NUnit.Assert.True(Bridge.is(entity.Address, Newtonsoft.Json.Tests.DeserializationTests.Address));
                    Bridge.Test.NUnit.Assert.AreEqual(persons[System.Array.index(0, persons)].Address.City, entity.Address.City);
                    Bridge.Test.NUnit.Assert.AreEqual(persons[System.Array.index(0, persons)].Address.Street, entity.Address.Street);

                    entity = Bridge.cast(entities[System.Array.index(1, entities)], Newtonsoft.Json.Tests.DeserializationTests.Person);
                    Bridge.Test.NUnit.Assert.AreEqual(persons[System.Array.index(1, persons)].Name, entities[System.Array.index(1, entities)].Newtonsoft$Json$Tests$DeserializationTests$INamedEntity$Name);
                    Bridge.Test.NUnit.Assert.True(System.Guid.op_Equality(persons[System.Array.index(1, persons)].Id, entity.Id));
                    Bridge.Test.NUnit.Assert.NotNull(entity.Address);
                    Bridge.Test.NUnit.Assert.True(Bridge.is(entity.Address, Newtonsoft.Json.Tests.DeserializationTests.Address));
                    Bridge.Test.NUnit.Assert.AreEqual(persons[System.Array.index(1, persons)].Address.City, entity.Address.City);
                    Bridge.Test.NUnit.Assert.AreEqual(persons[System.Array.index(1, persons)].Address.Street, entity.Address.Street);
                },
                TestN504: function () {
                    var o = Newtonsoft.Json.JsonConvert.DeserializeObject("true", System.Boolean);
                    Bridge.Test.NUnit.Assert.AreEqual(true, o, "Bridge544 bool");
                },
                TestN504Related: function () {
                    var i = Newtonsoft.Json.JsonConvert.DeserializeObject("25", System.Int32);
                    Bridge.Test.NUnit.Assert.AreEqual(25, i, "Bridge544 int");

                    var dbl = Newtonsoft.Json.JsonConvert.DeserializeObject("26.1", System.Double);
                    Bridge.Test.NUnit.Assert.AreEqual(26.1, dbl, "Bridge544 double");

                    var d = Newtonsoft.Json.JsonConvert.DeserializeObject("27.2", System.Decimal);
                    Newtonsoft.Json.Tests.Utilities.DecimalHelper.AssertIsDecimalAndEqualTo$1(d, 27.2, "Bridge544 decimal");

                    var s = Newtonsoft.Json.JsonConvert.DeserializeObject("\"Some string\"", System.String);
                    Bridge.Test.NUnit.Assert.AreEqual("Some string", s, "Bridge544 string");
                }
            }
        }
    });

    Bridge.define("$AnonymousType$1", $asm, {
        $kind: "anonymous",
        ctors: {
            ctor: function (amount, message) {
                this.Amount = amount;
                this.Message = message;
            }
        },
        methods: {
            equals: function (o) {
                if (!Bridge.is(o, $asm.$AnonymousType$1)) {
                    return false;
                }
                return Bridge.equals(this.Amount, o.Amount) && Bridge.equals(this.Message, o.Message);
            },
            getHashCode: function () {
                var h = Bridge.addHash([7550196186, this.Amount, this.Message]);
                return h;
            },
            toJSON: function () {
                return {
                    Amount : this.Amount,
                    Message : this.Message
                };
            }
        },
        statics : {
            methods: {
                $metadata : function () { return {"m":[{"a":2,"n":"Amount","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_Amount","t":8,"rt":System.Int32,"fg":"Amount"},"fn":"Amount"},{"a":2,"n":"Message","t":16,"rt":System.String,"g":{"a":2,"n":"get_Message","t":8,"rt":System.String,"fg":"Message"},"fn":"Message"}]}; }
            }
        }
    });

    Bridge.ns("Newtonsoft.Json.Tests.DeserializationTests", $asm.$);

    Bridge.apply($asm.$.Newtonsoft.Json.Tests.DeserializationTests, {
        f1: function (_o3) {
            _o3.add(Newtonsoft.Json.Tests.DeserializationTests.E1.Item1);
            _o3.add(Newtonsoft.Json.Tests.DeserializationTests.E1.Item2);
            _o3.add(Newtonsoft.Json.Tests.DeserializationTests.E1.Item3);
            return _o3;
        },
        f2: function (_o4) {
            _o4.set("i1", Newtonsoft.Json.Tests.DeserializationTests.E1.Item1);
            _o4.set("i2", Newtonsoft.Json.Tests.DeserializationTests.E1.Item2);
            _o4.set("i3", Newtonsoft.Json.Tests.DeserializationTests.E1.Item3);
            return _o4;
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.DeserializationTests.Address", {
        props: {
            City: null,
            Street: null
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.DeserializationTests.Class1", {
        props: {
            Sub1: null,
            Sub2: null
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.DeserializationTests.Class2", {
        props: {
            IntProp: 0
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.DeserializationTests.Class3", {
        props: {
            StringProp: null
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.DeserializationTests.ClassWithFields", {
        fields: {
            byteArrayField: null,
            guidField: null,
            typeField: null,
            charField: 0,
            longField: System.Int64(0),
            ulongField: System.UInt64(0),
            decimalField: System.Decimal(0.0),
            dateField: null,
            enumField: 0,
            arrayField: null,
            listField: null,
            dictField: null
        },
        ctors: {
            init: function () {
                this.guidField = new System.Guid();
                this.dateField = System.DateTime.getDefaultValue();
                this.byteArrayField = System.Array.init([1, 2, 3], System.Byte);
                this.guidField = System.Guid.newGuid();
                this.typeField = Newtonsoft.Json.Tests.SerializationTests;
                this.charField = 97;
                this.dateField = new Date(2010, 6 - 1, 10, 12, 0, 0, 0);
                this.arrayField = System.Array.init([1, 2, 3], System.Int32);
                this.listField = $asm.$.Newtonsoft.Json.Tests.DeserializationTests.ClassWithFields.f1(new (System.Collections.Generic.List$1(Newtonsoft.Json.Tests.DeserializationTests.E1))());
                this.dictField = $asm.$.Newtonsoft.Json.Tests.DeserializationTests.ClassWithFields.f2(new (System.Collections.Generic.Dictionary$2(System.String,Newtonsoft.Json.Tests.DeserializationTests.E1))());
            }
        }
    });

    Bridge.ns("Newtonsoft.Json.Tests.DeserializationTests.ClassWithFields", $asm.$);

    Bridge.apply($asm.$.Newtonsoft.Json.Tests.DeserializationTests.ClassWithFields, {
        f1: function (_o1) {
            _o1.add(Newtonsoft.Json.Tests.DeserializationTests.E1.Item1);
            _o1.add(Newtonsoft.Json.Tests.DeserializationTests.E1.Item2);
            _o1.add(Newtonsoft.Json.Tests.DeserializationTests.E1.Item3);
            return _o1;
        },
        f2: function (_o2) {
            _o2.set("i1", Newtonsoft.Json.Tests.DeserializationTests.E1.Item1);
            _o2.set("i2", Newtonsoft.Json.Tests.DeserializationTests.E1.Item2);
            _o2.set("i3", Newtonsoft.Json.Tests.DeserializationTests.E1.Item3);
            return _o2;
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.DeserializationTests.ClassWithFieldsAndNoInit", {
        fields: {
            byteArrayField: null,
            guidField: null,
            typeField: null,
            charField: 0,
            longField: System.Int64(0),
            ulongField: System.UInt64(0),
            decimalField: System.Decimal(0.0),
            dateField: null,
            enumField: 0,
            arrayField: null,
            listField: null,
            dictField: null
        },
        ctors: {
            init: function () {
                this.guidField = new System.Guid();
                this.dateField = System.DateTime.getDefaultValue();
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.DeserializationTests.E1", {
        $kind: "enum",
        statics: {
            fields: {
                Item1: 0,
                Item2: 1,
                Item3: 2
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.DeserializationTests.INamedEntity", {
        $kind: "interface"
    });

    Bridge.define("Newtonsoft.Json.Tests.DeserializationTests.SubClass1", {
        props: {
            Owner: null,
            List1: null
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.DeserializationTests.SubClass2", {
        props: {
            Owner: null,
            List1: null
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Bridge1134", {
        statics: {
            methods: {
                TestJsonArrayParse: function () {
                    var o = Newtonsoft.Json.JsonConvert.DeserializeObject("[1]", System.Array.type(System.Int32));
                    Bridge.Test.NUnit.Assert.True(o != null);
                    Bridge.Test.NUnit.Assert.AreEqual(1, o.length);
                    Bridge.Test.NUnit.Assert.AreEqual(1, o[System.Array.index(0, o)]);
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Bridge1438", {
        statics: {
            methods: {
                TestJSONParse: function () {
                    var $t;
                    var serialized = Newtonsoft.Json.JsonConvert.SerializeObject(($t = new Newtonsoft.Json.Tests.Issues.Bridge1438.Foo(), $t.Value = 100, $t));

                    Bridge.Test.NUnit.Assert.NotNull(serialized, " serialized should not be null");

                    var result = Newtonsoft.Json.JsonConvert.DeserializeObject(serialized, Newtonsoft.Json.Tests.Issues.Bridge1438.Foo);

                    Bridge.Test.NUnit.Assert.NotNull(result, " result should not be null");
                    Bridge.Test.NUnit.Assert.AreEqual("Newtonsoft.Json.Tests.Issues.Bridge1438+Foo", Bridge.Reflection.getTypeFullName(Bridge.getType(result)), "Check result type name");
                    Bridge.Test.NUnit.Assert.AreEqual(100, result.Value, "result.Value = 100");
                },
                TestJSONParseAsArray: function () {
                    var $t;
                    var serialized = Newtonsoft.Json.JsonConvert.SerializeObject(System.Array.init([($t = new Newtonsoft.Json.Tests.Issues.Bridge1438.Foo(), $t.Value = 101, $t)], Newtonsoft.Json.Tests.Issues.Bridge1438.Foo));

                    Bridge.Test.NUnit.Assert.NotNull(serialized, " serialized should not be null");

                    var result = Newtonsoft.Json.JsonConvert.DeserializeObject(serialized, System.Array.type(Newtonsoft.Json.Tests.Issues.Bridge1438.Foo));

                    Bridge.Test.NUnit.Assert.NotNull(result, " result should not be null");
                    Bridge.Test.NUnit.Assert.AreEqual("Newtonsoft.Json.Tests.Issues.Bridge1438+Foo[]", Bridge.Reflection.getTypeFullName(Bridge.getType(result)), "Check result type name");
                    Bridge.Test.NUnit.Assert.AreEqual(1, result.length, "Check result length");
                    Bridge.Test.NUnit.Assert.NotNull(result[System.Array.index(0, result)], " result[0] should not be null");
                    Bridge.Test.NUnit.Assert.AreEqual("Newtonsoft.Json.Tests.Issues.Bridge1438+Foo", Bridge.Reflection.getTypeFullName(Bridge.getType(result[System.Array.index(0, result)])), "Check result[0] type name");
                    Bridge.Test.NUnit.Assert.AreEqual(101, result[System.Array.index(0, result)].Value, "result[0].Value = 101");
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Bridge1438.Foo", {
        props: {
            Value: 0
        },
        methods: {
            SomeMethod: function () {
                return System.String.concat("I'm ", Bridge.Reflection.getTypeFullName(Bridge.getType(this)), " and my value is ", this.Value);
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Bridge2641", {
        statics: {
            methods: {
                TestJsonCamelCaseForFields: function () {
                    var $t;
                    var c = ($t = new Newtonsoft.Json.Tests.Issues.Bridge2641.Class1(), $t.Field1 = 1, $t.field2 = 2, $t);
                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(c, ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.ContractResolver = new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver(), $t));
                    Bridge.Test.NUnit.Assert.AreEqual("{\"field1\":1,\"field2\":2}", json);
                    var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.Issues.Bridge2641.Class1, ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.ContractResolver = new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver(), $t));
                    Bridge.Test.NUnit.Assert.AreEqual(1, deserialized.Field1);
                    Bridge.Test.NUnit.Assert.AreEqual(2, deserialized.field2);

                    json = Newtonsoft.Json.JsonConvert.SerializeObject(c);
                    Bridge.Test.NUnit.Assert.AreEqual("{\"Field1\":1,\"field2\":2}", json);
                    deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.Issues.Bridge2641.Class1);
                    Bridge.Test.NUnit.Assert.AreEqual(1, deserialized.Field1);
                    Bridge.Test.NUnit.Assert.AreEqual(2, deserialized.field2);
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Bridge2641.Class1", {
        fields: {
            Field1: 0,
            field2: 0
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Bridge2679", {
        statics: {
            methods: {
                TestTypeNameHandling: function () {
                    var $t;
                    var obj1 = new Newtonsoft.Json.Tests.Issues.Bridge2679.Test1(1);
                    var obj2 = new (Newtonsoft.Json.Tests.Issues.Bridge2679.Test2$1(System.Int32))(2);

                    var json1 = Newtonsoft.Json.JsonConvert.SerializeObject(obj1, ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects, $t));
                    Bridge.Test.NUnit.Assert.AreEqual(System.String.concat("{\"$type\":\"", Bridge.Reflection.getTypeQName(Newtonsoft.Json.Tests.Issues.Bridge2679.Test1), "\",\"Value\":1}"), json1);

                    var json2 = Newtonsoft.Json.JsonConvert.SerializeObject(obj2, ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects, $t));
                    Bridge.Test.NUnit.Assert.AreEqual(System.String.concat("{\"$type\":\"", Bridge.Reflection.getTypeQName(Newtonsoft.Json.Tests.Issues.Bridge2679.Test2$1(System.Int32)), "\",\"Value\":2}"), json2);
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Bridge2679.Test1", {
        props: {
            Value: 0
        },
        ctors: {
            ctor: function (value) {
                this.$initialize();
                this.Value = value;
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Bridge2679.Test2$1", function (T) { return {
        props: {
            Value: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (value) {
                this.$initialize();
                this.Value = value;
            }
        }
    }; });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Bridge501", {
        statics: {
            methods: {
                TestUseCase: function () {
                    var list = $asm.$.Newtonsoft.Json.Tests.Issues.Bridge501.f1(new (System.Collections.Generic.List$1(System.Int32))());
                    var z = Newtonsoft.Json.JsonConvert.SerializeObject(list); // this is ok
                    Bridge.Test.NUnit.Assert.AreEqual("[7]", z, "List<int>");

                    var b = $asm.$.Newtonsoft.Json.Tests.Issues.Bridge501.f2(new Newtonsoft.Json.Tests.Issues.Bridge501B());
                    var y = Newtonsoft.Json.JsonConvert.SerializeObject(b); // wrong, missing items
                    Bridge.Test.NUnit.Assert.AreEqual("[1,2]", y, "Bridge501B");

                    var a = $asm.$.Newtonsoft.Json.Tests.Issues.Bridge501.f3(new Newtonsoft.Json.Tests.Issues.Bridge501A()); // sine items is defined as member, push fails
                    var x = Newtonsoft.Json.JsonConvert.SerializeObject(a);
                    Bridge.Test.NUnit.Assert.AreEqual("[7]", x, "Bridge501A");

                    var c = Newtonsoft.Json.JsonConvert.DeserializeObject(x, Newtonsoft.Json.Tests.Issues.Bridge501A);
                    Bridge.Test.NUnit.Assert.AreEqual("12", c.Items, "Bridge501A Parse c.Items");
                    Bridge.Test.NUnit.Assert.AreEqual(7, c.getItem(0), "Bridge501A Parse c[0]");
                }
            }
        }
    });

    Bridge.ns("Newtonsoft.Json.Tests.Issues.Bridge501", $asm.$);

    Bridge.apply($asm.$.Newtonsoft.Json.Tests.Issues.Bridge501, {
        f1: function (_o7) {
            _o7.add(7);
            return _o7;
        },
        f2: function (_o8) {
            _o8.add(1);
            _o8.add(2);
            return _o8;
        },
        f3: function (_o9) {
            _o9.add(7);
            return _o9;
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Bridge501A", {
        inherits: [System.Collections.Generic.List$1(System.Int32)],
        fields: {
            Items: null
        },
        ctors: {
            init: function () {
                this.Items = "12";
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Bridge501B", {
        inherits: [System.Collections.Generic.List$1(System.Int32)]
    });

    Bridge.define("Newtonsoft.Json.Tests.SerializationTests", {
        statics: {
            methods: {
                ByteArrayWorks: function () {
                    var arr = System.Array.init([1, 2, 3], System.Byte);
                    Bridge.Test.NUnit.Assert.AreEqual(System.String.concat("\"", System.Convert.toBase64String(arr, null, null, null), "\""), Newtonsoft.Json.JsonConvert.SerializeObject(arr));
                },
                GuidWorks: function () {
                    var guid = System.Guid.newGuid();
                    Bridge.Test.NUnit.Assert.AreEqual(System.String.concat("\"", guid.toString(), "\""), Newtonsoft.Json.JsonConvert.SerializeObject(guid));
                },
                TypeWorks: function () {
                    Bridge.Test.NUnit.Assert.AreEqual(System.String.concat("\"", Bridge.Reflection.getTypeFullName(System.Collections.Generic.List$1(System.String)), "\""), Newtonsoft.Json.JsonConvert.SerializeObject(System.Collections.Generic.List$1(System.String)));
                },
                CharWorks: function () {
                    var c = 97;
                    Bridge.Test.NUnit.Assert.AreEqual("\"a\"", Newtonsoft.Json.JsonConvert.SerializeObject(Bridge.box(c, System.Char, $box_.System.Char.toString, $box_.System.Char.getHashCode)));
                },
                Int64Works: function () {
                    var value = System.Int64.MaxValue;
                    Bridge.Test.NUnit.Assert.AreEqual(System.Int64.MaxValue.toNumber(), Newtonsoft.Json.JsonConvert.SerializeObject(value));

                    value = System.Int64.MinValue;
                    Bridge.Test.NUnit.Assert.AreEqual(System.Int64.MinValue.toNumber(), Newtonsoft.Json.JsonConvert.SerializeObject(value));
                },
                UInt64Works: function () {
                    var value = System.UInt64.MaxValue;
                    Bridge.Test.NUnit.Assert.AreEqual(System.UInt64.MaxValue.toNumber(), Newtonsoft.Json.JsonConvert.SerializeObject(value));

                    value = System.UInt64.MinValue;
                    Bridge.Test.NUnit.Assert.AreEqual(System.UInt64.MinValue.toNumber(), Newtonsoft.Json.JsonConvert.SerializeObject(value));
                },
                DecimalWorks: function () {
                    var value = System.Decimal.MaxValue;
                    Bridge.Test.NUnit.Assert.AreEqual(System.Decimal.MaxValue.toFloat(), Newtonsoft.Json.JsonConvert.SerializeObject(value));

                    value = System.Decimal.MinValue;
                    Bridge.Test.NUnit.Assert.AreEqual(System.Decimal.MinValue.toFloat(), Newtonsoft.Json.JsonConvert.SerializeObject(value));

                    value = System.Decimal.MinusOne;
                    Bridge.Test.NUnit.Assert.AreEqual(System.Decimal.MinusOne.toFloat(), Newtonsoft.Json.JsonConvert.SerializeObject(value));

                    value = System.Decimal.One;
                    Bridge.Test.NUnit.Assert.AreEqual(System.Decimal.One.toFloat(), Newtonsoft.Json.JsonConvert.SerializeObject(value));

                    value = System.Decimal.Zero;
                    Bridge.Test.NUnit.Assert.AreEqual(System.Decimal.Zero.toFloat(), Newtonsoft.Json.JsonConvert.SerializeObject(value));
                },
                DateTimeWorks: function () {
                    var dt = new Date(2010, 6 - 1, 10, 12, 0, 0, 0);
                    var s = Newtonsoft.Json.JsonConvert.SerializeObject(Bridge.box(dt, System.DateTime, $box_.System.DateTime.toString));

                    Bridge.Test.NUnit.Assert.AreEqual(JSON.stringify(dt), s, System.String.concat("Result: ", s));
                },
                ArrayWorks: function () {
                    var intArr = System.Array.init([1, 2, 3], System.Int32);
                    Bridge.Test.NUnit.Assert.AreEqual("[1,2,3]", Newtonsoft.Json.JsonConvert.SerializeObject(intArr));

                    var longArr = System.Array.init([System.Int64(1), System.Int64(2), System.Int64(3)], System.Int64);
                    Bridge.Test.NUnit.Assert.AreEqual("[1,2,3]", Newtonsoft.Json.JsonConvert.SerializeObject(longArr));

                    var enumArr = System.Array.init([Newtonsoft.Json.Tests.SerializationTests.E1.Item1, Newtonsoft.Json.Tests.SerializationTests.E1.Item2, Newtonsoft.Json.Tests.SerializationTests.E1.Item3], Newtonsoft.Json.Tests.SerializationTests.E1);
                    Bridge.Test.NUnit.Assert.AreEqual("[\"Item1\",\"Item2\",\"Item3\"]", Newtonsoft.Json.JsonConvert.SerializeObject(enumArr));
                },
                EnumWorks: function () {
                    Bridge.Test.NUnit.Assert.AreEqual("\"Item1\"", Newtonsoft.Json.JsonConvert.SerializeObject(Bridge.box(Newtonsoft.Json.Tests.SerializationTests.E1.Item1, Newtonsoft.Json.Tests.SerializationTests.E1, $box_.Newtonsoft.Json.Tests.SerializationTests.E1.toString)));
                },
                IListWorks: function () {
                    var list = $asm.$.Newtonsoft.Json.Tests.SerializationTests.f1(new (System.Collections.Generic.List$1(Newtonsoft.Json.Tests.SerializationTests.E1))());
                    Bridge.Test.NUnit.Assert.AreEqual("[\"Item1\",\"Item2\",\"Item3\"]", Newtonsoft.Json.JsonConvert.SerializeObject(list));
                },
                IDictionaryWorks: function () {
                    var dict = $asm.$.Newtonsoft.Json.Tests.SerializationTests.f2(new (System.Collections.Generic.Dictionary$2(System.String,Newtonsoft.Json.Tests.SerializationTests.E1))());

                    Bridge.Test.NUnit.Assert.AreEqual("{\"i1\":\"Item1\",\"i2\":\"Item2\",\"i3\":\"Item3\"}", Newtonsoft.Json.JsonConvert.SerializeObject(dict));
                },
                TypeWithFieldWorks: function () {
                    var c = new Newtonsoft.Json.Tests.SerializationTests.ClassWithFields();
                    var raw = null;
                    raw = Newtonsoft.Json.JsonConvert.SerializeObject(c, 0, {}, true);

                    Bridge.Test.NUnit.Assert.AreEqual(System.Convert.toBase64String(c.byteArrayField, null, null, null), raw.byteArrayField, "#1");
                    Bridge.Test.NUnit.Assert.AreEqual(c.guidField.toString(), raw.guidField, "#2");
                    Bridge.Test.NUnit.Assert.AreEqual(Bridge.Reflection.getTypeFullName(Newtonsoft.Json.Tests.SerializationTests), raw.typeField, "#3");
                    Bridge.Test.NUnit.Assert.AreEqual("a", raw.charField, "#4");
                    Bridge.Test.NUnit.Assert.AreEqual(0, raw.longField, "#5");
                    Bridge.Test.NUnit.Assert.AreEqual(0, raw.ulongField, "#6");
                    Bridge.Test.NUnit.Assert.AreEqual(0, raw.decimalField, "#7");
                    Bridge.Test.NUnit.Assert.NotNull(raw.dateField, "#8");
                    Bridge.Test.NUnit.Assert.AreEqual(c.dateField.toJSON(), raw.dateField, System.String.concat("#9 ", raw.dateField));
                    Bridge.Test.NUnit.Assert.AreEqual("Item1", raw.enumField, "#10");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([1, 2, 3], System.Int32), raw.arrayField, "#11");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Array.init(["Item1", "Item2", "Item3"], System.String), raw.listField, "#12");
                    Bridge.Test.NUnit.Assert.AreDeepEqual({ i1: "Item1", i2: "Item2", i3: "Item3" }, raw.dictField, "#12");
                },
                ComplexPropertiesWorks: function () {
                    var $t;
                    var c = new Newtonsoft.Json.Tests.SerializationTests.Class1();

                    c.Sub1 = ($t = new Newtonsoft.Json.Tests.SerializationTests.SubClass1(), $t.Owner = c, $t.List1 = $asm.$.Newtonsoft.Json.Tests.SerializationTests.f3(new (System.Collections.Generic.List$1(Newtonsoft.Json.Tests.SerializationTests.E1))()), $t);

                    c.Sub2 = ($t = new Newtonsoft.Json.Tests.SerializationTests.SubClass2(), $t.Owner = c, $t.List1 = $asm.$.Newtonsoft.Json.Tests.SerializationTests.f4(new (System.Collections.Generic.List$1(System.Char))()), $t);

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(c);
                    Bridge.Test.NUnit.Assert.AreEqual("{\"Sub1\":{\"List1\":[\"Item1\",\"Item2\",\"Item3\"]},\"Sub2\":{\"List1\":[\"a\",\"b\",\"c\"]}}", json);
                },
                CamelCaseSettingWorks: function () {
                    var $t;
                    var c = new Newtonsoft.Json.Tests.SerializationTests.Class2();
                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(c, ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.ContractResolver = new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver(), $t));
                    Bridge.Test.NUnit.Assert.AreEqual("{\"intProp\":0}", json);

                    json = Newtonsoft.Json.JsonConvert.SerializeObject(c);
                    Bridge.Test.NUnit.Assert.AreEqual("{\"IntProp\":0}", json);
                },
                IgnoreNullValueWorks: function () {
                    var $t;
                    var c = new Newtonsoft.Json.Tests.SerializationTests.Class3();
                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(c, ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore, $t));
                    Bridge.Test.NUnit.Assert.AreEqual("{}", json);

                    json = Newtonsoft.Json.JsonConvert.SerializeObject(c);
                    Bridge.Test.NUnit.Assert.AreEqual("{\"StringProp\":null}", json);
                },
                TypeNameHandlingWorks: function () {
                    var $t;
                    var c = new Newtonsoft.Json.Tests.SerializationTests.Class3();

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(c, ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects, $t));

                    Bridge.Test.NUnit.Assert.AreEqual("{\"$type\":\"Newtonsoft.Json.Tests.SerializationTests+Class3, Newtonsoft.Json.Tests\",\"StringProp\":null}", json);
                },
                AnonymousTypesWorks: function () {
                    var v = new $asm.$AnonymousType$1(108, "Hello");
                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(v);

                    Bridge.Test.NUnit.Assert.AreEqual("{\"Amount\":108,\"Message\":\"Hello\"}", json);
                },
                FormattingWorks: function () {
                    var v = new $asm.$AnonymousType$1(108, "Hello");
                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(v, Newtonsoft.Json.Formatting.Indented);

                    Bridge.Test.NUnit.Assert.AreEqual("{\n  \"Amount\": 108,\n  \"Message\": \"Hello\"\n}", json);
                }
            }
        }
    });

    Bridge.ns("Newtonsoft.Json.Tests.SerializationTests", $asm.$);

    Bridge.apply($asm.$.Newtonsoft.Json.Tests.SerializationTests, {
        f1: function (_o12) {
            _o12.add(Newtonsoft.Json.Tests.SerializationTests.E1.Item1);
            _o12.add(Newtonsoft.Json.Tests.SerializationTests.E1.Item2);
            _o12.add(Newtonsoft.Json.Tests.SerializationTests.E1.Item3);
            return _o12;
        },
        f2: function (_o13) {
            _o13.set("i1", Newtonsoft.Json.Tests.SerializationTests.E1.Item1);
            _o13.set("i2", Newtonsoft.Json.Tests.SerializationTests.E1.Item2);
            _o13.set("i3", Newtonsoft.Json.Tests.SerializationTests.E1.Item3);
            return _o13;
        },
        f3: function (_o14) {
            _o14.add(Newtonsoft.Json.Tests.SerializationTests.E1.Item1);
            _o14.add(Newtonsoft.Json.Tests.SerializationTests.E1.Item2);
            _o14.add(Newtonsoft.Json.Tests.SerializationTests.E1.Item3);
            return _o14;
        },
        f4: function (_o15) {
            _o15.add(97);
            _o15.add(98);
            _o15.add(99);
            return _o15;
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.SerializationTests.Class1", {
        props: {
            Sub1: null,
            Sub2: null
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.SerializationTests.Class2", {
        props: {
            IntProp: 0
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.SerializationTests.Class3", {
        props: {
            StringProp: null
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.SerializationTests.ClassWithFields", {
        fields: {
            byteArrayField: null,
            guidField: null,
            typeField: null,
            charField: 0,
            longField: System.Int64(0),
            ulongField: System.UInt64(0),
            decimalField: System.Decimal(0.0),
            dateField: null,
            enumField: 0,
            arrayField: null,
            listField: null,
            dictField: null
        },
        ctors: {
            init: function () {
                this.guidField = new System.Guid();
                this.dateField = System.DateTime.getDefaultValue();
                this.byteArrayField = System.Array.init([1, 2, 3], System.Byte);
                this.guidField = System.Guid.newGuid();
                this.typeField = Newtonsoft.Json.Tests.SerializationTests;
                this.charField = 97;
                this.dateField = new Date(2010, 6 - 1, 10, 12, 0, 0, 0);
                this.arrayField = System.Array.init([1, 2, 3], System.Int32);
                this.listField = $asm.$.Newtonsoft.Json.Tests.SerializationTests.ClassWithFields.f1(new (System.Collections.Generic.List$1(Newtonsoft.Json.Tests.SerializationTests.E1))());
                this.dictField = $asm.$.Newtonsoft.Json.Tests.SerializationTests.ClassWithFields.f2(new (System.Collections.Generic.Dictionary$2(System.String,Newtonsoft.Json.Tests.SerializationTests.E1))());
            }
        }
    });

    Bridge.ns("Newtonsoft.Json.Tests.SerializationTests.ClassWithFields", $asm.$);

    Bridge.apply($asm.$.Newtonsoft.Json.Tests.SerializationTests.ClassWithFields, {
        f1: function (_o10) {
            _o10.add(Newtonsoft.Json.Tests.SerializationTests.E1.Item1);
            _o10.add(Newtonsoft.Json.Tests.SerializationTests.E1.Item2);
            _o10.add(Newtonsoft.Json.Tests.SerializationTests.E1.Item3);
            return _o10;
        },
        f2: function (_o11) {
            _o11.set("i1", Newtonsoft.Json.Tests.SerializationTests.E1.Item1);
            _o11.set("i2", Newtonsoft.Json.Tests.SerializationTests.E1.Item2);
            _o11.set("i3", Newtonsoft.Json.Tests.SerializationTests.E1.Item3);
            return _o11;
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.SerializationTests.E1", {
        $kind: "enum",
        statics: {
            fields: {
                Item1: 0,
                Item2: 1,
                Item3: 2
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.SerializationTests.SubClass1", {
        props: {
            Owner: null,
            List1: null
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.SerializationTests.SubClass2", {
        props: {
            Owner: null,
            List1: null
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Utilities.DecimalHelper", {
        statics: {
            methods: {
                AssertIsDecimalAndEqualTo$1: function (v, d, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreStrictEqual(true, Bridge.is(v, System.Decimal), message);
                    Bridge.Test.NUnit.Assert.AreStrictEqual(System.Double.format(d, "G"), v.toString(), message);
                },
                AssertIsDecimalAndEqualTo: function (v, d, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreStrictEqual(true, Bridge.is(v, System.Decimal), message);
                    Bridge.Test.NUnit.Assert.AreStrictEqual(Bridge.Int.format(d, "G"), v.toString(), message);
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Case2.Class2", {
        inherits: [Newtonsoft.Json.Tests.Case2.Class1],
        props: {
            Prop1$1: 0
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Case2.Class3", {
        inherits: [Newtonsoft.Json.Tests.Case2.I1],
        props: {
            Prop1: 0
        },
        alias: ["Prop1", "Newtonsoft$Json$Tests$Case2$I1$Prop1"]
    });

    Bridge.define("Newtonsoft.Json.Tests.DeserializationTests.Person", {
        inherits: [Newtonsoft.Json.Tests.DeserializationTests.INamedEntity],
        props: {
            Id: null,
            Name: null,
            Address: null
        },
        alias: ["Name", "Newtonsoft$Json$Tests$DeserializationTests$INamedEntity$Name"],
        ctors: {
            init: function () {
                this.Id = new System.Guid();
            },
            ctor: function (id, name, city, street) {
                this.$initialize();                var $t;

                this.Id = id;
                this.Name = name;
                this.Address = ($t = new Newtonsoft.Json.Tests.DeserializationTests.Address(), $t.City = city, $t.Street = street, $t);
        }
    },
    methods: {
        toString: function () {
            return System.String.format("{0} {1} {2} {3}", this.Id, this.Name, this.Address.Street, this.Address.City);
        }
    }
    });

    var $box_ = {};

    Bridge.ns("System.Char", $box_);

    Bridge.apply($box_.System.Char, {
        toString: function (obj) { return String.fromCharCode(obj); },
        getHashCode: function (obj) { return System.Char.getHashCode(obj); }
    });

    Bridge.ns("System.DateTime", $box_);

    Bridge.apply($box_.System.DateTime, {
        toString: function (obj) { return System.DateTime.format(obj); }
    });

    Bridge.ns("Newtonsoft.Json.Tests.SerializationTests.E1", $box_);

    Bridge.apply($box_.Newtonsoft.Json.Tests.SerializationTests.E1, {
        toString: function (obj) { return System.Enum.toString(Newtonsoft.Json.Tests.SerializationTests.E1, obj); }
    });
});
