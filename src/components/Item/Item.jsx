import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./Item.css";

const Item = ({ id, title, image, stock, price, description }) => {
  
  // hook state para mostrar y/o ocultar los articulos
  const [open, setOpen] = useState(false);

  // Funcion que muestra y/o oculta los articulos
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="itemContainer">
      <p
        style={{
          margin: "10px",
          borderRadius: "10px",
          padding: "5px",
          backgroundColor: "#e9c3ee",
          fontWeight: "bolder",
        }}
      >
        <i>Item component</i>
      </p>
      <Grid container>
        <Box m={1} p={1}>
          <Card
            sx={{ maxWidth: "300px" }}
            style={{ borderRadius: "10px", margin:"20px", padding: "20px" }} >
            <Typography variant="subtitle1" color="primary" component="div">
              id: {id} | producto: {title}
            </Typography>
            <CardMedia
              component="img"
              image={image}
              title={title}
              width="auto"
              height="300"
              alt={title}
            />
            <Typography variant="h6" component="div">
              {title} NUCO
            </Typography>
            <Typography variant="subtitle1" component="div">
              $ {price}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <p> {description}</p>
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="warning"
              onClick={toggleMenu}
            >
              {" "}
              información
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

export default Item;
