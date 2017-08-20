QUnit.begin(function (details) {
    var jsonVersion = Newtonsoft.Json.Utils && Newtonsoft.Json.Utils.AssemblyVersion && Newtonsoft.Json.Utils.AssemblyVersion.version;
    if (jsonVersion) {
        var bridgeTestVersionSpan = document.getElementById("bridge-version");
        if (bridgeTestVersionSpan) {
            bridgeTestVersionSpan.innerText = bridgeTestVersionSpan.innerText + ", Newtonsoft.Json " + jsonVersion;
        }
    }
});
