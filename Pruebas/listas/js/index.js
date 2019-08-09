$(document).ready(function () {
    $(".btn-group-vertical > button:first-child").click(ocultar);
    $(".btn-group-vertical > button:nth-child(2)").click(mostrar);
    $(".btn-group-vertical > button:nth-child(3)").click(final);
    $(".btn-group-vertical > button:nth-child(4)").click(principio);
    $(".btn-group-vertical > button:nth-child(5)").click(deleteUltimo);
    $(".btn-group-vertical > button:nth-child(6)").click(deletePrimero);
    $(".btn-group-vertical > button:nth-child(7)").click(colores);





});


function colores() {

    let longLi = $("li").length;

    for (let i = 0; i < longLi + 1; i++) {
        if (i % 2 == 0) {
            $("ul > li:nth-child(" + i + ")").addClass("list-group-item-dark");
        }
        else {
            $("ul > li:nth-child(" + i + ")").addClass("list-group-item-secondary");
        }
    }


}



function deletePrimero() {

    $("ul > li:first-child").remove();
}


function deleteUltimo() {

    console.log($("ul > li:last-child"));
    $("ul > li:last-child").remove();
}


function final() {
    let newLi = $(document.createElement("li"));
    let mensaje = "Otro elemento";
    $(newLi).addClass("list-group-item");
    $(newLi).append(mensaje);

    $("ul").append(newLi);
}

function principio() {

    let newLi = $(document.createElement("li"));
    let mensaje = "Principio elemento";
    $(newLi).addClass("list-group-item");
    $(newLi).append(mensaje);

    $("ul").prepend(newLi);

}

function ocultar() {
    $("ul").hide(2500);
}
function mostrar() {
    $("ul").show(2500);
}