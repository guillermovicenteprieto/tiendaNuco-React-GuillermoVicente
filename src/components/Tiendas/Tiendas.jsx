import { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import "./Tiendas.css";

const Tiendas = () => {
  const [tienda, setTienda] = useState([]);

  //trabajando con llamado a API para simular tiendas fisicas
  const tiendasAPI = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users/?_limit=9"
    );
    const tiendas = await data.json();
    setTienda(tiendas);
  };

  //resolviendo el llamado a la api a través del useEffect
  useEffect(() => {
    tiendasAPI();
  }, []);

  return (
    <div className="tiendasContainer">
      <h5 className="titleComponent">
        <i>NUCO points!</i> También en tiendas físicas en Centros Comerciales
      </h5>
      {
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {tienda.map((tienda) => (
            <CardContent
              key={tienda.username}
              className="teamListCard listCards"
            >
              <h4>{tienda.username}</h4>
              <h6>Telefono: {tienda.phone}</h6>
              <h6>
                Dirección: {tienda.address.street} {tienda.address.suite}
              </h6>
              <h5>Ciudad: {tienda.address.city}</h5>
            </CardContent>
          ))}
        </div>
      }
    </div>
  );
};

export default Tiendas;
