![image](https://github.com/user-attachments/assets/7fda6ecc-781b-444a-a607-2446f7e80698)


# Evaluate a News Article with Natural Language Processing

This project is a web tool that allows users to analyze articles or blogs from the internet using Natural Language Processing (NLP). With this tool, you can determine the tone (positive, negative, or neutral) and subjectivity (subjective or objective) of any text content, leveraging an external NLP API.

## Project Overview

The main motivation behind this project is to introduce you to a realistic front-end development workflow, using tools and technologies common in the industry. The project architecture leverages Node.js, Express, Webpack, and service workers, giving you hands-on experience with modern web development setups.

Instead of implementing a full NLP system, this project interacts with a Udacity-hosted AWS NLP API, which processes the text and returns analysis results.

## Features

- Analyze any online article or blog for tone and subjectivity
- Simple user interface for entering URLs or text
- Offline functionality using a Service Worker
- Separate development and production builds via Webpack

## Technologies Used

- **JavaScript** (ES6+)
- **Node.js** & **Express** (backend server and routing)
- **Webpack** (module bundler & build tools)
- **SCSS** (styling)
- **HTML**
- **Service Worker** (offline support)
- **Udacity NLP API** (external analysis)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Udacity-Front-End-Internship/Evaluate-a-News-Article-with-Natural-Language-Processing.git
   cd Evaluate-a-News-Article-with-Natural-Language-Processing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and add the following variables:
   ```env
   BASE_URL=your_base_url_here
   PORT=your_port_number_here
   API_URL=https://kooye7u703.execute-api.us-east-1.amazonaws.com/NLPAnalyzer
   ```

   - `BASE_URL` - The base URL for your app (e.g., http://localhost:8081).
   - `PORT` - The port your server will run on (e.g., 8081).
   - `API_URL` - The Udacity NLP API endpoint (default provided above).

4. **Run the development server:**
   ```bash
   npm run build-dev
   npm run start
   ```

5. **For production build:**
   ```bash
   npm run build-prod
   npm run start
   ```

## Usage

- Open the application in your browser.
- Enter the URL of an article or paste the text you want to analyze.
- Submit to receive an analysis of the tone and subjectivity.

## API Reference

Analysis is performed via the Udacity NLP API:

**Endpoint:**  
`https://kooye7u703.execute-api.us-east-1.amazonaws.com/NLPAnalyzer`

**Request:** (POST)
```json
{
  "text": "Your extracted text here"
}
```

**Response:**
```json
{
  "tone": "positive | negative | neutral",
  "subjectivity": "subjective | objective"
}
```

## Project Structure

- `/src` - Main application source code
- `/dist` - Production build output
- `/server` - Express server setup
- `/webpack.config.js` - Webpack configuration

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

---
