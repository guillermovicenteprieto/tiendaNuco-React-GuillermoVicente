import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import getProducts from "../../helpers/mock";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts
      .then((res) => {
        setProduct(res.find((product) => product.id === "1"));
      })
      .catch((error) => {
        console.log("Error en el useEffect", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="itemDetailContainer" >
      <p
        style={{
          marginTop: "10px",
          marginLeft: "50px",
          marginRight: "50px",
          borderRadius: "10px",
          padding: "5px",
          color: "#000000",
          backgroundColor: "#ff7fd4",
          fontWeight: "bold",
        }}
      >
        <i>itemDetailContainer Component</i>
      </p>
      <div>
        {loading && <Spinner />}
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          <ItemDetail
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            stock={product.stock}
            price={product.price}
            description={product.description}
            category={product.category}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
