import { Fragment } from "react";
import Letter from "./Letter";

function Word(props) {
  let word_len = props.word.length;

  let currentGuess = [word_len + 1];
  let tempWord = props.word;

  for (let i = 0; i < word_len; i++) {
    // Checks if letter is in the right position
    if (props.word[i] === props.guess[i]) {
      currentGuess[i] = (
        <Letter
          letter={props.guess[i]}
          isCorrectPosition={true}
          isCorrect={false}
          key={i}
        />
      );
      tempWord = tempWord.replace(props.guess[i], "-");
    }
  }

  for (let i = 0; i < word_len; i++) {
    if (props.word[i] !== props.guess[i]) {
      // Checks if letter is in the word but in the wrong position
      if (tempWord.indexOf(props.guess[i]) > -1) {
        currentGuess[i] = (
          <Letter
            letter={props.guess[i]}
            isCorrectPosition={false}
            isCorrect={true}
            key={i}
          />
        );
        tempWord = tempWord.replace(props.guess[i], "-");
      } else {
        currentGuess[i] = (
          <Letter
            letter={props.guess[i]}
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
