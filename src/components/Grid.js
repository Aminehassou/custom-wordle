import React, { useEffect, useRef, useState } from "react";
import Word from "./Word";

function Grid({ word }) {
  const [guess, setGuess] = useState("");
  const [guessList, setGuessList] = useState([]);
  const [guessCount, setGuessCount] = useState(0);
  const [isVictorious, setIsVictorious] = useState(false);

  useEffect(() => {
    // Fill guess list with default values
    setGuessList(Array(word.length + 1).fill(""));
  }, [word]);

  // Update guess list when guess changes
  useEffect(() => {
    function submitGuess() {
      let word_len = word.length;
      let currentGuess = guess;

      // Check if the guess doesn't have the same length as the word
      if (currentGuess.length !== word_len) {
        return;
      }

      setGuessCount((prevGuessCount) => {
        return prevGuessCount + 1;
      });

      // Check if the guess is correct
      if (word === currentGuess) {
        setIsVictorious(true);
      }
      setGuess("");
    }

    function handleInput(event) {
      let input = event.key;
      if (isVictorious || guessCount >= word.length + 1) {
        return;
      }

      if (input === "Enter") {
        submitGuess();
        return;
      }
      if (guess.length >= word.length) {
        return;
      }
      //don't allow non-letters
      if (input.match(/[^a-z]/i) || input.length > 1) {
        return;
      }
      let newGuess = input.toUpperCase();

      setGuess((prevGuess) => {
        return prevGuess + newGuess;
      });
      setGuessList((guesses) => {
        let newGuesses = guesses.slice();
        newGuesses[guessCount] = guess + newGuess;
        return newGuesses;
      });
    }

    // Add keydown event listener for keyboard input
    window.addEventListener("keydown", handleInput);

    return () => {
      window.removeEventListener("keydown", handleInput);
    };
  }, [guess, guessCount, guessList.length, isVictorious, word]);

  return (
    <div>
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
