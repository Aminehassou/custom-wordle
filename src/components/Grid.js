import { useState } from "react";
import Word from "./Word";
import { Link } from "react-router-dom";

function Grid(props) {
  const { word } = props;

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

    let currentGuess = <Word word={word} guess={guess} />;

    setGuessCount(guessCount + 1);
    setGuessList((guesses) => [...guesses, currentGuess]);

    // Check if the guess is correct
    if (word === guess) {
      setIsVictorious(true);
    }
  }

  function handleChange(event) {
    setGuess(event.target.value);
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
        <div key={idx}>{guess}</div>
      ))}
      {isVictorious ? <div>You won!</div> : ""}
      {guessCount >= word.length + 1 ? <div>Out of guesses!</div> : ""}
    </div>
  );
}
export default Grid;
