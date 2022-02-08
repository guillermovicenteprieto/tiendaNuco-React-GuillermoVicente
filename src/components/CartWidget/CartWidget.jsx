import {IconButton, Badge} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { cartQuantity } = useCartContext();
  return (
    <div>
      <IconButton color="secondary">
        <Badge badgeContent={cartQuantity()} color="warning">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
};
export default CartWidget;
