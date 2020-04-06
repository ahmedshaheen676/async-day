var req = null;

function submitForm() {
    if (window.XMLHttpRequest)
        req = new XMLHttpRequest();
    else if (window.ActiveXObject)
        req = new ActiveXObject(Microsoft.XMLHTTP);
    req.onreadystatechange = handleReq;
    req.open("GET", "textFileToRead.txt?t=" + new Date().getTime(), true);
    req.send(null);
}

function submitSecondForm() {

    if (window.XMLHttpRequest)
        req = new XMLHttpRequest();
    else if
    (window.ActiveXObject) req = new ActiveXObject(Microsoft.XMLHTTP);
    req.onreadystatechange = handleStateChange;
    var name = document.getElementById("theName").value;
    url = "validateUsername" + "?username=" + name + "&timeStamp=" + new Date().getTime();
    req.open("GET", url, true);
    req.send(null);
}

function handleStateChange() {
    if (req.readyState == 4 && req.status == 200) {
        xmlvalue = req.responseText;
        document.getElementById("status").innerText = xmlvalue;
    }
}

function handleReq() {
    if (req.readyState == 4)
        if (req.status == 200)
            document.ajax.dyn.value = "Received:" + req.responseText;
        else
            document.ajax.dyn.value = "Error code " + req.status;
}

var xmlHttp;

function startRequest() {
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChangeForXmlTest;
    xmlHttp.open("GET", "xmlFileToRead.xml", true);
    xmlHttp.send(null);
}

function createXMLHttpRequest() {
    if (window.ActiveXObject)
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    else if (window.XMLHttpRequest)
        xmlHttp = new XMLHttpRequest();
}

function handleStateChangeForXmlTest() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        document.getElementById("results").innerHTML =
            xmlHttp.responseText;
}