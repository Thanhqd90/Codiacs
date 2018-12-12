$(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
        $(this).toggleClass("active");
    });
});

// layout variable for email
const space = "         |        ";
// email function for users to contact
// error is showing due to eslint but works fine
function send() {
    setTimeout(function() {
        window.open("mailto:jeffreyvh@ymail.com" + "?subject=" + document.getElementById("subject").value + "&body=" + document.getElementById("name").value + space + document.getElementById("email").value + space + document.getElementById("message").value);
    }, 320);
}