const expect = require("chai").expect;
describe("#Log test", () => {
  let result = 0;
  before(async () => {
    result = 2 + 2;
  });
  describe("#Seed user", () => {
    it("#(2 + 2) is equal 4", async () => {
      try {
        expect(result).to.eql(4);
      } catch (error) {
        throw new Error(JSON.stringify(error));
      }
    });
  });
});
