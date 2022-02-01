import { useState, createContext, useContext } from "react";

const cartContext = createContext([]);

//función que evita importar useContext en los archivos a usarlo
export function useCartContext() {
  return useContext(cartContext);
}

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function addToCart(items) {
    setCartList([...cartList, items]);
    const addedItem = cartList.findIndex((index) => index.id === items.id);
    if (addedItem > -1) {
      const oldQty = cartList[addedItem].qty;
      cartList.splice(addedItem, 1);
      setCartList([...cartList, { ...items, qty: items.qty + oldQty }]);
    } else {
      setCartList([...cartList, { ...items, qty: items.qty }]);
    }
  }

  function removeItem(itemId) {
    setCartList(cartList.filter((item) => item.id !== itemId));
  }

  // function searchItem(itemTitle) {
  //   setCartList(cartList.filter((item) => item.title === itemTitle));
  // }

  const totalCartValue = () => {
    let cartValue = 0;
    cartList.forEach((item) => {
      cartValue += item.price * item.qty;
    });
    return cartValue;
  };

    
  function emptyCart() {
    setCartList([]);
  }

  function cartQuantity() {
    const totalProductsinCart = cartList
      .map((productsInCart) => productsInCart.qty)
      .reduce((prev, curr) => prev + curr, 0);
    return totalProductsinCart;
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        addToCart,
        removeItem,
        totalCartValue,
        emptyCart,
        cartQuantity,
        //searchItem,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
