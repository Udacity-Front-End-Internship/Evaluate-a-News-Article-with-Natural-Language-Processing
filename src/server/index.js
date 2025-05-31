const fetch = require("node-fetch");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const { validateURL } = require("./js/validateURL.js");

const mockAPIResponse = require("./mockAPI.js");
require("dotenv").config();

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("dist"));

app.get("/test", (req, res) => {
  res.send(mockAPIResponse);
});

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.post("/api", async (req, res) => {
  const { url } = req.body;

  console.log("URL:", url);

  if (!validateURL(url)) {
    res.status(400).send("Invalid URL");
    return;
  }

  const API_URL = process.env.API_URL;

  console.log("API URL:", API_URL);

  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: process.env.API_KEY,
        text: url,
        lang: "en",
      }),
    });

    console.dir(response, {
      depth: null,
    });

    const data = await response.json();

    console.dir(data, {
      depth: null,
    });

    res.send(data);
  } catch (error) {
    console.error("Error:", error);

    res.status(500).send("Error While fetching the data");
  }
});

const PORT = process.env.PORT || 4800;
app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
