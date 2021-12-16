import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h2>Hola Mundo!!!</h2>
        <p>Comenzando cursada de React</p>
        <p>utilizando framework Material UI</p>
      </header>
    </div>
  );
}

export default App;
