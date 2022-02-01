import { Box, Button, TextField } from "@mui/material";

const BuyForm = ({ getBuy, handleInputChange, dataForm }) => {
  return (
    <div>
      <Box
        margin="30px"
        component="form"
        onSubmit={getBuy}
        sx={{
          "& .MuiTextField-root": { mt: 10, m: 1, width: "40ch" },
        }}
        autoComplete="off"
      >
        <div>
          <TextField
            type="text"
            name="name"
            helperText="Por favor ingrese su Nombre"
            label="Nombre"
            size="small"
            color="success"
            focused
            onChange={handleInputChange}
            value={dataForm.name}
          />
          <TextField
            type="text"
            name="lastName"
            helperText="Por favor ingrese su Apellido"
            label="Apellido"
            size="small"
            color="secondary"
            focused
            onChange={handleInputChange}
            value={dataForm.lastName}
          />
          <TextField
            type="text"
            name="phone"
            helperText="Por favor ingrese su Teléfono"
            label="Teléfono"
            size="small"
            color="error"
            focused
            onChange={handleInputChange}
            value={dataForm.phone}
          />
          <TextField
            type="email"
            name="email"
            helperText="Por favor ingrese su eMail"
            label="eMail"
            size="small"
            color="warning"
            focused
            onChange={handleInputChange}
            value={dataForm.email}
          />
          <TextField
            type="email"
            name="email"
            helperText="Por favor ingrese su eMail"
            label="eMail"
            size="small"
            color="warning"
            focused
            onChange={handleInputChange}
            value={dataForm.email}
          />
          <hr />
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            Generar orden de compra
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default BuyForm;

/*

<div className="nucoTeamContainer">
                        <h5 className="titleComponent">Contacto</h5>
                        <Formik
                          //propiedades de valores iniciales
                          initialValues={{
                            name: "",
                            lastName: "",
                            phone: "",
                            email: "",
                            country: "",
                            message: "",
                          }}
                          //función que se ejecuta cuando el formulario es enviado
                          onSubmit={(values, { resetForm }) => {
                            console.log("Formulario Enviado exitosamente!");
                            //setSubmittedForm(true);
                            // resetForm();
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
                                    <label htmlFor="phone">Teléfono</label>
                                    <Field
                                      type="text"
                                      name="phone"
                                      placeholder="Teléfono"
                                      id="phone"
                                    />
                                    <ErrorMessage
                                      name="phone"
                                      component={() => (
                                        <div className="error">{errors.phone}</div>
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
                                      <Field name="message" as="textarea" placeholder="Mensaje" />
                                    </label>
                                  </div>

                                  <button type="submit">Enviar</button>
                                </>
                              )}
                              {submittedForm && (
                                <div >
                                  <h5>Formulario enviado exitosamente</h5>
                                  <h2>{values.name} {values.lastName}</h2>
                                   <p>Correo registrado</p> 
                                  <h4>{values.email}</h4>
                                   <p>Mensaje recibido: </p> 
                                  <h2>{values.message}</h2>
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
*/
