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
import { useCartContext } from "../../context/cartContext";
import "./NavBar.css";

//para incorporar barra búsqueda
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

const NavBar = () => {
  const { Carrito } = useCartContext();
  const cantidadCarrito = Carrito();

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
        <Link to="/formulario" className="navbarCuenta">
          {" "}
          LOG IN{" "}
        </Link>
        {/* <Link to="/perfil" className="navbarCuenta">
          {" "}
          CUENTA{" "}
        </Link> */}
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
          marginTop: 0.5,
          padding: 0.5,
        }}
      >
        <Link to="category/Cerámica" className="navbarLinksCat">
          {" "}
          Cerámica{" "}
        </Link>
        <Link to="category/Textil" className="navbarLinksCat">
          {" "}
          Textil{" "}
        </Link>
        <Link to="/tiendas" className="navbarLinks">
          {" "}
          TIENDAS{" "}
        </Link>
        <Link to="/nosotr@s" className="navbarLinks">
          {" "}
          NOSOTR@S{" "}
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

          {/* <Search>
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
            <IconButton
              size="large"
              aria-label="cantidadCarrito"
              color="inherit"
            >
              {cantidadCarrito ? <CartWidget /> : null}
            </IconButton>
          </Link>
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
              <Link to="/category/Textil" className="navbarLinksCat">
                TEXTIL
              </Link>

              <Link to="/category/Cerámica" className="navbarLinksCat">
                CERAMICA
              </Link>

              <Link to="/nosotr@s" className="navbarLinks">
                NOSOTR@S
              </Link>

              <Link to="/tiendas" className="navbarLinks">
                TIENDAS
              </Link>

              <Link to="/contacto" className="navbarLinks">
                CONTACTO
              </Link>
            </MenuItem>
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
