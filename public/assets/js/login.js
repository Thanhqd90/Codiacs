$(document).ready(function() {
    console.log("LogIn app loaded");
    $("#log_in_btn").on("submit", function(event){

        event.preventDefault();

        //Grab data from sign in form
        var userData = {
            email: $("#email").val().trim(),
            password: $("#password").val().trim(),
        };
        $.ajax({
            method: "PUT",
            url: "/login",
            data: userData
        }).then(function(data) {
            window.location.replace(data);
        });
    });
});