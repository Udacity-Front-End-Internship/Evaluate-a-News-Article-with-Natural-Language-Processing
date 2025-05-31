const checkForName = require("../src/client/js/nameChecker");

describe("Testing the checkForName function", () => {
  test("It should validate a name, case return true becuse it is a name", () => {
    const name = "Diaa Sharqawi";

    expect(checkForName(name)).toBe(true);
  });
  test("It should validate a name, case return false becuse it is not a name", () => {
    const name = "____";

    expect(checkForName(name)).toBe(false);
  });
});
