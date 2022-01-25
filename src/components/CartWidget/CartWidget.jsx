import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { Carrito } = useCartContext();
  const cantidadCarrito = Carrito();

  return (
    <div>
      <IconButton
        aria-label="cart"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="secondary"
      >
        <Badge badgeContent={cantidadCarrito} color="warning">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
};
export default CartWidget;
