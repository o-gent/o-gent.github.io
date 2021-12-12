function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

var el = document.getElementById('mode');
var url = new URL(location.href);
if(url.searchParams.get("mode") == "dark")
{  
    // dark mode
    setCookie("mode", "dark", 7)
}
else if(url.searchParams.get("mode") == "light"){
    // light mode
    setCookie("mode", "light", 7)
}
else {

}

if(getCookie("mode") == "dark") {
    el.insertAdjacentHTML('afterbegin', "<link rel='stylesheet' href='/assets/css/dark.css'>")
}
else if (getCookie("mode") == "light") {
    el.insertAdjacentHTML('afterbegin', "<link rel='stylesheet' href='/assets/css/light.css'>")
}
else{
    el.insertAdjacentHTML('afterbegin', "<link rel='stylesheet' href='/assets/css/light.css'>")
}