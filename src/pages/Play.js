import React, { useState } from "react";
import Grid from "../components/Grid";

let getWordToGuess = async () => {
  const response = await fetch("/word/random");
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

function Play() {
  const [word, setWord] = useState("");

  React.useEffect(() => {
    getWordToGuess()
      .then((res) => setWord(res.word))
      .catch((err) => console.log(err)); // Runs after the first render() lifecycle
  }, []);

  React.useEffect(() => {}, [word]);
  return (
    <div className="center">
      {word}
      {word && <Grid word={word}></Grid>}
    </div>
  );
}

export default Play;
