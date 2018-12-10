$(document).ready(function() {
    let title = $("#title");
    let countryVisited = $("#countryVisited");
    let bestTime = $("#bestTime");
    let cityVisited = $("#cityVisited");
    let stayAt = $("#stayAt");
    let placesVisited = $("#placesVisited");
    let mustHaves = $("#mustHaves");
    let experience = $("#experience");
    let photos = $("#photos");
    let isVisible = $("#isVisible");
    let defaultUnchecked = $("#defaultUnchecked");
    let defaultUnchecked1 = $("#defaultUnchecked1");
    let defaultUnchecked2 = $("#defaultUnchecked2");
    let blogForm = $("blog-form");

    blogForm.on("submit", function(event) {
        event.preventDefault();
        let userData = {
            title: title.val().trim(),
            countryVisited:countryVisited,
            bestTime: bestTime,
            cityVisited: cityVisited,
            stayAt: stayAt.val().trim(),
            placesVisited: placesVisited.val().trim(),
            mustHaves: mustHaves.val().trim(),
            experience:experience.val().trim(),
            photos: photos.val().trim(),
            isVisible: isVisible.val().trim(),
            defaultUnchecked:defaultUnchecked,
            defaultUnchecked1:defaultUnchecked1,
            defaultUnchecked2:defaultUnchecked2
        };
        if (
            !(
                title.val().trim() ||
                countryVisited ||
                bestTime ||
                cityVisited ||
                stayAt.val().trim() ||
                placesVisited.val().trim() ||
                mustHaves.val().trim() ||
                experience.val().trim() ||
                photos.val().trim() ||
                isVisible.val().trim() ||
                defaultUnchecked ||
                defaultUnchecked1 ||
                defaultUnchecked2
            )
        ) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        blog(userData);
        resetValues();
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function blog(userData) {
        $.ajax({
            method: "PUT",
            url: "/blog/create",
            data: userData
        }).then(function(data) {
            window.location.replace(data);
        });
    }
});