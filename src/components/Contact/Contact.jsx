import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./Contact.css";

const Contact = () => {
  const [submittedForm, setSubmittedForm] = useState(false);

  return (
    <div className="nucoTeamContainer">
      <h5 className="titleComponent">Contacto</h5>
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
          //setSubmittedForm(true);
          // resetForm();
          setTimeout(() => setSubmittedForm(true), 500);
          //setTimeout(() => resetForm(), 5000);
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
          <Form className="formContact">
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
                <div>
                  <label>
                    <Field name="message" as="textarea" placeholder="Deje aquí su mensaje y en breve nos contactaremos" />
                  </label>
                </div>

                <button type="submit">Enviar</button>
              </>
            )}
            {submittedForm && (
              <div >
                <h5>Mensaje recibido exitosamente</h5>
                <h2>{values.name} {values.lastName}</h2>
                <h5>En breves nos estaremos comunicando a vuestro correo registrado: </h5>
                <h4>{values.email}</h4>
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

export default Contact;
