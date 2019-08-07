$(document).ready(function () {
    let longNumbers = $(".number").length;
    $("button").click(function () {
        // let divCalc = $(".number");
        // for(let i = 0;i < longNumbers;i++)
        // {
        //     let number = Math.floor(Math.random()*50);
        //     let div = $(divCalc).get(i);
        //     $(div).text(number);
        // }

        $(".number").each((i,el) => {
            let number = Math.floor(Math.random() * 50);
            $(el).text(number);
        });

    });
});