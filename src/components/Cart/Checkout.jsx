import { useCartContext } from "../../context/cartContext";

const Checkout = () => {

  const { valorTotalCarrito } = useCartContext();

  return (
    <div style={{ color: "green" }}>
      <h4>Resumen</h4>
      <hr />
      <div>
        <h5>TOTAL: $ {valorTotalCarrito}</h5>
      </div>
      <div>
        <h5>Generar orden</h5>
      </div>
      {/* {setDatos && (
        <div>
          <h5>Datos del cliente</h5>
          <hr />
          <div>
            <h5>Nombre: {datos.nombre}</h5>
          </div>
          <div>
            <h5>Apellido: {datos.apellido}</h5>
          </div>
          <div>
            <h5>Correo: {datos.correo}</h5>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Checkout;
