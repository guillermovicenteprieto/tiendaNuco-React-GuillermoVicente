import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Nosotros from "./components/Nosotros/Nosotros";
import Tiendas from "./components/Tiendas/Tiendas";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import FormularioLogIn from "./components/Contacto/FormularioLogIn";
import Checkout from "./components/Cart/Checkout";
import { CartContextProvider } from "./context/cartContext";
import { UserContextProvider } from "./components/Contacto/FormularioLogIn";

function App() {
  return (
    <UserContextProvider>

    <CartContextProvider>
      <BrowserRouter>
        <div className="main">
          <NavBar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <ItemListContainer
                  user={"Hola!"}
                  greeting={"Te damos la bienvenida a nuestra tienda online."}
                  marca={"NUCO, arte ilustrado!"}
                />
              }
            />

            <Route
              exact
              path="/category/:idCategory"
              element={
                <ItemListContainer
                  greeting={"Piezas únicas, diseños exclusivos!"}
                />
              }
            />

            <Route exact path="/item/:idItem" element={<ItemDetailContainer />} />

            <Route exact path="/cart" element={<Cart />} />

            <Route exact path="/checkout" element={<Checkout />} />

            <Route exact path="/nosotr@s" element={<Nosotros />} />

            <Route exact path="/tiendas" element={<Tiendas />} />

            <Route exact path="/contacto" element={<Contacto />} />

            <Route exact path="/formulario" element={<FormularioLogIn />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
