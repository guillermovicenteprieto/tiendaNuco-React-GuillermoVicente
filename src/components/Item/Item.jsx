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
      {/* <p 
      style={{ margin: "10px", borderRadius: "10px", padding: "5px", backgroundColor: "#e9c3ee", fontWeight: "bolder"}}>
        <i>Item component</i>
      </p> */}
      <Grid container>
        <Box>
          <Card
            sx={{ maxWidth: "250px" }}
            style={{ borderRadius: "10px", margin: "20px", padding: "20px" }}
          >
            <CardMedia
              component="img"
              image={image}
              title={title}
              width="auto"
              height="250"
              alt={title}
            />
            <Typography variant="h6" component="div">
              {title} NUCO
            </Typography>
            <Typography variant="subtitle1" component="div">
              $ {price}
            </Typography>
            <Typography variant="subtitle1" color="primary" component="div">
              Categoría: {category}
            </Typography>
            {/* <Link to={`/item/${id}`}> */}
            <Link to={`/detalle/${id}`} style={{textDecoration: 'none'}}>
              <Button variant="contained" size="large" color="warning">
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
