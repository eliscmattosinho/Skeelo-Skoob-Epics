import React from "react";
import Header from "./pages/Header";
import Sobre from "./pages/Sobre";
import Contexto from "./pages/Contexto";
import Elementos from "./pages/Elementos";
import Skeelo from "./pages/Skeelo";
import Skoob from "./pages/Skoob";
import Contato from "./pages/Contato";
import Footer from "./pages/Footer";
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
