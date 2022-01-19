import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
//hoja de estilos
import "./NavBar.css";

//barra búsqueda
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

/* 
  PARA TRABAJAR:
  1. Crear una constante que contenga el array de objetos de productos en el carrito
  VER ESTO:
  <NavLink
    style={({ isActive }) => {
      return {
        display: "block",
        margin: "1rem 0",
        color: isActive ? "red" : ""
      };
    }}

  </NavLink>
*/

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Link to="/Formulario" className="navbarCuenta">
          {" "}
          LOG IN{" "}
        </Link>
        <Link to="/perfil" className="navbarCuenta">
          {" "}
          CUENTA{" "}
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          backgroundColor: "transparent",
          marginTop: .5,
          padding: .5,
        }}
      >
        {/* <Link to="/cart">
            <CartWidget />
          </Link> */}
        {/* <Link to="/nosotr@s" className="navbarLinks">
            {" "}
            NOSOTR@S{" "}
          </Link> */}

        <Link to="categorias/Cerámica" className="navbarLinksCat">
          {" "}
          Cerámica{" "}
        </Link>
        <Link to="categorias/Textil" className="navbarLinksCat">
          {" "}
          Textil{" "}
        </Link>
        <Link to="/tiendas" className="navbarLinks">
          {" "}
          TIENDAS{" "}
        </Link>
        <Link to="/contacto" className="navbarLinks">
          {" "}
          CONTACTO{" "}
        </Link>
      </div>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#15b610" }} position="static">
        <Toolbar>
          <Link to="/">
            <img
              className="logoPrincipal"
              src="../nucosolo.png"
              title="NUCO arte ilustrado"
              alt="NUCO arte ilustrado"
            />
          </Link>
          {/* 
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              color="primary"
              placeholder="Buscar producto…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}

          <Box sx={{ flexGrow: 1 }} />
          <Link to="/cart">
            <CartWidget />
          </Link>
          {/* este box me alinea el cart al medio del navbar*/}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            style={{ margin: 5 }}
          >
            <AccountCircle />
          </IconButton>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuItem>
              <Link
                to="/categorias/Textil"
                className="navbarLinksCat"
                // style={({ isActive }) => {
                //   return {
                //     backgroundColor: isActive ? "#e7cc2f" : "",
                //     padding: isActive ? "10px" : "",
                //     borderRadius: isActive ? "10px" : "",
                //     border: isActive ? "5px solid #0586e0" : "",
                //     fontSize: isActive ? "18px" : "",
                //   };
                // }}
              >
                {" "}
                TEXTIL{" "}
              </Link>

              <Link
                to="/categorias/Cerámica"
                className="navbarLinksCat"
                // style={({ isActive }) => {
                //   return {
                //     backgroundColor: isActive ? "#e7cc2f" : "",
                //     padding: isActive ? "10px" : "",
                //     borderRadius: isActive ? "10px" : "",
                //     border: isActive ? "5px solid #0586e0" : "",
                //     fontSize: isActive ? "18px" : "",
                //   };
                // }}
              >
                {" "}
                CERAMICA{" "}
              </Link>

              <Link
                to="/nosotr@s"
                className="navbarLinks"
                // style={({ isActive }) => {
                //   return {
                //     backgroundColor: isActive ? "#e7cc2f" : "",
                //     padding: isActive ? "10px" : "",
                //     borderRadius: isActive ? "10px" : "",
                //     border: isActive ? "5px solid #0586e0" : "",
                //     fontSize: isActive ? "15px" : "",
                //   };
                // }}
              >
                {" "}
                NOSOTR@S{" "}
              </Link>

              {/* <Link
                to="/productos"
                className="navbarLinks"
                // style={({ isActive }) => {
                //   return {
                //     backgroundColor: isActive ? "#e7cc2f" : "",
                //     padding: isActive ? "10px" : "",
                //     borderRadius: isActive ? "10px" : "",
                //     border: isActive ? "5px solid #0586e0" : "",
                //     fontSize: isActive ? "15px" : "",
                //   };
                // }}
              >
                {" "}
                PRODUCTOS{" "}
              </Link> */}
              <Link
                to="/tiendas"
                className="navbarLinks"
                // style={({ isActive }) => {
                //   return {
                //     backgroundColor: isActive ? "#e7cc2f" : "",
                //     padding: isActive ? "10px" : "",
                //     borderRadius: isActive ? "10px" : "",
                //     border: isActive ? "5px solid #0586e0" : "",
                //     fontSize: isActive ? "15px" : "",
                //   };
                // }}
              >
                {" "}
                TIENDAS{" "}
              </Link>

              <Link
                to="/contacto"
                className="navbarLinks"
                // style={({ isActive }) => {
                //   return {
                //     backgroundColor: isActive ? "#e7cc2f" : "",
                //     padding: isActive ? "10px" : "",
                //     borderRadius: isActive ? "10px" : "",
                //     border: isActive ? "5px solid #0586e0" : "",
                //     fontSize: isActive ? "15px" : "",
                //   };
                // }}
              >
                {" "}
                CONTACTO{" "}
              </Link>
            </MenuItem>
            {/* <IconButton
              size="large"
              edge="end"
              style={{ margin: 3, padding: 5, color: "white" }}
              variant="outlined" target="_blank" rel="noreferrer" href="https://www.facebook.com/nuco.arteilustrado/"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook warning" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="warning"
              style={{ margin: 3, padding: 5, color: "white" }}
              variant="outlined" target="_blank" rel="noreferrer" href="https://www.instagram.com/nuco.arteilustrado"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </IconButton> */}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
export default NavBar;
