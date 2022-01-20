import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Contacto.css";

const Contacto = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  return (
    <div className="nosotrosContainer">
      <h3 className="titleComponent">Contacto</h3>
      <Formik
        //propiedades de valores iniciales
        initialValues={{
          nombre: "",
          apellido: "",
          correo: "",
          pais: "",
          sexo: "",
          mensaje: "",
        }}
        //función que se ejecuta cuando el formulario es enviado
        onSubmit={(valores, { resetForm }) => {
          console.log("Formulario Enviado exitosamente!");
          //setFormularioEnviado(true);
          // resetForm();
          setTimeout(() => setFormularioEnviado(true), 500);
          setTimeout(() => resetForm(), 7000);
        }}
        //propiedades de validación
        validate={(valores) => {
          let errores = {};
          //vaidacion del nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingrese nombre de usuarix";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre sólo puede contener letras";
          }
          //validacion del apellido
          if (!valores.apellido) {
            errores.apellido = "Por favor ingrese apellido de usuarix";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
            errores.apellido = "El apellido sólo puede contener letras";
          }
          //validación del correo
          if (!valores.correo) {
            errores.correo = "Por favor ingrese un correo de usuarix";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,4}$/i.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo sólo puede contener letras, números, puntos, guión y guión bajo";
          }
          return errores;
        }}
      >
        {({ values, errors }) => (
          <Form className="formulario">
            {!formularioEnviado && (
              <>
                <div>
                  <label htmlFor="nombre">
                    Nombre
                  </label>
                  <Field
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    id="nombre"
                  />
                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <div className="error">{errors.nombre}</div>
                    )}
                  />
                </div>

                <div>
                  <label htmlFor="apellido">
                    Apellido
                  </label>
                  <Field
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    id="apellido"
                  />
                  <ErrorMessage
                    name="apellido"
                    component={() => (
                      <div className="error">{errors.apellido}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="correo">Correo</label>
                  <Field
                    type="text"
                    name="correo"
                    placeholder="Correo"
                    id="correo"
                  />
                  <ErrorMessage
                    name="correo"
                    component={() => (
                      <div className="error">{errors.correo}</div>
                    )}
                  />
                </div>

                <hr />
                <div className="Formulario">
                  <h4> País </h4>
                  <Field name="pais" as="select">
                    <option value="">Seleccione un país</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Mexico">México</option>
                    <option value="España">España</option>
                    <option valu="Italia">Italia</option>
                  </Field>
                </div>
                <div>
                  <label>
                    <Field name="mensaje" as="textarea" placeholder="Mensaje" />
                  </label>
                </div>

                <button type="submit">Enviar</button>
              </>
            )}
            {formularioEnviado && (
              <div
                style={{
                  margin: 1,
                  padding: 5,
                  color: "green",
                  backgroundColor: "lightblue",
                }}
              >
                <h5>Formulario enviado exitosamente</h5>
                <h4>Te damos la bienvenida!</h4>
                <h2>
                  {values.nombre} {values.apellido}
                </h2>
                <h4>{values.correo}</h4>
                <h2>{values.pais}</h2>
                <h4>{values.sexo}</h4>
                <h2>{values.mensaje}</h2>
              </div>
            )}
          </Form>
        )}
      </Formik>
      
    </div>
  );
};

export default Contacto;
