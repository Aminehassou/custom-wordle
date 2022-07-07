import React, { useState } from "react";
import Word from "./Word";

function Grid({ word }) {
  const [guess, setGuess] = useState("");
  const [guessList, setGuessList] = useState([]);
  const [guessCount, setGuessCount] = useState(0);

  const [isVictorious, setIsVictorious] = useState(false);

  React.useEffect(() => {
    setGuessList(Array(word.length + 1).fill(""));
  }, [word]);

  function handleGuess() {
    let word_len = word.length;

    // Check if the guess has the same length as the word
    if (guess.length !== word_len || guess.indexOf(" ") > -1) {
      return;
    }

    let currentGuess = guess;
    setGuessList((guesses) => {
      let newGuesses = guesses.slice();
      newGuesses[guessCount] = currentGuess;
      return newGuesses;
    });
    setGuessCount(guessCount + 1);

    // Check if the guess is correct
    if (word === guess) {
      setIsVictorious(true);
    }
  }

  function handleChange(event) {
    let input = event.target.value;
    // don't allow spaces
    if (input.indexOf(" ") > -1) {
      return;
    }

    // don't allow non-letters
    if (input.match(/[^a-z]/i)) {
      return;
    }
    // limit length
    if (input.length > word.length) {
      return;
    }
    let newGuess = input.toUpperCase();
    setGuess(newGuess);
    setGuessList((guesses) => {
      let newGuesses = guesses.slice();
      newGuesses[guessCount] = newGuess;
      console.log(newGuesses[0]);
      return newGuesses;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isVictorious && guessCount < word.length + 1) {
      handleGuess();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={guess} onChange={handleChange} />
      </form>
      <div className="grid">
        {guessList.map((guess, idx) => (
          <Word
            key={idx}
            word={word}
            guess={guess}
            displayColors={idx < guessCount}
          />
        ))}
      </div>
      {isVictorious ? <div>You won!</div> : ""}
      {guessCount >= word.length + 1 ? <div>Out of guesses!</div> : ""}
    </div>
  );
}
export default Grid;
