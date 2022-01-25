import React, { Fragment, useState, createContext, useContext } from "react";
import {Box, Button, TextField} from "@mui/material";

const userContext = createContext([]);

export function useUserContext() {
  return useContext(userContext);
}

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  function setUserData(userData) {
    setUser(userData);
  }

  return (
    <userContext.Provider value={{ user, setUserData }}>
      {children}
    </userContext.Provider>
  );
}


const FormularioLogIn = () => {

  //ejemplo profe
  //ver estados controlados: sincronizar la función con el estado

  //renderin condicional
  
  // const ControlledInput = () => {
  //   const [input, setInput] = useState({texto:''});
  //   useEffect(() => {
  //     console.log('suscrito');
  //     return () => {
  //       console.log('desuscrito');
  //     }
  //   }, [input]);
  // };
   

  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    // email: '',
    // comentario: '',
  });

    // useEffect(() => {
    //   console.log('suscrito');
    //   return () => {
    //     console.log('desuscrito');
    //   }
    // }, [datos.nombre, datos.apellido]);
  

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
        margin="30px"
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
          <h4>Te damos la bienvenida</h4>
          <h3>{datos.nombre + " " + datos.apellido }</h3>
        </div>
      )}
    </Fragment>
  );
};

export default FormularioLogIn;
