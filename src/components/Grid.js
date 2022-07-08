import React, { useEffect, useState } from "react";
import Word from "./Word";

function Grid({ word }) {
  const [guess, setGuess] = useState("");
  const [guessList, setGuessList] = useState([]);
  const [guessCount, setGuessCount] = useState(0);

  const [isVictorious, setIsVictorious] = useState(false);

  useEffect(() => {
    // Fill guess list with default values
    setGuessList(Array(word.length + 1).fill(""));

    // Add keydown event listener for keyboard input
    window.addEventListener("keydown", handleChange);
    console.log("EventListener");
  }, [word]);

  // Update guess list when guess changes
  useEffect(() => {
    setGuessList((guesses) => {
      let newGuesses = guesses.slice();
      newGuesses[guessCount] = guess;
      return newGuesses;
    });
  }, [guess]);

  function handleGuess() {
    let word_len = word.length;
    console.log("handleguess", word);

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
      console.log("test", word);

      setIsVictorious(true);
    }
  }

  function handleChange(event) {
    let input = event.key;
    console.log("test2", word);

    // don't allow spaces
    if (input.indexOf(" ") > -1) {
      return;
    }

    if (input === "Enter" && !isVictorious && guessCount < word.length + 1) {
      handleGuess();
    }
    // don't allow non-letters
    if (input.match(/[^a-z]/i) || input.length > 1) {
      return;
    }
    // limit length
    if (input.length > word.length) {
      return;
    }
    let newGuess = input.toUpperCase();
    setGuess((prevGuess) =>
      (prevGuess + newGuess).length <= word.length
        ? prevGuess + newGuess
        : prevGuess
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isVictorious && guessCount < word.length + 1) {
      handleGuess();
    }
  }

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
