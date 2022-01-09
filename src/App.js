import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Tiendas from "./components/Tiendas/Tiendas";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <NavBar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer
                user={"Hola user!"}
                greeting={"Te damos la bienvenida a nuestra tienda online."}
                marca={"NUCO, arte ilustrado!"}
              />
            }
          />

          <Route exact path="/cart" element={<Cart />} />

          <Route
            exact
            path="/productos"
            element={
              <ItemListContainer
                greeting={"Todos nuestros productos en Cerámica y Textil."}
              />
            }
          />

          <Route
            exact
            path="/categorias/:idCategoria"
            element={
              <ItemListContainer
                greeting={"Piezas únicas, diseños exclusivos!"}
              />
            }
          />

          <Route exact path="/item/:idItem" element={<ItemDetailContainer />} />

          <Route exact path="/nosotr@s" element={<Nosotros />} />

          <Route exact path="/tiendas" element={<Tiendas />} />

          <Route exact path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
