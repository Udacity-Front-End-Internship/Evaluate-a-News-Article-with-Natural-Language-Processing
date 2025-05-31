# Evaluate A News Article with Natural Language Processing

This is the 4th project in the [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) Front End Web Developer Nanodegree program.

The goal of this project is to create a web tool that lets users analyze the sentiment of articles or blogs from other websites using Natural Language Processing (NLP). When a user submits an article URL, the web page shows sentiment analysis results from the [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis) based on the article's content.

## Tools Used
* HTML
* CSS
* JavaScript
* Node.js
* Express
* Webpack
* meaningcloud API
* Jest
* Workbox

## How to Install
Make sure you have Node.js and npm installed. Check by running:
```
node -v
npm -v
```

1. Go to the project folder:
```
cd <project directory>
```
2. Clone the repository:
```
git clone <repo>
```
3. Install npm packages:
```
npm install
```
4. Install necessary loaders and plugins:
```
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```
5. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

6. Set up environment variables with dotenv:
    1. Install dotenv:
    ```
    npm install dotenv
    ```
    2. Create a `.env` file in the root of your project.
    3. Add your API key to the `.env` file like this:
    ```
    BASE_URL==**************************
    PORT==**************************
    API_URL==**************************
    ```
7. Start the project:

Command | Action
:------------: | :-------------:
`npm run build-prod` | Build the project
`npm start` | Run the project

8. Open your browser and go to http://localhost:8080/
