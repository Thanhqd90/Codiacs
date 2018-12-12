$(document).ready(function() {
    $("#basicExampleModal").on("hidden", function (){
        return res.redirect("/home");
    });
    Highcharts.setOptions({
        colors: ["#FFCCCC", "#FF9999", "#FF6666", "#FF3333", "#CC0000", "#990000"]
        // colors: ["#f3ccff", "#e180ff", "#cf33ff", "#9c00cc", "#4e0066", "#14001a"]
        // colors: ["#33ccff", "#ff99cc", "#E5CCFF", "#FF3333", "#0080FF", "#FFFF66"]
    });

    $("#search").on("click", function(event) {
        event.preventDefault();
        var name = new Array();
        var data = new Array();
        var dataArrayFinal = new Array();
        var city = $("#search-term").val().trim();
        let URL=`/cityData/${city}`;
        console.log(URL);
        if(city===""){
            $("#basicExampleModal").modal({show : true});
        }else{
            $.getJSON(URL, function(dbPosts) {

                for (i = 0; i < dbPosts.length; i++) {
                    name[i] = dbPosts[i].category;
                    data[i] = dbPosts[i].countOfCategory;
                }
                for (j = 0; j < name.length; j++) {
                    var temp = new Array(name[j], data[j]);
                    dataArrayFinal[j] = temp;
                }
                if(dbPosts.length === 0){
                // $("#basicExampleModal").modal("show");
                    $("#basicExampleModal").modal({show : true});
                }else{
                    console.log(dbPosts);
                    $("#search-term").val("");
                    Highcharts.chart("container", {
                        chart: {
                            type: "pie",
                            options3d: {
                                enabled: true,
                                alpha: 45
                            }
                        },
                        title: {
                            text: `${city}`
                        },
                        subtitle: {
                            text: "Below graph shows number of blogs written for a category."
                        },
                        tooltip: {
                            pointFormat: "<b>{point.y} Blog(s) ({point.percentage:.1f}) %</b>"
                        },
                        plotOptions: {
                            pie: {
                                innerSize: 100,
                                depth: 45,
                                allowPointSelect: true,
                                cursor: "pointer",
                                dataLabels: {
                                    enabled: false,
                                    format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                                    style: {
                                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || "black"
                                    }
                                },
                                showInLegend: true
                            }
                        },
                        series: [{
                            name: name,
                            data: dataArrayFinal
                        }]
                    });
                }
            });
        }
    });
});