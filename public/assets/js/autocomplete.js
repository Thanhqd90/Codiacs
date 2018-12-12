$(document).ready(function() {
    $( function() {
        var availableTags = [
            "Austin",
            "Dallas" ,
            "Denver" ,
            "Delhi" ,
            "Houston" ,
            "Las Vegas" ,
            "San Francisco" ,
            "Seattle" ,
            "San Antonio" ,
            "Detroit" ,
            "Miami" ,
            "New Orleans" ,
            "Orlando" ,
            "Mumbai" ,
            "Pune" ,
            "Haryana" ,
            "Hidalgo" ,
            "New York" ,
            "New Delhi"
        ];
        $( "#search-term" ).autocomplete({
            source: availableTags
        });
    } );
});