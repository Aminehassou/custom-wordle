import { useState } from "react";

function Form() {
    const [guess, setGuess] = useState("");

    function handleChange(event) {
        setGuess(event.target.value);
        console.log("guess: " + guess);

    }
    function handleSubmit(event) {
        console.log("A guess was submitted: " + guess);
        event.preventDefault();
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
            <input type="text" value={guess} onChange={handleChange} />
            </form>
        </div>
    );
}
export default Form;
