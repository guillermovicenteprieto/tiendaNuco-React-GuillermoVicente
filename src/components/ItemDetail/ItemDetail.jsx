import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { id, title, image, stock, price, description, category, count } =
    product;
  const { agregarAlCarrito } = useCartContext();
  const [show, setShow] = useState(true);

  const onAdd = (count) => {
    setShow(false);
    agregarAlCarrito({ ...product, qty: count });
  };

  return (
    <div >
      <Grid container style={{ alignItems: "center" }}>
        <Box>
          <Card
            sx={{ maxWidth: "300px" }}
            style={{ borderRadius: "10px", margin: "10px", padding: "10px" }}
          >
            <Typography variant="h5" component="div">
              {title} NUCO
            </Typography>
            <CardMedia
              component="img"
              image={image}
              title={title}
              width="auto"
              height="375"
              alt={title}
            />
            <Typography variant="body2" gutterBottom>
              {description}
            </Typography>
          </Card>
        </Box>

        <Box>
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
            />
          ) : (
            <Grid container>
              <Link to="/cart" style={{ textDecoration: "none" }}>
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
