require("mocha");
//require("chai");
let Nightmare = require("nightmare");
//const nightmare = null;

//this.timeout("20s");
describe("Login Page", function () {
    //var nightmare = null;
    beforeEach(() => {
        console.log("beforeEach");
        // show true lets you see wth is actually happening :)
        // nightmare = new Nightmare({
        //     show: true
        // });
    });
});

describe("home page click register", function () {
    console.log("home page");
    this.timeout(15000);
    it("should work", (done) => {
        const nightmare = new Nightmare({
            show: true
        });
        nightmare
            .goto("http://localhost:8080/home")
            .click("#register")
            .wait(3000)
            .wait("#registerBody")
            .end()
            .then(function () {
                done();
            })
            .catch(done);
    });

    let dataStrings = ["Roger", "Byford", "rgbyford", "byford@gmail.com", "password", "table tennis"];

    this.timeout(18000); // nightmare takes a long time to fill in the page
    it("should fail", (done) => {
        const nightmare = new Nightmare({
            show: true
        });
        nightmare
            .goto("http://localhost:8080/register")
            .type("input[id='firstName']", "Roger")
            .type("input[id='lastName']", "Byford")
            .type("input[id='username']", "rgbyford")
            .type("input[id='email']", "byford@gmail.com")
            .type("input[id='password']", "password")
            .type("input[id='answer']", "table tennis")
            .click("#terms")
            .click("#signUpButton")
            .wait(3000)
            .exists("#signUpButton") // finds this
            //.exists("#home-page") // but not this
            .end()
            .then(function () {
                done();
            })
            .catch(done);
    });

    console.log("incomplete");
    let tempString = "";
    for (let i = 0; i < dataStrings.length; i++) {
        it("should fail", (done) => {
            tempString = dataStrings[i];
            dataStrings[i] = "";
            //console.log(i, ": ", dataStrings[i]);
            this.timeout(19000); // nightmare takes a long time to fill in the page
            const nightmare = new Nightmare({
                show: true
            });
            nightmare
                .goto("http://localhost:8080/register")
                .type("input[id='firstName']", dataStrings[0])
                .type("input[id='lastName']", dataStrings[1])
                .type("input[id='username']", dataStrings[2])
                .type("input[id='email']", dataStrings[3])
                .type("input[id='password']", dataStrings[4])
                .type("input[id='answer']", dataStrings[5])
                //            .click("#terms")
                .click("#signUpButton")
                .wait(3000)
                .wait("#registerBody") // should find this
                .end()
                .then(function () {
                    done();
                })
                .catch(done);
            dataStrings[i] = tempString;
        });
    }
});