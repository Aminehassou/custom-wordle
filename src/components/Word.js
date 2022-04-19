import { Fragment } from "react";
import Letter from "./Letter";

function Word(props) {
  const { word, guess } = props;

  let word_len = word.length;

  let currentGuess = [word_len + 1];
  let tempWord = word;

  for (let i = 0; i < word_len; i++) {
    // Checks if letter is in the right position
    if (word[i] === guess[i]) {
      currentGuess[i] = (
        <Letter
          letter={guess[i]}
          isCorrectPosition={true}
          isCorrect={false}
          key={i}
        />
      );
      tempWord = tempWord.replace(guess[i], "-");
    }
  }

  for (let i = 0; i < word_len; i++) {
    if (word[i] !== guess[i]) {
      // Checks if letter is in the word but in the wrong position
      if (tempWord.indexOf(guess[i]) > -1) {
        currentGuess[i] = (
          <Letter
            letter={guess[i]}
            isCorrectPosition={false}
            isCorrect={true}
            key={i}
          />
        );
        tempWord = tempWord.replace(guess[i], "-");
      } else {
        currentGuess[i] = (
          <Letter
            letter={guess[i]}
            isCorrectPosition={false}
            isCorrect={false}
            key={i}
          />
        );
      }
    }
  }
  return <Fragment>{currentGuess}</Fragment>;
}
export default Word;
