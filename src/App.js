import "./App.css";
import Form from "./components/Form.js";
import { Routes, Route } from "react-router-dom";

import React, { useState } from "react";

// fetching the GET route from the Express server which matches the GET route from server.js

let callBackendAPI = async () => {
  const response = await fetch("/word/random");
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

function App() {
  const [word, setWord] = useState("Loading...");

  React.useEffect(() => {
    console.log("useEffect called");
    callBackendAPI()
      .then((res) => setWord(res.express))
      .catch((err) => console.log(err)); // Runs after the first render() lifecycle
  }, []);
  return (
    <div>
      {word}
      <br />
      <Routes>
        <Route path="/" element={<Form word={word} />} />
      </Routes>
    </div>
  );
}

export default App;
