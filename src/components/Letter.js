function Letter(props) {
  return (
    <span
      className="letterblock"
      style={{
        backgroundColor: props.isCorrectPosition
          ? "#6AAA64" // Green
          : props.isCorrect
          ? "#C9B458" // Yellow
          : "#787C7E", // Grey
      }}
    >
      {props.letter.toUpperCase()}
    </span>
  );
}
export default Letter;
