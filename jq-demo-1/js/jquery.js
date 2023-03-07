//Form bg color change 
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

/// ( "load(), unload()" -> remove on version 3), resize() , scroll() 

// Set Method .. 
// $(document).ready(function(){
//     $('#clickbtn').click(function(){
//         $('#box h2').text(" Gorav");
//         $('#box p').html(" Helo Guys ! <i> <b> how are You ? </b> </i> ");
//         $('#box h2').attr("class","red");
//     });
// });

// .addclass(), removeclass(), toggleclass();

// $(document).ready(function(){
//     // Add
//     $('#addbutton').click(function(){
//         $('#box').addClass("first last");
//     }); 
//     //Remove
//     $('#removebutton').click(function(){
//         $('#box').removeClass("first last");
//     });
//     //Toggle
//     $('#togglebutton').click(function(){
//         $('#box').toggleClass("first");
//     });
// });



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
$(document).ready(function() {
var d = new Date();
var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
    $("#date").click(function() {
        $("#tdate").text(strDate);
    });
});
    
//

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}

console.log(vowel_count("#vowel"));

/*  */

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

/*  */


$('#GFG_UP').text("Click on button to add multiple"
+ " classes to this element");

function GFG_Fun() {
$("#GFG_UP").addClass("color fontWeight");
$('#GFG_DOWN').text("color and fontWeight,"
        + " Both classes added");
}

// // 

$('#GFG_UP1').text("Click on button to remove"
+ " multiple classes to this element");

function GFG_Fun2() {
    $("#GFG_UP1").removeClass("color fontWeight");
    $('#GFG_DOWN').text("color and fontWeight,"
            + " Both classes removed");
}
  