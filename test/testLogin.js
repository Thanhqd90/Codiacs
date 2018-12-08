require("mocha");
//require("chai");
let Nightmare = require("nightmare");
const nightmare = null;

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
    this.timeout(10000);
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
                //            .then(function (result) {
                //                console.log("Result: ", result);
                done();
            })
            .catch(done);
    });
});

describe("register page incomplete", function () {
    this.timeout(20000); // nightmare takes a long time to fill in the page
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
            .type("input[id='password']", "")
            .type("input[id='answer']", "table tennis")
            //            .click("#terms")
            .click("#signUpButton")
            .wait(3000)
            .end()
            .then(function () {
                done();
            })
            .catch(done);
    });
});

describe("register page completed", function () {
    this.timeout(20000); // nightmare takes a long time to fill in the page
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
            //.exists("#signUpButton") // finds this
            .exists("#home-page") // but not this
            .end()
            .then(function (homePage) {
                if (homePage) {
                    console.log("homePage"); // both of these work
                } else {
                    console.log("not homePage");
                }
                done();
            })
            //            .end()
            // .then(function () {
            //     done();
            // })
            .catch(done);
    });
});