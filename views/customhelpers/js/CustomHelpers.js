define(
    "CustomHelpers", [
        "Handlebars"
    ],
    function(
        Handlebars
    ) {
        "use strict";

        Handlebars.registerHelper("hamburgerHelper", function(text) {
            return new Handlebars.SafeString(text);
        });
    });