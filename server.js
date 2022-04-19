const express = require("express");
const { dict } = require("./dict");

const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

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
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/word/random", (req, res) => {
  let randomWord = getRandomWord((length = 5));
  if (randomWord in dict) {
    res.send({ word: randomWord });
  }
});
