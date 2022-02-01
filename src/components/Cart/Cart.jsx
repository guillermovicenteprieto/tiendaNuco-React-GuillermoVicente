import { useState } from "react";
import { Button, Grid } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import "./Cart.css";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  documentId,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import CheckoutSale from "./CheckoutSale";
import BuyForm from "./BuyForm";

const Cart = () => {
  const { cartList, emptyCart, removeItem, totalCartValue, cartQuantity } =
    useCartContext();

  const [confirmBuy, setConfirmBuy] = useState(false);
  const [buy, setBuy] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState({});

  const onBuy = () => {
    setBuy(true);
  };

  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const getBuy = async (e) => {
    e.preventDefault();
    let order = {};
    order.buyer = dataForm;
    order.total = totalCartValue();
    order.date = new Date().toLocaleDateString();
    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const title = cartItem.title;
      const price = cartItem.price;
      const qty = cartItem.qty;
      return { id, title, price, qty };
    });

    const db = getFirestore();
    const orderCollection = collection(db, "newOrders");
    //llamo la función addDoc para agregar un documento a la colección
    await addDoc(orderCollection, order)
      .then((res) => setOrderId(res.id))
      .catch((err) => {})
      .finally(() => {
        setConfirmBuy(true);
      });
    //actualización stock
    const queryCollection = collection(db, "items");
    const updateStock = query(
      queryCollection,
      where(
        documentId(),
        "in",
        cartList.map((item) => item.id)
      )
    );

    const batch = writeBatch(db);
    await getDocs(updateStock)
      .then((res) =>
        res.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((item) => item.id === res.id).qty,
          })
        )
      )
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setDataForm(dataForm);
        setOrder(order);
      });
    batch.commit();
    setConfirmBuy(true);
  };

  function handleInputChange(e) {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="cartContainer itemListContainer">
      <Grid>
        {cartList.length === 0 ? (
          <div>
            <h2>Tu carrito está vacío</h2>
            <Link to="/">
              <Button variant="contained" color="primary">
                Volver a la tienda
              </Button>
            </Link>
          </div>
        ) : confirmBuy ? (
          <div>
            <div className="itemDetailContainer">
              <CheckoutSale
                key={orderId}
                orderId={orderId}
                dataForm={dataForm}
                order={order.items}
                cartList={cartList}
              />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h5 className="cartTitle">Carrito:</h5>
              {cartList.map((item) => (
                <div key={item.id} className="itemDetailContainer">
                  <div className="cartDetail">
                    <div>
                      <h6>{item.title}</h6>
                      <img
                        style={{ width: "100px", height: "100px" }}
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div>
                      <p>
                        Precio: $ {item.price}
                        <br />
                        Cantidad: {item.qty}
                      </p>
                    </div>
                    <div>
                      <p>
                        Total: <br />$ {item.price * item.qty}
                      </p>
                    </div>
                    <div>
                      <Button
                        onClick={() => removeItem(item.id)}
                        color="secondary"
                      >
                        <Delete />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h5>Cantidad Articulos: {cartQuantity()} ud.</h5>
              <h5>Total Carrito $ {totalCartValue()}</h5>
            </div>
            <hr />
            <div>
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
                Comprar
              </Button>
            </div>
            <hr />
            {buy && (
              <div>
                <div>
                  <h5>Complete sus datos para generar la orden de compra: </h5>
                </div>
                <BuyForm
                  handleInputChange={handleInputChange}
                  getBuy={getBuy}
                  dataForm={dataForm}
                  cartList={cartList}
                />
              </div>
            )}
          </div>
        )}
      </Grid>
    </div>
  );
};

export default Cart;
