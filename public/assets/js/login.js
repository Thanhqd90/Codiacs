$(document).ready(function() {
    let loginForm = $("login-form");
    let emailInput = $("#email");
    let passwordInput = $("#password");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
        event.preventDefault();
        let userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(userData) {
        $.ajax({
            method: "PUT",
            url: "/login",
            data: userData
        }).then(function(data) {
            window.location.replace(data);
            // If there's an error, log the error
        }).catch(function(err) {
            console.log(err);
        });
    }
});
