import { useState } from "react";

const Formulario = () => {

  const [value, setValue] = useState({
    nombre: "",
    apellido: "",
  });

  const { nombre, apellido } = value;

  const handleInput = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    alert(`hola ${nombre} ${apellido}`);
  };

  return (
    <div>
      <h1 style={{color:"blue"}}>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" name="nombre" onChange={handleInput} />
        <label>Apellido</label>
        <input type="text" name="apellido" onChange={handleInput} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
