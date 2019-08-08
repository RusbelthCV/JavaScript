$(document).ready(function () {
    let jugador = "";
    let computadora = "";
    let marcador


    $("button").click(function () {
        let tirada = $(this).text();
        console.log(tirada);
        jugador = tirada;
        imagenJugada(jugador,0);
        computadora = tiraComputadora();
        imagenJugada(computadora,1);
        console.log(computadora);
        ganador(jugador, computadora);
    });


    function imagenJugada(foto,turno)
    {
        let imagenJugador = $(".imagenTiro").get(turno);
        $(imagenJugador).attr("src","img/"+foto+".png");
    }

    function tiraComputadora() {
        let tiradaRandom = Math.floor(Math.random() * 3);
        let jugadaComputadora = $("button").get(tiradaRandom);
        return $(jugadaComputadora).text();
    }


    function ganador(jugador, computadora) {
        if (jugador == "Piedra" && computadora == "Tijera") {
            $("h1").text("Has ganado!");
            let marcadorJugador = $("span").get(0);
            let suma = parseInt($(marcadorJugador).text())+1;
            $(marcadorJugador).text(suma);
            $(".marcador").css("background-color","#00FF00");
        }
        else if (jugador == "Papel" && computadora == "Piedra") {
            $("h1").text("Has ganado!");
            let marcadorJugador = $("span").get(0);
            let suma = parseInt($(marcadorJugador).text())+1;
            $(marcadorJugador).text(suma);
            $(".marcador").css("background-color","#00FF00");
        }
        else if (jugador == "Tijera" && computadora == "Papel") {
            $("h1").text("Has ganado!");
            let marcadorJugador = $("span").get(0);
            let suma = parseInt($(marcadorJugador).text())+1;
            $(marcadorJugador).text(suma);
            $(".marcador").css("background-color","#00FF00");
        }
        else if (jugador == computadora) {
            $("h1").text("Empate!");

        }
        else {
            $("h1").text("Has perdido!");
            let marcadorComputadora = $("span").get(2);
            let suma = parseInt($(marcadorComputadora).text())+1;
            $(marcadorComputadora).text(suma);
            $(".marcador").css("background-color","#FF0000");
        }
    }
});