
function Word(props) {
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState("");

    let word_len = props.word.length;
    // Check if the guess has the same length as the word
    if (guess.length !== word_len) {
        return;
    }
    let currentGuess = [word_len+1];
    let tempWord = props.word;

    for (let i = 0; i < word_len; i++) {
        // Checks if letter is in the right position
        if (props.word[i] === guess[i]) {
            
            currentGuess[i] = <Letter letter={guess[i]} isCorrectPosition={true} isCorrect={false} key={i}/>;
            tempWord = tempWord.replace(guess[i], "-");
        } 
    }

    for (let i = 0; i < word_len; i++) {
        if (props.word[i] !== guess[i]) {
            // Checks if letter is in the word but in the wrong position
            if (tempWord.indexOf(guess[i]) > -1) {
                currentGuess[i] = <Letter letter={guess[i]} isCorrectPosition={false} isCorrect={true} key={i}/>;
                tempWord = tempWord.replace(guess[i], "-");
            }
            else {
                currentGuess[i] = <Letter letter={guess[i]} isCorrectPosition={false} isCorrect={false} key={i}/>;
            }
        } 
    }

}
export default Word;
