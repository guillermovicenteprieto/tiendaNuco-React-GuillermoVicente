import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./ItemDetail.css";

const ItemDetail = ({ id, title, image, stock, price, description, category }) => {

  // hook state para mostrar y/o ocultar los articulos
  const [open, setOpen] = useState(false);

  // Funcion que muestra y/o oculta los articulos
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="itemDetail">
      {/* <p className="itemDetailTitle">
        <i>ItemDetail component</i>
      </p> */}
      <Grid container>
        <Box m={1} p={1}>
          <Card
            sx={{ maxWidth: "500px" }}
            style={{ borderRadius: "10px", margin: "10px", padding: "10px" }}
          >
            <Typography variant="subtitle" color="primary" component="div">
              id: {id} | categoría: {category} | producto: {title}
            </Typography>
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
            <Button
              variant="contained"
              size="large"
              color="success"
              onClick={toggleMenu}
            >
              {" "}
              comprar
            </Button>
          </Card>
        </Box>
      </Grid>
      {open && (
        <ItemCount stock={stock} initial={1} price={price} title={title} />
      )}
    </div>
  );
};

export default ItemDetail;
