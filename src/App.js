import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NucoTeam from "./components/NucoTeam/NucoTeam";
import Stores from "./components/Stores/Stores";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CheckoutSale from "./components/Cart/CheckoutSale";
//import PayForm from "./components/Cart/PayForm";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
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
                  greeting={"Te damos la bienvenida a nuestra tienda online."}
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

            <Route exact path="/checkoutSale" element={<CheckoutSale />} />

            <Route exact path="/nucoTeam" element={<NucoTeam />} />

            <Route exact path="/stores" element={<Stores />} />

            {/* <Route exact path="/payForm" element={<PayForm />} /> */}

            <Route exact path="/contact" element={<Contact />} />

          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
