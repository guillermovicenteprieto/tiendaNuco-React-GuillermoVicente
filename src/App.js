import logo from "./logo.svg";
import "./App.css";
import NavbarUno from "./components/NavbarUno";
import NavbarDos from "./components/NavbarDos";
import NavbarTres from "./components/NavbarTres";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hola Mundo!!!</h2>
        <NavbarUno />
        <NavbarDos/>
        <NavbarTres/>
      </header>
    </div>
  );
}

export default App;
