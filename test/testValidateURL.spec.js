const validateURL = require("./../src/client/js/validateURL");

describe("Testing the validateURL function", () => {
  test("It should return true, becuse its a valid url", () => {
    const result = validateURL("https://example.com");
    expect(result).toBeTruthy();
  });

  test("It should return false,becuse its an invalid url", () => {
    const result = validateURL("invalid-url");
    expect(result).toBeFalsy();
  });

  test("It should return false, becuse its an empty URL", () => {
    const result = validateURL("");
    expect(result).toBeFalsy();
  });
});
