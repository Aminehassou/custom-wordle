import React, { useEffect, useState } from "react";
import Word from "./Word";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GridModal from "./GridModal";
import { getDefinition } from "../api/wordDefinition";

function Grid({ word, dict }) {
  const [guess, setGuess] = useState("");
  const [guessList, setGuessList] = useState([]);
  const [guessCount, setGuessCount] = useState(0);
  const [isVictorious, setIsVictorious] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [definition, setDefinition] = useState("");

  const notify = () => {
    toast.error("Not in word list", {
      position: "top-left",
      autoClose: 600,
      hideProgressBar: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    // Fill guess list with default values
    getDefinition(word).then((res) => setDefinition(res));
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

      if (!(currentGuess.toLowerCase() in dict)) {
        notify();
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
      if (input === "Backspace") {
        setGuess((prevGuess) => {
          return prevGuess.slice(0, -1);
        });
        setGuessList((guesses) => {
          let newGuesses = guesses.slice();
          newGuesses[guessCount] = guess.slice(0, -1);
          return newGuesses;
        });
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
  }, [dict, guess, guessCount, guessList.length, isVictorious, word]);
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
      {isVictorious && (
        <GridModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          success={true}
          definition={definition}
          word={word}
        ></GridModal>
      )}
      {guessCount >= word.length + 1 ? (
        <GridModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          success={false}
          definition={definition}
          word={word}
        ></GridModal>
      ) : (
        ""
      )}
      <ToastContainer />
    </div>
  );
}

export default Grid;
