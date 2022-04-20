import { useState } from "react";
import Word from "./Word";

function Grid({ word }) {
  const [guess, setGuess] = useState("");
  const [guessList, setGuessList] = useState([]);
  const [guessCount, setGuessCount] = useState(0);

  const [isVictorious, setIsVictorious] = useState(false);

  // Find which letters match the guess
  function handleGuess() {
    let word_len = word.length;

    // Check if the guess has the same length as the word
    if (guess.length !== word_len || guess.indexOf(" ") > -1) {
      return;
    }

    let currentGuess = guess;

    setGuessCount(guessCount + 1);
    setGuessList((guesses) => [...guesses, currentGuess]);

    // Check if the guess is correct
    if (word === guess) {
      setIsVictorious(true);
    }
  }

  function handleChange(event) {
    // don't allow spaces
    if (event.target.value.indexOf(" ") > -1) {
      return;
    }

    // don't allow non-letters
    if (event.target.value.match(/[^a-z]/i)) {
      return;
    }

    setGuess(event.target.value.toUpperCase());
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
      {guessList.map((guess, idx) => (
        <Word key={idx} word={word} guess={guess} />
      ))}
      {isVictorious ? <div>You won!</div> : ""}
      {guessCount >= word.length + 1 ? <div>Out of guesses!</div> : ""}
    </div>
  );
}
export default Grid;
