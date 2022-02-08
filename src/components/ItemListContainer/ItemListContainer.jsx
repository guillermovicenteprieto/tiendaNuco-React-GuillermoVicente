import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore,
  where, query } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { idCategory } = useParams();

  useEffect(() => {
    setLoading(true);
    const dataBase = getFirestore();
    const queryProduct = collection(dataBase, "items");
    const queryCategory = idCategory
      ? query(queryProduct, where("category", "==", idCategory))
      : queryProduct;
    getDocs(queryCategory)
      .then((res) => {
        setProducts(
          res.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }))
        );
      })
      .catch((error) => error)
      .finally(() => setLoading(false));
  }, [idCategory]);

  return (
    <div className="itemListContainer">
      <h3 className="titleComponent">
        {idCategory ? `NUCO ${idCategory}.` : ""} {greeting}
      </h3>
      {loading && <Spinner />}
      <div className="styleContainer">
        <ItemList key={products.id} products={products} />
      </div>
    </div>
  );
};
export default ItemListContainer;
