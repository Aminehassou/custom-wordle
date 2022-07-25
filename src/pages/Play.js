import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Grid from "../components/Grid";

let getWordToGuess = async (wordlen) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + `/word/random/${wordlen}`
  );
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

function Play() {
  const [word, setWord] = useState("");
  const [dict, setDict] = useState({});

  let { wordlen } = useParams();

  React.useEffect(() => {
    getWordToGuess(wordlen)
      .then((res) => {
        setWord(res.word);
        setDict(res.dict);
      })
      .catch((err) => console.log(err)); // Runs after the first render() lifecycle
  }, []);

  React.useEffect(() => {}, [word]);
  return (
    <div className="center">
      <div style={{ color: "white" }}>{word}</div>
      {word && <Grid word={word} dict={dict}></Grid>}
    </div>
  );
}

export default Play;
