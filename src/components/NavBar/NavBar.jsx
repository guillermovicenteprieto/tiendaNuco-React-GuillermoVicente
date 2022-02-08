import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const NavBar = () => {
  const { cartQuantity } = useCartContext();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
    ></Menu>
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
      onClose={handleMobileMenuClose} >
      <div className="navbarResponsive ">
        <Link to="category/Cerámica" className="navbarLinksCat">
          {" "}
          Cerámica{" "}
        </Link>
        <Link to="category/Textil" className="navbarLinksCat">
          {" "}
          Textil{" "}
        </Link>
        <Link to="/stores" className="navbarLinks">
          {" "}
          TIENDAS{" "}
        </Link>
        <Link to="/nucoTeam" className="navbarLinks">
          {" "}
          NOSOTR@S{" "}
        </Link>
        <Link to="/contact" className="navbarLinks">
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
          <Typography>
            <i> arte ilustrado!</i>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Link to="/cart">
            <IconButton>{cartQuantity ? <CartWidget /> : null}</IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuItem>
              <Link to="/category/Textil" className="navbarLinksCat">
                TEXTIL
              </Link>
              <Link to="/category/Cerámica" className="navbarLinksCat">
                CERAMICA
              </Link>
              <Link to="/nucoTeam" className="navbarLinks">
                NOSOTR@S
              </Link>
              <Link to="/stores" className="navbarLinks">
                TIENDAS
              </Link>
              <Link to="/contact" className="navbarLinks">
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