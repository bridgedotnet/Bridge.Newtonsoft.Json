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
            QUnit.test("TestN504", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.TestN504);
            QUnit.test("TestN504Related", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests.TestN504Related);
            QUnit.module("Issues");
            QUnit.test("#2 - TestMetadata", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case2.TestMetadata);
            QUnit.test("#10 - TestPropertiesWithSameReferenceValue", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case10.TestPropertiesWithSameReferenceValue);
            QUnit.test("#14 - TestCaseInsensitiveMatch", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case14.TestCaseInsensitiveMatch);
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
            QUnit.test("#8 - TestGenericTypeHandling", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8.TestGenericTypeHandling);
            QUnit.test("#8 - TestGenericTypeHandlingMoreGenericLevel", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8.TestGenericTypeHandlingMoreGenericLevel);
            QUnit.test("#8 - TestGenericAndArrayTypeHandling", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8.TestGenericAndArrayTypeHandling);
            QUnit.test("#8 - TestGenericAndArrayTypeHandlingMoreLevels", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8.TestGenericAndArrayTypeHandlingMoreLevels);
            QUnit.module("JsonConstructor");
            QUnit.test("TestJsonConstructor", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests.TestJsonConstructor);
            QUnit.test("TestJsonConstructorMyOtherString", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests.TestJsonConstructorMyOtherString);
            QUnit.test("TestMultipleJsonConstructor", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests.TestMultipleJsonConstructor);
            QUnit.module("Ported Issues");
            QUnit.test("#1134 - TestJsonArrayParse", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge1134.TestJsonArrayParse);
            QUnit.test("#1438 - TestJSONParse", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge1438.TestJSONParse);
            QUnit.test("#1438 - TestJSONParseAsArray", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge1438.TestJSONParseAsArray);
            QUnit.test("#2641 - TestJsonCamelCaseForFields", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge2641.TestJsonCamelCaseForFields);
            QUnit.test("#2679 - TestTypeNameHandling", Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge2679.TestTypeNameHandling);
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

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Bridge501", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Bridge501)],
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

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case14", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case14)],
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

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case18", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case18)],
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

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.Case8", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.Issues.Case8)],
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

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests)],
        statics: {
            methods: {
                ByteArrayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ByteArrayWorks()", $t.Line = "194", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.ByteArrayWorks();
                },
                GuidWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GuidWorks()", $t.Line = "201", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.GuidWorks();
                },
                UriWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "UriWorks()", $t.Line = "208", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.UriWorks();
                },
                TypeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeWorks()", $t.Line = "223", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.TypeWorks();
                },
                CharWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CharWorks()", $t.Line = "229", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.CharWorks();
                },
                Int64Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Int64Works()", $t.Line = "235", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.Int64Works();
                },
                UInt64Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "UInt64Works()", $t.Line = "246", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.UInt64Works();
                },
                DecimalWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalWorks()", $t.Line = "257", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.DecimalWorks();
                },
                DateTimeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateTimeWorks()", $t.Line = "266", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.DateTimeWorks();
                },
                DateTimeSerializationDeserializationTurnaroundWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateTimeSerializationDeserializationTurnaroundWorks()", $t.Line = "298", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.DateTimeSerializationDeserializationTurnaroundWorks();
                },
                ArrayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ArrayWorks()", $t.Line = "326", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.ArrayWorks();
                },
                ComplexArrayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ComplexArrayWorks()", $t.Line = "343", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.ComplexArrayWorks();
                },
                EnumWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EnumWorks()", $t.Line = "367", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.EnumWorks();
                },
                IListWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListWorks()", $t.Line = "373", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.IListWorks();
                },
                IDictionaryWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IDictionaryWorks()", $t.Line = "384", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.IDictionaryWorks();
                },
                TypeWithFieldWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeWithFieldWorks()", $t.Line = "398", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.TypeWithFieldWorks();
                },
                ComplexPropertiesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ComplexPropertiesWorks()", $t.Line = "436", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.ComplexPropertiesWorks();
                },
                CamelCaseSettingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CamelCaseSettingWorks()", $t.Line = "497", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.CamelCaseSettingWorks();
                },
                IgnoreNullValueWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IgnoreNullValueWorks()", $t.Line = "509", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.IgnoreNullValueWorks();
                },
                AnonymousTypesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AnonymousTypesWorks()", $t.Line = "531", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.AnonymousTypesWorks();
                },
                TypeNameHandlingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeNameHandlingWorks()", $t.Line = "546", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.TypeNameHandlingWorks();
                },
                TestN504: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestN504()", $t.Line = "586", $t));
                    Newtonsoft.Json.Tests.DeserializationTests.TestN504();
                },
                TestN504Related: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.DeserializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.DeserializationTests, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestN504Related()", $t.Line = "593", $t));
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
        statics: {
            methods: {
                TestJsonConstructor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.JsonConstructorTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJsonConstructor()", $t.Line = "79", $t));
                    Newtonsoft.Json.Tests.JsonConstructorTests.TestJsonConstructor();
                },
                TestJsonConstructorMyOtherString: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.JsonConstructorTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestJsonConstructorMyOtherString()", $t.Line = "94", $t));
                    Newtonsoft.Json.Tests.JsonConstructorTests.TestJsonConstructorMyOtherString();
                },
                TestMultipleJsonConstructor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.JsonConstructorTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.JsonConstructorTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMultipleJsonConstructor()", $t.Line = "106", $t));
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

    Bridge.define("Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests)],
        statics: {
            methods: {
                ByteArrayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ByteArrayWorks()", $t.Line = "104", $t));
                    Newtonsoft.Json.Tests.SerializationTests.ByteArrayWorks();
                },
                GuidWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GuidWorks()", $t.Line = "111", $t));
                    Newtonsoft.Json.Tests.SerializationTests.GuidWorks();
                },
                UriWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "UriWorks()", $t.Line = "118", $t));
                    Newtonsoft.Json.Tests.SerializationTests.UriWorks();
                },
                TypeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeWorks()", $t.Line = "125", $t));
                    Newtonsoft.Json.Tests.SerializationTests.TypeWorks();
                },
                CharWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CharWorks()", $t.Line = "131", $t));
                    Newtonsoft.Json.Tests.SerializationTests.CharWorks();
                },
                Int64Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Int64Works()", $t.Line = "138", $t));
                    Newtonsoft.Json.Tests.SerializationTests.Int64Works();
                },
                UInt64Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "UInt64Works()", $t.Line = "148", $t));
                    Newtonsoft.Json.Tests.SerializationTests.UInt64Works();
                },
                DecimalWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalWorks()", $t.Line = "158", $t));
                    Newtonsoft.Json.Tests.SerializationTests.DecimalWorks();
                },
                DateTimeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateTimeWorks()", $t.Line = "177", $t));
                    Newtonsoft.Json.Tests.SerializationTests.DateTimeWorks();
                },
                ArrayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ArrayWorks()", $t.Line = "186", $t));
                    Newtonsoft.Json.Tests.SerializationTests.ArrayWorks();
                },
                EnumWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EnumWorks()", $t.Line = "199", $t));
                    Newtonsoft.Json.Tests.SerializationTests.EnumWorks();
                },
                IListWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListWorks()", $t.Line = "205", $t));
                    Newtonsoft.Json.Tests.SerializationTests.IListWorks();
                },
                IDictionaryWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IDictionaryWorks()", $t.Line = "212", $t));
                    Newtonsoft.Json.Tests.SerializationTests.IDictionaryWorks();
                },
                TypeWithFieldWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeWithFieldWorks()", $t.Line = "220", $t));
                    Newtonsoft.Json.Tests.SerializationTests.TypeWithFieldWorks();
                },
                ComplexPropertiesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ComplexPropertiesWorks()", $t.Line = "245", $t));
                    Newtonsoft.Json.Tests.SerializationTests.ComplexPropertiesWorks();
                },
                CamelCaseSettingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CamelCaseSettingWorks()", $t.Line = "266", $t));
                    Newtonsoft.Json.Tests.SerializationTests.CamelCaseSettingWorks();
                },
                IgnoreNullValueWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IgnoreNullValueWorks()", $t.Line = "277", $t));
                    Newtonsoft.Json.Tests.SerializationTests.IgnoreNullValueWorks();
                },
                TypeNameHandlingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeNameHandlingWorks()", $t.Line = "288", $t));
                    Newtonsoft.Json.Tests.SerializationTests.TypeNameHandlingWorks();
                },
                AnonymousTypesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AnonymousTypesWorks()", $t.Line = "298", $t));
                    Newtonsoft.Json.Tests.SerializationTests.AnonymousTypesWorks();
                },
                FormattingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Newtonsoft.Json.Tests.SerializationTests).BeforeTest(false, assert, Bridge.Test.Runtime.NewtonsoftJsonTestsRunner.SerializationTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormattingWorks()", $t.Line = "307", $t));
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
