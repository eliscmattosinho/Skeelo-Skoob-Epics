import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Building from "./components/Building";
import Boards from "./components/Boards";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="main">
          <Routes>
            <Route path="/" element={<Building />} />
            <Route path="/Skeelo-Skoob-Epics" element={<Building />} />
            <Route path="/boards" element={<Boards />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
