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
                .type("input[id='bestTime']", dataStrings[0])
                .type("input[id='cityVisited']", dataStrings[1])
                .type("input[id='stayedAt']", dataStrings[2])
                .type("input[id='placesVisited']", dataStrings[3])
                .type("input[id='mustHaves']", dataStrings[4])
                .type("input[id='experience']", dataStrings[5])
                //            .click("#terms")
                .click("#newPostSubmit")
                .wait(3000)
                .wait("#blog-form") // should find this
                .end()
                .then(function () {
                    done();
                })
                .catch(done);
            dataStrings[i] = tempString;
        });
    }
});