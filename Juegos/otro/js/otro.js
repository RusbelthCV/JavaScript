$(document).ready(function () {
    alert("Te toca tirar: ");
    let jugador = "";
    let computadora = "";


    $("span").click(() => tiraJugador($(this)));
    
    function tiraJugador (e) 
    {
       
        let tirada = $(e).text();
        console.log(tirada);
        jugador = tirada;

        computadora = tiraComputadora();
        console.log(computadora);
        ganador(jugador,computadora);
    }


    function tiraComputadora() {
        let tiradaRandom = Math.floor(Math.random() * 3);
        let jugadaComputadora = $("span").get(tiradaRandom);
        return $(jugadaComputadora).text();
    }


    function ganador(jugador,computadora)
    {
        if(jugador == "Piedra" && computadora == "Tijera")
        {
            alert("Has ganado!");
        }
        else if(jugador == "Papel" && computadora == "Piedra")
        {
            alert("Has ganado!");
        }
        else if(jugador == "Tijera" && computadora == "Papel")
        {
            alert("Has ganado!");
        }
        else if(jugador == computadora)
        {
            alert("Empate!");
        }
        else
        {
            alert("Has perdido!");
        }
    }
});