import { useState } from "react";
import { Grid, Box, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";

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
          <Box className="cardItemDetail">
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <CardMedia
              component="img"
              image={image}
              title={title}
              alt={title}
            />
            <Typography variant="body1" component="div">{description}</Typography>
          </Box>
          <Box mt="10px">
            <hr />
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained" size="small" color="warning">
                Volver a la tienda
              </Button>
            </Link>
          </Box>
        </Box>

        <Grid>
          {show ? (
            <Grid>
              <ItemCount
                id={id}
                stock={stock}
                initial={1}
                price={price}
                category={category}
                count={count}
                onAdd={onAdd}
              />
            </Grid>
          ) : (
            <Grid>
              <Box m="50px">
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <Button variant="contained" size="small" color="success">
                    Ir al Carrito
                  </Button>
                </Link>
              </Box>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemDetail;
