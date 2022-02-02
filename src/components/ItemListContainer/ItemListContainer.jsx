import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  where,
  query,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  useEffect(() => {
    setLoading(true);
    if (idCategory) {
      const db = getFirestore();
      const queryCollection = query(
        collection(db, "items"),
        where("category", "==", idCategory)
      );
      getDocs(queryCollection)
        .then((res) => {
          setProducts(
            res.docs.map((product) => ({
              id: product.id,
              ...product.data(),
            }))
          );
        })
        .catch((error) => {
          console.log(
            "Error en carga de promesa en ItemListContainer.jsx",
            error
          );
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      const db = getFirestore();
      const queryCollection = collection(db, "items");
      getDocs(queryCollection)
        .then((res) => {
          setProducts(
            res.docs.map((product) => ({
              id: product.id,
              ...product.data(),
            }))
          );
        })
        .catch((error) => {
          console.log(
            "Error en carga de promesa en ItemListContainer.jsx",
            error
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [idCategory]);

  // useEffect(() => {
  //   setLoading(true);
  //   const db = getFirestore();
  //   const queryProduct = collection(db, "items");
  //   const queryCategory = idCategory
  //     ? where(queryProduct, "category", idCategory)
  //     : queryProduct;
  //   getDocs(queryCategory)
  //     .then((res) => {
  //       setProducts(
  //         res.docs.map((product) => ({
  //           id: product.id,
  //           ...product.data(),
  //         }))
  //       );
  //     })
  //     .catch((error) => {
  //       console.log(
  //         "Error en carga de promesa en ItemListContainer.jsx",
  //         error
  //       );
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [idCategory]);

  return (
    <div className="itemListContainer">
      <h5 className="titleComponent">
        {idCategory ? `NUCO ${idCategory}.` : ""} {greeting}
      </h5>
      {loading && <Spinner />}

      <div className="styleContainer">
        <ItemList key={products.id} products={products} />
      </div>
    </div>
  );
};
export default ItemListContainer;
