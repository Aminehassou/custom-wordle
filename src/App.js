import "./App.css";
import Home from "./pages/Home.js";

import { Routes, Route } from "react-router-dom";

import Play from "./pages/Play";
import HelpModal from "./components/HelpModal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsModalOpen(true)} className="button help">
        ?
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random/:wordlen" element={<Play />} />
      </Routes>
      <HelpModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}></HelpModal>
    </div>
  );
}

export default App;
