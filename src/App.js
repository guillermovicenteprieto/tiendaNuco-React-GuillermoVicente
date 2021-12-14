import React from "react";
import "./App.css";
import NavbarUno from "./components/NavbarUno";
import NavbarDos from "./components/NavbarDos";
import NavbarTres from "./components/NavbarTres";
import NavbarCuatro from "./components/NavbarCuatro";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <NavbarCuatro />
      <header className="App-header">
        <h2>Hola Mundo!!!</h2>
        <NavbarUno />
        <NavbarDos />
        <Button>un BOTON</Button>
        <Button>otro BOTON</Button>
        <NavbarTres />
      </header>
    </div>
  );
}

export default App;
