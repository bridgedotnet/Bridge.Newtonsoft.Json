    Bridge.define("Newtonsoft.Json.DefaultValueHandling", {
        $kind: "enum",
        statics: {
            fields: {
                Include: 0,
                Ignore: 1,
                Populate: 2,
                IgnoreAndPopulate: 3
            }
        },
        $flags: true
    });

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

    Bridge.define("Newtonsoft.Json.JsonIgnoreAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Newtonsoft.Json.JsonPropertyAttribute", {
        inherits: [System.Attribute],
        fields: {
            _nullValueHandling: null,
            _defaultValueHandling: null,
            _objectCreationHandling: null,
            _typeNameHandling: null,
            _required: null,
            _order: null
        },
        props: {
            NullValueHandling: {
                get: function () {
                    var $t;
                    return ($t = this._nullValueHandling, $t != null ? $t : 0);
                },
                set: function (value) {
                    this._nullValueHandling = value;
                }
            },
            DefaultValueHandling: {
                get: function () {
                    var $t;
                    return ($t = this._defaultValueHandling, $t != null ? $t : 0);
                },
                set: function (value) {
                    this._defaultValueHandling = value;
                }
            },
            ObjectCreationHandling: {
                get: function () {
                    var $t;
                    return ($t = this._objectCreationHandling, $t != null ? $t : 0);
                },
                set: function (value) {
                    this._objectCreationHandling = value;
                }
            },
            TypeNameHandling: {
                get: function () {
                    var $t;
                    return ($t = this._typeNameHandling, $t != null ? $t : 0);
                },
                set: function (value) {
                    this._typeNameHandling = value;
                }
            },
            Required: {
                get: function () {
                    var $t;
                    return ($t = this._required, $t != null ? $t : Newtonsoft.Json.Required.Default);
                },
                set: function (value) {
                    this._required = value;
                }
            },
            Order: {
                get: function () {
                    var $t;
                    return ($t = this._order, $t != null ? $t : Bridge.getDefaultValue(System.Int32));
                },
                set: function (value) {
                    this._order = value;
                }
            },
            PropertyName: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Attribute.ctor.call(this);
            },
            $ctor1: function (propertyName) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.PropertyName = propertyName;
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
            _defaultValueHandling: null,
            _typeNameHandling: null,
            _nullValueHandling: null,
            _objectCreationHandling: null
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
            ObjectCreationHandling: {
                get: function () {
                    var $t;
                    return ($t = this._objectCreationHandling, $t != null ? $t : 0);
                },
                set: function (value) {
                    this._objectCreationHandling = value;
                }
            },
            DefaultValueHandling: {
                get: function () {
                    var $t;
                    return ($t = this._defaultValueHandling, $t != null ? $t : 0);
                },
                set: function (value) {
                    this._defaultValueHandling = value;
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

    Bridge.define("Newtonsoft.Json.ObjectCreationHandling", {
        $kind: "enum",
        statics: {
            fields: {
                Auto: 0,
                Reuse: 1,
                Replace: 2
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Required", {
        $kind: "enum",
        statics: {
            fields: {
                Default: 0,
                AllowNull: 1,
                Always: 2,
                DisallowNull: 3
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
                    this.version = "1.4.0";
                    this.compiler = "16.5.1";
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
