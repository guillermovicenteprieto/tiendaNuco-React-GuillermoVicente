import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
//import getProducts from "../../helpers/mock";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(true);

  const { idItem } = useParams();

  /*código antes de firebase, cargando los datos de la api con getProduc

  useEffect(() => {
    setLoading(true);
      getProducts
      .then((res) => {
        setProduct(res.find((product) => product.id === `${idItem}`));
      })
      .catch((error) => {
        console.log("Error en el useEffect", error);
      })
      .finally(() => {
        setLoading(false);
    });
  }, [idItem]);

  */

  // código con firebase y sus métodos para cargar los datos de la api
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    //en doc pasamos db, la colección y el id del producto
    const queryProduct = doc(db, "items", idItem);
    getDoc(queryProduct)
      .then((res) => {
        setProduct({ id: res.id, ...res.data() });
      })
      .catch((error) => {
        console.log("Error en el useEffect", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idItem]);
 

  return (
    <div className="itemDetailContainer">
      <div>
        {loading && <Spinner />}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ItemDetail key={product.id} product={product} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
