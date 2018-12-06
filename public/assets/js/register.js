$(document).ready(function () {
    // jQuery references 
    var firstName = $("#defaultRegisterFormFirstName");
    var lastName = $("#defaultRegisterFormLastName");
    var username = $("#defaultRegisterFormUsername");
    var email = $("#defaultRegisterFormEmail");
    var password = $("#defaultRegisterFormPassword");
    var phone = $("#defaultRegisterPhone");
    var checkbox = $("#defaultcheckbox");
    var newUser = $("#newUser");
    // Adding an event listener for when the form is submitted
    $(newUser).on("submit", handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if any fields are empty

        if (!firstName.val().trim() || !lastName.val().trim() || !username.val().trim() || !email.val().trim() || !password.val().trim() || !phone.val().trim() || !checkbox.val()) {
            return;
        }
        // Constructing a newUser object to hand to the database
        var bloggerPersonalInfo = {
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            username: username.val().trim(),
            email: email.val().trim(),
            password: password.val().trim(),
            phone: phone.val().trim(),
            checkbox: checkbox.val()
        };

    }
});