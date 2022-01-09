import { useState } from "react";
import Button from "@mui/material/Button";
import "./ItemCount.css";
//import Cart from "../Cart/Cart";
//para paracticar //import { useCounter } from "../../hooks/useCounter";

const ItemCount = ({ title, description, initial, stock, price }) => {

  //const { count, addItem, removeItem, resetItem } = useCounter(initial);

  const [count, setCount] = useState(initial);

  const addItem = () => {
    const newValue = count + 1;
    newValue <= stock ? setCount(newValue) : alert("Se ha alcanzado el límite de stock");
  };

  const removeItem = () => {
    const newValue = count - 1;
    newValue >= initial ? setCount(newValue) : alert("Debes tener al menos un producto seleccionado");
  };

  const resetItem = () => {
    setCount(initial);
  };

  const [show, setShow] = useState(false);

  const onAdd = () => {
    setShow(true);
  };

  return (
    <div className="itemCountClass">
      <p className="titleComponent">
        <i>ItemCount Component</i>
      </p>
      <h3>{title} Nuco</h3>
      <h4>Precio: $ {price} </h4>
      {count === 1 && <p>Stock {stock} unid.</p>}
      {count !== 1 && <p>Stock {stock - count} unid.</p>}
      <h4>Seleccione cantidad</h4>
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "green" }}
        onClick={addItem}
      >
        +
      </Button>
      <h2 style={{ color: "white" }}>{count}</h2>
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "red" }}
        onClick={removeItem}
      >
        -
      </Button>
      <div>
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "blue", marginTop: "10px" }}
          onClick={resetItem}
        >
          Reset
        </Button>
      </div>
      <hr />
      <p>Cantidad Seleccionada: {count}</p>
      <p>Total: $ {count * price}</p>
      <Button
        variant="contained"
        style={{
          color: "white",
          backgroundColor: "blue",
          marginBottom: "20px",
        }}
        onClick={onAdd}
      >
        Agregar al carrito
      </Button>
      {show && (
        <div>
          <h3>Se han agregado productos al Carrito:</h3>
          <h4>
            Producto: {title} Nuco | Cantidad: {count}
          </h4>
          <h4>Total Carrito: $ {count * price}</h4>
        
        </div>
      )}
    </div>
  );
};

export default ItemCount;
