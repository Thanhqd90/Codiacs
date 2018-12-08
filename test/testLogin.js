require("mocha");
//require("chai");
let Nightmare = require("nightmare");

describe("Login Page", function () {
    this.timeout("20s");

    let nightmare = null;
    beforeEach(() => {
        // show true lets you see wth is actually happening :)
        nightmare = new Nightmare({
            show: true
        });
    });

    // describe("given bad data", () => {
    //     it("should work", (done) => {
    //         nightmare
    //             .goto("http://localhost:8080/home")
    //             .on("page", (type, message) => {
    //                 console.log(message);
    //                 if (type === "alert") {
    //                     done();
    //                 }
    //             })
    //             .click("#about")
    //             .wait(7000)
    //             .wait ("#about-page")
    //             .end()
    //             .then(function (result) {
    //                 //console.log ("Result: ", result);
    //                 done();
    //             })
    //             .catch(done);
    //     });
    // });
    describe("given bad data", () => {
        it("should work", (done) => {
            nightmare
                .goto("http://localhost:8080/home")
                .click("#register")
                .wait(7000)
                .wait ("#registerBody")
                .end()
                .then(function (result) {
                    console.log ("Result: ", result);
                    done();
                })
                .catch(done);
        });
    });
});