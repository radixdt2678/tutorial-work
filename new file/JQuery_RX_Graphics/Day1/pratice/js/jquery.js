// //Form bg color change 
 $(document).ready(function(){
     $('#name,#lname,#email,#country').focus(function(){
         $(this).css('background-color','lime');
     });
     $('#name,#lname,#email,#country').blur(function(){
         $(this).css('background-color','');
     });
    //Fatch Values 
     $('#country').change(function(){
         var a =  $(this).val();
         $(this).css('background-color','pink');
         $('#test').html(a);
     });
     //Select..
     $('#name,#lname,#email').select(function(){
         $(this).css('background-color','yellow');
     });
     //Form Submit Using JQ..
     $('#Rform').submit(function(){
         alert("Form are submitted");
     });
 }); 

// // ( "load(), unload()" -> remove on version 3), resize() , scroll() 

// //Set Method .. 
 $(document).ready(function(){
    $('#clickbtn').click(function(){
        $('#box h2').text(" Gorav");
        $('#box p').html(" Helo Guys ! <i> <b> how are You ? </b> </i> ");
        $('#box h2').attr("class","red");
    });
}); 

//.addclass(), removeclass(), toggleclass();

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
 







