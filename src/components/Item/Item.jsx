import { CardMedia, Typography, Button, Card, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  const { id, title, image, price, category } =
    product;

  return (
    <div key={id} className="itemContainer">
      <Grid container>
        <Box>
          <Card sx={{ maxWidth: "250px" }} className="itemCard">
            <Typography variant="subtitle2" color="primary" component="div">
              Categoría: {category}
            </Typography>
            <Typography variant="h6" color="secondary" component="div">
              {title}
            </Typography>
            <CardMedia
              component="img"
              image={image}
              title={title}
              width="auto"
              height="250"
              alt={title}
            />
            <Typography variant="subtitle1" component="div">
              Precio $ {price}
            </Typography>
            <Link
              to={`/item/${id}`}
              style={{ textDecoration: "none", margin: "10px" }}
            >
              <Button
                variant="contained"
                size="large"
                color="warning"
                style={{ margin: "10px" }}
              >
                ver producto
              </Button>
            </Link>
          </Card>
        </Box>
      </Grid>
    </div>
  );
};

export default Item;
