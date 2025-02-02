import React from "react";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Contexto from "./components/Contexto";
import Elementos from "./components/Elementos";
import Skeelo from "./components/Skeelo";
import Skoob from "./components/Skoob";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div id="main">
        <Header /> { }
        <Sobre /> { }
        <Contexto /> { }
        <Elementos /> { }
        <Skeelo /> { }
        <Skoob /> { }
        <Contato /> { }
        <Footer /> { }
      </div>
    </div>
  );
}

export default App;
