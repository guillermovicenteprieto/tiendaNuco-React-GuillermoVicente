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
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            
            <Route exact path="/" 
              element={<ItemListContainer 
            greeting={"Te damos la bienvenida a nuestra tienda online."} />} />

            <Route exact path="/category/:idCategory" element={<ItemListContainer /> } />

            <Route exact path="/item/:idItem" element={<ItemDetailContainer />} />

            <Route exact path="/cart" element={<Cart />} />

            <Route exact path="/cart/checkoutSale" element={<CheckoutSale />} />

            <Route exact path="/nucoTeam" element={<NucoTeam />} />

            <Route exact path="/stores" element={<Stores />} />

            <Route exact path="/contact" element={<Contact />} />

          </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
