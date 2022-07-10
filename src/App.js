import "./App.css";
import Home from "./pages/Home.js";

import { Routes, Route } from "react-router-dom";

import Play from "./pages/Play";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random/:wordlen" element={<Play />} />
      </Routes>
    </div>
  );
}

export default App;
