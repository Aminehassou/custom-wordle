const cors = require("cors");
const https = require("https");
const fs = require("fs");

const express = require("express");
const { dict } = require("./dict");

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const httpsServer = https.createServer(
  {
    key: fs.readFileSync("/etc/certs/key.pem"),
    cert: fs.readFileSync("/etc/certs/cert.pem"),
  },
  app
);
// Function that gets a random word from the dictionary
function getRandomWord(length) {
  let dictKeys = Object.keys(dict);
  let randomIndex = Math.floor(Math.random() * dictKeys.length);
  while (dictKeys[randomIndex].length !== length) {
    randomIndex = Math.floor(Math.random() * dictKeys.length);
  }
  return dictKeys[randomIndex];
}

// This displays a message that the server is running and listening to a specified port
httpsServer.listen(443, () => {
  console.log("HTTPS Server running on port 443");
});
app.get("/word/random/:wordlen", (req, res) => {
  let wordLen = req.params.wordlen;
  let randomWord = getRandomWord(parseInt(wordLen, 10));

  if (randomWord in dict) {
    res.send({ word: randomWord.toUpperCase(), dict: dict });
  }
});
