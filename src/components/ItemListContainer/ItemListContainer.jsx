import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import getProducts from "../../helpers/mock";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({ user, greeting }) => {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log("Error en el useEffect", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="itemListContainer">
      <p className="itemListContainerTitle">
        <i>ItemListContainer Component</i>
      </p>
      <h2>
        hola {user}! {greeting}
      </h2>
      <div>
        {loading && <Spinner />}
        <ItemList products={products} />
      </div>
    </div>
  );
};
export default ItemListContainer;
