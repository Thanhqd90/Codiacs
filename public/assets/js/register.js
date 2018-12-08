$(document).ready(function() {
    let firstName = $("#firstName");
    let lastName = $("#lastName");
    let username = $("#username");
    let email = $("#email");
    let password = $("#password");
    let securityQuestion = $("#securityQs");
    let answer = $("#answer");
<<<<<<< HEAD
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
            answer: answer.val().trim()
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
            url: "/api/signup",
            data: userData
        }).then(function(data) {
            window.location.replace(data);
        }).catch(handleLoginErr);
    }

=======
    let acceptTerm = $("#acceptTerm").prop("checked");
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
            acceptTerm: $("#acceptTerm").prop("checked")
        };
        if (
            !(
                firstName.val().trim() ||
                lastName.val().trim() ||
                username.val().trim() ||
                email.val().trim() ||
                password.val().trim() ||
                securityQuestion.val().trim() ||
                answer.val().trim() ||
                $("#acceptTerm").prop("checked")
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
        $.post("/api/signup", {
            firstName: userData.firstName,
            lastName: userData.lastName,
            username: userData.username,
            email: userData.email,
            password: userData.password,
            securityQuestion: userData.securityQuestion,
            answer: userData.answer,
            acceptTerm: userData.acceptTerm
        })
            .then(function(data) {
                window.location.replace(data);
            })
            .catch(handleLoginErr);
    }

>>>>>>> 5fa614f5c1159a02ec75f7f546442e7e4c059dcd
    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
<<<<<<< HEAD
=======

    function resetValues() {
        firstName.val("");
        lastName.val("");
        username.val("");
        emailInput.val("");
        passwordInput.val("");
        answer.val("");

>>>>>>> 5fa614f5c1159a02ec75f7f546442e7e4c059dcd
});
