import React from "react";
import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormularioLogIn = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    // email: '',
    // comentario: '',
  });

  const handleInputChange = (event) => {
    //console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user: " + datos.nombre + " " + datos.apellido);
    setFormularioEnviado(true);
  };

  return (
    <Fragment>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { mt: 10, m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            type="text"
            name="nombre"
            helperText="Por favor ingrese su Nombre"
            label="Nombre"
            size="small"
            color="success"
            focused
            onChange={handleInputChange}
          />
          <TextField
            type="text"
            name="apellido"
            helperText="Por favor ingrese su Apellido"
            label="Apellido"
            size="small"
            color="secondary"
            focused
            onChange={handleInputChange}
          />

          <TextField
            type="email"
            name="email"
            helperText="Por favor ingrese su Correo"
            label="Correo"
            size="small"
            color="primary"
            focused
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-password-input"
            helperText="Por favor ingrese su Contraseña"
            label="Password"
            type="password"
            name="contraseña"
            autoComplete="current-password"
            size="small"
            color="warning"
            focused
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            enviar
          </Button>
        </div>
      </Box>
      {formularioEnviado && (
        <div
          style={{
            margin: 1,
            padding: 5,
            color: "green",
            backgroundColor: "lightblue",
          }}
        >
          <h4>Te damos la bienvenida!</h4>
          <h3>User:  {datos.nombre + " " + datos.apellido }</h3>
        </div>
      )}
    </Fragment>
  );
};

export default FormularioLogIn;
