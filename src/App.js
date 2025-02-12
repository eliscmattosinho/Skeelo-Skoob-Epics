import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Building from "./components/Building";
import Boards from "./components/Boards";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Contexto from "./components/Contexto";
import Elementos from "./components/Elementos";
import EpicSection from "./components/EpicSection";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="main">
          <Routes>
            <Route path="/" element={<Building />} />
            <Route path="/Skeelo-Skoob-Epics" element={<Building />} />
            <Route path="/boards" element={<Boards />} />
            <Route path="/header" element={<Header />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contexto" element={<Contexto />} />
            <Route path="/elementos" element={<Elementos />} />
            <Route path="/epicos" element={<EpicSection />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
