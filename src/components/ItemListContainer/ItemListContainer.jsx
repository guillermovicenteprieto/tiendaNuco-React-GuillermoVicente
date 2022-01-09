import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import getProducts from "../../helpers/mock";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ user, greeting, marca }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);
    if (idCategoria) {
      getProducts
        .then((res) => {
          setProducts(
            res.filter((product) => product.category === idCategoria)
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
        <h3 className="titleComponent">
          {user} {greeting}
        </h3>
        <h2>
          <i> {marca}</i>
        </h2>
      <div>
        {loading && <Spinner />}
        <ItemList products={products} />
      </div>
    </div>
  );
};
export default ItemListContainer;
