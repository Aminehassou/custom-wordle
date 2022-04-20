function Letter({ isCorrectPosition, isCorrect, letter }) {
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
      {letter}
    </span>
  );
}
export default Letter;
