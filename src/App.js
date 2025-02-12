import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Building from "./components/Building";
import Boards from "./components/Boards";
import LandingPage from "./pages/LandingPage.js"; // Novo componente que reúne a LP

function App() {
  return (
    <Router>
      <div className="App">
        <div id="main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Skeelo-Skoob-Epics" element={<Building />} />
            <Route path="/boards" element={<Boards />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
