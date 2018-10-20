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
            _objectCreationHandling: null,
            _serializationBinder: null
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
            ContractResolver: null,
            SerializationBinder: {
                get: function () {
                    return this._serializationBinder || Newtonsoft.Json.Serialization.DefaultSerializationBinder.Instance;
                },
                set: function (value) {
                    this._serializationBinder = value;
                }
            }
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

    Bridge.define("Newtonsoft.Json.Serialization.ISerializationBinder", {
        $kind: "interface"
    });

    Bridge.define("Newtonsoft.Json.TypeNameHandling", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Objects: 1,
                Arrays: 2,
                All: 3,
                Auto: 4
            }
        },
        $flags: true
    });

    Bridge.define("Newtonsoft.Json.Utilities.ReflectionUtils", {
        statics: {
            methods: {
                GetFullyQualifiedTypeName: function (t, binder) {
                    if (binder != null) {
                        var assemblyName = { };
                        var typeName = { };
                        binder.Newtonsoft$Json$Serialization$ISerializationBinder$BindToName(t, assemblyName, typeName);
                        return (typeName.v || "") + ((assemblyName.v == null ? "" : ", " + (assemblyName.v || "")) || "");
                    }

                    return Bridge.Reflection.getTypeQName(t);
                },
                SplitFullyQualifiedTypeName: function (fullyQualifiedTypeName) {
                    var assemblyDelimiterIndex = Newtonsoft.Json.Utilities.ReflectionUtils.GetAssemblyDelimiterIndex(fullyQualifiedTypeName);

                    var typeName;
                    var assemblyName;

                    if (assemblyDelimiterIndex != null) {
                        typeName = Newtonsoft.Json.Utilities.StringUtils.Trim(fullyQualifiedTypeName, 0, System.Nullable.getValueOrDefault(assemblyDelimiterIndex, 0));
                        assemblyName = Newtonsoft.Json.Utilities.StringUtils.Trim(fullyQualifiedTypeName, ((System.Nullable.getValueOrDefault(assemblyDelimiterIndex, 0) + 1) | 0), ((((fullyQualifiedTypeName.length - System.Nullable.getValueOrDefault(assemblyDelimiterIndex, 0)) | 0) - 1) | 0));
                    } else {
                        typeName = fullyQualifiedTypeName;
                        assemblyName = null;
                    }

                    return new Newtonsoft.Json.Utilities.TypeNameKey.$ctor1(assemblyName, typeName);
                },
                GetAssemblyDelimiterIndex: function (fullyQualifiedTypeName) {
                    // we need to get the first comma following all surrounded in brackets because of generic types
                    // e.g. System.Collections.Generic.Dictionary`2[[System.String, mscorlib,Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.String, mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089
                    var scope = 0;
                    for (var i = 0; i < fullyQualifiedTypeName.length; i = (i + 1) | 0) {
                        var current = fullyQualifiedTypeName.charCodeAt(i);
                        switch (current) {
                            case 91: 
                                scope = (scope + 1) | 0;
                                break;
                            case 93: 
                                scope = (scope - 1) | 0;
                                break;
                            case 44: 
                                if (scope === 0) {
                                    return i;
                                }
                                break;
                        }
                    }

                    return null;
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Utilities.StringUtils", {
        statics: {
            methods: {
                FormatWith: function (format, provider, arg0) {
                    return Newtonsoft.Json.Utilities.StringUtils.FormatWith$4(format, provider, System.Array.init([arg0], System.Object));
                },
                FormatWith$1: function (format, provider, arg0, arg1) {
                    return Newtonsoft.Json.Utilities.StringUtils.FormatWith$4(format, provider, System.Array.init([arg0, arg1], System.Object));
                },
                FormatWith$2: function (format, provider, arg0, arg1, arg2) {
                    return Newtonsoft.Json.Utilities.StringUtils.FormatWith$4(format, provider, System.Array.init([arg0, arg1, arg2], System.Object));
                },
                FormatWith$3: function (format, provider, arg0, arg1, arg2, arg3) {
                    return Newtonsoft.Json.Utilities.StringUtils.FormatWith$4(format, provider, System.Array.init([arg0, arg1, arg2, arg3], System.Object));
                },
                FormatWith$4: function (format, provider, args) {
                    if (args === void 0) { args = []; }
                    // leave this a private to force code to use an explicit overload
                    // avoids stack memory being reserved for the object array
                    Newtonsoft.Json.Utilities.ValidationUtils.ArgumentNotNull(format, "format");

                    return System.String.formatProvider.apply(System.String, [provider, format].concat(args));
                },
                Trim: function (s, start, length) {
                    // References: https://referencesource.microsoft.com/#mscorlib/system/string.cs,2691
                    // https://referencesource.microsoft.com/#mscorlib/system/string.cs,1226
                    if (s == null) {
                        throw new System.ArgumentNullException.ctor();
                    }
                    if (start < 0) {
                        throw new System.ArgumentOutOfRangeException.$ctor1("start");
                    }
                    if (length < 0) {
                        throw new System.ArgumentOutOfRangeException.$ctor1("length");
                    }
                    var end = (((start + length) | 0) - 1) | 0;
                    if (end >= s.length) {
                        throw new System.ArgumentOutOfRangeException.$ctor1("length");
                    }
                    for (; start < end; start = (start + 1) | 0) {
                        if (!System.Char.isWhiteSpace(String.fromCharCode(s.charCodeAt(start)))) {
                            break;
                        }
                    }
                    for (; end >= start; end = (end - 1) | 0) {
                        if (!System.Char.isWhiteSpace(String.fromCharCode(s.charCodeAt(end)))) {
                            break;
                        }
                    }
                    return s.substr(start, ((((end - start) | 0) + 1) | 0));
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Utilities.ThreadSafeStore$2", function (TKey, TValue) { return {
        fields: {
            _lock: null,
            _store: null,
            _creator: null
        },
        ctors: {
            init: function () {
                this._lock = { };
            },
            ctor: function (creator) {
                this.$initialize();
                Newtonsoft.Json.Utilities.ValidationUtils.ArgumentNotNull(creator, "creator");

                this._creator = creator;
                this._store = new (System.Collections.Generic.Dictionary$2(TKey,TValue))();
            }
        },
        methods: {
            Get: function (key) {
                var value = { };
                if (!this._store.tryGetValue(key, value)) {
                    return this.AddValue(key);
                }

                return value.v;
            },
            AddValue: function (key) {
                var value = this._creator(key);

                this._lock;
                {
                    if (this._store == null) {
                        this._store = new (System.Collections.Generic.Dictionary$2(TKey,TValue))();
                        this._store.set(key, value);
                    } else {
                        var checkValue = { };
                        // double check locking
                        if (this._store.tryGetValue(key, checkValue)) {
                            return checkValue.v;
                        }

                        var newStore = new (System.Collections.Generic.Dictionary$2(TKey,TValue))(this._store);
                        newStore.set(key, value);
                        this._store = newStore;
                    }

                    return value;
                }
            }
        }
    }; });

    Bridge.define("Newtonsoft.Json.Utilities.TypeNameKey", {
        inherits: function () { return [System.IEquatable$1(Newtonsoft.Json.Utilities.TypeNameKey)]; },
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Newtonsoft.Json.Utilities.TypeNameKey(); }
            }
        },
        fields: {
            AssemblyName: null,
            TypeName: null
        },
        alias: ["equalsT", "System$IEquatable$1$Newtonsoft$Json$Utilities$TypeNameKey$equalsT"],
        ctors: {
            $ctor1: function (assemblyName, typeName) {
                this.$initialize();
                this.AssemblyName = assemblyName;
                this.TypeName = typeName;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var $t, $t1;
                return (($t = (this.AssemblyName != null ? Bridge.getHashCode(this.AssemblyName) : null), $t != null ? $t : 0)) ^ (($t1 = (this.TypeName != null ? Bridge.getHashCode(this.TypeName) : null), $t1 != null ? $t1 : 0));
            },
            equals: function (obj) {
                if (!(Bridge.is(obj, Newtonsoft.Json.Utilities.TypeNameKey))) {
                    return false;
                }

                return this.equalsT(System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, Newtonsoft.Json.Utilities.TypeNameKey), Newtonsoft.Json.Utilities.TypeNameKey)));
            },
            equalsT: function (other) {
                return (Bridge.referenceEquals(this.AssemblyName, other.AssemblyName) && Bridge.referenceEquals(this.TypeName, other.TypeName));
            },
            $clone: function (to) {
                var s = to || new Newtonsoft.Json.Utilities.TypeNameKey();
                s.AssemblyName = this.AssemblyName;
                s.TypeName = this.TypeName;
                return s;
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Utilities.ValidationUtils", {
        statics: {
            methods: {
                ArgumentNotNull: function (value, parameterName) {
                    if (value == null) {
                        throw new System.ArgumentNullException.$ctor1(parameterName);
                    }
                }
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Utils.AssemblyVersion", {
        statics: {
            fields: {
                version: null,
                compiler: null
            },
            ctors: {
                init: function () {
                    this.version = "1.11.0";
                    this.compiler = "17.4.0";
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

    Bridge.define("Newtonsoft.Json.Serialization.DefaultSerializationBinder", {
        inherits: [Newtonsoft.Json.Serialization.ISerializationBinder],
        statics: {
            fields: {
                Instance: null
            },
            ctors: {
                init: function () {
                    this.Instance = new Newtonsoft.Json.Serialization.DefaultSerializationBinder();
                }
            }
        },
        fields: {
            _typeCache: null
        },
        alias: [
            "BindToType", "Newtonsoft$Json$Serialization$ISerializationBinder$BindToType",
            "BindToName", "Newtonsoft$Json$Serialization$ISerializationBinder$BindToName"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._typeCache = new (Newtonsoft.Json.Utilities.ThreadSafeStore$2(Newtonsoft.Json.Utilities.TypeNameKey,Function))(Bridge.fn.cacheBind(this, this.GetTypeFromTypeNameKey));
            }
        },
        methods: {
            GetTypeFromTypeNameKey: function (typeNameKey) {
                var $t;
                var assemblyName = typeNameKey.AssemblyName;
                var typeName = typeNameKey.TypeName;

                if (assemblyName != null) {
                    var assembly = Bridge.Reflection.load(assemblyName);

                    if (assembly == null) {
                        // will find assemblies loaded with Assembly.LoadFile outside of the main directory
                        var loadedAssemblies = System.AppDomain.getAssemblies();
                        $t = Bridge.getEnumerator(loadedAssemblies);
                        try {
                            while ($t.moveNext()) {
                                var a = $t.Current;
                                // check for both full name or partial name match
                                if (Bridge.referenceEquals(a.name, assemblyName)) {
                                    assembly = a;
                                    break;
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }

                    if (assembly == null) {
                        throw new Newtonsoft.Json.JsonSerializationException.$ctor1(Newtonsoft.Json.Utilities.StringUtils.FormatWith("Could not load assembly '{0}'.", System.Globalization.CultureInfo.invariantCulture, assemblyName));
                    }

                    var type = Bridge.Reflection.getType(typeName, assembly);
                    if (type == null) {
                        // if generic type, try manually parsing the type arguments for the case of dynamically loaded assemblies
                        // example generic typeName format: System.Collections.Generic.Dictionary`2[[System.String, mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.String, mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]
                        if (System.String.indexOf(typeName, String.fromCharCode(96)) >= 0) {
                            try {
                                type = this.GetGenericTypeFromTypeName(typeName, assembly);
                            } catch (ex) {
                                ex = System.Exception.create(ex);
                                throw new Newtonsoft.Json.JsonSerializationException.$ctor2(Newtonsoft.Json.Utilities.StringUtils.FormatWith$1("Could not find type '{0}' in assembly '{1}'.", System.Globalization.CultureInfo.invariantCulture, typeName, assembly.name), ex);
                            }
                        }

                        if (type == null) {
                            throw new Newtonsoft.Json.JsonSerializationException.$ctor1(Newtonsoft.Json.Utilities.StringUtils.FormatWith$1("Could not find type '{0}' in assembly '{1}'.", System.Globalization.CultureInfo.invariantCulture, typeName, assembly.name));
                        }
                    }

                    return type;
                } else {
                    return Bridge.Reflection.getType(typeName);
                }
            },
            GetGenericTypeFromTypeName: function (typeName, assembly) {
                var type = null;
                var openBracketIndex = System.String.indexOf(typeName, String.fromCharCode(91));
                if (openBracketIndex >= 0) {
                    var genericTypeDefName = typeName.substr(0, openBracketIndex);
                    var genericTypeDef = Bridge.Reflection.getType(genericTypeDefName, assembly);
                    if (genericTypeDef != null) {
                        var genericTypeArguments = new (System.Collections.Generic.List$1(Function)).ctor();
                        var scope = 0;
                        var typeArgStartIndex = 0;
                        var endIndex = (typeName.length - 1) | 0;
                        for (var i = (openBracketIndex + 1) | 0; i < endIndex; i = (i + 1) | 0) {
                            var current = typeName.charCodeAt(i);
                            switch (current) {
                                case 91: 
                                    if (scope === 0) {
                                        typeArgStartIndex = (i + 1) | 0;
                                    }
                                    scope = (scope + 1) | 0;
                                    break;
                                case 93: 
                                    scope = (scope - 1) | 0;
                                    if (scope === 0) {
                                        var typeArgAssemblyQualifiedName = typeName.substr(typeArgStartIndex, ((i - typeArgStartIndex) | 0));

                                        var typeNameKey = Newtonsoft.Json.Utilities.ReflectionUtils.SplitFullyQualifiedTypeName(typeArgAssemblyQualifiedName);
                                        genericTypeArguments.add(this.GetTypeByName(typeNameKey));
                                    }
                                    break;
                            }
                        }

                        type = genericTypeDef.apply(null, genericTypeArguments.ToArray());
                    }
                }

                return type;
            },
            GetTypeByName: function (typeNameKey) {
                return this._typeCache.Get(typeNameKey);
            },
            BindToType: function (assemblyName, typeName) {
                return this.GetTypeByName(new Newtonsoft.Json.Utilities.TypeNameKey.$ctor1(assemblyName, typeName));
            },
            BindToName: function (serializedType, assemblyName, typeName) {
                assemblyName.v = Bridge.Reflection.getTypeAssembly(serializedType).name;
                typeName.v = Bridge.Reflection.getTypeFullName(serializedType);
            }
        }
    });

    Bridge.define("Newtonsoft.Json.Serialization.SerializationBinderAdapter", {
        inherits: [Newtonsoft.Json.Serialization.ISerializationBinder],
        fields: {
            SerializationBinder: null
        },
        alias: [
            "BindToType", "Newtonsoft$Json$Serialization$ISerializationBinder$BindToType",
            "BindToName", "Newtonsoft$Json$Serialization$ISerializationBinder$BindToName"
        ],
        ctors: {
            ctor: function (serializationBinder) {
                this.$initialize();
                this.SerializationBinder = serializationBinder;
            }
        },
        methods: {
            BindToType: function (assemblyName, typeName) {
                return this.SerializationBinder.Newtonsoft$Json$Serialization$ISerializationBinder$BindToType(assemblyName, typeName);
            },
            BindToName: function (serializedType, assemblyName, typeName) {
                this.SerializationBinder.Newtonsoft$Json$Serialization$ISerializationBinder$BindToName(serializedType, assemblyName, typeName);
            }
        }
    });
