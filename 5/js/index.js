$(document).ready(function () {
    $("#prev").click(function () {
        console.log($("#max").text());
        $(".suma").each(function () {

            if (parseInt($("#max").text()) > 4) {
                let valorActual = parseInt($(this).text());
                let nuevoValor = valorActual - 1;
                $(this).text(nuevoValor);
            }
        });
    });


    $("#next").click(function () {
        $(".suma").each(function () {
            if (parseInt($("#max").text()) < 20) {
                let valorActual = parseInt($(this).text());
                let nuevoValor = valorActual + 1;
                $(this).text(nuevoValor);
            }
        });
    });
});