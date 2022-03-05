import './App.css';
import Letterblock from './components/Letterblock.js';
import React, { useState } from 'react';

// fetching the GET route from the Express server which matches the GET route from server.js

let callBackendAPI = async () => {
  const response = await fetch('/word/random');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body;
};

function App() {

  const [val, setVal] = useState("Loading...");

  React.useEffect(() => {
    console.log("useEffect called");
    callBackendAPI()
      .then(res => setVal(res.express))
      .catch(err => console.log(err)); // Runs after the first render() lifecycle

  }, []);
  return (
    <div >
      {val}
    </div>
  );
}

export default App;
