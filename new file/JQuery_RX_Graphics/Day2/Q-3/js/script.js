$('#added').text("Click on button to add multiple"
+ " classes to this element");

function Add_remv() {
$("#added").addClass("color fontWeight");
$('#ADD').text("color and fontWeight,"
        + " Both classes added");
}


$('#remove').text("Click on button to remove"
+ " multiple classes to this element");

function Add_remv2() {
    $("#remove").removeClass("color fontWeight");
    $('#RMV1').text("color and fontWeight,"
            + " Both classes removed");
}