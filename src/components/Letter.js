function Letter({ isCorrectPosition, isCorrect, letter }) {
  return (
    <div
      className="letterblock"
      style={{
        backgroundColor: isCorrectPosition
          ? "#6AAA64" // Green
          : isCorrect
          ? "#C9B458" // Yellow
          : "#121213", // Black
      }}
    >
      {letter}
    </div>
  );
}
export default Letter;
