import { useState, createContext, useContext } from "react";

const cartContext = createContext([]);

//función que evita importar useContext en todos los archivos a usarlo
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

  function vaciarCarrito() {
    setCartList([]);
  }

  console.log(cartList);
  console.log(cartList.length);

  return (
    <cartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
