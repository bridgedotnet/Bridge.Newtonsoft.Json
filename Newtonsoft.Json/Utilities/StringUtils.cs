using System;

namespace Newtonsoft.Json.Utilities
{
    internal static class StringUtils
    {
        public static string FormatWith(this string format, IFormatProvider provider, object arg0)
        {
            return format.FormatWith(provider, new[] { arg0 });
        }

        public static string FormatWith(this string format, IFormatProvider provider, object arg0, object arg1)
        {
            return format.FormatWith(provider, new[] { arg0, arg1 });
        }

        public static string FormatWith(this string format, IFormatProvider provider, object arg0, object arg1, object arg2)
        {
            return format.FormatWith(provider, new[] { arg0, arg1, arg2 });
        }

        public static string FormatWith(this string format, IFormatProvider provider, object arg0, object arg1, object arg2, object arg3)
        {
            return format.FormatWith(provider, new[] { arg0, arg1, arg2, arg3 });
        }

        private static string FormatWith(this string format, IFormatProvider provider, params object[] args)
        {
            // leave this a private to force code to use an explicit overload
            // avoids stack memory being reserved for the object array
            ValidationUtils.ArgumentNotNull(format, nameof(format));

            return string.Format(provider, format, args);
        }

        public static string Trim(this string s, int start, int length)
        {
            // References: https://referencesource.microsoft.com/#mscorlib/system/string.cs,2691
            // https://referencesource.microsoft.com/#mscorlib/system/string.cs,1226
            if (s == null)
            {
                throw new ArgumentNullException();
            }
            if (start < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(start));
            }
            if (length < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(length));
            }
            int end = start + length - 1;
            if (end >= s.Length)
            {
                throw new ArgumentOutOfRangeException(nameof(length));
            }
            for (; start < end; start++)
            {
                if (!char.IsWhiteSpace(s[start]))
                {
                    break;
                }
            }
            for (; end >= start; end--)
            {
                if (!char.IsWhiteSpace(s[end]))
                {
                    break;
                }
            }
            return s.Substring(start, end - start + 1);
        }
    }
}
