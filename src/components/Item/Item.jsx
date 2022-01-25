import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, title, image, stock, price, category }) => {

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

            {/* <Typography variant="subtitle1" color="primary" component="div">
              Stock: {stock}
            </Typography> */}

            {/* <Link to={`/item/${id}`}> */}
            <Link to={`/item/${id}`} style={{ textDecoration: "none", margin: "10px" }}>
              <Button variant="contained" size="large" color="warning" style={{ margin: "10px" }}>   
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
