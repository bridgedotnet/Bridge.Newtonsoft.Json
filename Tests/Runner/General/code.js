/**
 * Newtonsoft.Json Test library
 * @version 1.1.0
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2017 Object.NET, Inc.
 * @compiler Bridge.NET 16.2.0
 */
Bridge.assembly("Newtonsoft.Json.Tests", function ($asm, globals) {
    "use strict";

    Bridge.define("Demo25.ApiResponse$1", function (T) { return {
        props: {
            ResultIfSuccessful: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (resultIfSuccessful) {
                this.$initialize();
                this.ResultIfSuccessful = resultIfSuccessful;
            }
        }
    }; });

    Bridge.define("Demo25.Danny", {
        props: {
            ToolboxControls: null
        }
    });

    Bridge.define("Demo25.KeyValuePairDataModel");

    Bridge.define("Demo25.NonNullList$1", function (T) { return {
        inherits: [System.Collections.Generic.IEnumerable$1(T)],
        fields: {
            _headIfAny: null
        },
        props: {
            Count: {
                get: function () {
                    return (this._headIfAny == null) ? 0 : ((this._headIfAny.Count) >>> 0);
                }
            }
        },
        alias: ["getEnumerator", ["System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator", "System$Collections$Generic$IEnumerable$1$getEnumerator"]],
        ctors: {
            ctor: function (headIfAny) {
                this.$initialize();
                this._headIfAny = headIfAny;
            },
            $ctor1: function (values) {
                this.$initialize();                var $t, $t1;

                var node = null;
                $t = Bridge.getEnumerator(System.Linq.Enumerable.from(values).reverse());
                try {
                    while ($t.moveNext()) {
                        var value = $t.Current;
                        node = ($t1 = new (Demo25.NonNullList$1.Node(T))(), $t1.Count = ((((node == null) ? 0 : node.Count) + 1) | 0), $t1.Item = value, $t1.NextIfAny = node, $t1);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }this._headIfAny = node;
        }
    },
    methods: {
        getEnumerator: function () {
            var $step = 0,
                $jumpFromFinally,
                $returnValue,
                node,
                $async_e;

            var $enumerator = new (Bridge.GeneratorEnumerator$1(T))(Bridge.fn.bind(this, function () {
                try {
                    for (;;) {
                        switch ($step) {
                            case 0: {
                                node = this._headIfAny;
                                $step = 1;
                                continue;
                            }
                            case 1: {
                                if ( node != null ) {
                                        $step = 2;
                                        continue;
                                    } 
                                    $step = 4;
                                    continue;
                            }
                            case 2: {
                                $enumerator.current = node.Item;
                                    $step = 3;
                                    return true;
                            }
                            case 3: {
                                node = node.NextIfAny;

                                    $step = 1;
                                    continue;
                            }
                            case 4: {

                            }
                            default: {
                                return false;
                            }
                        }
                    }
                } catch($async_e1) {
                    $async_e = System.Exception.create($async_e1);
                    throw $async_e;
                }
            }));
            return $enumerator;
        },
        System$Collections$IEnumerable$getEnumerator: function () {
            return this.getEnumerator();
        }
    }
    }; });

    Bridge.define("Demo25.NonNullList$1.Node", function (T) { return {
        fields: {
            Count: 0,
            Item: Bridge.getDefaultValue(T),
            NextIfAny: null
        }
    }; });

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
                    var minDate = System.DateTime.getMinValue();
                    var json = Newtonsoft.Json.JsonConvert.DeserializeObject("\"0001-01-01T00:00:00.000Z\"", System.DateTime);
                    Newtonsoft.Json.Tests.Utilities.DateHelper.AssertDate$1(minDate, System.DateTimeKind.Unspecified, System.DateTime.getTicks(json), System.DateTime.getYear(json), System.DateTime.getMonth(json), System.DateTime.getDay(json), System.DateTime.getHour(json), System.DateTime.getMinute(json), System.DateTime.getSecond(json), System.DateTime.getMillisecond(json), "MinValue: ");

                    var d1 = System.DateTime.create(2010, 6, 10, 12, 1, 2, 3, System.DateTimeKind.Utc);
                    json = Newtonsoft.Json.JsonConvert.DeserializeObject("\"2010-06-10T12:01:02.003Z\"", System.DateTime);
                    Newtonsoft.Json.Tests.Utilities.DateHelper.AssertDate(d1, json, "d1: ");

                    var d2 = System.DateTime.create(2010, 6, 10, 12, 0, 0, 0, System.DateTimeKind.Unspecified);
                    json = Newtonsoft.Json.JsonConvert.DeserializeObject("\"2010-06-10T12:00:00\"", System.DateTime);
                    Newtonsoft.Json.Tests.Utilities.DateHelper.AssertDate(d2, json, "d2: ");

                    var d3 = System.DateTime.create(2010, 6, 10, 12, 0, 0, 0, System.DateTimeKind.Utc);
                    json = Newtonsoft.Json.JsonConvert.DeserializeObject("\"2010-06-10T12:00:00Z\"", System.DateTime);
                    Newtonsoft.Json.Tests.Utilities.DateHelper.AssertDate(d3, json, "d3: ");

                    // DST problem
                    //var s = "\"2010-06-10T12:00:00" + DateHelper.GetOffsetString() + "\"";
                    //var d4 = (new DateTime(2010, 6, 10, 12, 0, 0, 0, s.Contains("Z") ? DateTimeKind.Utc :  DateTimeKind.Local));

                    //Assert.True(true, "d4 input: " + s);
                    //Assert.True(true, "d4 expected: " + d4.ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'FFFFFFFK"));

                    //json = JsonConvert.DeserializeObject<DateTime>(s);
                    //DateHelper.AssertDate(d4, json, "d4: ");
                },
                DateTimeSerializationDeserializationTurnaroundWorks: function () {
                    var d2 = System.DateTime.create(1700, 2, 28, 12, 3, 4, 5, System.DateTimeKind.Local);
                    var s2 = System.DateTime.format(d2);
                    var s2Utc = System.String.concat("\"", System.DateTime.format(d2, "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'FFFFFFFK"), "\"");

                    var serialized2 = Newtonsoft.Json.JsonConvert.SerializeObject(Bridge.box(d2, System.DateTime, System.DateTime.format));
                    Bridge.Test.NUnit.Assert.AreEqual(s2Utc, serialized2, "d2 serialized string");

                    var json = Newtonsoft.Json.JsonConvert.DeserializeObject(serialized2, System.DateTime);
                    Newtonsoft.Json.Tests.Utilities.DateHelper.AssertDate$1(json, System.DateTimeKind.Local, System.DateTime.getTicks(d2), System.DateTime.getYear(d2), System.DateTime.getMonth(d2), System.DateTime.getDay(d2), System.DateTime.getHour(d2), System.DateTime.getMinute(d2), System.DateTime.getSecond(d2), System.DateTime.getMillisecond(d2), "d2 deserialized date: ");

                    Bridge.Test.NUnit.Assert.AreEqual(s2, System.DateTime.format(json), "d2 deserialized string: ");

                    var d3 = System.DateTime.create(2017, 1, 8, 13, 3, 4, 5, System.DateTimeKind.Unspecified);
                    var s3 = System.DateTime.format(d3);
                    var s3Utc = System.String.concat("\"", System.DateTime.format(d3, "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'FFFFFFFK"), "\"");

                    var serialized3 = Newtonsoft.Json.JsonConvert.SerializeObject(Bridge.box(d3, System.DateTime, System.DateTime.format));
                    Bridge.Test.NUnit.Assert.AreEqual(s3Utc, serialized3, "d3 serialized string");

                    json = Newtonsoft.Json.JsonConvert.DeserializeObject(serialized3, System.DateTime);
                    Newtonsoft.Json.Tests.Utilities.DateHelper.AssertDate$1(json, System.DateTimeKind.Unspecified, System.DateTime.getTicks(d3), System.DateTime.getYear(d3), System.DateTime.getMonth(d3), System.DateTime.getDay(d3), System.DateTime.getHour(d3), System.DateTime.getMinute(d3), System.DateTime.getSecond(d3), System.DateTime.getMillisecond(d3), "d3 deserialized date: ");

                    Bridge.Test.NUnit.Assert.AreEqual(s3, System.DateTime.format(json), "d3 deserialized string: ");
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
                    Bridge.Test.NUnit.Assert.AreEqual(c.decimalField.toString(), jsonC.decimalField.toString(), "#7");

                    System.Console.WriteLine(json);
                    System.Console.WriteLine(Bridge.box(c.dateField, System.DateTime, System.DateTime.format));
                    System.Console.WriteLine(System.DateTime.format(c.dateField));
                    System.Console.WriteLine(System.DateTime.format(c.dateField, "O"));

                    System.Console.WriteLine(jsonC);
                    System.Console.WriteLine(Bridge.box(jsonC.dateField, System.DateTime, System.DateTime.format));
                    System.Console.WriteLine(System.DateTime.format(jsonC.dateField));
                    System.Console.WriteLine(System.DateTime.format(jsonC.dateField, "O"));

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
                $metadata : function () { return {"m":[{"a":2,"n":"Amount","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_Amount","t":8,"rt":System.Int32,"fg":"Amount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Amount"},{"a":2,"n":"Message","t":16,"rt":System.String,"g":{"a":2,"n":"get_Message","t":8,"rt":System.String,"fg":"Message"},"fn":"Message"}]}; }
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
                this.dateField = System.DateTime.create(2010, 6, 10, 12, 0, 0, 0, System.DateTimeKind.Utc);
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

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case10", {
        statics: {
            methods: {
                TestPropertiesWithSameReferenceValue: function () {
                    var $t;
                    var a = { };

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(new Newtonsoft.Json.Tests.Issues.Case10.ClassWithMissingProperty(a, a), ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects, $t));

                    Bridge.Test.NUnit.Assert.AreEqual("{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case10+ClassWithMissingProperty, Newtonsoft.Json.Tests\",\"Prop1\":{\"$type\":\"System.Object, mscorlib\"},\"Prop2\":{\"$type\":\"System.Object, mscorlib\"}}", json);
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case10.ClassWithMissingProperty", {
        props: {
            Prop1: null,
            Prop2: null
        },
        ctors: {
            ctor: function (prop1, prop2) {
                this.$initialize();
                this.Prop1 = prop1;
                this.Prop2 = prop2;
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case14", {
        statics: {
            methods: {
                TestCaseInsensitiveMatch: function () {
                    var $t, $t1, $t2, $t3, $t4, $t5;
                    var msg1 = "{\"data\": [1, 2, 3],\"done\": true, \"code\": 16}";
                    var test1 = Newtonsoft.Json.JsonConvert.DeserializeObject(msg1, Newtonsoft.Json.Tests.Issues.Case14.Multiple$1(System.Int32));
                    Bridge.Test.NUnit.Assert.True(test1.Done);
                    Bridge.Test.NUnit.Assert.AreEqual(16, test1.Code);
                    Bridge.Test.NUnit.Assert.AreEqual(3, test1.Data.length);
                    Bridge.Test.NUnit.Assert.AreEqual(1, ($t = test1.Data)[System.Array.index(0, $t)]);
                    Bridge.Test.NUnit.Assert.AreEqual(2, ($t1 = test1.Data)[System.Array.index(1, $t1)]);
                    Bridge.Test.NUnit.Assert.AreEqual(3, ($t2 = test1.Data)[System.Array.index(2, $t2)]);

                    var msg2 = "{\"Data\": [1, 2, 3],\"Done\": true, \"Code\": 16}";
                    var test2 = Newtonsoft.Json.JsonConvert.DeserializeObject(msg2, Newtonsoft.Json.Tests.Issues.Case14.Multiple$1(System.Int32));
                    Bridge.Test.NUnit.Assert.True(test2.Done);
                    Bridge.Test.NUnit.Assert.AreEqual(16, test2.Code);
                    Bridge.Test.NUnit.Assert.AreEqual(3, test2.Data.length);
                    Bridge.Test.NUnit.Assert.AreEqual(1, ($t3 = test2.Data)[System.Array.index(0, $t3)]);
                    Bridge.Test.NUnit.Assert.AreEqual(2, ($t4 = test2.Data)[System.Array.index(1, $t4)]);
                    Bridge.Test.NUnit.Assert.AreEqual(3, ($t5 = test2.Data)[System.Array.index(2, $t5)]);
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case14.Multiple$1", function (T) { return {
        props: {
            Done: false,
            Code: 0,
            Data: null
        }
    }; });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case18", {
        statics: {
            methods: {
                TestNullable: function () {
                    var $t;
                    var testClass = ($t = new Newtonsoft.Json.Tests.Issues.Case18.Test(), $t.A = true, $t.B = true, $t.I1 = 5, $t.I2 = 6, $t.E1 = Newtonsoft.Json.Tests.Issues.Case18.Enum1.Item2, $t.E2 = Newtonsoft.Json.Tests.Issues.Case18.Enum1.Item1, $t);

                    var testJson = Newtonsoft.Json.JsonConvert.SerializeObject(testClass);
                    var test = Newtonsoft.Json.JsonConvert.DeserializeObject(testJson, Newtonsoft.Json.Tests.Issues.Case18.Test);

                    Bridge.Test.NUnit.Assert.NotNull(test.A);
                    Bridge.Test.NUnit.Assert.True(System.Nullable.getValue(test.A));
                    Bridge.Test.NUnit.Assert.True(test.B);
                    Bridge.Test.NUnit.Assert.Null(test.C);

                    Bridge.Test.NUnit.Assert.NotNull(test.I1);
                    Bridge.Test.NUnit.Assert.AreEqual(5, System.Nullable.getValue(test.I1));
                    Bridge.Test.NUnit.Assert.AreEqual(6, test.I2);
                    Bridge.Test.NUnit.Assert.Null(test.I3);

                    Bridge.Test.NUnit.Assert.NotNull(test.E1);
                    Bridge.Test.NUnit.Assert.AreEqual(Newtonsoft.Json.Tests.Issues.Case18.Enum1.Item2, System.Nullable.getValue(test.E1));
                    Bridge.Test.NUnit.Assert.AreEqual(Newtonsoft.Json.Tests.Issues.Case18.Enum1.Item1, test.E2);
                    Bridge.Test.NUnit.Assert.Null(test.E3);
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case18.Enum1", {
        $kind: "enum",
        statics: {
            fields: {
                Item1: 0,
                Item2: 1
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case18.Test", {
        props: {
            A: null,
            B: false,
            C: null,
            I1: null,
            I2: 0,
            I3: null,
            E1: null,
            E2: 0,
            E3: null
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case22", {
        statics: {
            methods: {
                TestEnumJson: function () {
                    var obj = new Newtonsoft.Json.Tests.Issues.Case22.TestObj();
                    obj.A = 123;
                    obj.B = Newtonsoft.Json.Tests.Issues.Case22.TestEnum.Test3;

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(obj);
                    Bridge.Test.NUnit.Assert.AreEqual("{\"A\":123,\"B\":2}", json);

                    obj = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.Issues.Case22.TestObj);
                    Bridge.Test.NUnit.Assert.AreEqual(123, obj.A);
                    Bridge.Test.NUnit.Assert.AreEqual(Newtonsoft.Json.Tests.Issues.Case22.TestEnum.Test3, obj.B);
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case22.TestEnum", {
        $kind: "enum",
        statics: {
            fields: {
                Test1: 0,
                Test2: 1,
                Test3: 2
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case22.TestObj", {
        props: {
            A: 0,
            B: 0
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case25", {
        statics: {
            methods: {
                TestSerializerSettings: function () {
                    var $t;
                    var s = ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects, $t);

                    var json1 = "{    \"$type\": \"Demo25.ApiResponse`1[[Demo25.NonNullList`1[[Demo25.KeyValuePairDataModel, Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests\",    \"ResultIfSuccessful\": []}";
                    var json2 = "{       \"ToolboxControls\": [        {            \"$type\": \"System.String\",            \"Text\": \"Placeholder header\"        }    ]}";

                    Newtonsoft.Json.JsonConvert.DeserializeObject(json1, Demo25.ApiResponse$1(Demo25.NonNullList$1(Demo25.KeyValuePairDataModel)), s);
                    var a = Newtonsoft.Json.JsonConvert.DeserializeObject(json2, Demo25.Danny, s);
                    Bridge.Test.NUnit.Assert.AreEqual(1, a.ToolboxControls.Count);
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case26", {
        statics: {
            methods: {
                TestInvalidJson: function () {
                    Bridge.Test.NUnit.Assert.Throws$2(Newtonsoft.Json.JsonException, $asm.$.Newtonsoft.Json.Tests.Issues.Case26.f1);

                    Bridge.Test.NUnit.Assert.Throws$2(Newtonsoft.Json.JsonException, $asm.$.Newtonsoft.Json.Tests.Issues.Case26.f2);

                    Bridge.Test.NUnit.Assert.AreEqual(0, Newtonsoft.Json.JsonConvert.DeserializeObject("0", System.Int32));
                }
            }
        }
    });

    Bridge.ns("Newtonsoft.Json.Tests.Issues.Case26", $asm.$);

    Bridge.apply($asm.$.Newtonsoft.Json.Tests.Issues.Case26, {
        f1: function () {
            var product = Newtonsoft.Json.JsonConvert.DeserializeObject("fiherifuer", Newtonsoft.Json.Tests.Issues.Case26.Product);
        },
        f2: function () {
            var product = Newtonsoft.Json.JsonConvert.DeserializeObject("{Name:\"name\"", Newtonsoft.Json.Tests.Issues.Case26.Product);
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case26.Product", {
        props: {
            Name: null,
            ExpiryDate: null,
            Price: 0,
            Sizes: null
        },
        ctors: {
            init: function () {
                this.ExpiryDate = System.DateTime.getDefaultValue();
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case27", {
        statics: {
            methods: {
                TestValueTypeProperty: function () {
                    var product = new Newtonsoft.Json.Tests.Issues.Case27.Product1();

                    product.Name = "Apple";
                    product.Price = 3.99;

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(product);
                    Bridge.Test.NUnit.Assert.AreEqual("{\"Name\":\"Apple\",\"Price\":3.99}", json);

                    product = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.Issues.Case27.Product1);
                    Bridge.Test.NUnit.Assert.AreEqual("Apple", product.Name);
                    Bridge.Test.NUnit.Assert.AreEqual(3.99, product.Price);
                },
                TestValueTypeField: function () {
                    var product = new Newtonsoft.Json.Tests.Issues.Case27.Product2();

                    product.Name = "Apple";
                    product.Price = 4;

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(product);
                    Bridge.Test.NUnit.Assert.AreEqual("{\"Name\":\"Apple\",\"Price\":4}", json);

                    product = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.Issues.Case27.Product2);
                    Bridge.Test.NUnit.Assert.AreEqual("Apple", product.Name);
                    Bridge.Test.NUnit.Assert.AreEqual(4, product.Price);
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case27.Product1", {
        props: {
            Name: null,
            Price: 0
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case27.Product2", {
        fields: {
            Name: null,
            Price: 0
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case4", {
        statics: {
            methods: {
                TestConstructorWithArgument: function () {
                    var x = new Newtonsoft.Json.Tests.Issues.Case4.MyString("abc");
                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(x);
                    var cloneX = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.Issues.Case4.MyString);

                    Bridge.Test.NUnit.Assert.AreEqual("abc", cloneX.Value);
                },
                TestConstructorWithIEnumerable: function () {
                    var list = new (Newtonsoft.Json.Tests.Issues.Case4.MyList$1(System.String))(System.Array.init(["a", "b"], System.String));
                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(list);
                    var clone = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.Issues.Case4.MyList$1(System.String));

                    Bridge.Test.NUnit.Assert.AreEqual("[\"a\",\"b\"]", json);
                    Bridge.Test.NUnit.Assert.AreEqual(System.Linq.Enumerable.from(list).toArray(), System.Linq.Enumerable.from(clone).toArray());
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case4.MyList$1", function (T) { return {
        inherits: [System.Collections.Generic.IEnumerable$1(T)],
        fields: {
            _values: null
        },
        alias: ["getEnumerator", ["System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator", "System$Collections$Generic$IEnumerable$1$getEnumerator"]],
        ctors: {
            ctor: function (values) {
                this.$initialize();
                this._values = values;
            }
        },
        methods: {
            getEnumerator: function () {
                return Bridge.getEnumerator(this._values, T);
            },
            System$Collections$IEnumerable$getEnumerator: function () {
                return this.getEnumerator();
            }
        }
    }; });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case4.MyString", {
        props: {
            Value: null
        },
        ctors: {
            ctor: function (value) {
                this.$initialize();
                if (System.String.isNullOrWhiteSpace(value)) {
                    throw new System.ArgumentException(System.String.format("Null/blank {0} specified", "value"));
                }

                this.Value = value;
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case8", {
        statics: {
            methods: {
                TestGenericTypeHandling: function () {
                    var $t;
                    var settings = ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects, $t);

                    var x = new (Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$1(Newtonsoft.Json.Tests.Issues.Case8.PageEditData))();

                    x.Value = ($t = new Newtonsoft.Json.Tests.Issues.Case8.PageEditData(), $t.Data = 7, $t);

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(x, settings);

                    Bridge.Test.NUnit.Assert.AreEqual("{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+ApiResponse`1[[Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests\",\"Value\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests\",\"Data\":7}}", json);

                    var result = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$1(Newtonsoft.Json.Tests.Issues.Case8.PageEditData), settings);

                    Bridge.Test.NUnit.Assert.NotNull(Bridge.unbox(result));

                    var typedResult = Bridge.as(result, Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$1(Newtonsoft.Json.Tests.Issues.Case8.PageEditData));
                    Bridge.Test.NUnit.Assert.NotNull(typedResult);

                    Bridge.Test.NUnit.Assert.AreEqual(7, typedResult.Value.Data);
                },
                TestGenericTypeHandlingMoreGenericLevel: function () {
                    var $t, $t1;
                    var settings = ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects, $t);

                    var x = new (Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$2(Newtonsoft.Json.Tests.Issues.Case8.PageEditData$1(System.String),Newtonsoft.Json.Tests.Issues.Case8.PageEditData$1(Newtonsoft.Json.Tests.Issues.Case8.PageEditData)))();

                    x.Value1 = ($t = new (Newtonsoft.Json.Tests.Issues.Case8.PageEditData$1(System.String))(), $t.Data = "Hi", $t);

                    x.Value2 = ($t = new (Newtonsoft.Json.Tests.Issues.Case8.PageEditData$1(Newtonsoft.Json.Tests.Issues.Case8.PageEditData))(), $t.Data = ($t1 = new Newtonsoft.Json.Tests.Issues.Case8.PageEditData(), $t1.Data = 8, $t1), $t);

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(x, settings);

                    Bridge.Test.NUnit.Assert.AreEqual("{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+ApiResponse`2[[Newtonsoft.Json.Tests.Issues.Case8+PageEditData`1[[System.String, mscorlib]], Newtonsoft.Json.Tests],[Newtonsoft.Json.Tests.Issues.Case8+PageEditData`1[[Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests\",\"Value1\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+PageEditData`1[[System.String, mscorlib]], Newtonsoft.Json.Tests\",\"Data\":\"Hi\"},\"Value2\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+PageEditData`1[[Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests]], Newtonsoft.Json.Tests\",\"Data\":{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests\",\"Data\":8}}}", json);

                    var result = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$2(Newtonsoft.Json.Tests.Issues.Case8.PageEditData$1(System.String),Newtonsoft.Json.Tests.Issues.Case8.PageEditData$1(Newtonsoft.Json.Tests.Issues.Case8.PageEditData)), settings);

                    Bridge.Test.NUnit.Assert.NotNull(Bridge.unbox(result));

                    var typedResult = Bridge.as(result, Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$2(Newtonsoft.Json.Tests.Issues.Case8.PageEditData$1(System.String),Newtonsoft.Json.Tests.Issues.Case8.PageEditData$1(Newtonsoft.Json.Tests.Issues.Case8.PageEditData)));
                    Bridge.Test.NUnit.Assert.NotNull(typedResult);

                    Bridge.Test.NUnit.Assert.AreEqual("Hi", typedResult.Value1.Data);
                    Bridge.Test.NUnit.Assert.AreEqual(8, typedResult.Value2.Data.Data);
                },
                TestGenericAndArrayTypeHandling: function () {
                    var $t, $t1;
                    var settings = ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects, $t);

                    var x = new (Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.PageEditData)))();

                    x.Value = System.Array.init([($t = new Newtonsoft.Json.Tests.Issues.Case8.PageEditData(), $t.Data = 7, $t)], Newtonsoft.Json.Tests.Issues.Case8.PageEditData);

                    var items = System.Array.init([x], Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.PageEditData)));

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(items, settings);

                    Bridge.Test.NUnit.Assert.AreEqual("[{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+ApiResponse`1[[Newtonsoft.Json.Tests.Issues.Case8+PageEditData[]]], Newtonsoft.Json.Tests\",\"Value\":[{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests\",\"Data\":7}]}]", json);

                    var result = Newtonsoft.Json.JsonConvert.DeserializeObject(json, System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.PageEditData))), settings);

                    Bridge.Test.NUnit.Assert.NotNull(Bridge.unbox(result));

                    var typedResult = Bridge.as(result, System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.PageEditData))));

                    Bridge.Test.NUnit.Assert.NotNull(typedResult);
                    Bridge.Test.NUnit.Assert.AreEqual(1, typedResult.length);
                    Bridge.Test.NUnit.Assert.NotNull(typedResult[System.Array.index(0, typedResult)]);
                    Bridge.Test.NUnit.Assert.NotNull(typedResult[System.Array.index(0, typedResult)].Value);
                    Bridge.Test.NUnit.Assert.AreEqual(1, typedResult[System.Array.index(0, typedResult)].Value.length);
                    Bridge.Test.NUnit.Assert.NotNull(($t = typedResult[System.Array.index(0, typedResult)].Value)[System.Array.index(0, $t)]);
                    Bridge.Test.NUnit.Assert.AreEqual(7, ($t1 = typedResult[System.Array.index(0, typedResult)].Value)[System.Array.index(0, $t1)].Data);
                },
                TestGenericAndArrayTypeHandlingMoreLevels: function () {
                    var $t, $t1, $t2, $t3, $t4, $t5, $t6;
                    var settings = ($t = new Newtonsoft.Json.JsonSerializerSettings(), $t.TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects, $t);

                    var pages = System.Array.init([($t = new Newtonsoft.Json.Tests.Issues.Case8.PageEditData(), $t.Data = 7, $t)], Newtonsoft.Json.Tests.Issues.Case8.PageEditData);

                    var contaners = System.Array.init([Newtonsoft.Json.Tests.Issues.Case8.Container.Create(Bridge.global.System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.PageEditData), pages)], Newtonsoft.Json.Tests.Issues.Case8.Container$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.PageEditData)));

                    var responses = System.Array.init([($t = new (Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.Container$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.PageEditData)))))(), $t.Value = contaners, $t)], Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.Container$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.PageEditData)))));

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(responses, settings);

                    Bridge.Test.NUnit.Assert.AreEqual("[{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+ApiResponse`1[[Newtonsoft.Json.Tests.Issues.Case8+Container`1[[Newtonsoft.Json.Tests.Issues.Case8+PageEditData[]]][]]], Newtonsoft.Json.Tests\",\"Value\":[{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+Container`1[[Newtonsoft.Json.Tests.Issues.Case8+PageEditData[]]], Newtonsoft.Json.Tests\",\"Item1\":[{\"$type\":\"Newtonsoft.Json.Tests.Issues.Case8+PageEditData, Newtonsoft.Json.Tests\",\"Data\":7}]}]}]", json);

                    var result = Newtonsoft.Json.JsonConvert.DeserializeObject(json, System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.Container$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.PageEditData))))), settings);

                    Bridge.Test.NUnit.Assert.NotNull(Bridge.unbox(result));

                    var typedResult = Bridge.as(result, System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.Container$1(System.Array.type(Newtonsoft.Json.Tests.Issues.Case8.PageEditData))))));

                    Bridge.Test.NUnit.Assert.NotNull(typedResult);
                    Bridge.Test.NUnit.Assert.AreEqual(1, typedResult.length);
                    Bridge.Test.NUnit.Assert.NotNull(typedResult[System.Array.index(0, typedResult)]);
                    Bridge.Test.NUnit.Assert.NotNull(typedResult[System.Array.index(0, typedResult)].Value);
                    Bridge.Test.NUnit.Assert.AreEqual(1, typedResult[System.Array.index(0, typedResult)].Value.length);
                    Bridge.Test.NUnit.Assert.NotNull(($t = typedResult[System.Array.index(0, typedResult)].Value)[System.Array.index(0, $t)]);
                    Bridge.Test.NUnit.Assert.NotNull(($t1 = typedResult[System.Array.index(0, typedResult)].Value)[System.Array.index(0, $t1)].Item1);
                    Bridge.Test.NUnit.Assert.AreEqual(1, ($t2 = typedResult[System.Array.index(0, typedResult)].Value)[System.Array.index(0, $t2)].Item1.length);
                    Bridge.Test.NUnit.Assert.NotNull(($t3 = ($t4 = typedResult[System.Array.index(0, typedResult)].Value)[System.Array.index(0, $t4)].Item1)[System.Array.index(0, $t3)]);
                    Bridge.Test.NUnit.Assert.AreEqual(7, ($t5 = ($t6 = typedResult[System.Array.index(0, typedResult)].Value)[System.Array.index(0, $t6)].Item1)[System.Array.index(0, $t5)].Data);
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$1", function (T) { return {
        fields: {
            Value: Bridge.getDefaultValue(T)
        }
    }; });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case8.ApiResponse$2", function (T, K) { return {
        fields: {
            Value1: Bridge.getDefaultValue(T)
        },
        props: {
            Value2: Bridge.getDefaultValue(K)
        }
    }; });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case8.Container", {
        statics: {
            methods: {
                Create: function (K, value) {
                    var $t;
                    return ($t = new (Newtonsoft.Json.Tests.Issues.Case8.Container$1(K))(), $t.Item1 = value, $t);
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case8.Container$1", function (T) { return {
        fields: {
            Item1: Bridge.getDefaultValue(T)
        }
    }; });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case8.PageEditData", {
        props: {
            Data: 0
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Issues.Case8.PageEditData$1", function (T) { return {
        props: {
            Data: Bridge.getDefaultValue(T)
        }
    }; });

    Bridge.define("Newtonsoft.Json.Tests.JsonConstructorTests", {
        statics: {
            methods: {
                TestJsonConstructor: function () {
                    var u = new Newtonsoft.Json.Tests.JsonConstructorTests.User.$ctor1("Frank", true);

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(u);
                    Bridge.Test.NUnit.Assert.AreEqual("{\"Enabled\":true,\"UserName\":\"Frank\"}", json);

                    var cloneU = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.JsonConstructorTests.User);

                    Bridge.Test.NUnit.Assert.NotNull(cloneU);
                    Bridge.Test.NUnit.Assert.AreEqual("Frank", cloneU.UserName);
                    Bridge.Test.NUnit.Assert.AreEqual(true, cloneU.Enabled);
                },
                TestJsonConstructorMyOtherString: function () {
                    var x = Newtonsoft.Json.Tests.JsonConstructorTests.MyOtherString.Empty.Add("abc");
                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(x);
                    Bridge.Test.NUnit.Assert.AreEqual("{\"Value\":\"abc\"}", json);

                    var cloneX = Newtonsoft.Json.JsonConvert.DeserializeObject(json, Newtonsoft.Json.Tests.JsonConstructorTests.MyOtherString);
                    Bridge.Test.NUnit.Assert.NotNull(cloneX);
                    Bridge.Test.NUnit.Assert.AreEqual("abc", cloneX.Value);
                },
                TestMultipleJsonConstructor: function () {
                    Bridge.Test.NUnit.Assert.Throws$2(Newtonsoft.Json.JsonException, $asm.$.Newtonsoft.Json.Tests.JsonConstructorTests.f1);
                }
            }
        }
    });

    Bridge.ns("Newtonsoft.Json.Tests.JsonConstructorTests", $asm.$);

    Bridge.apply($asm.$.Newtonsoft.Json.Tests.JsonConstructorTests, {
        f1: function () {
            Newtonsoft.Json.JsonConvert.DeserializeObject("{}", Newtonsoft.Json.Tests.JsonConstructorTests.MultipleJsonConstructors);
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.JsonConstructorTests.MultipleJsonConstructors", {
        ctors: {
            $ctor1: function (s) {
                this.$initialize();
            },
            ctor: function (i) {
                this.$initialize();
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.JsonConstructorTests.MyOtherString", {
        statics: {
            props: {
                Empty: null
            },
            ctors: {
                init: function () {
                    this.Empty = new Newtonsoft.Json.Tests.JsonConstructorTests.MyOtherString("");
                }
            }
        },
        props: {
            Value: null
        },
        ctors: {
            ctor: function (value) {
                this.$initialize();
                this.Value = value;
            }
        },
        methods: {
            Add: function (value) {
                return new Newtonsoft.Json.Tests.JsonConstructorTests.MyOtherString(System.String.concat(this.Value, value));
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.JsonConstructorTests.User", {
        props: {
            UserName: null,
            Enabled: false
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (userName, enabled) {
                this.$initialize();
                this.UserName = userName;
                this.Enabled = enabled;
            }
        }
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
                    Bridge.Test.NUnit.Assert.AreEqual("\"a\"", Newtonsoft.Json.JsonConvert.SerializeObject(Bridge.box(c, System.Char, String.fromCharCode, System.Char.getHashCode)));
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
                    var dt = System.DateTime.create(2010, 6, 10, 12, 0, 0, 0);
                    var s = Newtonsoft.Json.JsonConvert.SerializeObject(Bridge.box(dt, System.DateTime, System.DateTime.format));

                    Bridge.Test.NUnit.Assert.AreEqual(System.String.concat("\"", System.DateTime.format(dt, "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'FFFFFFFK"), "\""), s, System.String.concat("Result: ", s));
                },
                ArrayWorks: function () {
                    var intArr = System.Array.init([1, 2, 3], System.Int32);
                    Bridge.Test.NUnit.Assert.AreEqual("[1,2,3]", Newtonsoft.Json.JsonConvert.SerializeObject(intArr));

                    var longArr = System.Array.init([System.Int64(1), System.Int64(2), System.Int64(3)], System.Int64);
                    Bridge.Test.NUnit.Assert.AreEqual("[1,2,3]", Newtonsoft.Json.JsonConvert.SerializeObject(longArr));

                    var enumArr = System.Array.init([Newtonsoft.Json.Tests.SerializationTests.E1.Item1, Newtonsoft.Json.Tests.SerializationTests.E1.Item2, Newtonsoft.Json.Tests.SerializationTests.E1.Item3], Newtonsoft.Json.Tests.SerializationTests.E1);
                    Bridge.Test.NUnit.Assert.AreEqual("[0,1,2]", Newtonsoft.Json.JsonConvert.SerializeObject(enumArr));
                },
                EnumWorks: function () {
                    Bridge.Test.NUnit.Assert.AreEqual("0", Newtonsoft.Json.JsonConvert.SerializeObject(Bridge.box(Newtonsoft.Json.Tests.SerializationTests.E1.Item1, Newtonsoft.Json.Tests.SerializationTests.E1, System.Enum.toStringFn(Newtonsoft.Json.Tests.SerializationTests.E1))));
                },
                IListWorks: function () {
                    var list = $asm.$.Newtonsoft.Json.Tests.SerializationTests.f1(new (System.Collections.Generic.List$1(Newtonsoft.Json.Tests.SerializationTests.E1))());
                    Bridge.Test.NUnit.Assert.AreEqual("[0,1,2]", Newtonsoft.Json.JsonConvert.SerializeObject(list));
                },
                IDictionaryWorks: function () {
                    var dict = $asm.$.Newtonsoft.Json.Tests.SerializationTests.f2(new (System.Collections.Generic.Dictionary$2(System.String,Newtonsoft.Json.Tests.SerializationTests.E1))());

                    Bridge.Test.NUnit.Assert.AreEqual("{\"i1\":0,\"i2\":1,\"i3\":2}", Newtonsoft.Json.JsonConvert.SerializeObject(dict));
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

                    var rawDateField = null;
                    rawDateField = System.DateTime.format(c.dateField, "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'FFFFFFFK");
                    Bridge.Test.NUnit.Assert.AreEqual(rawDateField, raw.dateField, System.String.concat("#9 ", raw.dateField));
                    Bridge.Test.NUnit.Assert.AreEqual(0, raw.enumField, "#10");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([1, 2, 3], System.Int32), raw.arrayField, "#11");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([0, 1, 2], System.Int32), raw.listField, "#12");
                    Bridge.Test.NUnit.Assert.AreDeepEqual({ i1: 0, i2: 1, i3: 2 }, raw.dictField, "#13");
                },
                ComplexPropertiesWorks: function () {
                    var $t;
                    var c = new Newtonsoft.Json.Tests.SerializationTests.Class1();

                    c.Sub1 = ($t = new Newtonsoft.Json.Tests.SerializationTests.SubClass1(), $t.Owner = c, $t.List1 = $asm.$.Newtonsoft.Json.Tests.SerializationTests.f3(new (System.Collections.Generic.List$1(Newtonsoft.Json.Tests.SerializationTests.E1))()), $t);

                    c.Sub2 = ($t = new Newtonsoft.Json.Tests.SerializationTests.SubClass2(), $t.Owner = c, $t.List1 = $asm.$.Newtonsoft.Json.Tests.SerializationTests.f4(new (System.Collections.Generic.List$1(System.Char))()), $t);

                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(c);
                    Bridge.Test.NUnit.Assert.AreEqual("{\"Sub1\":{\"List1\":[0,1,2]},\"Sub2\":{\"List1\":[\"a\",\"b\",\"c\"]}}", json);
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
                this.dateField = System.DateTime.create(2010, 6, 10, 12, 0, 0, 0);
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

    Bridge.define("Newtonsoft.Json.Tests.Utilities.DateHelper", {
        statics: {
            methods: {
                AssertDate$1: function (dt, kind, ticks, year, month, day, hour, minute, second, ms, message) {
                    if (year === void 0) { year = null; }
                    if (month === void 0) { month = null; }
                    if (day === void 0) { day = null; }
                    if (hour === void 0) { hour = null; }
                    if (minute === void 0) { minute = null; }
                    if (second === void 0) { second = null; }
                    if (ms === void 0) { ms = null; }
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual(kind, System.DateTime.getKind(dt), System.String.concat(message, "Kind"));
                    Bridge.Test.NUnit.Assert.AreEqual(ticks.toString(), System.DateTime.getTicks(dt).toString(), System.String.concat(message, "Ticks"));

                    if (System.Nullable.hasValue(year)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(year), System.DateTime.getYear(dt), System.String.concat(message, "Year"));
                    }

                    if (System.Nullable.hasValue(month)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(month), System.DateTime.getMonth(dt), System.String.concat(message, "Month"));
                    }

                    if (System.Nullable.hasValue(day)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(day), System.DateTime.getDay(dt), System.String.concat(message, "Day"));
                    }

                    if (System.Nullable.hasValue(hour)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(hour), System.DateTime.getHour(dt), System.String.concat(message, "Hour"));
                    }

                    if (System.Nullable.hasValue(minute)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(minute), System.DateTime.getMinute(dt), System.String.concat(message, "Minute"));
                    }

                    if (System.Nullable.hasValue(second)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(second), System.DateTime.getSecond(dt), System.String.concat(message, "Second"));
                    }

                    if (System.Nullable.hasValue(ms)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(ms), System.DateTime.getMillisecond(dt), System.String.concat(message, "Millisecond"));
                    }
                },
                AssertDate: function (expected, actual, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getKind(expected), System.DateTime.getKind(actual), System.String.concat(message, "Kind"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getTicks(expected).toString(), System.DateTime.getTicks(actual).toString(), System.String.concat(message, "Ticks"));

                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getYear(expected), System.DateTime.getYear(actual), System.String.concat(message, "Year"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getMonth(expected), System.DateTime.getMonth(actual), System.String.concat(message, "Month"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getDay(expected), System.DateTime.getDay(actual), System.String.concat(message, "Day"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getHour(expected), System.DateTime.getHour(actual), System.String.concat(message, "Hour"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getMinute(expected), System.DateTime.getMinute(actual), System.String.concat(message, "Minute"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getSecond(expected), System.DateTime.getSecond(actual), System.String.concat(message, "Second"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getMillisecond(expected), System.DateTime.getMillisecond(actual), System.String.concat(message, "Millisecond"));
                },
                GetOffsetString: function (adjustment) {
                    if (adjustment === void 0) { adjustment = 0; }
                    var minutes = (Newtonsoft.Json.Tests.Utilities.DateHelper.GetOffsetMinutes() + adjustment) | 0;

                    var b = minutes < 0 ? "+" : "-";
                    minutes = Math.abs(minutes);

                    var offset = minutes !== 0 ? (System.String.concat(b, System.Int32.format((((Bridge.Int.div(minutes, 60)) | 0)), "00"), ":", System.Int32.format((minutes % 60), "00"))) : "Z";

                    return offset;
                },
                GetOffsetMinutes: function () {
                    var d = System.DateTime.getDefaultValue();

                    return d.getTimezoneOffset();
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Tests.Utilities.DecimalHelper", {
        statics: {
            methods: {
                AssertIsDecimalAndEqualTo$1: function (v, d, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreStrictEqual(true, Bridge.is(v, System.Decimal), message);
                    Bridge.Test.NUnit.Assert.AreStrictEqual(System.Double.format(d), v.toString(), message);
                },
                AssertIsDecimalAndEqualTo: function (v, d, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreStrictEqual(true, Bridge.is(v, System.Decimal), message);
                    Bridge.Test.NUnit.Assert.AreStrictEqual(d.toString(), v.toString(), message);
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
});
