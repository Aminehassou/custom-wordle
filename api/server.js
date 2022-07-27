const cors = require("cors");

const express = require("express");
const { dict } = require("./dict");

const app = express();
app.use(cors());

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
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/word/random/:wordlen", (req, res) => {
  let wordLen = req.params.wordlen;
  let randomWord = getRandomWord(parseInt(wordLen, 10));

  if (randomWord in dict) {
    res.send({ word: randomWord.toUpperCase(), dict: dict });
  }
});
