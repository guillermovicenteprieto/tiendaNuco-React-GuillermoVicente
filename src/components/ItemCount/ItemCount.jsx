import { useState } from "react";
import { Button, Typography,Grid, Box, Divider } from "@mui/material";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, price, onAdd, category }) => {
  const [count, setCount] = useState(initial);

  const addItem = () => {
    count < stock && setCount(count + initial);
  };

  const quitItem = () => {
    count > initial && setCount(count - initial);
  };

  const resetItem = () => {
    setCount(initial);
  };

    return (
    <div>
      <Grid>
        <Box>
          <Box className="cardCount">
            <Typography variant="h6" mt="5px" mb="10px" component="div">
              NUCO {category}
            </Typography>
            <Typography variant="p" mt="5px" mb="10px" component="div">
              Precio: $ {price}
            </Typography>

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
            <Box>
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
            </Box>
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
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default ItemCount;
