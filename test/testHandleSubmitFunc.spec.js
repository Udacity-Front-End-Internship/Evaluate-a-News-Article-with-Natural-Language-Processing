const handleArticleURLSubmission = require("../src/client/js/formHandler");
const validateURL = require("../src/client/js/validateURL");
jest.mock("../src/client/js/validateURL", () => jest.fn());

describe("Testing the handleArticleURLSubmission function", () => {
  const API_KEY = process.env.BASE_URL;
  const EXAMPLE_URL = "https://example.com";

  beforeEach(() => {
    document.body.innerHTML = `
      <form id="articleForm">
        <input id="articleURL" value="${EXAMPLE_URL}">
      </form>
      <div id="articleResult"></div>
      <div id="articleError"></div>
    `;
  });

  test("It should return valid data if the input data is correct", async () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        elements: {
          articleURL: {
            value: EXAMPLE_URL,
          },
        },
      },
    };

    globalThis.fetch = jest.fn(async () => {
      return {
        json: async () => ({
          sentiment: "positive",
          sentiment_scores: {
            Positive: 0.8,
            Negative: 0.1,
            Neutral: 0.1,
            Mixed: 0.0,
          },
          text: "Example text",
        }),
      };
    });

    validateURL.mockReturnValue(true);

    await handleArticleURLSubmission(event);

    expect(fetch).toHaveBeenCalledWith(`${API_KEY}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: EXAMPLE_URL }),
    });

    const resultHTML = document
      .getElementById("articleResult")
      .innerHTML.trim();

    expect(resultHTML).toMatch(/<p>Sentiment: positive<\/p>/);
    expect(resultHTML).toMatch(/<td>Positive<\/td>\s*<td>0.8<\/td>/);
    expect(resultHTML).toMatch(/<td>Negative<\/td>\s*<td>0.1<\/td>/);
    expect(resultHTML).toMatch(/<td>Neutral<\/td>\s*<td>0.1<\/td>/);
    expect(resultHTML).toMatch(/<td>Mixed<\/td>\s*<td>0<\/td>/);
    expect(resultHTML).toMatch(/<p>Text: Example text<\/p>/);
  });

  test("It should set an error if the URL is invalid", async () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        elements: {
          articleURL: {
            value: "invalid-url",
          },
        },
      },
    };

    validateURL.mockReturnValue(false);

    await handleArticleURLSubmission(event);

    expect(document.getElementById("articleError").innerHTML).toContain(
      "Invalid URL"
    );
  });
});
