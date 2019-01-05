
$(document).ready(function(){
     $(".titleinfo").append('<em>Teton Sunrise</em>')
     $(".thumbs a").click(function(){
       var largePath = $(this).attr("href");
       var largeAlt = $(this).attr("title"); 
       $("#largeImg").attr({ src: largePath, alt: largeAlt});
       $(".titleinfo em").html(largeAlt);
       return false;
    });
});
