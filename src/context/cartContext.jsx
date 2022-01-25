import { useState, createContext, useContext } from "react";

const cartContext = createContext([]);

//función que evita importar useContext en los archivos a usarlo
export function useCartContext() {
  return useContext(cartContext);
}

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function agregarAlCarrito(items) {
    setCartList([...cartList, items]);
    const itemAgregado = cartList.findIndex((index) => index.id === items.id);

    if (itemAgregado > -1) {
      const oldQty = cartList[itemAgregado].qty;
      cartList.splice(itemAgregado, 1);
      setCartList([...cartList, { ...items, qty: items.qty + oldQty }]);
    } else {
      setCartList([...cartList, { ...items, qty: items.qty }]);
    }
  }

  function removeItem(itemId) {
    setCartList(cartList.filter((item) => item.id !== itemId));
  }

  const totalCarrito = () => {
    let total = 0;
    cartList.forEach((item) => {
      total += item.price * item.qty;
    });
    return total;
  };

  function vaciarCarrito() {
    setCartList([]);
  }

  function Carrito() {
    const totalProductsCarrito = cartList
      .map((productsInCart) => productsInCart.qty)
      .reduce((prev, curr) => prev + curr, 0);
    return totalProductsCarrito;
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        removeItem,
        valorTotalCarrito: totalCarrito(),
        vaciarCarrito,
        Carrito,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
