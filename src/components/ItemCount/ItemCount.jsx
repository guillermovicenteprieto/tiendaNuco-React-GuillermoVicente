import { useState } from "react";
import "./ItemCount.css";
import Cart from "../Cart/Cart";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";

const ItemCount = ({ id, title, initial, stock, price, onAdd }) => {
  const [count, setCount] = useState(initial);

  const addItem = () => {
    count < stock
      ? setCount(count + initial)
      : alert("Se ha alcanzado el límite de stock");
  };

  const quitItem = () => {
    count > initial
      ? setCount(count - initial)
      : alert("Debes tener al menos un producto seleccionado");
  };

  const resetItem = () => {
    setCount(initial);
  };

  const [show, setShow] = useState(false);

  console.log(setShow)

  return (
    <div
      key={id}
      style={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container>
        <Box>
          <Card
            className="titleComponent"
            sx={{ maxWidth: "150px" }}
            style={{
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
              backgroundColor: "#ebf783",
              width: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="p" component="div">
              Precio: $ {price}
            </Typography>
            <Typography variant="p" component="div">
              {count === 1 && <p>Stock {stock} unid.</p>}
              {count !== 1 && <p>Stock {stock - count} unid.</p>}
            </Typography>

            <Button
              variant="contained"
              size="medium"
              style={{ backgroundColor: "#269e21", marginTop: "5px" }}
              onClick={addItem}
              disabled={count === stock}
            >
              +
            </Button>
            <Typography
              variant="h4"
              mt="5px"
              mb="5px"
              color="#d439da"
              component="div"
            >
              {count}
            </Typography>
            <Button
              variant="contained"
              size="medium"
              style={{ backgroundColor: "#ee3102", marginBottom: "10px" }}
              onClick={quitItem}
              disabled={count === initial}
            >
              -
            </Button>
            <div>
              <Button
                variant="contained"
                size="medium"
                style={{
                  backgroundColor: "#0586e0",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                onClick={resetItem}
              >
                Reset
              </Button>
            </div>
            <Divider />

            <Typography variant="p" mt="10px" component="div">
              Cantidad Seleccionada: {count}
            </Typography>

            <Typography variant="h6" mt="10px" component="div">
              Total: $ {count * price}
            </Typography>

            <Button
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#0586e0",
                marginTop: "20px",
                marginBottom: "10px",
              }}
              onClick={() => onAdd(count)}
              disabled={count < 1 && "disabled"}
            >
              Agregar al carrito
            </Button>
          </Card>
        </Box>
      </Grid>

      <div>
        {show && (
          <Cart
            title={title}
            count={count}
            initial={initial}
            stock={stock}
            price={price}
            onAdd={onAdd}
            id={id}
          />
        )}
      </div>
    </div>
  );
};

export default ItemCount;
