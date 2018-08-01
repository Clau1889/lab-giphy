$(document).ready(function(){
    var drawGift = function (data){
        var gif = "";
        var url = "";
        data.forEach(function(element){
            gif =element.images.downsized_large.url;
            url = element.bitly_gif_url;
        $("#elementos").append(template(gif, url));
        })
    }

var template = function(gif,url){
    var temp = "<div class='elemento'><img id='img-gif' src='"+gif +"'/><a id='img-gif' href='"+url+"'>See More</a></div"
    return temp;
}

var ajaxGif= function(gif){
    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search',
        type:'GET',
        datatype:'json',
        data:{
            q:gif,
            api_key:'uOgSB5T0U9V4MiUAeTC3bgkMY8aBNsyV'
        }
    })
    .done(function(response){
        console.log(response);
        drawGift(response.data);
    })
    .fail(function(){
        console.log("error");
    })
}

$("#buscar-gif").click(function(event){
    $("#elementos").empty();
    var gif=$("#gif-text").val();
    ajaxGif(gif);
    });
});