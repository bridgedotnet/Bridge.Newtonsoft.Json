
    var $m = Bridge.setMetadata,
        $n = ["Newtonsoft.Json","System","Newtonsoft.Json.Serialization","Newtonsoft.Json.Utilities","System.Collections.Generic","System.Reflection"];
    $m("Newtonsoft.Json.DefaultValueHandling", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Ignore","is":true,"t":4,"rt":$n[0].DefaultValueHandling,"sn":"Ignore","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.DefaultValueHandling, System.Enum.toStringFn(Newtonsoft.Json.DefaultValueHandling));}},{"a":2,"n":"IgnoreAndPopulate","is":true,"t":4,"rt":$n[0].DefaultValueHandling,"sn":"IgnoreAndPopulate","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.DefaultValueHandling, System.Enum.toStringFn(Newtonsoft.Json.DefaultValueHandling));}},{"a":2,"n":"Include","is":true,"t":4,"rt":$n[0].DefaultValueHandling,"sn":"Include","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.DefaultValueHandling, System.Enum.toStringFn(Newtonsoft.Json.DefaultValueHandling));}},{"a":2,"n":"Populate","is":true,"t":4,"rt":$n[0].DefaultValueHandling,"sn":"Populate","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.DefaultValueHandling, System.Enum.toStringFn(Newtonsoft.Json.DefaultValueHandling));}}]}; }, $n);
    $m("Newtonsoft.Json.JsonPropertyAttribute", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[1].String],"pi":[{"n":"propertyName","pt":$n[1].String,"ps":0}],"sn":"$ctor1"},{"a":2,"n":"DefaultValueHandling","t":16,"rt":$n[0].DefaultValueHandling,"g":{"a":2,"n":"get_DefaultValueHandling","t":8,"rt":$n[0].DefaultValueHandling,"fg":"DefaultValueHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.DefaultValueHandling, System.Enum.toStringFn(Newtonsoft.Json.DefaultValueHandling));}},"s":{"a":2,"n":"set_DefaultValueHandling","t":8,"p":[$n[0].DefaultValueHandling],"rt":$n[1].Void,"fs":"DefaultValueHandling"},"fn":"DefaultValueHandling"},{"a":2,"n":"NullValueHandling","t":16,"rt":$n[0].NullValueHandling,"g":{"a":2,"n":"get_NullValueHandling","t":8,"rt":$n[0].NullValueHandling,"fg":"NullValueHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.NullValueHandling, System.Enum.toStringFn(Newtonsoft.Json.NullValueHandling));}},"s":{"a":2,"n":"set_NullValueHandling","t":8,"p":[$n[0].NullValueHandling],"rt":$n[1].Void,"fs":"NullValueHandling"},"fn":"NullValueHandling"},{"a":2,"n":"ObjectCreationHandling","t":16,"rt":$n[0].ObjectCreationHandling,"g":{"a":2,"n":"get_ObjectCreationHandling","t":8,"rt":$n[0].ObjectCreationHandling,"fg":"ObjectCreationHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.ObjectCreationHandling, System.Enum.toStringFn(Newtonsoft.Json.ObjectCreationHandling));}},"s":{"a":2,"n":"set_ObjectCreationHandling","t":8,"p":[$n[0].ObjectCreationHandling],"rt":$n[1].Void,"fs":"ObjectCreationHandling"},"fn":"ObjectCreationHandling"},{"a":2,"n":"Order","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Order","t":8,"rt":$n[1].Int32,"fg":"Order","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Order","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"Order"},"fn":"Order"},{"a":2,"n":"PropertyName","t":16,"rt":$n[1].String,"g":{"a":2,"n":"get_PropertyName","t":8,"rt":$n[1].String,"fg":"PropertyName"},"s":{"a":2,"n":"set_PropertyName","t":8,"p":[$n[1].String],"rt":$n[1].Void,"fs":"PropertyName"},"fn":"PropertyName"},{"a":2,"n":"Required","t":16,"rt":$n[0].Required,"g":{"a":2,"n":"get_Required","t":8,"rt":$n[0].Required,"fg":"Required","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.Required, System.Enum.toStringFn(Newtonsoft.Json.Required));}},"s":{"a":2,"n":"set_Required","t":8,"p":[$n[0].Required],"rt":$n[1].Void,"fs":"Required"},"fn":"Required"},{"a":2,"n":"TypeNameHandling","t":16,"rt":$n[0].TypeNameHandling,"g":{"a":2,"n":"get_TypeNameHandling","t":8,"rt":$n[0].TypeNameHandling,"fg":"TypeNameHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.TypeNameHandling, System.Enum.toStringFn(Newtonsoft.Json.TypeNameHandling));}},"s":{"a":2,"n":"set_TypeNameHandling","t":8,"p":[$n[0].TypeNameHandling],"rt":$n[1].Void,"fs":"TypeNameHandling"},"fn":"TypeNameHandling"},{"a":4,"n":"_defaultValueHandling","t":4,"rt":$n[1].Nullable$1(Newtonsoft.Json.DefaultValueHandling),"sn":"_defaultValueHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.DefaultValueHandling, System.Nullable.toStringFn(System.Enum.toStringFn(Newtonsoft.Json.DefaultValueHandling)), System.Nullable.getHashCode);}},{"a":4,"n":"_nullValueHandling","t":4,"rt":$n[1].Nullable$1(Newtonsoft.Json.NullValueHandling),"sn":"_nullValueHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.NullValueHandling, System.Nullable.toStringFn(System.Enum.toStringFn(Newtonsoft.Json.NullValueHandling)), System.Nullable.getHashCode);}},{"a":4,"n":"_objectCreationHandling","t":4,"rt":$n[1].Nullable$1(Newtonsoft.Json.ObjectCreationHandling),"sn":"_objectCreationHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.ObjectCreationHandling, System.Nullable.toStringFn(System.Enum.toStringFn(Newtonsoft.Json.ObjectCreationHandling)), System.Nullable.getHashCode);}},{"a":4,"n":"_order","t":4,"rt":$n[1].Nullable$1(System.Int32),"sn":"_order","box":function ($v) { return Bridge.box($v, System.Int32, System.Nullable.toString, System.Nullable.getHashCode);}},{"a":4,"n":"_required","t":4,"rt":$n[1].Nullable$1(Newtonsoft.Json.Required),"sn":"_required","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.Required, System.Nullable.toStringFn(System.Enum.toStringFn(Newtonsoft.Json.Required)), System.Nullable.getHashCode);}},{"a":4,"n":"_typeNameHandling","t":4,"rt":$n[1].Nullable$1(Newtonsoft.Json.TypeNameHandling),"sn":"_typeNameHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.TypeNameHandling, System.Nullable.toStringFn(System.Enum.toStringFn(Newtonsoft.Json.TypeNameHandling)), System.Nullable.getHashCode);}}]}; }, $n);
    $m("Newtonsoft.Json.JsonIgnoreAttribute", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    $m("Newtonsoft.Json.JsonException", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[1].String],"pi":[{"n":"message","pt":$n[1].String,"ps":0}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[$n[1].String,$n[1].Exception],"pi":[{"n":"message","pt":$n[1].String,"ps":0},{"n":"innerException","pt":$n[1].Exception,"ps":1}],"sn":"$ctor2"}]}; }, $n);
    $m("Newtonsoft.Json.JsonSerializationException", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[1].String],"pi":[{"n":"message","pt":$n[1].String,"ps":0}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[$n[1].String,$n[1].Exception],"pi":[{"n":"message","pt":$n[1].String,"ps":0},{"n":"innerException","pt":$n[1].Exception,"ps":1}],"sn":"$ctor2"}]}; }, $n);
    $m("Newtonsoft.Json.JsonSerializerSettings", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ContractResolver","t":16,"rt":$n[2].IContractResolver,"g":{"a":2,"n":"get_ContractResolver","t":8,"rt":$n[2].IContractResolver,"fg":"ContractResolver"},"s":{"a":2,"n":"set_ContractResolver","t":8,"p":[$n[2].IContractResolver],"rt":$n[1].Void,"fs":"ContractResolver"},"fn":"ContractResolver"},{"a":2,"n":"DefaultValueHandling","t":16,"rt":$n[0].DefaultValueHandling,"g":{"a":2,"n":"get_DefaultValueHandling","t":8,"rt":$n[0].DefaultValueHandling,"fg":"DefaultValueHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.DefaultValueHandling, System.Enum.toStringFn(Newtonsoft.Json.DefaultValueHandling));}},"s":{"a":2,"n":"set_DefaultValueHandling","t":8,"p":[$n[0].DefaultValueHandling],"rt":$n[1].Void,"fs":"DefaultValueHandling"},"fn":"DefaultValueHandling"},{"a":2,"n":"NullValueHandling","t":16,"rt":$n[0].NullValueHandling,"g":{"a":2,"n":"get_NullValueHandling","t":8,"rt":$n[0].NullValueHandling,"fg":"NullValueHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.NullValueHandling, System.Enum.toStringFn(Newtonsoft.Json.NullValueHandling));}},"s":{"a":2,"n":"set_NullValueHandling","t":8,"p":[$n[0].NullValueHandling],"rt":$n[1].Void,"fs":"NullValueHandling"},"fn":"NullValueHandling"},{"a":2,"n":"ObjectCreationHandling","t":16,"rt":$n[0].ObjectCreationHandling,"g":{"a":2,"n":"get_ObjectCreationHandling","t":8,"rt":$n[0].ObjectCreationHandling,"fg":"ObjectCreationHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.ObjectCreationHandling, System.Enum.toStringFn(Newtonsoft.Json.ObjectCreationHandling));}},"s":{"a":2,"n":"set_ObjectCreationHandling","t":8,"p":[$n[0].ObjectCreationHandling],"rt":$n[1].Void,"fs":"ObjectCreationHandling"},"fn":"ObjectCreationHandling"},{"a":2,"n":"SerializationBinder","t":16,"rt":$n[2].ISerializationBinder,"g":{"a":2,"n":"get_SerializationBinder","t":8,"rt":$n[2].ISerializationBinder,"fg":"SerializationBinder"},"s":{"a":2,"n":"set_SerializationBinder","t":8,"p":[$n[2].ISerializationBinder],"rt":$n[1].Void,"fs":"SerializationBinder"},"fn":"SerializationBinder"},{"a":2,"n":"TypeNameHandling","t":16,"rt":$n[0].TypeNameHandling,"g":{"a":2,"n":"get_TypeNameHandling","t":8,"rt":$n[0].TypeNameHandling,"fg":"TypeNameHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.TypeNameHandling, System.Enum.toStringFn(Newtonsoft.Json.TypeNameHandling));}},"s":{"a":2,"n":"set_TypeNameHandling","t":8,"p":[$n[0].TypeNameHandling],"rt":$n[1].Void,"fs":"TypeNameHandling"},"fn":"TypeNameHandling"},{"a":4,"n":"DefaultNullValueHandling","is":true,"t":4,"rt":$n[0].NullValueHandling,"sn":"DefaultNullValueHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.NullValueHandling, System.Enum.toStringFn(Newtonsoft.Json.NullValueHandling));}},{"a":4,"n":"DefaultTypeNameHandling","is":true,"t":4,"rt":$n[0].TypeNameHandling,"sn":"DefaultTypeNameHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.TypeNameHandling, System.Enum.toStringFn(Newtonsoft.Json.TypeNameHandling));}},{"a":4,"n":"_defaultValueHandling","t":4,"rt":$n[1].Nullable$1(Newtonsoft.Json.DefaultValueHandling),"sn":"_defaultValueHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.DefaultValueHandling, System.Nullable.toStringFn(System.Enum.toStringFn(Newtonsoft.Json.DefaultValueHandling)), System.Nullable.getHashCode);}},{"a":4,"n":"_nullValueHandling","t":4,"rt":$n[1].Nullable$1(Newtonsoft.Json.NullValueHandling),"sn":"_nullValueHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.NullValueHandling, System.Nullable.toStringFn(System.Enum.toStringFn(Newtonsoft.Json.NullValueHandling)), System.Nullable.getHashCode);}},{"a":4,"n":"_objectCreationHandling","t":4,"rt":$n[1].Nullable$1(Newtonsoft.Json.ObjectCreationHandling),"sn":"_objectCreationHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.ObjectCreationHandling, System.Nullable.toStringFn(System.Enum.toStringFn(Newtonsoft.Json.ObjectCreationHandling)), System.Nullable.getHashCode);}},{"a":4,"n":"_serializationBinder","t":4,"rt":$n[2].ISerializationBinder,"sn":"_serializationBinder"},{"a":4,"n":"_typeNameHandling","t":4,"rt":$n[1].Nullable$1(Newtonsoft.Json.TypeNameHandling),"sn":"_typeNameHandling","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.TypeNameHandling, System.Nullable.toStringFn(System.Enum.toStringFn(Newtonsoft.Json.TypeNameHandling)), System.Nullable.getHashCode);}}]}; }, $n);
    $m("Newtonsoft.Json.NullValueHandling", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Ignore","is":true,"t":4,"rt":$n[0].NullValueHandling,"sn":"Ignore","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.NullValueHandling, System.Enum.toStringFn(Newtonsoft.Json.NullValueHandling));}},{"a":2,"n":"Include","is":true,"t":4,"rt":$n[0].NullValueHandling,"sn":"Include","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.NullValueHandling, System.Enum.toStringFn(Newtonsoft.Json.NullValueHandling));}}]}; }, $n);
    $m("Newtonsoft.Json.JsonConstructorAttribute", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    $m("Newtonsoft.Json.ObjectCreationHandling", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Auto","is":true,"t":4,"rt":$n[0].ObjectCreationHandling,"sn":"Auto","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.ObjectCreationHandling, System.Enum.toStringFn(Newtonsoft.Json.ObjectCreationHandling));}},{"a":2,"n":"Replace","is":true,"t":4,"rt":$n[0].ObjectCreationHandling,"sn":"Replace","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.ObjectCreationHandling, System.Enum.toStringFn(Newtonsoft.Json.ObjectCreationHandling));}},{"a":2,"n":"Reuse","is":true,"t":4,"rt":$n[0].ObjectCreationHandling,"sn":"Reuse","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.ObjectCreationHandling, System.Enum.toStringFn(Newtonsoft.Json.ObjectCreationHandling));}}]}; }, $n);
    $m("Newtonsoft.Json.Required", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AllowNull","is":true,"t":4,"rt":$n[0].Required,"sn":"AllowNull","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.Required, System.Enum.toStringFn(Newtonsoft.Json.Required));}},{"a":2,"n":"Always","is":true,"t":4,"rt":$n[0].Required,"sn":"Always","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.Required, System.Enum.toStringFn(Newtonsoft.Json.Required));}},{"a":2,"n":"Default","is":true,"t":4,"rt":$n[0].Required,"sn":"Default","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.Required, System.Enum.toStringFn(Newtonsoft.Json.Required));}},{"a":2,"n":"DisallowNull","is":true,"t":4,"rt":$n[0].Required,"sn":"DisallowNull","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.Required, System.Enum.toStringFn(Newtonsoft.Json.Required));}}]}; }, $n);
    $m("Newtonsoft.Json.Formatting", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Indented","is":true,"t":4,"rt":$n[0].Formatting,"sn":"Indented","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.Formatting, System.Enum.toStringFn(Newtonsoft.Json.Formatting));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[0].Formatting,"sn":"None","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.Formatting, System.Enum.toStringFn(Newtonsoft.Json.Formatting));}}]}; }, $n);
    $m("Newtonsoft.Json.TypeNameHandling", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"All","is":true,"t":4,"rt":$n[0].TypeNameHandling,"sn":"All","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.TypeNameHandling, System.Enum.toStringFn(Newtonsoft.Json.TypeNameHandling));}},{"a":2,"n":"Arrays","is":true,"t":4,"rt":$n[0].TypeNameHandling,"sn":"Arrays","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.TypeNameHandling, System.Enum.toStringFn(Newtonsoft.Json.TypeNameHandling));}},{"a":2,"n":"Auto","is":true,"t":4,"rt":$n[0].TypeNameHandling,"sn":"Auto","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.TypeNameHandling, System.Enum.toStringFn(Newtonsoft.Json.TypeNameHandling));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[0].TypeNameHandling,"sn":"None","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.TypeNameHandling, System.Enum.toStringFn(Newtonsoft.Json.TypeNameHandling));}},{"a":2,"n":"Objects","is":true,"t":4,"rt":$n[0].TypeNameHandling,"sn":"Objects","box":function ($v) { return Bridge.box($v, Newtonsoft.Json.TypeNameHandling, System.Enum.toStringFn(Newtonsoft.Json.TypeNameHandling));}}]}; }, $n);
    $m("Newtonsoft.Json.Utils.AssemblyVersion", function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"compiler","is":true,"t":4,"rt":$n[1].String,"sn":"compiler"},{"a":2,"n":"version","is":true,"t":4,"rt":$n[1].String,"sn":"version"}]}; }, $n);
    $m("Newtonsoft.Json.Utilities.ReflectionUtils", function () { return {"att":1048960,"a":4,"s":true,"m":[{"a":1,"n":"GetAssemblyDelimiterIndex","is":true,"t":8,"pi":[{"n":"fullyQualifiedTypeName","pt":$n[1].String,"ps":0}],"sn":"GetAssemblyDelimiterIndex","rt":$n[1].Nullable$1(System.Int32),"p":[$n[1].String],"box":function ($v) { return Bridge.box($v, System.Int32, System.Nullable.toString, System.Nullable.getHashCode);}},{"a":1,"n":"GetFullyQualifiedTypeName","is":true,"t":8,"pi":[{"n":"t","pt":Function,"ps":0},{"n":"binder","pt":$n[2].ISerializationBinder,"ps":1}],"sn":"GetFullyQualifiedTypeName","rt":$n[1].String,"p":[Function,$n[2].ISerializationBinder]},{"a":2,"n":"SplitFullyQualifiedTypeName","is":true,"t":8,"pi":[{"n":"fullyQualifiedTypeName","pt":$n[1].String,"ps":0}],"sn":"SplitFullyQualifiedTypeName","rt":$n[3].TypeNameKey,"p":[$n[1].String]}]}; }, $n);
    $m("Newtonsoft.Json.Utilities.TypeNameKey", function () { return {"att":1048840,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[1].String,$n[1].String],"pi":[{"n":"assemblyName","pt":$n[1].String,"ps":0},{"n":"typeName","pt":$n[1].String,"ps":1}],"sn":"$ctor1"},{"a":2,"n":"Equals","t":8,"pi":[{"n":"other","pt":$n[3].TypeNameKey,"ps":0}],"sn":"equalsT","rt":$n[1].Boolean,"p":[$n[3].TypeNameKey],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":2,"n":"Equals","t":8,"pi":[{"n":"obj","pt":$n[1].Object,"ps":0}],"sn":"equals","rt":$n[1].Boolean,"p":[$n[1].Object],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":2,"n":"GetHashCode","t":8,"sn":"getHashCode","rt":$n[1].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":4,"n":"AssemblyName","t":4,"rt":$n[1].String,"sn":"AssemblyName","ro":true},{"a":4,"n":"TypeName","t":4,"rt":$n[1].String,"sn":"TypeName","ro":true}]}; }, $n);
    $m("Newtonsoft.Json.Utilities.StringUtils", function () { return {"att":1048960,"a":4,"s":true,"m":[{"a":2,"n":"FormatWith","is":true,"t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0},{"n":"provider","pt":$n[1].IFormatProvider,"ps":1},{"n":"arg0","pt":$n[1].Object,"ps":2}],"sn":"FormatWith","rt":$n[1].String,"p":[$n[1].String,$n[1].IFormatProvider,$n[1].Object]},{"a":1,"n":"FormatWith","is":true,"t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0},{"n":"provider","pt":$n[1].IFormatProvider,"ps":1},{"n":"args","ip":true,"pt":$n[1].Array.type(System.Object),"ps":2}],"sn":"FormatWith$4","rt":$n[1].String,"p":[$n[1].String,$n[1].IFormatProvider,$n[1].Array.type(System.Object)]},{"a":2,"n":"FormatWith","is":true,"t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0},{"n":"provider","pt":$n[1].IFormatProvider,"ps":1},{"n":"arg0","pt":$n[1].Object,"ps":2},{"n":"arg1","pt":$n[1].Object,"ps":3}],"sn":"FormatWith$1","rt":$n[1].String,"p":[$n[1].String,$n[1].IFormatProvider,$n[1].Object,$n[1].Object]},{"a":2,"n":"FormatWith","is":true,"t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0},{"n":"provider","pt":$n[1].IFormatProvider,"ps":1},{"n":"arg0","pt":$n[1].Object,"ps":2},{"n":"arg1","pt":$n[1].Object,"ps":3},{"n":"arg2","pt":$n[1].Object,"ps":4}],"sn":"FormatWith$2","rt":$n[1].String,"p":[$n[1].String,$n[1].IFormatProvider,$n[1].Object,$n[1].Object,$n[1].Object]},{"a":2,"n":"FormatWith","is":true,"t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0},{"n":"provider","pt":$n[1].IFormatProvider,"ps":1},{"n":"arg0","pt":$n[1].Object,"ps":2},{"n":"arg1","pt":$n[1].Object,"ps":3},{"n":"arg2","pt":$n[1].Object,"ps":4},{"n":"arg3","pt":$n[1].Object,"ps":5}],"sn":"FormatWith$3","rt":$n[1].String,"p":[$n[1].String,$n[1].IFormatProvider,$n[1].Object,$n[1].Object,$n[1].Object,$n[1].Object]},{"a":2,"n":"Trim","is":true,"t":8,"pi":[{"n":"s","pt":$n[1].String,"ps":0},{"n":"start","pt":$n[1].Int32,"ps":1},{"n":"length","pt":$n[1].Int32,"ps":2}],"sn":"Trim","rt":$n[1].String,"p":[$n[1].String,$n[1].Int32,$n[1].Int32]}]}; }, $n);
    $m("Newtonsoft.Json.Utilities.ThreadSafeStore$2", function (TKey, TValue) { return {"att":1048576,"a":4,"m":[{"a":2,"n":".ctor","t":1,"p":[Function],"pi":[{"n":"creator","pt":Function,"ps":0}],"sn":"ctor"},{"a":1,"n":"AddValue","t":8,"pi":[{"n":"key","pt":TKey,"ps":0}],"sn":"AddValue","rt":TValue,"p":[TKey]},{"a":2,"n":"Get","t":8,"pi":[{"n":"key","pt":TKey,"ps":0}],"sn":"Get","rt":TValue,"p":[TKey]},{"a":1,"n":"_creator","t":4,"rt":Function,"sn":"_creator","ro":true},{"a":1,"n":"_lock","t":4,"rt":$n[1].Object,"sn":"_lock","ro":true},{"a":1,"n":"_store","t":4,"rt":$n[4].Dictionary$2(TKey,TValue),"sn":"_store"}]}; }, $n);
    $m("Newtonsoft.Json.Utilities.ValidationUtils", function () { return {"att":1048960,"a":4,"s":true,"m":[{"a":2,"n":"ArgumentNotNull","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Object,"ps":0},{"n":"parameterName","pt":$n[1].String,"ps":1}],"sn":"ArgumentNotNull","rt":$n[1].Void,"p":[$n[1].Object,$n[1].String]}]}; }, $n);
    $m("Newtonsoft.Json.Serialization.DefaultSerializationBinder", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":2,"n":"BindToName","t":8,"pi":[{"n":"serializedType","pt":Function,"ps":0},{"n":"assemblyName","out":true,"pt":$n[1].String,"ps":1},{"n":"typeName","out":true,"pt":$n[1].String,"ps":2}],"sn":"BindToName","rt":$n[1].Void,"p":[Function,$n[1].String,$n[1].String]},{"v":true,"a":2,"n":"BindToType","t":8,"pi":[{"n":"assemblyName","pt":$n[1].String,"ps":0},{"n":"typeName","pt":$n[1].String,"ps":1}],"sn":"BindToType","rt":Function,"p":[$n[1].String,$n[1].String]},{"a":1,"n":"GetGenericTypeFromTypeName","t":8,"pi":[{"n":"typeName","pt":$n[1].String,"ps":0},{"n":"assembly","pt":$n[5].Assembly,"ps":1}],"sn":"GetGenericTypeFromTypeName","rt":Function,"p":[$n[1].String,$n[5].Assembly]},{"a":1,"n":"GetTypeByName","t":8,"pi":[{"n":"typeNameKey","pt":$n[3].TypeNameKey,"ps":0}],"sn":"GetTypeByName","rt":Function,"p":[$n[3].TypeNameKey]},{"a":1,"n":"GetTypeFromTypeNameKey","t":8,"pi":[{"n":"typeNameKey","pt":$n[3].TypeNameKey,"ps":0}],"sn":"GetTypeFromTypeNameKey","rt":Function,"p":[$n[3].TypeNameKey]},{"a":4,"n":"Instance","is":true,"t":4,"rt":$n[2].DefaultSerializationBinder,"sn":"Instance","ro":true},{"a":1,"n":"_typeCache","t":4,"rt":$n[3].ThreadSafeStore$2(Newtonsoft.Json.Utilities.TypeNameKey,Function),"sn":"_typeCache","ro":true}]}; }, $n);
    $m("Newtonsoft.Json.Serialization.ISerializationBinder", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"BindToName","t":8,"pi":[{"n":"serializedType","pt":Function,"ps":0},{"n":"assemblyName","out":true,"pt":$n[1].String,"ps":1},{"n":"typeName","out":true,"pt":$n[1].String,"ps":2}],"sn":"Newtonsoft$Json$Serialization$ISerializationBinder$BindToName","rt":$n[1].Void,"p":[Function,$n[1].String,$n[1].String]},{"ab":true,"a":2,"n":"BindToType","t":8,"pi":[{"n":"assemblyName","pt":$n[1].String,"ps":0},{"n":"typeName","pt":$n[1].String,"ps":1}],"sn":"Newtonsoft$Json$Serialization$ISerializationBinder$BindToType","rt":Function,"p":[$n[1].String,$n[1].String]}]}; }, $n);
    $m("Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    $m("Newtonsoft.Json.Serialization.IContractResolver", function () { return {"att":161,"a":2}; }, $n);
    $m("Newtonsoft.Json.Serialization.SerializationBinderAdapter", function () { return {"att":1048576,"a":4,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].ISerializationBinder],"pi":[{"n":"serializationBinder","pt":$n[2].ISerializationBinder,"ps":0}],"sn":"ctor"},{"a":2,"n":"BindToName","t":8,"pi":[{"n":"serializedType","pt":Function,"ps":0},{"n":"assemblyName","out":true,"pt":$n[1].String,"ps":1},{"n":"typeName","out":true,"pt":$n[1].String,"ps":2}],"sn":"BindToName","rt":$n[1].Void,"p":[Function,$n[1].String,$n[1].String]},{"a":2,"n":"BindToType","t":8,"pi":[{"n":"assemblyName","pt":$n[1].String,"ps":0},{"n":"typeName","pt":$n[1].String,"ps":1}],"sn":"BindToType","rt":Function,"p":[$n[1].String,$n[1].String]},{"a":2,"n":"SerializationBinder","t":4,"rt":$n[2].ISerializationBinder,"sn":"SerializationBinder","ro":true}]}; }, $n);
