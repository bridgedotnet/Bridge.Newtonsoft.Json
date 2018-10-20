using Newtonsoft.Json.Serialization;
using System;

namespace Newtonsoft.Json.Utilities
{
    internal static class ReflectionUtils
    {
        private static string GetFullyQualifiedTypeName(Type t, ISerializationBinder binder)
        {
            if (binder != null)
            {
                string assemblyName;
                string typeName;
                binder.BindToName(t, out assemblyName, out typeName);
                return typeName + (assemblyName == null ? "" : ", " + assemblyName);
            }

            return t.AssemblyQualifiedName;
        }

        public static TypeNameKey SplitFullyQualifiedTypeName(string fullyQualifiedTypeName)
        {
            int? assemblyDelimiterIndex = GetAssemblyDelimiterIndex(fullyQualifiedTypeName);

            string typeName;
            string assemblyName;

            if (assemblyDelimiterIndex != null)
            {
                typeName = fullyQualifiedTypeName.Trim(0, assemblyDelimiterIndex.GetValueOrDefault());
                assemblyName = fullyQualifiedTypeName.Trim(assemblyDelimiterIndex.GetValueOrDefault() + 1, fullyQualifiedTypeName.Length - assemblyDelimiterIndex.GetValueOrDefault() - 1);
            }
            else
            {
                typeName = fullyQualifiedTypeName;
                assemblyName = null;
            }

            return new TypeNameKey(assemblyName, typeName);
        }

        private static int? GetAssemblyDelimiterIndex(string fullyQualifiedTypeName)
        {
            // we need to get the first comma following all surrounded in brackets because of generic types
            // e.g. System.Collections.Generic.Dictionary`2[[System.String, mscorlib,Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.String, mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089
            int scope = 0;
            for (int i = 0; i < fullyQualifiedTypeName.Length; i++)
            {
                char current = fullyQualifiedTypeName[i];
                switch (current)
                {
                    case '[':
                        scope++;
                        break;
                    case ']':
                        scope--;
                        break;
                    case ',':
                        if (scope == 0)
                        {
                            return i;
                        }
                        break;
                }
            }

            return null;
        }
    }

    internal struct TypeNameKey : IEquatable<TypeNameKey>
    {
        internal readonly string AssemblyName;
        internal readonly string TypeName;

        public TypeNameKey(string assemblyName, string typeName)
        {
            AssemblyName = assemblyName;
            TypeName = typeName;
        }

        public override int GetHashCode()
        {
            return (AssemblyName?.GetHashCode() ?? 0) ^ (TypeName?.GetHashCode() ?? 0);
        }

        public override bool Equals(object obj)
        {
            if (!(obj is TypeNameKey))
            {
                return false;
            }

            return Equals((TypeNameKey)obj);
        }

        public bool Equals(TypeNameKey other)
        {
            return (AssemblyName == other.AssemblyName && TypeName == other.TypeName);
        }
    }
}
