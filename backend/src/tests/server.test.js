var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.

var server = supertest.agent(`http://localhost:4000`);

// UNIT test begin

describe("SAMPLE unit test", function () {
  // #1 should return home page
  it("should return page not found", function (done) {
    // calling home page
    // console.log(server.get("/"));
    server
      .get("/")
      .expect("Content-type", "application/json")
      .expect(404) // THis is HTTP response
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(404);
        done();
      });
  });
});
