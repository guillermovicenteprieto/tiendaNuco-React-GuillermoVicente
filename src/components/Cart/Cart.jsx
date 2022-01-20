import "./Cart.css";
import { useCartContext } from "../../context/cartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartList, vaciarCarrito } = useCartContext();

  return (
    <div style={{ color: "green" }}>
      <h3>Productos Agregados</h3>

      {cartList.map((product) => (
        <li key={product.id}>
          {product.title} | cantidad: {product.qty} | Precio Unitario: ${" "}
          {product.price} | TOTAL: {product.price * product.qty}
        </li>
      ))}
      <Button
        variant="contained"
        size="large"
        color="warning"
        onClick={vaciarCarrito}
      >
        Vaciar Carrito
      </Button>
      <Link to="/cart/Pago" style={{ textDecoration: "none" }}>
        <Button variant="contained" size="large" color="success">
          Proceder al pago
        </Button>
      </Link>
    </div>
  );
};
export default Cart;
