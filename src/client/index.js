// js file
const validateURL = require("./js/validateURL");
const handleArticleURLSubmission = require("./js/formHandler");

require("./styles/base.scss");
require("./styles/form.scss");
require("./styles/header.scss");
require("./styles/main.scss");

document
  .getElementById("articleForm")
  .addEventListener("submit", handleArticleURLSubmission);

module.exports = { validateURL, handleArticleURLSubmission };
