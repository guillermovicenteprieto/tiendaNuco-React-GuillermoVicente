import { useCartContext } from "../../context/cartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CheckoutSale = ({ orderId, orderDate, dataForm, cartList }) => {
  const { totalCartValue, cartQuantity, emptyCart } = useCartContext();

  return (
    <div className="checkout">
      {dataForm.name &&
      dataForm.lastName &&
      dataForm.phone &&
      dataForm.email ? (
        <div className="checkout">
          <h3>Orden generada exitosamente!</h3>
          <div className="titleComponent">
            <h4>Id Orden de compra:</h4>
            <h3> {orderId}</h3>
            <h5>{orderDate}</h5>
          </div>
          <h4>Total Transacción</h4>
          <h3>$ {totalCartValue()}</h3>
          <h4>Factura a nombre de:</h4>
          <h3>{dataForm.name + " " + dataForm.lastName}</h3>
          <h4>Teléfono de contacto: {dataForm.phone}</h4>
          <h4>Correo: {dataForm.email}</h4>
          <hr />
          <div>
            <h3>Esperamos que disfrute mucho su compra {dataForm.name}!</h3>
            <h4>Cantidad de productos escogidos: {cartQuantity()}</h4>
            {cartList &&
              cartList.map((cartItem) => {
                const title = cartItem.title;
                const price = cartItem.price;
                const qty = cartItem.qty;
                const image = cartItem.image;
                return (
                  <div key={cartItem.id} className="listCardsCheckout ">
                    <div>
                      <h4>{title}</h4>
                      <img src={image} alt={title} className="cartImage" />
                    </div>
                    <div>
                      <h5>Precio: $ {price}</h5>
                      <h5>Cantidad: {qty}</h5>
                      <h5>Producto ID: {cartItem.id}</h5>
                    </div>
                  </div>
                );
              })}
          </div>
          <hr />
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <Button variant="contained" color="warning" onClick={emptyCart}>
              Finalizar operación
            </Button>
          </Link>
        </div>
      ) : (
        <div className="itemListContainer">
          <h4>Por favor regrese e ingrese sus datos</h4>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="warning">
              Volver a la tienda
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutSale;
