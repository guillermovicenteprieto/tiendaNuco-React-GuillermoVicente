import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

const ItemDetail = ({ product }) => {
  const { id, title, image, stock, price, description, category, count } =
    product;

  const { agregarAlCarrito } = useContext(cartContext);

  //console.log(cartList);

  const [show, setShow] = useState(true);

  const onAdd = (count) => {
    //console.log("cantidad seleccionada : " + count);
    setShow(false);

    alert(` se agregaron ${count} productos al carrito`);

    agregarAlCarrito({...product, cantidad: count});

  };

  //console.log(cartList);

  return (
    <div className="itemDetail">
      <Grid container style={{ alignItems: "center" }}>
        <Box m={1} p={1}>
          <Card
            sx={{ maxWidth: "24rem" }}
            style={{ borderRadius: "10px", margin: "10px", padding: "10px" }}
          >
            <CardMedia
              component="img"
              image={image}
              title={title}
              width="auto"
              height="500"
              alt={title}
            />
            <Typography variant="h5" component="div">
              {title} NUCO
            </Typography>
            <Typography variant="h6" component="div">
              $ {price}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
          </Card>

        </Box>

        <Box m={1} p={1}>
          {show ? (
            <ItemCount
              id={id}
              stock={stock}
              initial={1}
              price={price}
              title={title}
              category={category}
              count={count}
              onAdd={onAdd}
              //agregarAlCarrito={agregarAlCarrito}
            />
          ) : (
            <Grid>
              <Link to="/cart" style={{ textDecoration: "none" }}
              >
                <Button variant="contained" size="large" color="success">
                  Terminar
                </Button>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large" color="warning">
                  Seguir comprando
                </Button>
              </Link>
            </Grid>
          )}
        </Box>
      </Grid>
    </div>
  );
};

export default ItemDetail;
