import "./Cart.css";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

const Cart = ({ title, count, price, onAdd }) => {

  const { cartList } = useContext(cartContext);

  return (
    <div style={{ color: "green" }}>
      <h3>Productos Agregados</h3>

      {cartList.map((product) => (
        <li key={product.id}>
          {product.title} | cantidad: {product.cantidad} | Precio Unitario: ${" "}
          {product.price} | TOTAL: {product.price *  product.cantidad}
        </li>
      ))}

    </div>
  );
};
export default Cart;
