$(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
        $(this).toggleClass("active");
    });

    $.get("/api/user_data").then(function(data) {
        $(".member-name").text(data.email);
    });
});
