import { useCartContext } from "../../context/cartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CheckoutSale = ({ orderId, dataForm, order, cartList }) => {
  const { totalCartValue, cartQuantity, emptyCart } = useCartContext();
  return (
    <div className="itemListContainer">
      <h5>Formulario enviado exitosamente!</h5>
      <br />
      <div className="cartContainer">
        <h4>Id Orden de compra:</h4>
        <h4> {orderId}</h4>
      </div>
      <hr />
      <h4>Total Transacción</h4>
      <h3>$ {totalCartValue()}</h3>
      <br />
      <h5>Factura a nombre de:</h5>
      <h3>{dataForm.name + " " + dataForm.lastName}</h3>
      <h6>Teléfono de contacto: {dataForm.phone}</h6>
      <h6>Correo: {dataForm.email}</h6>
      <hr />
      <div>
        <h4>Esperamos que disfrute mucho su compra {dataForm.name}!</h4>
        <hr />
        <h6>Cantidad de productos: {cartQuantity()}</h6>
        {cartList &&
          cartList.map((cartItem) => {
            const id = cartItem.id;
            const title = cartItem.title;
            const price = cartItem.price;
            const qty = cartItem.qty;
            const image = cartItem.image;
            return (
              <div key={id}>
                <div>
                  <img
                    src={image}
                    alt={title}
                    style={{
                      borderRadius: "50px",
                      width: "100px",
                      height: "100px",
                    }}
                  />
                </div>
                <div>
                  <h5>{title}</h5>
                  <h6>Precio: $ {price}</h6>
                  <h6>Cantidad: {qty}</h6>
                  <h6>Producto Nº: {cartItem.id}</h6>
                </div>
              </div>
            );
          })}
      </div>
      <hr />
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <Button variant="contained" color="warning" onClick={emptyCart}>
          Finalizar compra
        </Button>
      </Link>
    </div>
  );
};

export default CheckoutSale;
