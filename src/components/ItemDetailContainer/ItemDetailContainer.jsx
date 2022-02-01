import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { idItem } = useParams();

    useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const queryProduct = doc(db, "items", idItem);
    getDoc(queryProduct)
      .then((res) => {
        setProduct({ id: res.id, ...res.data() });
      })
      .catch((error) => {
        console.log("Error en carga de promesa en ItemDetailContainer.jsx", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idItem]);
 

  return (
    <div className="itemListContainer">
      <div>
        {loading && <Spinner />}
        <div className="styleDetailContainer">
          <ItemDetail key={product.id} product={product} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
