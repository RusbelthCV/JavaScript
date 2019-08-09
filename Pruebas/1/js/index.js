$(document).ready(function () {

    $("#down").mousedown(hundirraton);
    $("#up").mouseup(levantar);


});
function hundirraton() {
    $("#down").css("background-color","#FF0").css("color","#00F");
}


function levantar() {
    $(this).css("font-family","Verdana,Geneva,sans-serif","color","#090");
}
