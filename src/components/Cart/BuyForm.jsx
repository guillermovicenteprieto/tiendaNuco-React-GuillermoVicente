import { Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

const BuyForm = ({ getBuy, handleInputChange, dataForm }) => {
  const [submittedForm, setSubmittedForm] = useState(false);
  const Contact = () => {
    if (dataForm.message) {
      setSubmittedForm(true);
    }
  };
  return (
    <div className="itemDetailContainer">
      <div className="cartDetail">
        <h3>Complete todos sus datos por favor para Confirmar:</h3>
      </div>
      <Formik
        initialValues={dataForm}
        // setMessage={message}
        onSubmit={getBuy}
        validate={() => {
          let errors = {};
          if (!dataForm.name) {
            errors.name = "Por favor ingrese nombre de usuario";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(dataForm.name)) {
            errors.name =
              "El nombre sólo puede contener letras. Mínimo 3 caracteres";
          }
          if (!dataForm.lastName) {
            errors.lastName = "Por favor ingrese apellido de usuario";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(dataForm.lastName)) {
            errors.lastName =
              "El apellido sólo puede contener letras. Mínimo 3 caracteres";
          }
          if (!dataForm.phone) {
            errors.phone = "Por favor ingrese teléfono";
          } else if (!/^[0-9-]{7,14}$/.test(dataForm.phone)) {
            errors.phone =
              "El Teléfono sólo puede contener números y guiones, de 0 a 7 dígitos";
          }
          if (!dataForm.email) {
            errors.email = "Por favor ingrese un correo de usuario";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{4,40}$/i.test(
              dataForm.email
            )
          ) {
            errors.email =
              "El correo sólo puede contener letras, números, puntos, guión y guión bajo";
          }
          if (!dataForm.emailConfirm) {
            errors.emailConfirm = "Por favor reitere su correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{4,40}$/i.test(
              dataForm.emailConfirm
            )
          ) {
            errors.emailConfirm =
              "Debe ingresar el mismo correo que en el campo anterior";
          }
          return errors;
        }}
      >
        {({ errors }) => (
          <Form onSubmit={getBuy}>
            <div className="formBuy">
              <div>
                <label htmlFor="name">Nombre</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={dataForm.name}
                  onChange={handleInputChange}
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
                  value={dataForm.lastName}
                  onChange={handleInputChange}
                />
                <ErrorMessage
                  name="lastName"
                  component={() => (
                    <div className="error">{errors.lastName}</div>
                  )}
                />
              </div>
              <div>
                <label htmlFor="lastName">Teléfono</label>
                <Field
                  type="text"
                  name="phone"
                  placeholder="Teléfono"
                  value={dataForm.phone}
                  onChange={handleInputChange}
                />
                <ErrorMessage
                  name="phone"
                  component={() => <div className="error">{errors.phone}</div>}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="text"
                  name="email"
                  placeholder="Correo"
                  value={dataForm.email}
                  onChange={handleInputChange}
                />
                <ErrorMessage
                  name="email"
                  component={() => <div className="error">{errors.email}</div>}
                />
              </div>

              <div>
                <label htmlFor="emailConfirm">Confirme Email</label>
                <Field
                  type="text"
                  name="emailConfirm"
                  placeholder="Correo"
                  value={dataForm.emailConfirm}
                  onChange={handleInputChange}
                />
                <ErrorMessage
                  name="emailConfirm"
                  component={() => (
                    <div className="error">{errors.emailConfirm}</div>
                  )}
                />
              </div>
              <div>
                {!submittedForm && !getBuy && dataForm.message !== null && (
                  <div>
                    <label onSubmit={setSubmittedForm}>
                      <Field
                        name="message"
                        as="textarea"
                        placeholder="Deje aquí su mensaje y en breve nos contactaremos"
                        onChange={handleInputChange}
                        value={dataForm.message}
                      />
                    </label>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={Contact}
                    >
                      Enviar
                    </Button>
                    {/* )} */}
                  </div>
                )}
              </div>

              <div>
                {submittedForm && !getBuy && dataForm !== null && (
                  <div>
                    <label onSubmit={setSubmittedForm}>
                      <Field
                        name="message"
                        as="textarea"
                        placeholder="Deje aquí su mensaje y en breve nos contactaremos"
                        onChange={handleInputChange}
                        value={dataForm.message}
                      />
                    </label>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={Contact}
                    >
                      Enviar
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className="cartDetail">
              <div>
                <div>
                  {getBuy &&
                    dataForm.name &&
                    dataForm.lastName &&
                    dataForm.phone &&
                    dataForm.email === dataForm.emailConfirm && (
                      <Button type="submit" variant="contained" color="primary">
                        Generar orden de compra
                      </Button>
                    )}
                </div>
                <div>
                  {submittedForm && (
                    <div>
                      <p>Mensaje recibido exitosamente</p>
                      <h2>
                        {dataForm.name} {dataForm.lastName}
                      </h2>
                      <p>
                        En breves nos estaremos comunicando a vuestros medios
                        registrado:{" "}
                      </p>
                      <p>Correo:{dataForm.email}</p>
                      <p>Tel: {dataForm.phone}</p>
                      <p>Mensaje: <span><i>{dataForm.message}</i></span></p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BuyForm;
