import { useState } from "react";

function Form(props) {
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState("");

    function getOccurenceCount(word, letter) {
        let expression = new RegExp(`${letter}`, "g");
        var count = (word.match(expression) || []).length;

        //console.log("word: " + word + " " + letter + " count: " + count);
        return count;
    }
        

    // Find which letters match the guess
    function compareLetters() {
        let res = "";
        for (let i = 0; i < props.word.length; i++) {
            if (props.word[i] === guess[i]) {
                res += guess[i];
            } 
            else {
                //console.log(getOccurenceCount(props.word, guess[i]));
                //console.log(getOccurenceCount(guess, guess[i]));
                if (props.word.indexOf(guess[i]) > -1 && getOccurenceCount(props.word, guess[i]) >= getOccurenceCount(guess, guess[i])) {
                    res += guess[i].toUpperCase();
                }
                else {
                    res += "-";
                }

            }
        }
        setResult(res);
    };

    function handleChange(event) {
        setGuess(event.target.value);
        console.log("guess: " + guess);

    }

    function handleSubmit(event) {
        console.log("A guess was submitted: " + guess);
        compareLetters();
        event.preventDefault();
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
