$(document).ready(function() {
    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
        $("#date").click(function() {
            $("#tdate").text(strDate);
        });
    });