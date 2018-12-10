$(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
        $(this).toggleClass("active");
    });
});
//email function!!
// function sendMail() {
//     let link = "mailto:jeffreyvh@ymail.com";
//     "?cc=" +
//         "&subject=" +
//         escape(document.getElementById("m-subject").value) +
//         "&body=" +
//         escape(document.getElementById("m-message").value);
//     window.location.href = link;
// }
