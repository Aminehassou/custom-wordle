const cors = require("cors");

const express = require("express");

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

// Function that gets a random word from the dictionary
function getRandomWord(dict) {
  let dictKeys = Object.keys(dict);
  let randomIndex = Math.floor(Math.random() * dictKeys.length);
  return dictKeys[randomIndex];
}
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/word/random/:wordlen", (req, res) => {
  let wordLen = req.params.wordlen;
  const { dict } = require(`./data/dict${wordLen}`);

  let randomWord = getRandomWord(dict);

  if (randomWord in dict) {
    res.send({ word: randomWord.toUpperCase(), dict: dict });
  }
});
