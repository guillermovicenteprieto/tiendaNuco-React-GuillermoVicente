import { useCartContext } from "../../context/cartContext";
import { useState } from "react";
import { Button, Box } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import BuyForm from "./BuyForm";

const CartListItems = ({ dataForm, getBuy, handleInputChange }) => {
  const { cartList, emptyCart, removeItem, totalCartValue, cartQuantity } =
    useCartContext();

  const [buy, setBuy] = useState(false);

  const onBuy = () => {
    setBuy(true);
  };
  return (
    <div>
      <h4>Listado de Productos agregados</h4>
      <div>
        {cartList.map((item) => (
          <div key={item.id} className="itemDetailContainer">
            <div className="cartDetail">
              <div>
                {" "}
                <p>{item.title}</p>
                <div>
                  <Link
                    to={`/item/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box variant="contained" size="small" color="success">
                      <img
                        className="cartImage"
                        src={item.image}
                        alt={item.title}
                      />
                    </Box>
                  </Link>
                </div>
              </div>
              <div>
                {" "}
                <p>
                  Precio: $ {item.price}
                  <br />
                  Cantidad: {item.qty}{" "}
                </p>
              </div>
              <div>
                <p>
                  Total: <br />$ {item.price * item.qty}
                </p>
              </div>
              <div>
                <Button onClick={() => removeItem(item.id)} color="secondary">
                  <Delete />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h5>Cantidad Articulos: {cartQuantity()} ud.</h5>
        <h4>Valor Total Carrito $ {totalCartValue()}</h4>
      </div>
      <div>
        <div>
          <hr />
        </div>
        <Button onClick={emptyCart} variant="contained" color="secondary">
          Vaciar Carrito
        </Button>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <Button variant="contained" color="warning">
            Volver a la tienda
          </Button>
        </Link>
      </div>
      <hr />
      <div>
        <Button onClick={onBuy} variant="contained" color="success">
          Generar Orden
        </Button>
      </div>
      {buy && (
        <div>
          <BuyForm
            handleInputChange={handleInputChange}
            getBuy={getBuy}
            dataForm={dataForm}
            cartList={cartList}
          />
        </div>
      )}
    </div>
  );
};

export default CartListItems;
