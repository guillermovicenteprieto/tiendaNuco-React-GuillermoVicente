import { useState, createContext } from "react";
//1. importo createContext from "react" para crear un contexto;

//una vez importado createContext: defino una constante que me devuelve un contexto, que exportaré en éste caso como cartContext
//lo podría inicializar con estados y funciones globales
export const cartContext = createContext([]);

//2.creación de un componente que maneja el contexto

export const CartContextProvider = ({ children }) => {
  //ACÁ DECLARAMOS ESTADOS Y FUNCIONES GLOBALES para éste contexto

  const [cartList, setCartList] = useState([]);


  function agregarAlCarrito(items) {
    setCartList([...cartList, items]);
  }

  function vaciarCarrito() {
    setCartList([]);
  }

 return (
    <cartContext.Provider
      value={{ 
        cartList, 
        agregarAlCarrito, 
        vaciarCarrito, 
        //addProduct
       }}
    >
      {children}
    </cartContext.Provider>
  );
};
