$(document).ready(function () {
    var posicion;
    var celda;
    var tablero = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);


    $(".jugada").css("display", "none");
    $(".celda").click(function () {
        posicion = $(this);
        celda = $(".celda").index($(this));
        $(".celda").css("border","none");
        if (tablero[celda] == 0) {
            posicionJugada();
            posicion.css("border","1px solid red");
        }
        else
        {
            $(".jugada").css("display", "none");
        }
    });

    $(".jugada").click(function () {
        let jugador = $("#jugador").text();
        let valor = $(this).attr("alt");
        posicion.addClass(valor);
        posicion.removeClass("fondo");
        $(".celda").css("border","none");
        if (valor == "jugadorCruz") {
            tablero[celda] = 1;
        }
        else {
            tablero[celda] = 2;
        }



        ganador(tablero);
        $(".jugada").css("display", "none");
        if (jugador == "Jugador 1") {
            $("#jugador").text("Jugador 2");
        }
        else {
            $("#jugador").text("Jugador 1");
        }
    });
});



function ganador(tablero) {
    var ganador = false;

    if (tablero[0] == 1 && tablero[1] == 1 && tablero[2] == 1 || tablero[3] == 1 && tablero[4] == 1 && tablero[5] == 1 || tablero[6] == 1 && tablero[7] == 1 && tablero[8] == 1 || tablero[0] == 1 && tablero[3] == 1 && tablero[6] == 1 || tablero[1] == 1 && tablero[4] == 1 && tablero[7] == 1 || tablero[2] == 1 && tablero[5] == 1 && tablero[8] == 1 || tablero[0] == 1 && tablero[4] == 1 && tablero[8] == 1 || tablero[2] == 1 && tablero[4] == 1 && tablero[6] == 1) {
        alert("Ha ganado el jugador 1 !!!");
        ganador = true;
    }
    else if (tablero[0] == 2 && tablero[1] == 2 && tablero[2] == 2 || tablero[3] == 2 && tablero[4] == 2 && tablero[5] == 2 || tablero[6] == 2 && tablero[7] == 2 && tablero[8] == 2 || tablero[0] == 2 && tablero[3] == 2 && tablero[6] == 2 || tablero[1] == 2 && tablero[4] == 2 && tablero[7] == 2 || tablero[2] == 2 && tablero[5] == 2 && tablero[8] == 2 || tablero[0] == 2 && tablero[4] == 2 && tablero[8] == 2 || tablero[2] == 2 && tablero[4] == 2 && tablero[6] == 2) {
        alert("Ha ganado el jugador 2 !!!");
        ganador = true;
    }

    if (ganador) {
        $(".celda").addClass("fondo");
        $(".celda").removeClass("jugadorCruz");
        $(".celda").removeClass("jugadorCirculo");
        ganador = false;
        $.each(tablero,function(index,value)
        {
            tablero[index] = 0;
        });
        console.log(tablero);
    }
}




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