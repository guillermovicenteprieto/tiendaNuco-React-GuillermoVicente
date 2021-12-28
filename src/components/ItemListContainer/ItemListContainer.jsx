import { useState, useEffect } from "react";

import "./ItemListContainer.css";
import getProducts from "../../helpers/mock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ user, greeting }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log("Error en el useEffect", error);
      });
  }, []);

  return (
    <div className="itemListContainer">
      <p className="titleComponent">
        <i>ItemListContainer Component</i>
      </p>
      <h2>
        hola {user}! {greeting}
      </h2>
      <br />
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
