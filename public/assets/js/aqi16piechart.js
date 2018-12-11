$(document).ready(function() {

    Highcharts.setOptions({
        colors: ["#64E572", "#FFFF0D", "#FF9C00", "#FF0000", "#700C8F", "#820E22"]
    });

    $("#search").on("click", function(event) {
        event.preventDefault();

        var name = new Array();
        var data = new Array();
        var dataArrayFinal = new Array();
        var city = $("#search-term").val().trim();
        let URL=`/cityData/${city}`;
        console.log(URL);
        $.getJSON(URL, function(dbPosts) {

            // var county = $("#autocomplete-input").val().trim();
            // for (i = 0; i < dataAnnual16.length; i++) {
            //     name[i] = dataAnnual16[i].DayQuality;
            //     data[i] = dataAnnual16[i][county];

            // }
            // for (j = 0; j < name.length; j++) {
            //     var temp = new Array(name[j], data[j]);
            //     dataArrayFinal[j] = temp;
            // }

            console.log(dbPosts);


            $("#autocomplete-input").val("");
            // Highcharts.chart("container", {
            //     credits: {
            //         enabled: false
            //     },
            //     chart: {
            //         plotBackgroundColor: null,
            //         plotBorderWidth: null,
            //         plotShadow: false,
            //         type: "pie"
            //     },
            //     title: {

            //         style: {
            //             color: "#00635A",
            //             fontSize: "30px"
            //         },
            //         text: "Annual AQI " + county + " County 2016"

            //     },
            //     tooltip: {
            //         pointFormat: "<b>{point.y} days ({point.percentage:.1f}) %</b>"
            //     },
            //     plotOptions: {
            //         pie: {
            //             allowPointSelect: true,
            //             cursor: "pointer",
            //             dataLabels: {
            //                 enabled: false,
            //                 format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            //                 style: {
            //                     color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || "black"
            //                 }
            //             },
            //             showInLegend: true
            //         }
            //     },
            //     series: [{
            //         type: "pie",
            //         name: name,
            //         data: dataArrayFinal

            //     }]

            // });

        });

    });

});