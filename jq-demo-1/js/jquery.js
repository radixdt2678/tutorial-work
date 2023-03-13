// //Form bg color change 
// $(document).ready(function(){
//     $('#name,#lname,#email,#country').focus(function(){
//         $(this).css('background-color','lime');
//     });
//     $('#name,#lname,#email,#country').blur(function(){
//         $(this).css('background-color','');
//     });
//     //Fatch Values 
//     $('#country').change(function(){
//         var a =  $(this).val();
//         $(this).css('background-color','pink');
//         $('#test').html(a);
//     });
//     //Select..
//     $('#name,#lname,#email').select(function(){
//         $(this).css('background-color','yellow');
//     });
//     //Form Submit Using JQ..
//     $('#Rform').submit(function(){
//         alert("Form are submitted");
//     });
// }); 

// // ( "load(), unload()" -> remove on version 3), resize() , scroll() 

// //Set Method .. 
/* $(document).ready(function(){
    $('#clickbtn').click(function(){
        $('#box h2').text(" Gorav");
        $('#box p').html(" Helo Guys ! <i> <b> how are You ? </b> </i> ");
        $('#box h2').attr("class","red");
    });
}); */

//.addclass(), removeclass(), toggleclass();
/* 
$(document).ready(function(){
    // Add
    $('#addbutton').click(function(){
        $('#box').addClass("first last");
    }); 
    //Remove
    $('#removebutton').click(function(){
        $('#box').removeClass("first last");
    });
    //Toggle
    $('#togglebutton').click(function(){
        $('#box').toggleClass("first");
    });
});
 */


/* 1st progarm */


// function displayWindowSize() {
		
//     // Get width and height of the window
    
//     var w = document.documentElement.clientWidth;
//     var h = document.documentElement.clientHeight;

//     // Display result inside a div element
//     document.getElementById("result").innerHTML
//         = "Width: " + w + ", " + "Height: " + h;
// }
// window.addEventListener("resize", displayWindowSize);

// // Calling the function for the first time
// displayWindowSize();


/* 2nd Program */

let lineNo = 1;
$(document).ready(function () {
    $(".add-row").click(function () {
        markup = "<tr><td>This is row " + lineNo + "</td></tr>";
        tableBody = $("table tbody");
        tableBody.append(markup);
        lineNo++;
    });
});
// 
// $(document).ready(function() {
// var d = new Date();
// var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
//     $("#date").click(function() {
//         $("#tdate").text(strDate);
//     });
// });
    




