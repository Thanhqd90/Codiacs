$(document).ready(function() {
    let firstName = $("#firstName");
    let lastName = $("#lastName");
    let username = $("#username");
    let email = $("#email");
    let password = $("#password");
    let securityQuestion = $("#securityQuestion");
    let answer = $("#answer");
    let signUpForm = $("form.newUser");

    signUpForm.on("submit", function(event) {
        event.preventDefault();
        let userData = {
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            username: username.val().trim(),
            email: email.val().trim(),
            password: password.val().trim(),
            securityQuestion: securityQuestion.val().trim(),
            answer: answer.val().trim(),
        };
        if (
            !(
                firstName.val().trim() ||
                lastName.val().trim() ||
                username.val().trim() ||
                email.val().trim() ||
                password.val().trim() ||
                securityQuestion.val().trim() ||
                answer.val().trim()
            )
        ) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData);
        resetValues();
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(userData) {
        $.ajax({
            method: "PUT",
            url: "/register",
            data: userData
        }).then(function(data) {
            window.location.replace(data);
        });
    }
    function resetValues() {
        firstName.val("");
        lastName.val("");
        username.val("");
        emailInput.val("");
        passwordInput.val("");
        answer.val("");
    }
});
