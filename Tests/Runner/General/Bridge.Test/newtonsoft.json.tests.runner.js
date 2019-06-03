Bridge.assembly("Bridge.Test.Newtonsoft.Json.Tests", function ($asm, globals) {
    

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner", {
        main: function Main () {
            Bridge.Test.Runtime.ContextHelper.Init();
            QUnit.module("Deserialization");
            QUnit.test("ByteArrayWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.ByteArrayWorks);
            QUnit.test("GuidWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.GuidWorks);
            QUnit.test("UriWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.UriWorks);
            QUnit.test("TypeWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.TypeWorks);
            QUnit.test("CharWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.CharWorks);
            QUnit.test("Int64Works", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.Int64Works);
            QUnit.test("UInt64Works", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.UInt64Works);
            QUnit.test("DecimalWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.DecimalWorks);
            QUnit.test("DateTimeWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.DateTimeWorks);
            QUnit.test("DateTimeSerializationDeserializationTurnaroundWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.DateTimeSerializationDeserializationTurnaroundWorks);
            QUnit.test("ArrayWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.ArrayWorks);
            QUnit.test("ComplexArrayWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.ComplexArrayWorks);
            QUnit.test("EnumWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.EnumWorks);
            QUnit.test("IListWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.IListWorks);
            QUnit.test("IDictionaryWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.IDictionaryWorks);
            QUnit.test("TypeWithFieldWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.TypeWithFieldWorks);
            QUnit.test("ComplexPropertiesWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.ComplexPropertiesWorks);
            QUnit.test("CamelCaseSettingWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.CamelCaseSettingWorks);
            QUnit.test("IgnoreNullValueWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.IgnoreNullValueWorks);
            QUnit.test("AnonymousTypesWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.AnonymousTypesWorks);
            QUnit.test("TypeNameHandlingWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.TypeNameHandlingWorks);
            QUnit.test("PropertyThatRequiresImplicitConversionFromBoolWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.PropertyThatRequiresImplicitConversionFromBoolWorks);
            QUnit.test("PropertyThatRequiresImplicitConversionFromIntegerWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.PropertyThatRequiresImplicitConversionFromIntegerWorks);
            QUnit.test("PropertyThatRequiresImplicitConversionFromFloatingPointNumberWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.PropertyThatRequiresImplicitConversionFromFloatingPointNumberWorks);
            QUnit.test("PropertyThatRequiresImplicitConversionFromStringWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.PropertyThatRequiresImplicitConversionFromStringWorks);
            QUnit.test("PropertyThatRequiresExplicitConversionFromBoolWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.PropertyThatRequiresExplicitConversionFromBoolWorks);
            QUnit.test("PropertyThatRequiresExplicitConversionFromIntegerWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.PropertyThatRequiresExplicitConversionFromIntegerWorks);
            QUnit.test("PropertyThatRequiresExplicitConversionFromFloatingPointNumberWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.PropertyThatRequiresExplicitConversionFromFloatingPointNumberWorks);
            QUnit.test("PropertyThatRequiresExplicitConversionFromStringWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.PropertyThatRequiresExplicitConversionFromStringWorks);
            QUnit.test("TestN504", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.TestN504);
            QUnit.test("TestN504Related", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.TestN504Related);
            QUnit.module("Issues");
            QUnit.test("#2 - TestMetadata", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case2.TestMetadata);
            QUnit.test("#10 - TestPropertiesWithSameReferenceValue", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case10.TestPropertiesWithSameReferenceValue);
            QUnit.test("#101 - Test", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case101.Test);
            QUnit.test("#106 - TestSerializationBinderInterface", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case106.TestSerializationBinderInterface);
            QUnit.test("#107 - TestJsonReplaceList", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case107.TestJsonReplaceList);
            QUnit.test("#111 - TestInterfaceCollection", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case111.TestInterfaceCollection);
            QUnit.test("#111 - TestListAndDictInterfaces", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case111.TestListAndDictInterfaces);
            QUnit.test("#112 - TestInt64", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case112.TestInt64);
            QUnit.test("#114 - TestPropertyInitInCtor", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case114.TestPropertyInitInCtor);
            QUnit.test("#115 - TestOrder", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case115.TestOrder);
            QUnit.test("#115 - TestException", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case115.TestException);
            QUnit.test("#121 - TestNullable", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case121.TestNullable);
            QUnit.test("#123 - TestSingleQuotes", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case123.TestSingleQuotes);
            QUnit.test("#126 - TestSystemVersion", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case126.TestSystemVersion);
            QUnit.test("#126 - TestVersionLikes", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case126.TestVersionLikes);
            QUnit.test("#132 - TestStructCtors", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case132.TestStructCtors);
            QUnit.test("#136 - TestTuple", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case136.TestTuple);
            QUnit.test("#138 - TestNestedList", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case138.TestNestedList);
            QUnit.test("#14 - TestCaseInsensitiveMatch", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case14.TestCaseInsensitiveMatch);
            QUnit.test("#154 - TestSerializeMemberWithExplicitOperator", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case154.TestSerializeMemberWithExplicitOperator);
            QUnit.test("#157 - TestExpectedType", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case157.TestExpectedType);
            QUnit.test("#16 - TestPopulateObject", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16.TestPopulateObject);
            QUnit.test("#16 - DeserializationBasics2", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16.DeserializationBasics2);
            QUnit.test("#16 - PopulateObjectWithHeaderComment", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16.PopulateObjectWithHeaderComment);
            QUnit.test("#16 - PopulatePerson", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16.PopulatePerson);
            QUnit.test("#16 - PopulateArray", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16.PopulateArray);
            QUnit.test("#16 - PopulateDictionary", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16.PopulateDictionary);
            QUnit.test("#18 - TestNullable", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case18.TestNullable);
            QUnit.test("#22 - TestEnumJson", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case22.TestEnumJson);
            QUnit.test("#25 - TestSerializerSettings", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case25.TestSerializerSettings);
            QUnit.test("#26 - TestInvalidJson", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case26.TestInvalidJson);
            QUnit.test("#27 - TestValueTypeProperty", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case27.TestValueTypeProperty);
            QUnit.test("#27 - TestValueTypeField", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case27.TestValueTypeField);
            QUnit.test("#34 - TestGuid", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case34.TestGuid);
            QUnit.test("#38 - TestKeyValuePair", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case38.TestKeyValuePair);
            QUnit.test("#4 - TestConstructorWithArgument", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case4.TestConstructorWithArgument);
            QUnit.test("#4 - TestConstructorWithIEnumerable", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case4.TestConstructorWithIEnumerable);
            QUnit.test("#43 - TestCultureInfo", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case43.TestCultureInfo);
            QUnit.test("#49 - TestInvalidSchema", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case49.TestInvalidSchema);
            QUnit.test("#50 - TestDeserializationConstructor", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case50.TestDeserializationConstructor);
            QUnit.test("#52 - TestObjectLiteral", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case52.TestObjectLiteral);
            QUnit.test("#63 - TestJsonIgnore", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case63.TestJsonIgnore);
            QUnit.test("#67 - TestTypeGenericSerialize", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case67.TestTypeGenericSerialize);
            QUnit.test("#68 - TestCustomIEnumerable", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case68.TestCustomIEnumerable);
            QUnit.test("#72 - TestJsonProperty", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case72.TestJsonProperty);
            QUnit.test("#72 - TestJsonPropertyOrder", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case72.TestJsonPropertyOrder);
            QUnit.test("#72 - TestJsonPropertyRequire", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case72.TestJsonPropertyRequire);
            QUnit.test("#72 - TestJsonPropertyNullValue", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case72.TestJsonPropertyNullValue);
            QUnit.test("#74 - TestCustomDictionaryKey", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case74.TestCustomDictionaryKey);
            QUnit.test("#74 - TestSimpleDictionaryKey", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case74.TestSimpleDictionaryKey);
            QUnit.test("#79 - TestCustomDictionaryKey", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case79.TestCustomDictionaryKey);
            QUnit.test("#8 - TestGenericTypeHandling", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8.TestGenericTypeHandling);
            QUnit.test("#8 - TestGenericTypeHandlingMoreGenericLevel", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8.TestGenericTypeHandlingMoreGenericLevel);
            QUnit.test("#8 - TestGenericAndArrayTypeHandling", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8.TestGenericAndArrayTypeHandling);
            QUnit.test("#8 - TestGenericAndArrayTypeHandlingMoreLevels", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8.TestGenericAndArrayTypeHandlingMoreLevels);
            QUnit.test("#81 - TestConstructors", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case81.TestConstructors);
            QUnit.test("#82 - TestNullableDeserialization", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case82.TestNullableDeserialization);
            QUnit.test("#89 - TimeSpanSerializationWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case89.TimeSpanSerializationWorks);
            QUnit.test("#93 - TestDictionary", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case93.TestDictionary);
            QUnit.test("#93 - TestAll", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case93.TestAll);
            QUnit.test("#93 - TestAuto", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case93.TestAuto);
            QUnit.test("#93 - TestArrays", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case93.TestArrays);
            QUnit.test("#94 - DateTimeOffsetSerializationAndDeserializationWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case94.DateTimeOffsetSerializationAndDeserializationWorks);
            QUnit.test("#96 - TestSerializationCallbacks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case96.TestSerializationCallbacks);
            QUnit.test("#99 - EnumAsDictionaryKeyWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case99.EnumAsDictionaryKeyWorks);
            QUnit.module("JsonConstructor");
            QUnit.test("TestJsonConstructor", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests.TestJsonConstructor);
            QUnit.test("TestJsonConstructorMyOtherString", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests.TestJsonConstructorMyOtherString);
            QUnit.test("TestMultipleJsonConstructor", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests.TestMultipleJsonConstructor);
            QUnit.module("ListOptimizations");
            QUnit.test("DeserializationWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.ListOptimizationTests.DeserializationWorks);
            QUnit.test("NoOptDeserializationWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.ListOptimizationTests.NoOptDeserializationWorks);
            QUnit.module("Ported Issues");
            QUnit.test("#1134 - TestJsonArrayParse", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge1134.TestJsonArrayParse);
            QUnit.test("#1438 - TestJSONParse", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge1438.TestJSONParse);
            QUnit.test("#1438 - TestJSONParseAsArray", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge1438.TestJSONParseAsArray);
            QUnit.test("#2641 - TestJsonCamelCaseForFields", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge2641.TestJsonCamelCaseForFields);
            QUnit.test("#2679 - TestTypeNameHandling", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge2679.TestTypeNameHandling);
            QUnit.test("#3571 - ElaborateTest", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge3571.ElaborateTest);
            QUnit.test("#501 - TestUseCase", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge501.TestUseCase);
            QUnit.module("Serialization");
            QUnit.test("ByteArrayWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.ByteArrayWorks);
            QUnit.test("GuidWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.GuidWorks);
            QUnit.test("UriWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.UriWorks);
            QUnit.test("TypeWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.TypeWorks);
            QUnit.test("CharWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.CharWorks);
            QUnit.test("Int64Works", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.Int64Works);
            QUnit.test("UInt64Works", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.UInt64Works);
            QUnit.test("DecimalWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.DecimalWorks);
            QUnit.test("DateTimeWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.DateTimeWorks);
            QUnit.test("ArrayWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.ArrayWorks);
            QUnit.test("EnumWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.EnumWorks);
            QUnit.test("IListWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.IListWorks);
            QUnit.test("IDictionaryWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.IDictionaryWorks);
            QUnit.test("TypeWithFieldWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.TypeWithFieldWorks);
            QUnit.test("ComplexPropertiesWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.ComplexPropertiesWorks);
            QUnit.test("CamelCaseSettingWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.CamelCaseSettingWorks);
            QUnit.test("IgnoreNullValueWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.IgnoreNullValueWorks);
            QUnit.test("TypeNameHandlingWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.TypeNameHandlingWorks);
            QUnit.test("AnonymousTypesWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.AnonymousTypesWorks);
            QUnit.test("FormattingWorks", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests.FormattingWorks);
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge1134", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge1134)],
        $kind: "nested class",
        statics: {
            methods: {
                TestJsonArrayParse: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge1134).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge1134, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJsonArrayParse()", $t.Line = "9", $t));
                    Newtonsoft.Json.Tests.Issues.Bridge1134.TestJsonArrayParse();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Bridge1134", $t.File = "Newtonsoft.Json.Tests\\Issues\\Ported\\N1134.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge1438", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge1438)],
        $kind: "nested class",
        statics: {
            methods: {
                TestJSONParse: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge1438).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge1438, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJSONParse()", $t.Line = "24", $t));
                    Newtonsoft.Json.Tests.Issues.Bridge1438.TestJSONParse();
                },
                TestJSONParseAsArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge1438).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge1438, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJSONParseAsArray()", $t.Line = "38", $t));
                    Newtonsoft.Json.Tests.Issues.Bridge1438.TestJSONParseAsArray();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Bridge1438", $t.File = "Newtonsoft.Json.Tests\\Issues\\Ported\\N1438.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge2641", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge2641)],
        $kind: "nested class",
        statics: {
            methods: {
                TestJsonCamelCaseForFields: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge2641).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge2641, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJsonCamelCaseForFields()", $t.Line = "18", $t));
                    Newtonsoft.Json.Tests.Issues.Bridge2641.TestJsonCamelCaseForFields();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Bridge2641", $t.File = "Newtonsoft.Json.Tests\\Issues\\Ported\\N2641.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge2679", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge2679)],
        $kind: "nested class",
        statics: {
            methods: {
                TestTypeNameHandling: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge2679).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge2679, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTypeNameHandling()", $t.Line = "38", $t));
                    Newtonsoft.Json.Tests.Issues.Bridge2679.TestTypeNameHandling();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Bridge2679", $t.File = "Newtonsoft.Json.Tests\\Issues\\Ported\\N2679.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge3571", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge3571)],
        $kind: "nested class",
        statics: {
            methods: {
                ElaborateTest: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge3571).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge3571, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ElaborateTest()", $t.Line = "44", $t));
                    Newtonsoft.Json.Tests.Issues.Bridge3571.ElaborateTest();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Bridge3571", $t.File = "Newtonsoft.Json.Tests\\Issues\\Ported\\N3571.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge501", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge501)],
        $kind: "nested class",
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge501).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge501, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "25", $t));
                    Newtonsoft.Json.Tests.Issues.Bridge501.TestUseCase();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Bridge501", $t.File = "Newtonsoft.Json.Tests\\Issues\\Ported\\N501.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case10", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case10)],
        $kind: "nested class",
        statics: {
            methods: {
                TestPropertiesWithSameReferenceValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case10).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case10, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertiesWithSameReferenceValue()", $t.Line = "26", $t));
                    Newtonsoft.Json.Tests.Issues.Case10.TestPropertiesWithSameReferenceValue();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case10", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case010.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case101", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case101)],
        $kind: "nested class",
        statics: {
            methods: {
                Test: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case101).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case101, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Test()", $t.Line = "23", $t));
                    Newtonsoft.Json.Tests.Issues.Case101.Test();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case101", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case101.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case106", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case106)],
        $kind: "nested class",
        statics: {
            methods: {
                TestSerializationBinderInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case106).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case106, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSerializationBinderInterface()", $t.Line = "49", $t));
                    Newtonsoft.Json.Tests.Issues.Case106.TestSerializationBinderInterface();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case106", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case106.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case107", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case107)],
        $kind: "nested class",
        statics: {
            methods: {
                TestJsonReplaceList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case107).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case107, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJsonReplaceList()", $t.Line = "26", $t));
                    Newtonsoft.Json.Tests.Issues.Case107.TestJsonReplaceList();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case107", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case107.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case111", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case111)],
        $kind: "nested class",
        statics: {
            methods: {
                TestInterfaceCollection: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case111).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case111, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInterfaceCollection()", $t.Line = "47", $t));
                    Newtonsoft.Json.Tests.Issues.Case111.TestInterfaceCollection();
                },
                TestListAndDictInterfaces: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case111).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case111, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestListAndDictInterfaces()", $t.Line = "87", $t));
                    Newtonsoft.Json.Tests.Issues.Case111.TestListAndDictInterfaces();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case111", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case111.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case112", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case112)],
        $kind: "nested class",
        statics: {
            methods: {
                TestInt64: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case112).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case112, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInt64()", $t.Line = "15", $t));
                    Newtonsoft.Json.Tests.Issues.Case112.TestInt64();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case112", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case112.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case114", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case114)],
        $kind: "nested class",
        statics: {
            methods: {
                TestPropertyInitInCtor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case114).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case114, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyInitInCtor()", $t.Line = "42", $t));
                    Newtonsoft.Json.Tests.Issues.Case114.TestPropertyInitInCtor();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case114", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case114.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case115", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case115)],
        $kind: "nested class",
        statics: {
            methods: {
                TestOrder: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case115).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case115, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOrder()", $t.Line = "34", $t));
                    Newtonsoft.Json.Tests.Issues.Case115.TestOrder();
                },
                TestException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case115).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case115, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestException()", $t.Line = "50", $t));
                    Newtonsoft.Json.Tests.Issues.Case115.TestException();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case115", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case115.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case121", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case121)],
        $kind: "nested class",
        statics: {
            methods: {
                TestNullable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case121).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case121, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNullable()", $t.Line = "28", $t));
                    Newtonsoft.Json.Tests.Issues.Case121.TestNullable();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case121", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case121.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case123", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case123)],
        $kind: "nested class",
        statics: {
            methods: {
                TestSingleQuotes: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case123).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case123, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSingleQuotes()", $t.Line = "31", $t));
                    Newtonsoft.Json.Tests.Issues.Case123.TestSingleQuotes();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case123", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case123.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case126", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case126)],
        $kind: "nested class",
        statics: {
            methods: {
                TestSystemVersion: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case126).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case126, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSystemVersion()", $t.Line = "74", $t));
                    Newtonsoft.Json.Tests.Issues.Case126.TestSystemVersion();
                },
                TestVersionLikes: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case126).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case126, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestVersionLikes()", $t.Line = "87", $t));
                    Newtonsoft.Json.Tests.Issues.Case126.TestVersionLikes();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case126", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case126.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case132", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case132)],
        $kind: "nested class",
        statics: {
            methods: {
                TestStructCtors: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case132).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case132, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStructCtors()", $t.Line = "133", $t));
                    Newtonsoft.Json.Tests.Issues.Case132.TestStructCtors();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case132", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case132.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case136", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case136)],
        $kind: "nested class",
        statics: {
            methods: {
                TestTuple: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case136).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case136, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTuple()", $t.Line = "19", $t));
                    Newtonsoft.Json.Tests.Issues.Case136.TestTuple();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case136", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case136.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case138", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case138)],
        $kind: "nested class",
        statics: {
            methods: {
                TestNestedList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case138).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case138, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNestedList()", $t.Line = "91", $t));
                    Newtonsoft.Json.Tests.Issues.Case138.TestNestedList();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case138", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case138.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case14", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case14)],
        $kind: "nested class",
        statics: {
            methods: {
                TestCaseInsensitiveMatch: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case14).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case14, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCaseInsensitiveMatch()", $t.Line = "23", $t));
                    Newtonsoft.Json.Tests.Issues.Case14.TestCaseInsensitiveMatch();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case14", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case014.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case154", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case154)],
        $kind: "nested class",
        statics: {
            methods: {
                TestSerializeMemberWithExplicitOperator: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case154).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case154, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSerializeMemberWithExplicitOperator()", $t.Line = "44", $t));
                    Newtonsoft.Json.Tests.Issues.Case154.TestSerializeMemberWithExplicitOperator();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case154", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case154.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case157", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case157)],
        $kind: "nested class",
        statics: {
            methods: {
                TestExpectedType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case157).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case157, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExpectedType()", $t.Line = "37", $t));
                    Newtonsoft.Json.Tests.Issues.Case157.TestExpectedType();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case157", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case157.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case16)],
        $kind: "nested class",
        statics: {
            methods: {
                TestPopulateObject: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case16).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPopulateObject()", $t.Line = "44", $t));
                    Newtonsoft.Json.Tests.Issues.Case16.TestPopulateObject();
                },
                DeserializationBasics2: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case16).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DeserializationBasics2()", $t.Line = "69", $t));
                    Newtonsoft.Json.Tests.Issues.Case16.DeserializationBasics2();
                },
                PopulateObjectWithHeaderComment: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case16).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PopulateObjectWithHeaderComment()", $t.Line = "85", $t));
                    Newtonsoft.Json.Tests.Issues.Case16.PopulateObjectWithHeaderComment();
                },
                PopulatePerson: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case16).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PopulatePerson()", $t.Line = "96", $t));
                    Newtonsoft.Json.Tests.Issues.Case16.PopulatePerson();
                },
                PopulateArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case16).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PopulateArray()", $t.Line = "106", $t));
                    Newtonsoft.Json.Tests.Issues.Case16.PopulateArray();
                },
                PopulateDictionary: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case16).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case16, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PopulateDictionary()", $t.Line = "119", $t));
                    Newtonsoft.Json.Tests.Issues.Case16.PopulateDictionary();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case16", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case016.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case18", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case18)],
        $kind: "nested class",
        statics: {
            methods: {
                TestNullable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case18).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case18, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNullable()", $t.Line = "35", $t));
                    Newtonsoft.Json.Tests.Issues.Case18.TestNullable();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case18", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case018.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case2", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Case2)],
        $kind: "nested class",
        statics: {
            methods: {
                TestMetadata: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Case2).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case2, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMetadata()", $t.Line = "45", $t));
                    Newtonsoft.Json.Tests.Case2.TestMetadata();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Case2", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case002.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case22", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case22)],
        $kind: "nested class",
        statics: {
            methods: {
                TestEnumJson: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case22).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case22, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEnumJson()", $t.Line = "28", $t));
                    Newtonsoft.Json.Tests.Issues.Case22.TestEnumJson();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case22", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case022.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case25", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case25)],
        $kind: "nested class",
        statics: {
            methods: {
                TestSerializerSettings: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case25).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case25, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSerializerSettings()", $t.Line = "16", $t));
                    Newtonsoft.Json.Tests.Issues.Case25.TestSerializerSettings();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case25", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case025.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case26", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case26)],
        $kind: "nested class",
        statics: {
            methods: {
                TestInvalidJson: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case26).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case26, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInvalidJson()", $t.Line = "25", $t));
                    Newtonsoft.Json.Tests.Issues.Case26.TestInvalidJson();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case26", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case026.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case27", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case27)],
        $kind: "nested class",
        statics: {
            methods: {
                TestValueTypeProperty: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case27).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case27, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestValueTypeProperty()", $t.Line = "29", $t));
                    Newtonsoft.Json.Tests.Issues.Case27.TestValueTypeProperty();
                },
                TestValueTypeField: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case27).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case27, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestValueTypeField()", $t.Line = "45", $t));
                    Newtonsoft.Json.Tests.Issues.Case27.TestValueTypeField();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case27", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case027.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case34", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case34)],
        $kind: "nested class",
        statics: {
            methods: {
                TestGuid: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case34).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case34, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGuid()", $t.Line = "29", $t));
                    Newtonsoft.Json.Tests.Issues.Case34.TestGuid();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case34", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case034.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case38", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case38)],
        $kind: "nested class",
        statics: {
            methods: {
                TestKeyValuePair: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case38).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case38, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestKeyValuePair()", $t.Line = "10", $t));
                    Newtonsoft.Json.Tests.Issues.Case38.TestKeyValuePair();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case38", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case038.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case4", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case4)],
        $kind: "nested class",
        statics: {
            methods: {
                TestConstructorWithArgument: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case4).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case4, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConstructorWithArgument()", $t.Line = "53", $t));
                    Newtonsoft.Json.Tests.Issues.Case4.TestConstructorWithArgument();
                },
                TestConstructorWithIEnumerable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case4).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case4, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConstructorWithIEnumerable()", $t.Line = "63", $t));
                    Newtonsoft.Json.Tests.Issues.Case4.TestConstructorWithIEnumerable();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case4", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case004.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case43", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case43)],
        $kind: "nested class",
        statics: {
            methods: {
                TestCultureInfo: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case43).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case43, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCultureInfo()", $t.Line = "11", $t));
                    Newtonsoft.Json.Tests.Issues.Case43.TestCultureInfo();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case43", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case043.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case49", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case49)],
        $kind: "nested class",
        statics: {
            methods: {
                TestInvalidSchema: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case49).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case49, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInvalidSchema()", $t.Line = "17", $t));
                    Newtonsoft.Json.Tests.Issues.Case49.TestInvalidSchema();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case49", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case049.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case50", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case50)],
        $kind: "nested class",
        statics: {
            methods: {
                TestDeserializationConstructor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case50).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case50, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDeserializationConstructor()", $t.Line = "83", $t));
                    Newtonsoft.Json.Tests.Issues.Case50.TestDeserializationConstructor();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case50", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case050.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case52", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case52)],
        $kind: "nested class",
        statics: {
            methods: {
                TestObjectLiteral: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case52).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case52, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestObjectLiteral()", $t.Line = "24", $t));
                    Newtonsoft.Json.Tests.Issues.Case52.TestObjectLiteral();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case52", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case052.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case63", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case63)],
        $kind: "nested class",
        statics: {
            methods: {
                TestJsonIgnore: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case63).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case63, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJsonIgnore()", $t.Line = "36", $t));
                    Newtonsoft.Json.Tests.Issues.Case63.TestJsonIgnore();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case63", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case063.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case67", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case67)],
        $kind: "nested class",
        statics: {
            methods: {
                TestTypeGenericSerialize: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case67).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case67, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTypeGenericSerialize()", $t.Line = "94", $t));
                    Newtonsoft.Json.Tests.Issues.Case67.TestTypeGenericSerialize();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case67", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case067.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case68", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case68)],
        $kind: "nested class",
        statics: {
            methods: {
                TestCustomIEnumerable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case68).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case68, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCustomIEnumerable()", $t.Line = "81", $t));
                    Newtonsoft.Json.Tests.Issues.Case68.TestCustomIEnumerable();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case68", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case068.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case72", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case72)],
        $kind: "nested class",
        statics: {
            methods: {
                TestJsonProperty: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case72).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case72, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJsonProperty()", $t.Line = "59", $t));
                    Newtonsoft.Json.Tests.Issues.Case72.TestJsonProperty();
                },
                TestJsonPropertyOrder: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case72).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case72, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJsonPropertyOrder()", $t.Line = "73", $t));
                    Newtonsoft.Json.Tests.Issues.Case72.TestJsonPropertyOrder();
                },
                TestJsonPropertyRequire: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case72).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case72, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJsonPropertyRequire()", $t.Line = "89", $t));
                    Newtonsoft.Json.Tests.Issues.Case72.TestJsonPropertyRequire();
                },
                TestJsonPropertyNullValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case72).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case72, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJsonPropertyNullValue()", $t.Line = "110", $t));
                    Newtonsoft.Json.Tests.Issues.Case72.TestJsonPropertyNullValue();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case72", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case072.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case74", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case74)],
        $kind: "nested class",
        statics: {
            methods: {
                TestCustomDictionaryKey: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case74).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case74, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCustomDictionaryKey()", $t.Line = "61", $t));
                    Newtonsoft.Json.Tests.Issues.Case74.TestCustomDictionaryKey();
                },
                TestSimpleDictionaryKey: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case74).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case74, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSimpleDictionaryKey()", $t.Line = "76", $t));
                    Newtonsoft.Json.Tests.Issues.Case74.TestSimpleDictionaryKey();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case74", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case074.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case79", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case79)],
        $kind: "nested class",
        statics: {
            methods: {
                TestCustomDictionaryKey: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case79).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case79, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCustomDictionaryKey()", $t.Line = "20", $t));
                    Newtonsoft.Json.Tests.Issues.Case79.TestCustomDictionaryKey();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case79", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case079.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case8)],
        $kind: "nested class",
        statics: {
            methods: {
                TestGenericTypeHandling: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case8).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericTypeHandling()", $t.Line = "57", $t));
                    Newtonsoft.Json.Tests.Issues.Case8.TestGenericTypeHandling();
                },
                TestGenericTypeHandlingMoreGenericLevel: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case8).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericTypeHandlingMoreGenericLevel()", $t.Line = "89", $t));
                    Newtonsoft.Json.Tests.Issues.Case8.TestGenericTypeHandlingMoreGenericLevel();
                },
                TestGenericAndArrayTypeHandling: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case8).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericAndArrayTypeHandling()", $t.Line = "130", $t));
                    Newtonsoft.Json.Tests.Issues.Case8.TestGenericAndArrayTypeHandling();
                },
                TestGenericAndArrayTypeHandlingMoreLevels: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case8).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericAndArrayTypeHandlingMoreLevels()", $t.Line = "172", $t));
                    Newtonsoft.Json.Tests.Issues.Case8.TestGenericAndArrayTypeHandlingMoreLevels();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case8", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case008.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case81", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case81)],
        $kind: "nested class",
        statics: {
            methods: {
                TestConstructors: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case81).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case81, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConstructors()", $t.Line = "97", $t));
                    Newtonsoft.Json.Tests.Issues.Case81.TestConstructors();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case81", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case081.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case82", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case82)],
        $kind: "nested class",
        statics: {
            methods: {
                TestNullableDeserialization: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case82).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case82, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNullableDeserialization()", $t.Line = "37", $t));
                    Newtonsoft.Json.Tests.Issues.Case82.TestNullableDeserialization();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case82", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case082.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case89", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case89)],
        $kind: "nested class",
        statics: {
            methods: {
                TimeSpanSerializationWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case89).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case89, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TimeSpanSerializationWorks()", $t.Line = "14", $t));
                    Newtonsoft.Json.Tests.Issues.Case89.TimeSpanSerializationWorks();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case89", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case089.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case93", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case93)],
        $kind: "nested class",
        statics: {
            methods: {
                TestDictionary: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case93).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case93, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDictionary()", $t.Line = "36", $t));
                    Newtonsoft.Json.Tests.Issues.Case93.TestDictionary();
                },
                TestAll: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case93).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case93, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAll()", $t.Line = "51", $t));
                    Newtonsoft.Json.Tests.Issues.Case93.TestAll();
                },
                TestAuto: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case93).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case93, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAuto()", $t.Line = "72", $t));
                    Newtonsoft.Json.Tests.Issues.Case93.TestAuto();
                },
                TestArrays: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case93).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case93, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArrays()", $t.Line = "93", $t));
                    Newtonsoft.Json.Tests.Issues.Case93.TestArrays();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case93", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case093.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case94", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case94)],
        $kind: "nested class",
        statics: {
            methods: {
                DateTimeOffsetSerializationAndDeserializationWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case94).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case94, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateTimeOffsetSerializationAndDeserializationWorks()", $t.Line = "14", $t));
                    Newtonsoft.Json.Tests.Issues.Case94.DateTimeOffsetSerializationAndDeserializationWorks();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case94", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case094.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case96", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case96)],
        $kind: "nested class",
        statics: {
            methods: {
                TestSerializationCallbacks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case96).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case96, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSerializationCallbacks()", $t.Line = "66", $t));
                    Newtonsoft.Json.Tests.Issues.Case96.TestSerializationCallbacks();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case96", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case096.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case99", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case99)],
        $kind: "nested class",
        statics: {
            methods: {
                EnumAsDictionaryKeyWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case99).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case99, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EnumAsDictionaryKeyWorks()", $t.Line = "20", $t));
                    Newtonsoft.Json.Tests.Issues.Case99.EnumAsDictionaryKeyWorks();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.Issues.Case99", $t.File = "Newtonsoft.Json.Tests\\Issues\\0100\\Case099.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests)],
        $kind: "nested class",
        statics: {
            methods: {
                ByteArrayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ByteArrayWorks()", $t.Line = "237", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.ByteArrayWorks();
                },
                GuidWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GuidWorks()", $t.Line = "244", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.GuidWorks();
                },
                UriWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "UriWorks()", $t.Line = "251", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.UriWorks();
                },
                TypeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeWorks()", $t.Line = "266", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.TypeWorks();
                },
                CharWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CharWorks()", $t.Line = "272", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.CharWorks();
                },
                Int64Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Int64Works()", $t.Line = "278", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.Int64Works();
                },
                UInt64Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "UInt64Works()", $t.Line = "289", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.UInt64Works();
                },
                DecimalWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalWorks()", $t.Line = "300", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.DecimalWorks();
                },
                DateTimeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateTimeWorks()", $t.Line = "309", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.DateTimeWorks();
                },
                DateTimeSerializationDeserializationTurnaroundWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateTimeSerializationDeserializationTurnaroundWorks()", $t.Line = "349", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.DateTimeSerializationDeserializationTurnaroundWorks();
                },
                ArrayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ArrayWorks()", $t.Line = "377", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.ArrayWorks();
                },
                ComplexArrayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ComplexArrayWorks()", $t.Line = "394", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.ComplexArrayWorks();
                },
                EnumWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EnumWorks()", $t.Line = "418", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.EnumWorks();
                },
                IListWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListWorks()", $t.Line = "424", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.IListWorks();
                },
                IDictionaryWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IDictionaryWorks()", $t.Line = "435", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.IDictionaryWorks();
                },
                TypeWithFieldWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeWithFieldWorks()", $t.Line = "449", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.TypeWithFieldWorks();
                },
                ComplexPropertiesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ComplexPropertiesWorks()", $t.Line = "487", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.ComplexPropertiesWorks();
                },
                CamelCaseSettingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CamelCaseSettingWorks()", $t.Line = "548", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.CamelCaseSettingWorks();
                },
                IgnoreNullValueWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IgnoreNullValueWorks()", $t.Line = "560", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.IgnoreNullValueWorks();
                },
                AnonymousTypesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AnonymousTypesWorks()", $t.Line = "582", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.AnonymousTypesWorks();
                },
                TypeNameHandlingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeNameHandlingWorks()", $t.Line = "597", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.TypeNameHandlingWorks();
                },
                PropertyThatRequiresImplicitConversionFromBoolWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PropertyThatRequiresImplicitConversionFromBoolWorks()", $t.Line = "637", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.PropertyThatRequiresImplicitConversionFromBoolWorks();
                },
                PropertyThatRequiresImplicitConversionFromIntegerWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PropertyThatRequiresImplicitConversionFromIntegerWorks()", $t.Line = "645", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.PropertyThatRequiresImplicitConversionFromIntegerWorks();
                },
                PropertyThatRequiresImplicitConversionFromFloatingPointNumberWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PropertyThatRequiresImplicitConversionFromFloatingPointNumberWorks()", $t.Line = "653", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.PropertyThatRequiresImplicitConversionFromFloatingPointNumberWorks();
                },
                PropertyThatRequiresImplicitConversionFromStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PropertyThatRequiresImplicitConversionFromStringWorks()", $t.Line = "661", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.PropertyThatRequiresImplicitConversionFromStringWorks();
                },
                PropertyThatRequiresExplicitConversionFromBoolWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PropertyThatRequiresExplicitConversionFromBoolWorks()", $t.Line = "669", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.PropertyThatRequiresExplicitConversionFromBoolWorks();
                },
                PropertyThatRequiresExplicitConversionFromIntegerWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PropertyThatRequiresExplicitConversionFromIntegerWorks()", $t.Line = "677", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.PropertyThatRequiresExplicitConversionFromIntegerWorks();
                },
                PropertyThatRequiresExplicitConversionFromFloatingPointNumberWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PropertyThatRequiresExplicitConversionFromFloatingPointNumberWorks()", $t.Line = "685", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.PropertyThatRequiresExplicitConversionFromFloatingPointNumberWorks();
                },
                PropertyThatRequiresExplicitConversionFromStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PropertyThatRequiresExplicitConversionFromStringWorks()", $t.Line = "693", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.PropertyThatRequiresExplicitConversionFromStringWorks();
                },
                TestN504: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestN504()", $t.Line = "701", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.TestN504();
                },
                TestN504Related: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestN504Related()", $t.Line = "708", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.TestN504Related();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.DeserializationTests", $t.File = "Newtonsoft.Json.Tests\\Tests\\DeserializationTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.JsonConstructorTests)],
        $kind: "nested class",
        statics: {
            methods: {
                TestJsonConstructor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.JsonConstructorTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJsonConstructor()", $t.Line = "80", $t));
                    Newtonsoft.Json.Tests.JsonConstructorTests.TestJsonConstructor();
                },
                TestJsonConstructorMyOtherString: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.JsonConstructorTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJsonConstructorMyOtherString()", $t.Line = "95", $t));
                    Newtonsoft.Json.Tests.JsonConstructorTests.TestJsonConstructorMyOtherString();
                },
                TestMultipleJsonConstructor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.JsonConstructorTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMultipleJsonConstructor()", $t.Line = "107", $t));
                    Newtonsoft.Json.Tests.JsonConstructorTests.TestMultipleJsonConstructor();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.JsonConstructorTests", $t.File = "Newtonsoft.Json.Tests\\Tests\\JsonConstructorTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.ListOptimizationTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.ListOptimizationTests)],
        $kind: "nested class",
        statics: {
            methods: {
                DeserializationWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.ListOptimizationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.ListOptimizationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DeserializationWorks()", $t.Line = "16", $t));
                    Newtonsoft.Json.Tests.ListOptimizationTests.DeserializationWorks();
                },
                NoOptDeserializationWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.ListOptimizationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.ListOptimizationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NoOptDeserializationWorks()", $t.Line = "40", $t));
                    Newtonsoft.Json.Tests.ListOptimizationTests.NoOptDeserializationWorks();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.ListOptimizationTests", $t.File = "Newtonsoft.Json.Tests\\Tests\\ListOptimizationTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests)],
        $kind: "nested class",
        statics: {
            methods: {
                ByteArrayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ByteArrayWorks()", $t.Line = "105", $t));
                    Newtonsoft.Json.Tests.SerializationTests.ByteArrayWorks();
                },
                GuidWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GuidWorks()", $t.Line = "112", $t));
                    Newtonsoft.Json.Tests.SerializationTests.GuidWorks();
                },
                UriWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "UriWorks()", $t.Line = "119", $t));
                    Newtonsoft.Json.Tests.SerializationTests.UriWorks();
                },
                TypeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeWorks()", $t.Line = "126", $t));
                    Newtonsoft.Json.Tests.SerializationTests.TypeWorks();
                },
                CharWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CharWorks()", $t.Line = "132", $t));
                    Newtonsoft.Json.Tests.SerializationTests.CharWorks();
                },
                Int64Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Int64Works()", $t.Line = "139", $t));
                    Newtonsoft.Json.Tests.SerializationTests.Int64Works();
                },
                UInt64Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "UInt64Works()", $t.Line = "149", $t));
                    Newtonsoft.Json.Tests.SerializationTests.UInt64Works();
                },
                DecimalWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalWorks()", $t.Line = "159", $t));
                    Newtonsoft.Json.Tests.SerializationTests.DecimalWorks();
                },
                DateTimeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateTimeWorks()", $t.Line = "178", $t));
                    Newtonsoft.Json.Tests.SerializationTests.DateTimeWorks();
                },
                ArrayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ArrayWorks()", $t.Line = "187", $t));
                    Newtonsoft.Json.Tests.SerializationTests.ArrayWorks();
                },
                EnumWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EnumWorks()", $t.Line = "200", $t));
                    Newtonsoft.Json.Tests.SerializationTests.EnumWorks();
                },
                IListWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListWorks()", $t.Line = "206", $t));
                    Newtonsoft.Json.Tests.SerializationTests.IListWorks();
                },
                IDictionaryWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IDictionaryWorks()", $t.Line = "213", $t));
                    Newtonsoft.Json.Tests.SerializationTests.IDictionaryWorks();
                },
                TypeWithFieldWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeWithFieldWorks()", $t.Line = "221", $t));
                    Newtonsoft.Json.Tests.SerializationTests.TypeWithFieldWorks();
                },
                ComplexPropertiesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ComplexPropertiesWorks()", $t.Line = "246", $t));
                    Newtonsoft.Json.Tests.SerializationTests.ComplexPropertiesWorks();
                },
                CamelCaseSettingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CamelCaseSettingWorks()", $t.Line = "267", $t));
                    Newtonsoft.Json.Tests.SerializationTests.CamelCaseSettingWorks();
                },
                IgnoreNullValueWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IgnoreNullValueWorks()", $t.Line = "278", $t));
                    Newtonsoft.Json.Tests.SerializationTests.IgnoreNullValueWorks();
                },
                TypeNameHandlingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeNameHandlingWorks()", $t.Line = "289", $t));
                    Newtonsoft.Json.Tests.SerializationTests.TypeNameHandlingWorks();
                },
                AnonymousTypesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AnonymousTypesWorks()", $t.Line = "299", $t));
                    Newtonsoft.Json.Tests.SerializationTests.AnonymousTypesWorks();
                },
                FormattingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormattingWorks()", $t.Line = "308", $t));
                    Newtonsoft.Json.Tests.SerializationTests.FormattingWorks();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Newtonsoft.Json.Tests", $t.ClassName = "Newtonsoft.Json.Tests.SerializationTests", $t.File = "Newtonsoft.Json.Tests\\Tests\\SerializationTests.cs", $t);
                }
                return this.context;
            }
        }
    });
});
