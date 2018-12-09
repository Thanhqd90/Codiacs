define(
    "link", [
        "Handlebars"
    ],
    function(
        Handlebars
    ) {
        "use strict";

        Handlebars.registerHelper("link", function(object) {
            var url = Handlebars.escapeExpression(object.url),
                text = Handlebars.escapeExpression(object.text);

            return new Handlebars.SafeString(
                "<a href='" + url + "'>" + text + "</a>"
            );
        });
    });