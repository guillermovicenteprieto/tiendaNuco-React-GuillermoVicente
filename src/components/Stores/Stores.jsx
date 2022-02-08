import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const Stores = () => {
  const [store, setStore] = useState([]);
  //lllamado a API para simular tiendas fisicas
  const storesAPI = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users/?_limit=8"
    );
    const store = await data.json();
    setStore(store);
  };

  useEffect(() => {
    storesAPI();
  }, []);

  return (
    <div className="storesContainer">
      <h3 className="titleStoresComponent">
        <i>NUCO points!</i> También en tiendas físicas en Centros Comerciales
      </h3>
      {
        <div className="styleContainer">
          {store.map((store) => (
            <Box key={store.username} className="storeListCard listCardStore">
              <h3>
                {store.company.name} | {store.username} Store
              </h3>
              <h5>{store.company.catchPhrase}</h5>
              <h5>{store.company.bs}</h5>
              <h5>Telefono: {store.phone}</h5>
              <h5>Email: {store.email}</h5>
              <h5>
                Dirección: {store.address.street} Nº {store.address.suite}
              </h5>
              <h4>
                Ciudad: {store.address.city} - CP.:{store.address.zipcode}
              </h4>
            </Box>
          ))}
        </div>
      }
    </div>
  );
};

export default Stores;
