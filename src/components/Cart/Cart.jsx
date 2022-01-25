import { Button, Grid, Box } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import "./Cart.css";


const Cart = () => {
  const { cartList, vaciarCarrito, removeItem, valorTotalCarrito, Carrito } =
    useCartContext();
  const cantidadCarrito = Carrito();
  return (
    <div className="cartContainer">
      <Grid>
        <Box>
          {cantidadCarrito ? (
            <div className="carrito">
              <h5 className="titleCartComponent">
                <i>Productos agregados </i>
              </h5>
              <div>
                {cartList.map((item) => (
                  <div key={item.id} className="itemDetailContainer">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        marginLeft: "50px",
                        marginRight: "50px",
                        margin: "20px",
                        color: "#b3209a",
                      }}
                    >
                      {/* <div className="itemDetailContainer"> </div> */}

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
                <div>
                  <h5>TOTAL CARRITO</h5>
                </div>
                <div>
                  <h5>$ {valorTotalCarrito}</h5>
                </div>
              </div>
              <hr />
              <div>
                <Button
                  onClick={vaciarCarrito}
                  variant="contained"
                  color="secondary"
                >
                  Vaciar Carrito
                </Button>
                <Button variant="contained" color="warning">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/"
                  >
                    Volver a la tienda
                  </Link>
                </Button>
              </div>
              <hr />

              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="success">
                  Pagar y terminar compra
                </Button>
              </Link>
            </div>
          ) : (
            <div>
              <p className="titleComponent">
                <i>No hay productos en el Carrito</i>
              </p>
              <Button variant="contained" color="warning">
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Volver a la tienda
                </Link>
              </Button>
            </div>
          )}
        </Box>
      </Grid>
    </div>
  );
};

export default Cart;

//       {cartList.map((product) => (
//         <div>
//           <li key={product.id}>
//             {product.title} | cantidad: {product.qty} | Precio Unitario: ${" "}
//             {product.price} | TOTAL: {product.price * product.qty}
//             <Button
//               sx={{
//                 backgroundColor: "#ffb7f3",
//                 color: "white",
//                 margin: "5px",
//                 padding: "5px",
//                 borderRadius: "10px",
//                 width: "auto",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//               onClick={() => removeItem(product.id)}
//             >
//               Eliminar
//             </Button>
//           </li>
//         </div>
//       ))}

//      <div>{valorTotalCarrito > 1 && <h5> valorTotalCarrito: $ {valorTotalCarrito}</h5>}</div>

//       <Button
//         variant="contained"
//         size="large"
//         color="warning"
//         onClick={vaciarCarrito}
//       >
//         Vaciar Carrito
//       </Button>
//       <Link to="/cart/Pago" style={{ textDecoration: "none" }}>
//         <Button variant="contained" size="large" color="success">
//           Proceder al pago
//         </Button>
//       </Link>
//     </div>
//   );
// };
// export default Cart;
