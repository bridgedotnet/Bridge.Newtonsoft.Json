    Bridge.define("Newtonsoft.Json.Formatting", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Indented: 1
            }
        }
    });

    Bridge.define("Newtonsoft.Json.JsonConstructorAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Newtonsoft.Json.JsonException", {
        inherits: [System.Exception],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Exception.ctor.call(this);
            },
            $ctor1: function (message) {
                this.$initialize();
                System.Exception.ctor.call(this, message);
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.Exception.ctor.call(this, message, innerException);
            }
        }
    });

    Bridge.define("Newtonsoft.Json.JsonSerializerSettings", {
        statics: {
            fields: {
                DefaultNullValueHandling: 0,
                DefaultTypeNameHandling: 0
            },
            ctors: {
                init: function () {
                    this.DefaultNullValueHandling = Newtonsoft.Json.NullValueHandling.Include;
                    this.DefaultTypeNameHandling = Newtonsoft.Json.TypeNameHandling.None;
                }
            }
        },
        fields: {
            _typeNameHandling: null,
            _nullValueHandling: null
        },
        props: {
            NullValueHandling: {
                get: function () {
                    var $t;
                    return ($t = this._nullValueHandling, $t != null ? $t : Newtonsoft.Json.JsonSerializerSettings.DefaultNullValueHandling);
                },
                set: function (value) {
                    this._nullValueHandling = value;
                }
            },
            TypeNameHandling: {
                get: function () {
                    var $t;
                    return ($t = this._typeNameHandling, $t != null ? $t : Newtonsoft.Json.JsonSerializerSettings.DefaultTypeNameHandling);
                },
                set: function (value) {
                    this._typeNameHandling = value;
                }
            },
            ContractResolver: null
        }
    });

    Bridge.define("Newtonsoft.Json.NullValueHandling", {
        $kind: "enum",
        statics: {
            fields: {
                Include: 0,
                Ignore: 1
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Serialization.IContractResolver", {
        $kind: "interface"
    });

    Bridge.define("Newtonsoft.Json.TypeNameHandling", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Objects: 1
            }
        },
        $flags: true
    });

    Bridge.define("Newtonsoft.Json.Utils.AssemblyVersion", {
        statics: {
            fields: {
                version: null,
                compiler: null
            },
            ctors: {
                init: function () {
                    this.version = "1.3.0";
                    this.compiler = "16.5.0";
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.JsonSerializationException", {
        inherits: [Newtonsoft.Json.JsonException],
        ctors: {
            ctor: function () {
                this.$initialize();
                Newtonsoft.Json.JsonException.ctor.call(this);
            },
            $ctor1: function (message) {
                this.$initialize();
                Newtonsoft.Json.JsonException.$ctor1.call(this, message);
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                Newtonsoft.Json.JsonException.$ctor2.call(this, message, innerException);
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver", {
        inherits: [Newtonsoft.Json.Serialization.IContractResolver]
    });
