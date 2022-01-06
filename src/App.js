import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Divider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
        user={"user"}
        greeting={"Te damos la bienvenida a NUCO Tienda virtual!"}
      />
      <Divider />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
