import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

//practicando Bootstrap:
// import NavBarBoots from "./components/Boots/NavBarBoots";
// import Carrusell from "./components/Boots/Carrusell";

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer user={"coder"} greeting={"le deseamos una cordial bienvenida!"} />
      <Footer />
    </div>
  );
}

export default App;
