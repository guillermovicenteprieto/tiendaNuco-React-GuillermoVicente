import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import "../ItemListContainer/ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = ({ id, title, image, stock, price, description }) => {
  // hook state para mostrar y/o ocultar los articulos
  const [open, setOpen] = useState(false);

  // Funcion que muestra y/o oculta los articulos
  const toggleMenu = () => {
    setOpen(!open);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    margin: theme.spacing(5),
    justifyContent: "around",

    color: theme.palette.text.secondary,
  }));

  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        margin: 20,
        padding: 5,
        backgroundColor: "#4acdde",
      }}
    >
      <p className="titleComponent">
        <i>Item component</i>
      </p>
      <Card style={{ flexWrap: "wrap" }}>
        <Item>
          <Typography variant="subtitle2" color="primary" component="div">
            id: {id} - producto: {title}
          </Typography>
          <Card style={{ width: "18rem" }}>
            <CardMedia
              component="img"
              image={image}
              title={title}
              width="auto"
              height="350"
              alt={title}
            />
            <Typography variant="subtitle1" component="div">
              $ {price}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <p> {description}</p>
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="success"
              onClick={toggleMenu}
            >
              {" "}
              información
            </Button>
          </Card>
        </Item>
      </Card>

      {open && (
        <ItemCount stock={stock} initial={1} price={price} title={title} />
      )}
    </div>
  );
};

export default Item;
