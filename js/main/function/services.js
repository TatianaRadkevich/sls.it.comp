/**
 * Created by Shcherbina on 02.11.2017.
 */
var ip = "202";
var httpServices = {};
var DOMAIN = "http://localhost:8080";
var app = "/sadko_dev/";
var now = (new Date().toLocaleDateString()).split(".");
var now_dot = (new Date().toLocaleDateString());
var now_date = now[1] + "-" + now[2] + "-" + now[0];

var XMLHttpFactories = [
    function () {
        return new XMLHttpRequest()
    },
    function () {
        return new ActiveXObject("Msxml2.XMLHTTP")
    },
    function () {
        return new ActiveXObject("Msxml3.XMLHTTP")
    },
    function () {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
];

var createXMLHTTPObject = function () {
    var xmlhttp = false;
    for (var i = 0; i < XMLHttpFactories.length; i++) {
        try {
            xmlhttp = XMLHttpFactories[i]();
        }
        catch (e) {
            continue;
        }
        break
    }
    return xmlhttp;
};

/*httpServices.GetAllAphisha = function (obj) {
    $.ajax({
        type: "POST",
        data: JSON.stringify(obj),
        url: DOMAIN + app + "getAllAphisha",
        contentType: 'application/json',
        success: function (res) {
            setmainAphisha(res);
        },
        error: function (res) {
            alert("Проблема со связью")
        }
    });
};*/

/*httpServices.getMainAphisha = function () {
    var url = DOMAIN + app + "getMainAphisha";
    var method = "GET";
    var http = createXMLHTTPObject();
    http.open(method, url, false);
    http.send();
    if (http.readyState == 4) {
        if (http.status == 200) {
            setmainAphisha(JSON.parse(http.responseText))
        }
    }
};*/

httpServices.getMainAphisha = function () {
    $.ajax({
        type: "GET",
        url: DOMAIN + app + "getMainAphisha",
        contentType: 'application/json',
        success: function (res) {
            setmainAphisha(res);
        },
        error: function (res) {
            alert("Проблема со связью")
        }
    });
};

httpServices.getVisitors = function () {
    $.ajax({
        type: "GET",
        url: DOMAIN + app + "getVisitors",
        contentType: 'application/json',
        success: function (res) {

        },
        error: function (res) {
            alert("Проблема со связью")
        }
    });
};

httpServices.getAllAphisha = function () {
    $.ajax({
        type: "GET",
        url: DOMAIN + app + "getAllAphisha",
        contentType: 'application/json',
        success: function (res) {

        },
        error: function (res) {
            alert("Проблема со связью")
        }
    });
};

httpServices.getCity = function () {
    $.ajax({
        type: "GET",
        url: DOMAIN + app + "getCity",
        contentType: 'application/json',
        success: function (res) {

        },
        error: function (res) {
            alert("Проблема со связью")
        }
    });
};

httpServices.searchAphisha = function () {
    $.ajax({
        type: "GET",
        url: DOMAIN + app + "searchAphisha",
        contentType: 'application/json',
        success: function (res) {

        },
        error: function (res) {
            alert("Проблема со связью")
        }
    });
};