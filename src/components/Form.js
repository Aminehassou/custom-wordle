import { useState } from "react";

function Form(props) {
    const [guess, setGuess] = useState("");
    const [guessCount, setGuessCount] = useState(0);
    const [result, setResult] = useState("");


    // Find which letters match the guess
    function compareLetters() {
        let currentGuess = [props.word.length+1];
        console.log(`test ${currentGuess}`);
        let tempWord = props.word;
        for (let i = 0; i < props.word.length; i++) {
            // Checks if letter is in the right position
            if (props.word[i] === guess[i]) {
                currentGuess[i] = guess[i];
                tempWord = tempWord.replace(guess[i], "-");
            } 
        }
        for (let i = 0; i < props.word.length; i++) {
            if (props.word[i] !== guess[i]) {
                // Checks if letter is in the word but in the wrong position
                if (tempWord.indexOf(guess[i]) > -1) {
                    currentGuess[i] = guess[i].toUpperCase();
                    tempWord = tempWord.replace(guess[i], "-");
                    console.log(tempWord);
                }
                else {
                    currentGuess[i] = "-";
                }
            } 
        }

        setResult(currentGuess);
    }

    function handleChange(event) {
        setGuess(event.target.value);
        console.log("guess: " + guess);

    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("A guess was submitted: " + guess);
        compareLetters();
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input type="text" value={guess} onChange={handleChange} />
            </form>
            {result}
        </div>
    );
}
export default Form;
