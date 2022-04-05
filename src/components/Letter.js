
function Letter(props) {

    let letter = "";
    if (props.isCorrectPosition === true) {
        console.log("Correct position");
        letter = <span className="letterblock" style={{ color: 'green' }}>{props.letter}</span>;
    }
    else if (props.isCorrect === true) {
        console.log("Correct letter");
        letter = <span className="letterblock" style={{ color: 'darkgoldenrod' }}>{props.letter}</span>;
    }
    else {
        console.log("Wrong letter");
        letter = <span className="letterblock" style={{ color: 'red' }}>{props.letter}</span>;
    }
    return (
        <span >
            {letter}
        </span>
    );
}
export default Letter;
