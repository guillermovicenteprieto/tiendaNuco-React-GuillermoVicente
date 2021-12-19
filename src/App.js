import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'deseamos una cordial bienvenida!'}/>
      <Footer />
    </div>
  );
}

export default App;
