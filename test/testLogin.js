require("mocha");
//require("chai");
let Nightmare = require("nightmare");
//const nightmare = null;

describe("login page", function () {
    console.log("login page");
    this.timeout(15000);
    it("should work", (done) => {
        const nightmare = new Nightmare({
            show: true
        });
        nightmare
            .goto("http://localhost:8080/login")
            .type("input[id='email']", "rgbyford@gmail.com")
            .type("input[id='password']", "password")
            .click("#log_in_btn")
            .wait(3000)
            .wait("#home-page")
            .end()
            .then(function () {
                done();
            })
            .catch(done);
    });
    it("should work", (done) => {
        const nightmare = new Nightmare({
            show: true
        });
        nightmare
            .goto("http://localhost:8080/login")
            .type("input[id='email']", "gbyford@gmail.com")
            .type("input[id='password']", "password")
            .click("#log_in_btn")
            .wait("Unauthorized", 3000)
            .end()
            .then(function () {
                done();
            })
            .catch(done);
    });



});