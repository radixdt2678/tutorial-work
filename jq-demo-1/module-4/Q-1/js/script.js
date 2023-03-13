$(document).ready(function(){
    $('.btn').mouseover(function(){
       $(this).addClass('red');
    }).mouseout(function(){
       $(this).addClass('blue');
    });
 });