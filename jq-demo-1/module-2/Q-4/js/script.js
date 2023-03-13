var white = false
var bgcolor;
$(document).ready(function () {
    $("#btn").click(function () {
        if (white = !white) {
            bgcolor = $(this).css('backgroundColor');
            $(this).css("background-color", "green");
            $(this).html("ON");
        } else {
            $(this).css("background-color", bgcolor);
            $(this).html("OFF");
        }
    });
});