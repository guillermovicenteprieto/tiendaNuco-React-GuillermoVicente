import { useState } from "react";
import { Grid, Box, CardMedia, Typography, Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { id, title, image, stock, price, description, category, count } =
    product;
  const { addToCart } = useCartContext();
  const [show, setShow] = useState(true);

  const onAdd = (count) => {
    setShow(false);
    addToCart({ ...product, qty: count });
  };

  return (
    <div>
      <Grid container className="gridCardItemDetail">
        <Box>
          <Card className="cardItemDetail">
            <Typography variant="h5" component="div" color="#b3209a">
              {title}
            </Typography>
            <CardMedia
              component="img"
              image={image}
              title={title}
              width="auto"
              height="250px"
              alt={title}
            />
            <Typography variant="body2" mt="10px">
              {description}
            </Typography>
          </Card>
        </Box>

        <Grid>
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
            <Grid>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <Button variant="contained" size="small" color="success">
                  Ir al Carrito
                </Button>
              </Link>
              <hr />
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button variant="contained" size="small" color="warning">
                  Seguir comprando
                </Button>
              </Link>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemDetail;
