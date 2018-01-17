/**
 * Created by Shcherbina on 02.05.2017.
 */

function setSizeNewsBlock () {


    $(".news-header").css("width", document.documentElement.clientWidth*0.278);
    $(".news-header").css("height", document.documentElement.clientWidth*0.2);

    $(".carousel-inner").css("width", document.documentElement.clientWidth*0.278);
    $(".carousel-inner").css("height", document.documentElement.clientWidth*0.2);

    $(".main-block-header").css("width", document.documentElement.clientWidth);
    $(".main-block-header").css("height", (document.documentElement.clientWidth*4)/9);

/*    $(".slider-header-news").css("width", (document.documentElement.clientWidth*311)/960);
    $(".slider-header-news").css("padding-top", (document.documentElement.clientWidth*5)/64);
    $(".slider-header-news").css("padding-left", (document.documentElement.clientWidth*73)/1920);
    $(".slider-header-news").css("max-heightt", (document.documentElement.clientWidth*74)/192);*/
    /*$(".news-header").css("width", document.documentElement.clientWidth*0.278);
     $(".news-header").css("height", document.documentElement.clientHeight*0.68);*/
}

function setmainAphisha(data) {
    $("#main_aphisha").append(function () {
        var res = "";
        for(var i=0; i<data.length; i++){
            res += "<div class='col-xs-12 col-md-4 col-sm-6' id='div-aphisha-col-"+data[i].id+"-"+data[i].place_id+"'>" +
                "<div class='icon_ser'><i class='fa fa-bus'></i></div>" +
                "<div class='wrap'>" +
                "<h3 id='date-aphisha-col-"+data[i].id+"-"+data[i].place_id+"'>" + data[i].date + ", " + data[i].place + "</h3>" +
                "<p id='des-aphisha-col-"+data[i].id+"-"+data[i].place_id+"'>" + data[i].description + "</p>" +
                "</div>" +
                "</div>"
        }
        return res;
    })
}