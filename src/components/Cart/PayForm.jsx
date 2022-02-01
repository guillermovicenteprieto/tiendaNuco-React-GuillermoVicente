import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const PayForm = ({ orderId, dataForm, order }) => {
  const { totalCartValue, cartQuantity, emptyCart } = useCartContext();
  const [submittedForm, setSubmittedForm] = useState(false);

  return (
    <div className="nucoTeamContainer">
      <h5 className="titleComponent">Formulario de Pago</h5>
      <Formik
        //propiedades de valores iniciales
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          phone: "",
        }}
        //función que se ejecuta cuando el formulario es enviado
        onSubmit={(values, { resetForm }) => {
          console.log("Formulario Enviado exitosamente!");
          setSubmittedForm(true);
          resetForm();
          setTimeout(() => setSubmittedForm(true), 500);
          setTimeout(() => resetForm(), 5000);
        }}
        //propiedades de validación
        validate={(values) => {
          let errors = {};
          if (!values.name) {
            errors.name = "Por favor ingrese nombre de usuarix";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = "El nombre sólo puede contener letras";
          }
          if (!values.lastName) {
            errors.lastName = "Por favor ingrese apellido de usuarix";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)) {
            errors.lastName = "El apellido sólo puede contener letras";
          }
          if (!values.email) {
            errors.email = "Por favor ingrese un correo de usuarix";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,4}$/i.test(
              values.email
            )
          ) {
            errors.email =
              "El correo sólo puede contener letras, números, puntos, guión y guión bajo";
          }
          return errors;
        }}
      >
        {({ values, errors }) => (
          <Form className="formPayForm">
            {!submittedForm && (
              <>
                <div>
                  <label htmlFor="name">Nombre</label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    id="name"
                  />
                  <ErrorMessage
                    name="name"
                    component={() => <div className="error">{errors.name}</div>}
                  />
                </div>

                <div>
                  <label htmlFor="lastName">Apellido</label>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
                    id="lastName"
                  />
                  <ErrorMessage
                    name="lastName"
                    component={() => (
                      <div className="error">{errors.lastName}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Teléfono</label>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    id="phone"
                  />
                  <ErrorMessage
                    name="lastName"
                    component={() => (
                      <div className="error">{errors.lastName}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="email">Correo</label>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Correo"
                    id="email"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="error">{errors.email}</div>
                    )}
                  />
                </div>
                <hr />

                <button type="submit">Enviar</button>
              </>
              
            )}
            {submittedForm && (
              <div>
                <h5>Formulario enviado exitosamente</h5>
                <h4>Te damos la bienvenida!</h4>
                <h2>
                  {values.name} {values.lastName}
                </h2>
                {/* <p>Correo registrado</p> */}
                <h4>{values.email}</h4>
                {/* <p>Mensaje recibido: </p> */}
                <h2>{values.message}</h2>

                <div className="itemListContainer">
                  <h5>Formulario enviado exitosamente</h5>
                  <h4>Total a pagar</h4>
                  <h3>$ {totalCartValue()}</h3>
                  <h4>Cantidad de productos: {cartQuantity()}</h4>
                  <br />
                  <div>
                    <h4 className="cartContainer">
                      Id Orden de compra: {orderId}
                    </h4>
                  </div>
                  <br />
                  <h5>Comprador:</h5>
                  <h6>Nombre - Apellido:</h6>
                  <h6>{values.name} {values.lastName}</h6>
                  <div>
                    <h4>Muchas gracias por su compra!</h4>
                  </div>
                  <br />
                  <hr />
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/"
                  >
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={emptyCart}
                    >
                      Finalizar compra
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" size="small" color="warning">
          Inicio
        </Button>
      </Link>
    </div>
  );
};

export default PayForm;
