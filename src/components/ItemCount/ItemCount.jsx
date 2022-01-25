import { useState } from "react";
import Cart from "../Cart/Cart";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import "./ItemCount.css";

const ItemCount = ({ id, title, initial, stock, price, onAdd }) => {
  const [count, setCount] = useState(initial);

  const addItem = () => {
    count < stock && setCount(count + initial);
  };

  const quitItem = () => {
    count > initial && setCount(count - initial);
  };

  const resetItem = () => {
    setCount(initial);
    setShow(false);
  };

  const [show, setShow] = useState(false);

  
  return (
    <div>
      <Grid container>
        <Box>
          <Card className="cardCount">
            <Typography variant="p" mt="15px" mb="15px" component="div">
              Precio: $ {price}
            </Typography>
            {/* <Typography variant="p" component="div">
              {count === 1 && <p>Stock {stock} unid.</p>}
              {count !== 1 && <p>Stock {stock - count} unid.</p>}
            </Typography> */}
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#269e21" }}
              onClick={addItem}
              disabled={stock === 0}
            >
              +
            </Button>
            <Typography
              variant="h5"
              mt="5px"
              mb="5px"
              color="#0085FF"
              component="div"
            >
              {count}
            </Typography>
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#ee3102" }}
              onClick={quitItem}
              disabled={count === initial}
            >
              -
            </Button>
            <div>
              <Button
                variant="contained"
                size="small"
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
              UNIDADES: {count}
            </Typography>

            <Typography variant="h6" mt="10px" component="div">
              Total: $ {count * price}
            </Typography>

            <Button
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#0586e0",
                margin: "10px",
              }}
              onClick={() => onAdd(count)}
              disabled={count < 1 && "disabled"}
            >
              Agregar
            </Button>
          </Card>
        </Box>
      </Grid>

      <div>
        {show && (
          <Cart
            // title={title}
            // count={count}
            // initial={initial}
            // stock={stock}
            // price={price}
            // onAdd={onAdd}
            // id={id}
          />
        )}
      </div>
    </div>
  );
};

export default ItemCount;
