import { useState } from "react";

function Form(props) {
    const [guess, setGuess] = useState("");
    const [guessList, setGuessList] = useState([]);
    const [guessCount, setGuessCount] = useState(0);

    const [result, setResult] = useState("");
    const [isVictorious, setIsVictorious] = useState(false);



    // Find which letters match the guess
    function compareLetters() {
        let word_len = props.word.length;
        // Check if the guess has the same length as the word
        if (guess.length !== word_len) {
            return;
        }
        setGuessCount(guessCount + 1);
        let currentGuess = [word_len+1];
        let tempWord = props.word;

        for (let i = 0; i < word_len; i++) {
            // Checks if letter is in the right position
            if (props.word[i] === guess[i]) {
                
                currentGuess[i] = <span key = {i} style={{ color: 'green' }}>{guess[i]}</span>;
                tempWord = tempWord.replace(guess[i], "-");
            } 
        }

        for (let i = 0; i < word_len; i++) {
            if (props.word[i] !== guess[i]) {
                // Checks if letter is in the word but in the wrong position
                if (tempWord.indexOf(guess[i]) > -1) {
                    currentGuess[i] = <span key = {i} style={{ color: 'darkgoldenrod' }}>{guess[i]}</span>;
                    tempWord = tempWord.replace(guess[i], "-");
                }
                else {
                    currentGuess[i] = <span key = {i} style={{ color: 'grey' }}>{guess[i]}</span>;
                }
            } 
        }

        setResult(currentGuess);
        setGuessList(guesses => [...guesses, currentGuess]);

        // Check if the guess is correct
        if (props.word === guess) {
            setIsVictorious(true);
        }

    }

    function handleChange(event) {
        setGuess(event.target.value);

    }

    function handleSubmit(event) {
        event.preventDefault();
        if(!isVictorious && guessCount < props.word.length + 1) {
            compareLetters();
        }
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input type="text" value={guess} onChange={handleChange} />
            </form>
            {guessList.map((guess, idx) => <div key={idx}>{guess}</div>)}
            {isVictorious ? <div>You won!</div> : ""}
            {guessCount >= props.word.length + 1 ? <div>Out of guesses!</div> : ""}

        </div>
    );
}
export default Form;
