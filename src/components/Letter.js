function Letter(props) {
  const { isCorrectPosition, isCorrect, letter } = props;

  return (
    <span
      className="letterblock"
      style={{
        backgroundColor: isCorrectPosition
          ? "#6AAA64" // Green
          : isCorrect
          ? "#C9B458" // Yellow
          : "#787C7E", // Grey
      }}
    >
      {letter.toUpperCase()}
    </span>
  );
}
export default Letter;
