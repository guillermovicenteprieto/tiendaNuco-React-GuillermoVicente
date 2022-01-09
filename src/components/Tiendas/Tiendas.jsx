import { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import "./Tiendas.css";

const Tiendas = () => {

  const [tienda, setTienda] = useState([]);

  //trabajando con llamado a API para simular tiendas fisicas
  const tiendasAPI = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/?_limit=6");
    const tiendas = await data.json();
    setTienda(tiendas);
  };

  //resolviendo el llamado a la api a través del useEffect
  useEffect(() => {
    tiendasAPI();
  }, []);

  return (
    <div className="tiendasContainer">
      <h3 className="titleComponent"><i>NUCO points!</i> También en tiendas físicas en Centros Comerciales</h3>
      {
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
          {tienda.map((tienda) => (
                <CardContent key={tienda.username} className="teamListCard listCards">
                  <h2>{tienda.username}</h2>
                  <h5>Telefono: {tienda.phone}</h5>
                  <h3>Dirección: {tienda.address.street} {tienda.address.suite}</h3>
                  <h3>Ciudad: {tienda.address.city}</h3>
                </CardContent>
          ))}
        </div>
      }
    </div>
  );
};

export default Tiendas;
