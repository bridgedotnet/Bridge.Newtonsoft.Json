    Bridge.define("Newtonsoft.Json.JsonConvert", {
        statics: {
            methods: {
                stringify: function (value, formatting) {
                    if (formatting === Newtonsoft.Json.Formatting.Indented) {
                        return JSON.stringify(value, null, "  ");
                    }

                    return JSON.stringify(value);
                },

                validateReflectable: function (type) {
                    do {
                        var ignoreMetaData = type === System.Object || type === Object || type.$literal || type.$kind === "anonymous",
                            nometa = !Bridge.getMetadata(type);

                        if (!ignoreMetaData && nometa) {
                            if (Bridge.$jsonGuard) {
                                delete Bridge.$jsonGuard;
                            }

                            throw new System.InvalidOperationException(Bridge.getTypeName(type) + " is not reflectable and cannot be serialized.");
                        }
                        type = ignoreMetaData ? null : Bridge.Reflection.getBaseType(type);
                    } while (!ignoreMetaData && type != null)
                },

                SerializeObject: function (obj, formatting, settings, returnRaw, possibleType) {
                    if (Bridge.is(formatting, Newtonsoft.Json.JsonSerializerSettings)) {
                        settings = formatting;
                        formatting = 0;
                    }

                    if (obj == null) {
                        if (settings && settings.NullValueHandling === Newtonsoft.Json.NullValueHandling.Ignore) {
                            return;
                        }

                        return returnRaw ? null : this.stringify(null, formatting);
                    }

                    var objType = Bridge.getType(obj);

                    if (possibleType && objType) {
                        if (possibleType.$kind === "interface" || Bridge.Reflection.isAssignableFrom(possibleType, objType)) {
                            possibleType = null;
                        }
                    }

                    if (possibleType && Bridge.Reflection.isEnum(possibleType)) {
                        return System.Enum.toString(possibleType, obj);
                    }

                    if (possibleType && possibleType === System.Char) {
                        return String.fromCharCode(obj);
                    }

                    if (typeof obj === "function") {
                        var name = Bridge.getTypeName(obj);
                        return returnRaw ? name : this.stringify(name, formatting);
                    } else if (typeof obj === "object") {
                        var type = possibleType || objType,
                            arr,
                            i;

                        var removeGuard = Bridge.emptyFn;
                        if (!Bridge.$jsonGuard) {
                            Bridge.$jsonGuard = [];
                            removeGuard = function () {
                                delete Bridge.$jsonGuard;
                            };
                        }

                        if (Bridge.$jsonGuard.indexOf(obj) > -1) {
                            return;
                        }

                        if (type !== System.Guid &&
                            type !== System.Int64 &&
                            type !== System.UInt64 &&
                            type !== System.Decimal &&
                            type !== System.DateTime &&
                            type !== System.Char &&
                            !Bridge.Reflection.isEnum(type)) {
                            Bridge.$jsonGuard.push(obj);
                        } else {
                            removeGuard();
                        }

                        if (obj && obj.$boxed) {
                            obj = Bridge.unbox(obj, true);
                        }

                        if (type === System.Guid) {
                            return returnRaw ? obj.toString() : this.stringify(obj.toString(), formatting);
                        } else if (type === System.Int64) {
                            return obj.toJSON();
                        } else if (type === System.UInt64) {
                            return obj.toJSON();
                        } else if (type === System.Decimal) {
                            return obj.toJSON();
                        } else if (type === System.DateTime) {
                            return returnRaw ? obj.toJSON() : this.stringify(obj, formatting);
                        } else if (Bridge.isArray(null, type)) {
                            if (type.$elementType === System.Byte) {
                                removeGuard();
                                var json = System.Convert.toBase64String(obj);
                                return returnRaw ? json : this.stringify(json, formatting);
                            }

                            arr = [];

                            for (i = 0; i < obj.length; i++) {
                                arr.push(Newtonsoft.Json.JsonConvert.SerializeObject(obj[i], formatting, settings, true, type.$elementType));
                            }

                            obj = arr;
                        } else if (Bridge.Reflection.isEnum(type)) {
                            var name = System.Enum.toString(type, obj);
                            return returnRaw ? name : this.stringify(name, formatting);
                        } else if (type === System.Char) {
                            return returnRaw ? String.fromCharCode(obj) : this.stringify(String.fromCharCode(obj), formatting);
                        } else if (Bridge.Reflection.isAssignableFrom(System.Collections.IList, type)) {
                            var typeElement = System.Collections.Generic.List$1.getElementType(type),
                                count = System.Array.getCount(obj, type);

                            arr = [];

                            for (i = 0; i < count; i++) {
                                arr.push(Newtonsoft.Json.JsonConvert.SerializeObject(System.Array.getItem(obj, i), formatting, settings, true, typeElement));
                            }

                            obj = arr;
                        } else if (Bridge.Reflection.isAssignableFrom(System.Collections.IDictionary, type)) {
                            var typesGeneric = System.Collections.Generic.Dictionary$2.getTypeParameters(type),
                                typeKey = typesGeneric[0],
                                typeValue = typesGeneric[1];

                            var dict = {},
                                enm = Bridge.getEnumerator(obj);

                            while (enm.moveNext()) {
                                var entr = enm.Current;
                                dict[Newtonsoft.Json.JsonConvert.SerializeObject(entr.key, formatting, settings, true, typeKey)] = Newtonsoft.Json.JsonConvert.SerializeObject(entr.value, formatting, settings, true, typeValue);
                            }

                            obj = dict;
                        } else {
                            var raw = {},
                                nometa = !Bridge.getMetadata(type);

                            Newtonsoft.Json.JsonConvert.validateReflectable(type);

                            if (settings && settings.TypeNameHandling) {
                                raw["$type"] = Bridge.Reflection.getTypeQName(type);
                            }

                            if (nometa) {
                                if (obj.toJSON) {
                                    raw = obj.toJSON();
                                } else {
                                    for (var key in obj) {
                                        if (obj.hasOwnProperty(key)) {
                                            raw[key] = Newtonsoft.Json.JsonConvert.SerializeObject(obj[key], formatting, settings, true);
                                        }
                                    }
                                }
                            } else {
                                var fields = Bridge.Reflection.getMembers(type, 4, 20),
                                    camelCase = settings && Bridge.is(settings.ContractResolver, Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver);

                                for (i = 0; i < fields.length; i++) {
                                    var f = fields[i],
                                        fname = camelCase ? (f.n.charAt(0).toLowerCase() + f.n.substr(1)) : f.n;
                                    raw[fname] = Newtonsoft.Json.JsonConvert.SerializeObject(Bridge.Reflection.fieldAccess(f, obj), formatting, settings, true, f.rt);
                                }

                                var properties = Bridge.Reflection.getMembers(type, 16, 20);

                                for (i = 0; i < properties.length; i++) {
                                    var p = properties[i];
                                    if (!!p.g) {
                                        var pname = camelCase ? (p.n.charAt(0).toLowerCase() + p.n.substr(1)) : p.n;
                                        raw[pname] = Newtonsoft.Json.JsonConvert.SerializeObject(Bridge.Reflection.midel(p.g, obj)(), formatting, settings, true, p.rt);
                                    }
                                }
                            }

                            obj = raw;
                        }

                        removeGuard();
                    }

                    return returnRaw ? obj : this.stringify(obj, formatting);
                },

                DeserializeObject: function (raw, type, settings, field) {
                    if (type.$kind === "interface") {
                        if (type === System.Collections.IList) {
                            type = System.Collections.Generic.List$1(System.Object);
                        } else if (Bridge.Reflection.isGenericType(type) && Bridge.Reflection.isAssignableFrom(System.Collections.Generic.IList$1, Bridge.Reflection.getGenericTypeDefinition(type))) {
                            type = System.Collections.Generic.List$1(System.Collections.Generic.List$1.getElementType(type) || System.Object);
                        } else if (System.Collections.IDictionary === type) {
                            type = System.Collections.Generic.Dictionary$2(System.Object, System.Object);
                        } else if (Bridge.Reflection.isGenericType(type) && Bridge.Reflection.isAssignableFrom(System.Collections.Generic.IDictionary$2, Bridge.Reflection.getGenericTypeDefinition(type))) {
                            var tPrms = System.Collections.Generic.Dictionary$2.getTypeParameters(type);
                            type = System.Collections.Generic.Dictionary$2(tPrms[0] || System.Object, tPrms[1] || System.Object);
                        }
                    }

                    if (!field && typeof raw === "string") {
                        var obj,
                            invalidJson = false;
                        try {
                            obj = JSON.parse(raw);
                        } catch (e) {
                            invalidJson = true;
                        }

                        if (!invalidJson && (typeof obj === "object" || Bridge.isArray(obj) || type === System.Array.type(System.Byte, 1) || type === Function || type === System.Guid || type === System.DateTime || type === System.Char || Bridge.Reflection.isEnum(type))) {
                            raw = obj;
                        }
                    }

                    var isObject = type === Object || type === System.Object;
                    if (isObject || type.$literal) {
                        return Bridge.merge(isObject ? {} : Bridge.createInstance(type), raw);
                    }

                    var def = Bridge.getDefaultValue(type);

                    if (raw === null) {
                        return def;
                    } else if (raw === false) {
                        if (type === System.String) {
                            return "false";
                        }
                        return def;
                    } else if (raw === true) {
                        if (type === System.Boolean) {
                            return true;
                        } else if (type === System.Int64) {
                            return System.Int64(1);
                        } else if (type === System.UInt64) {
                            return System.UInt64(1);
                        } else if (type === System.Decimal) {
                            return System.Decimal(1.0);
                        } else if (type === String.String) {
                            return "true";
                        } else if (type === System.DateTime) {
                            return new System.DateTime.fromTicks(1);
                        } else if (Bridge.Reflection.isEnum(type)) {
                            return Bridge.unbox(System.Enum.parse(type, 1));
                        } else {
                            if (typeof def === "number") {
                                return def + 1;
                            }

                            return null;
                        }
                    } else if (typeof raw === "number") {
                        if (type === System.Boolean) {
                            return raw !== 0;
                        } else if (Bridge.Reflection.isEnum(type)) {
                            return Bridge.unbox(System.Enum.parse(type, raw));
                        } else if (type === System.SByte) {
                            return raw | 0;
                        } else if (type === System.Byte) {
                            return raw >>> 0;
                        } else if (type === System.Int16) {
                            return raw | 0;
                        } else if (type === System.UInt16) {
                            return raw >>> 0;
                        } else if (type === System.Int32) {
                            return raw | 0;
                        } else if (type === System.UInt32) {
                            return raw >>> 0;
                        } else if (type === System.Int64) {
                            return System.Int64(raw);
                        } else if (type === System.UInt64) {
                            return System.UInt64(raw);
                        } else if (type === System.Single) {
                            return raw;
                        } else if (type === System.Double) {
                            return raw;
                        } else if (type === System.Decimal) {
                            return System.Decimal(raw);
                        } else if (type === System.Char) {
                            return raw | 0;
                        } else if (type === System.String) {
                            return raw.toString();
                        } else if (type === System.DateTime) {
                            return new System.DateTime.fromTicks(raw | 0);
                        } else {
                            return null;
                        }
                    } else if (typeof raw === "string") {
                        if (type === Function) {
                            return Bridge.Reflection.getType(raw);
                        } else if (type === System.Guid) {
                            return System.Guid.parse(raw);
                        } else if (type === System.Boolean) {
                            return raw !== "";
                        } else if (type === System.SByte) {
                            return raw | 0;
                        } else if (type === System.Byte) {
                            return raw >>> 0;
                        } else if (type === System.Int16) {
                            return raw | 0;
                        } else if (type === System.UInt16) {
                            return raw >>> 0;
                        } else if (type === System.Int32) {
                            return raw | 0;
                        } else if (type === System.UInt32) {
                            return raw >>> 0;
                        } else if (type === System.Int64) {
                            return System.Int64(raw);
                        } else if (type === System.UInt64) {
                            return System.UInt64(raw);
                        } else if (type === System.Single) {
                            return parseFloat(raw);
                        } else if (type === System.Double) {
                            return parseFloat(raw);
                        } else if (type === System.Decimal) {
                            try {
                                return System.Decimal(raw);
                            } catch (ex) {
                                return System.Decimal(0);
                            }
                        } else if (type === System.Char) {
                            if (raw.length === 0) {
                                return 0;
                            }

                            return raw.charCodeAt(0);
                        } else if (type === System.String) {
                            return field ? raw : JSON.parse(raw);
                        } else if (type === System.DateTime) {
                            return System.DateTime.parse(raw);
                        } else if (Bridge.Reflection.isEnum(type)) {
                            return Bridge.unbox(System.Enum.parse(type, raw));
                        } else if (type === System.Array.type(System.Byte, 1)) {
                            return System.Convert.fromBase64String(raw);
                        } else {
                            return null;
                        }
                    } else if (typeof raw === "object") {
                        if (def !== null && type.$kind !== "struct") {
                            return def;
                        } else if (Bridge.isArray(null, type)) {
                            if (raw.length === undefined) {
                                return [];
                            }

                            var arr = new Array();
                            System.Array.type(type.$elementType, type.$rank || 1, arr);

                            for (var i = 0; i < raw.length; i++) {
                                arr[i] = Newtonsoft.Json.JsonConvert.DeserializeObject(raw[i], type.$elementType, settings, true);
                            }

                            return arr;
                        } else if (Bridge.Reflection.isAssignableFrom(System.Collections.IList, type)) {
                            var typeElement = System.Collections.Generic.List$1.getElementType(type) || System.Object;
                            var list = Bridge.createInstance(type);

                            if (raw.length === undefined) {
                                return list;
                            }

                            for (var i = 0; i < raw.length; i++) {
                                list.add(Newtonsoft.Json.JsonConvert.DeserializeObject(raw[i], typeElement, settings, true));
                            }

                            return list;
                        } else if (Bridge.Reflection.isAssignableFrom(System.Collections.IDictionary, type)) {
                            var typesGeneric = System.Collections.Generic.Dictionary$2.getTypeParameters(type),
                                typeKey = typesGeneric[0] || System.Object,
                                typeValue = typesGeneric[1] || System.Object;

                            var dictionary = Bridge.createInstance(type);

                            for (var each in raw) {
                                if (raw.hasOwnProperty(each)) {
                                    dictionary.add(Newtonsoft.Json.JsonConvert.DeserializeObject(each, typeKey, settings, true), Newtonsoft.Json.JsonConvert.DeserializeObject(raw[each], typeValue, settings, true));
                                }
                            }

                            return dictionary;
                        } else {
                            if (settings && settings.TypeNameHandling > 0  && raw["$type"] != null) {
                                type = Bridge.Reflection.getType(raw["$type"].split(",")[0]);
                            }

                            if (type === null) {
                                throw TypeError(System.String.concat("Cannot find type: ", raw["$type"]));
                            }

                            var o = Bridge.createInstance(type);

                            var camelCase = settings && Bridge.is(settings.ContractResolver, Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver),
                                fields = Bridge.Reflection.getMembers(type, 4, 20),
                                value,
                                f,
                                p,
                                mname,
                                i;

                            for (i = 0; i < fields.length; i++) {
                                f = fields[i];
                                mname = camelCase ? (f.n.charAt(0).toLowerCase() + f.n.substr(1)) : f.n;
                                value = raw[mname];

                                if (value !== undefined) {
                                    Bridge.Reflection.fieldAccess(f, o, Newtonsoft.Json.JsonConvert.DeserializeObject(value, f.rt, settings, true));
                                }
                            }

                            var properties = Bridge.Reflection.getMembers(type, 16, 20);

                            for (i = 0; i < properties.length; i++) {
                                p = properties[i];
                                mname = camelCase ? (p.n.charAt(0).toLowerCase() + p.n.substr(1)) : p.n;
                                value = raw[mname];

                                if (value !== undefined) {
                                    if (!!p.s) {
                                        Bridge.Reflection.midel(p.s, o)(Newtonsoft.Json.JsonConvert.DeserializeObject(value, p.rt, settings, true));
                                    }
                                    else if (type.$kind === "anonymous") {
                                        o[p.n] = Newtonsoft.Json.JsonConvert.DeserializeObject(value, p.rt, settings, true);
                                    }
                                }
                            }

                            return o;
                        }
                    }
                }
            }
        }
    });