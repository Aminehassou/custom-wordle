function Letter(props) {
  return (
    <span
      className="letterblock"
      style={{
        color: props.isCorrectPosition
          ? "green"
          : props.isCorrect
          ? "darkgoldenrod"
          : "red",
      }}
    >
      {props.letter}
    </span>
  );
}
export default Letter;
