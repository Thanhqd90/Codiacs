require("mocha");
//require("chai");
let Nightmare = require("nightmare");

describe("newPost", function () {

    let dataStrings = ["September", "London", "YMCA", "Tower", "umbrella", "Great time"];

    this.timeout(18000); // nightmare takes a long time to fill in the page
    console.log("incomplete");
    let tempString = "";
    for (let i = 0; i < dataStrings.length; i++) {
        it("should pass", (done) => {
            tempString = dataStrings[i];
            dataStrings[i] = "";
            //console.log(i, ": ", dataStrings[i]);
            this.timeout(19000); // nightmare takes a long time to fill in the page
            const nightmare = new Nightmare({
                show: true
            });
            nightmare
                .goto("http://localhost:8080/blog/new")
                .select ("#countryVisited", "AFG")
                .select ("#bestTime", "Feb")
                .type("textarea[id='cityVisited']", dataStrings[1])
                .type("textarea[id='stayAt']", dataStrings[2])
                .type("textarea[id='placesVisited']", dataStrings[3])
                .type("textarea[id='mustHaves']", dataStrings[4])
                .type("textarea[id='experience']", dataStrings[5])
                .click("#newPostSubmit")
                .wait(3000)
                .wait("#viewall") // should find this
                .end()
                .then(function () {
                    done();
                })
                .catch(done);
            dataStrings[i] = tempString;
        });
    }
});