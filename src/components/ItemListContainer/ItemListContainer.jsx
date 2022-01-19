import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import getProducts from "../../helpers/mock";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ user, greeting, marca }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  //traigo el párametro id de la url
  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);
    if (idCategoria) {
      //console.log("idCategoria", idCategoria);
      getProducts
        .then((res) => {
          setProducts(
            res.filter((products) => products.category === idCategoria)
          );
        })
        .catch((error) => {
          console.log("Error en el useEffect", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
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
    }
  }, [idCategoria]);

  return (
    <div className="itemListContainer">
      {/* <p className="itemListContainerTitle">
        <i>ItemListContainer Component</i>
      </p> */}
      <h2>
        <i> {marca}</i>
      </h2>
      <h3 className="titleComponent">
        {idCategoria ? `NUCO ${idCategoria}.` : ""} {greeting}
      </h3>
      <div >
        {loading && <Spinner />}
        <ItemList products={products} />
      </div>
    </div>
  );
};
export default ItemListContainer;
