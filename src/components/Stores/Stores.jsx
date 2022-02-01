import { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import "./Stores.css";

const Stores = () => {
  const [store, setStore] = useState([]);

  //lllamado a API para simular tiendas fisicas
  const storesAPI = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users/?_limit=9"
    );
    const store = await data.json();
    setStore(store);
  };

  useEffect(() => {
    storesAPI();
  }, []);

  return (
    <div className="storesContainer">
      <h5 className="titleComponent">
        <i>NUCO points!</i> También en tiendas físicas en Centros Comerciales
      </h5>
      {
        <div className="styleContainer">
          {store.map((store) => (
            <CardContent
              key={store.username}
              className="teamListCard listCards"
            >
              <h4>{store.username} Store</h4>
              <h6>Telefono: {store.phone}</h6>
              <h6>
                Dirección: {store.address.street} {store.address.suite}
              </h6>
              <h5>Ciudad: {store.address.city}</h5>
            </CardContent>
          ))}
        </div>
      }
    </div>
  );
};

export default Stores;
