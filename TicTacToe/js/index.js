$(document).ready(function () {
    var posicion;
    var tablero = (0,0,0,0,0,0,0,0,0);

    
    $(".jugada").css("display", "none");
    $(".fondo").click(function () {
        posicion = $(this);
        posicionJugada();
    });

    $(".jugada").click(function () {
        let jugador = $("#jugador").text();
        let valor = $(this).attr("alt");
        posicion.addClass(valor);
        posicion.removeClass("fondo");
        $(".jugada").css("display","none");
        if (jugador == "Jugador 1") {
            $("#jugador").text("Jugador 2");
        }
        else {
            $("#jugador").text("Jugador 1");
        }
    });
});



function posicionJugada() {
    mostrarOpciones();
}


function mostrarOpciones() {
    let jugador = $("#jugador").text();
    if (jugador == "Jugador 1") {
        $(".jugadas > img:first-child").css("display", "block");
    }
    else {
        $(".jugadas > img:last-child").css("display", "block");
    }
}