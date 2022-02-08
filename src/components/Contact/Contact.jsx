import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import BuyForm from "../Cart/BuyForm";

const Contact = ( ) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    emailConfirm: "",
  });

  function handleInputChange(e) {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="itemListContainer">
      <h3 className="titleComponent">Contacto</h3>
      
      <BuyForm handleInputChange={handleInputChange} dataForm={dataForm }/>

      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" size="small" color="warning">
          Volver a la Tienda
        </Button>
      </Link>
    </div>
  );
};

export default Contact;
