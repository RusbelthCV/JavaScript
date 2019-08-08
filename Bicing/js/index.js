$(document).ready(function () {
    $.getJSON(
        "https://api.citybik.es/v2/networks/bicing",
        function (data) {
            var estacions = data.network.stations;
            //console.log(estacions);
            $("#carga").click(function () {
                leerDatos(estacions);
            });
            $("#buscar").click(function () {
                let numero = parseInt($("input").val());
                console.log(estacions);
                buscarDatos(estacions, numero);
            });
        });



    function buscarDatos(arrayDatos, numero) {
        let arrayColumnas = ["name", "name", "name", "empty_slots", "free_bikes", "latitude", "longitude"];
        for (let i = 0; i < arrayDatos.length; i++) {
            
            if (numero <= arrayDatos[i]["free_bikes"]) {
                var newTR = $(document.createElement("tr"));
                for (let x = 0; x < arrayColumnas.length; x++) {
                    let newTD = $(document.createElement("td"));
                    $(newTD).append(arrayDatos[i][arrayColumnas[x]]);
                    $(newTR).append(newTD);
                }
                $("table").append(newTR);
            }
        }
        
    }

    function leerDatos(arrayDatos) {
        let arrayColumnas = ["name", "name", "name", "empty_slots", "free_bikes", "latitude", "longitude"];

        for (let i = 0; i < arrayDatos.length; i++) {
            let newTR = $(document.createElement("tr"));
            for (let x = 0; x < arrayColumnas.length; x++) {
                let newTD = $(document.createElement("td"));
                $(newTD).append(arrayDatos[i][arrayColumnas[x]]);
                $(newTR).append(newTD);
            }
            $("table").append(newTR);
        }
    }
});