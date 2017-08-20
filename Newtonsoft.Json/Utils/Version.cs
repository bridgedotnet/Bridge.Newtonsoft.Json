using System;

using Bridge;

namespace Newtonsoft.Json.Utils
{
    class AssemblyVersion
    {
        public static string version = AssemblyVersionMarker.GetVersion();
        public static string compiler = AssemblyVersionMarker.GetVersion(AssemblyVersionMarker.VersionType.Compiler);
    }

    /// <summary>
    /// The class is to get version string representation either of the current assembly or Compiler
    /// </summary>
    [External]
    public class AssemblyVersionMarker
    {
        [Enum(Emit.Value)]
        public enum VersionType
        {
            CurrentAssembly = 0,
            Compiler = 1
        }

        /// <summary>
        /// Compiler will replace the method call with an version required by method parameter
        /// </summary>
        /// <param name="type">Specifies either CurrentAssembly or Compiler version, default is CurrentAssembly</param>
        /// <returns>Current assembly or Compiler version in string representation</returns>
        [Template("{type:version}")]
        public static extern string GetVersion(VersionType type = VersionType.CurrentAssembly);
    }
}
