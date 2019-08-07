$(document).ready(function()
{
    $(".product").click(function()
    {
        let like = $(this).next();
        let stateLike = $(like).attr("src"); 
        if(stateLike == "img/no-like.png")
        {
            $(like).attr("src","img/like.png");
            let likes = parseInt($(".contador").text());
            let suma = likes + 1;
            console.log("Valor inicial: "+likes);
            console.log("Suma: "+suma);
            $(".contador").text(suma);
        }
        else
        {
            $(like).attr("src","img/no-like.png");
            let likes = parseInt($(".contador").text());
            let suma = likes - 1;
            console.log("Valor inicial: "+likes);
            console.log("Suma: "+suma);
            $(".contador").text(suma);
        }
    });
});