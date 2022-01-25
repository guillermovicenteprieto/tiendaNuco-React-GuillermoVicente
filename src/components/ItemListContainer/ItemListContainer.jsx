import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
//import getProducts from "../../helpers/mock";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
//import { Button } from "@mui/material";

const ItemListContainer = ({ user, greeting, marca }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  //párametro id de la url
  const { idCategory } = useParams();

  useEffect(() => {
    setLoading(true);
    if (idCategory) {
      const db = getFirestore();
      //para query pasamos db, y la colección
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
          console.log("Error en el useEffect", error);
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
          console.log("Error en el useEffect", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [idCategory]);



  /*código antes de firebase, cargando los datos de la api con getProducts() y promesa

   useEffect(() => {
    setLoading(true);
    if (idCategory) {
      getProducts
        .then((res) => {
          setProducts(
            res.filter((products) => products.category === idCategory)
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
  }, [idCategory]);

*/

  return (
    <div className="itemListContainer">
      <h3>
        <i> {marca}</i>
      </h3>
      <h5 className="titleComponent">
        {idCategory ? `NUCO ${idCategory}.` : ""} {greeting}
      </h5>
      <div>
        {loading && <Spinner />}
        <ItemList products={products} />
      </div>
    </div>
  );
};
export default ItemListContainer;
