import "./Footer.css";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerClass">
      <Box sx={{ backgroundColor: "black" }} position="static">
        <address className="addressClass">
          <Link to="/">
            <img
              className="logoPrincipal"
              src="../nucologoOjos.png"
              title="NUCO arte ilustrado"
              alt="NUCO arte ilustrado"
            />
          </Link>
          <p>2022 NUCO®, arte ilustrado | Buenos Aires, Argentina</p>
        </address>
        <address className="addressClassCursada">
          <p>
            React Js Coder House | Camada-19795
            <br /> Profesor: Federico Osandón
            <br /> Tutor Coordinador: Eric Wajnrajch
            <br /> Revisiones: Francisco García Méndez
            <br /> Proyecto: Guillermo Vicente
          </p>
        </address>
      </Box>
    </footer>
  );
};
export default Footer;
