require("dotenv").config();

const validateURL = require("./validateURL");

const clearArticleResults = () => {
  document.getElementById("articleResult").innerHTML = "";
  document.getElementById("articleError").innerHTML = "";
};

const setErrorArticleResult = (error) => {
  document.getElementById("articleError").innerHTML = `
    <p>Error while fetching data</p>
    <span> Details: ${error}</span>
  `;
};

const setArticleResult = (data) => {
  document.getElementById("articleResult").innerHTML = `
    <p>Sentiment: ${data.sentiment}</p>
    <table>
      <tr>
        <th>Score Type</th>
        <th>Score</th>
      </tr>
      <tr>
        <td>Positive</td>
        <td>${data.sentiment_scores.Positive}</td>
      </tr>
      <tr>
        <td>Negative</td>
        <td>${data.sentiment_scores.Negative}</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>${data.sentiment_scores.Neutral}</td>
      </tr>
      <tr>
        <td>Mixed</td>
        <td>${data.sentiment_scores.Mixed}</td>
      </tr>
    </table>
    <p>Text: ${data.text}</p>
  `;
};

const articleLoading = () => {
  document.getElementById("articleLoading").innerHTML = `
    <p>Loading...</p>
  `;
};

const clearArticleLoading = () => {
  document.getElementById("articleLoading").innerHTML = "";
};

const handleArticleURLSubmission = async (e) => {
  clearArticleResults();

  e.preventDefault();

  articleLoading();

  const formURLArticleValue = document.getElementById("articleURL").value;

  console.log("Article URL:", formURLArticleValue);

  const isValidURL = validateURL(formURLArticleValue);

  if (!isValidURL) {
    setErrorArticleResult("Invalid URL");
  }

  const BASE_URL = process.env.BASE_URL;

  console.log(process.env);

  console.log("Base URL:", BASE_URL);

  try {
    const response = await fetch(`${BASE_URL}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: formURLArticleValue }),
    });

    const data = await response.json();

    console.log("Data Result:");
    console.dir(data, {
      depth: null,
    });

    setArticleResult(data);
  } catch (error) {
    console.error("Error:");
    console.dir(error, {
      depth: null,
    });

    setErrorArticleResult(error);
  } finally {
    clearArticleLoading();
  }
};

module.exports = handleArticleURLSubmission;
