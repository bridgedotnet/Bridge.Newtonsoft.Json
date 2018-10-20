using System;

namespace Newtonsoft.Json.Serialization
{
    internal class SerializationBinderAdapter : ISerializationBinder
    {
        public readonly ISerializationBinder SerializationBinder;

        public SerializationBinderAdapter(ISerializationBinder serializationBinder)
        {
            SerializationBinder = serializationBinder;
        }

        public Type BindToType(string assemblyName, string typeName)
        {
            return SerializationBinder.BindToType(assemblyName, typeName);
        }

        public void BindToName(Type serializedType, out string assemblyName, out string typeName)
        {
            SerializationBinder.BindToName(serializedType, out assemblyName, out typeName);
        }
    }
}
