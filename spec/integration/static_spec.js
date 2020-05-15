const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

  //#1
  describe("GET /", () => {

    // beforeEach(function () {
    //   originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    //   jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    // });
    // //#2
    it("should return status code 200", () => {

      //#3
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);

        //#4

      });
    });

  });
});