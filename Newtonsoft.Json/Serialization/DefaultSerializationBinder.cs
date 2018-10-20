using Newtonsoft.Json.Utilities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Reflection;

namespace Newtonsoft.Json.Serialization
{
    /// <summary>
    /// The default serialization binder used when resolving and loading classes from type names.
    /// </summary>
    public class DefaultSerializationBinder : ISerializationBinder
    {
        internal static readonly DefaultSerializationBinder Instance = new DefaultSerializationBinder();

        private readonly ThreadSafeStore<TypeNameKey, Type> _typeCache;

        /// <summary>
        /// Initializes a new instance of the <see cref="DefaultSerializationBinder"/> class.
        /// </summary>
        public DefaultSerializationBinder()
        {
            _typeCache = new ThreadSafeStore<TypeNameKey, Type>(GetTypeFromTypeNameKey);
        }

        private Type GetTypeFromTypeNameKey(TypeNameKey typeNameKey)
        {
            string assemblyName = typeNameKey.AssemblyName;
            string typeName = typeNameKey.TypeName;

            if (assemblyName != null)
            {
                var assembly = Assembly.Load(assemblyName);

                if (assembly == null)
                {
                    // will find assemblies loaded with Assembly.LoadFile outside of the main directory
                    Assembly[] loadedAssemblies = AppDomain.CurrentDomain.GetAssemblies();
                    foreach (Assembly a in loadedAssemblies)
                    {
                        // check for both full name or partial name match
                        if (a.FullName == assemblyName)
                        {
                            assembly = a;
                            break;
                        }
                    }
                }

                if (assembly == null)
                {
                    throw new JsonSerializationException("Could not load assembly '{0}'.".FormatWith(CultureInfo.InvariantCulture, assemblyName));
                }

                Type type = assembly.GetType(typeName);
                if (type == null)
                {
                    // if generic type, try manually parsing the type arguments for the case of dynamically loaded assemblies
                    // example generic typeName format: System.Collections.Generic.Dictionary`2[[System.String, mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.String, mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]
                    if (typeName.IndexOf('`') >= 0)
                    {
                        try
                        {
                            type = GetGenericTypeFromTypeName(typeName, assembly);
                        }
                        catch (Exception ex)
                        {
                            throw new JsonSerializationException("Could not find type '{0}' in assembly '{1}'.".FormatWith(CultureInfo.InvariantCulture, typeName, assembly.FullName), ex);
                        }
                    }

                    if (type == null)
                    {
                        throw new JsonSerializationException("Could not find type '{0}' in assembly '{1}'.".FormatWith(CultureInfo.InvariantCulture, typeName, assembly.FullName));
                    }
                }

                return type;
            }
            else
            {
                return Type.GetType(typeName);
            }
        }

        private Type GetGenericTypeFromTypeName(string typeName, Assembly assembly)
        {
            Type type = null;
            int openBracketIndex = typeName.IndexOf('[');
            if (openBracketIndex >= 0)
            {
                string genericTypeDefName = typeName.Substring(0, openBracketIndex);
                Type genericTypeDef = assembly.GetType(genericTypeDefName);
                if (genericTypeDef != null)
                {
                    List<Type> genericTypeArguments = new List<Type>();
                    int scope = 0;
                    int typeArgStartIndex = 0;
                    int endIndex = typeName.Length - 1;
                    for (int i = openBracketIndex + 1; i < endIndex; ++i)
                    {
                        char current = typeName[i];
                        switch (current)
                        {
                            case '[':
                                if (scope == 0)
                                {
                                    typeArgStartIndex = i + 1;
                                }
                                ++scope;
                                break;
                            case ']':
                                --scope;
                                if (scope == 0)
                                {
                                    string typeArgAssemblyQualifiedName = typeName.Substring(typeArgStartIndex, i - typeArgStartIndex);

                                    TypeNameKey typeNameKey = ReflectionUtils.SplitFullyQualifiedTypeName(typeArgAssemblyQualifiedName);
                                    genericTypeArguments.Add(GetTypeByName(typeNameKey));
                                }
                                break;
                        }
                    }

                    type = genericTypeDef.MakeGenericType(genericTypeArguments.ToArray());
                }
            }

            return type;
        }

        private Type GetTypeByName(TypeNameKey typeNameKey)
        {
            return _typeCache.Get(typeNameKey);
        }

        /// <summary>
        /// When overridden in a derived class, controls the binding of a serialized object to a type.
        /// </summary>
        /// <param name="assemblyName">Specifies the <see cref="Assembly"/> name of the serialized object.</param>
        /// <param name="typeName">Specifies the <see cref="System.Type"/> name of the serialized object.</param>
        /// <returns>
        /// The type of the object the formatter creates a new instance of.
        /// </returns>
        public virtual Type BindToType(string assemblyName, string typeName)
        {
            return GetTypeByName(new TypeNameKey(assemblyName, typeName));
        }

        /// <summary>
        /// When overridden in a derived class, controls the binding of a serialized object to a type.
        /// </summary>
        /// <param name="serializedType">The type of the object the formatter creates a new instance of.</param>
        /// <param name="assemblyName">Specifies the <see cref="Assembly"/> name of the serialized object.</param>
        /// <param name="typeName">Specifies the <see cref="System.Type"/> name of the serialized object.</param>
        public virtual void BindToName(Type serializedType, out string assemblyName, out string typeName)
        {
            assemblyName = serializedType.Assembly.FullName;
            typeName = serializedType.FullName;
        }
    }
}
