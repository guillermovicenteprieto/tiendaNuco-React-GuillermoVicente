import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { getFirestore, addDoc, collection, getDocs, documentId, 
  query, where, writeBatch, Timestamp, } from "firebase/firestore";
import CheckoutSale from "./CheckoutSale";
import CartListItems from "./CartListItems";

const Cart = () => {
  const { cartList, totalCartValue } = useCartContext();
  const [confirmBuy, setConfirmBuy] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [orderDate, setOrderDate] = useState((Timestamp.fromDate(new Date())).toDate());
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    emailConfirm: "",
    message: "",
  });

  const getBuy = async (e) => {
    e.preventDefault();
    let order = {};
    order.buyer = dataForm;
    order.total = totalCartValue();
    order.date= orderDate;
    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const title = cartItem.title;
      const price = cartItem.price;
      const qty = cartItem.qty;
      return { id, title, price, qty };
    });

    const dataBase = getFirestore();
    const orderCollection = collection(dataBase, "checkoutOrders");
    await addDoc(orderCollection, order)
      .then((res) => setOrderId(res.id))
      .catch((err) => {})
      .finally(() => {
        setConfirmBuy(true);
        setOrderDate(orderDate);

      });
    //actualización stock
    const queryCollection = collection(dataBase, "items");
    const updateStock = query(
      queryCollection,
      where(
        documentId(),
        "in",
        cartList.map((item) => item.id)
      )
    );

    const batch = writeBatch(dataBase);
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
      .catch((err) => {})
      .finally(() => {
        setDataForm(dataForm);
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
    <div className="itemListContainer">
      <Grid>
        {cartList.length === 0 ? (
          <div>
            <h4>Tu carrito está vacío</h4>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="warning">
                Volver a la tienda
              </Button>
            </Link>
          </div>
        ) : confirmBuy ? (
          <div>
            <div>
              <CheckoutSale
                key={orderId}
                orderId={orderId}
                dataForm={dataForm}
                getBuy={getBuy}
                cartList={cartList}
                orderDate={orderDate.toString()}
              />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <CartListItems
                key={orderId}
                orderId={orderId}
                dataForm={dataForm}
                cartList={cartList}
                handleInputChange={handleInputChange}
                getBuy={getBuy}
              />
            </div>
          </div>
        )}
      </Grid>
    </div>
  );
};

export default Cart;
