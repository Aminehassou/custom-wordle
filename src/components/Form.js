import { useState } from "react";

function Form(props) {
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState("");


    // Find which letters match the guess
    function compareLetters() {
        let res = "";
        let tempWord = props.word;
        for (let i = 0; i < props.word.length; i++) {
            if (props.word[i] === guess[i]) {
                res += guess[i];
                tempWord = tempWord.replace(guess[i], "-");

            } 
            else {

                if (tempWord.indexOf(guess[i]) > -1) {
                    res += guess[i].toUpperCase();
                    tempWord = tempWord.replace(guess[i], "-");
                    console.log(tempWord);
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
