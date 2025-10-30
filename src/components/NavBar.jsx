import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <h1 className="navbar__brand">MiTienda</h1>
      </div>

      <nav className="navbar__center">
        <a href="#" className="navbar__link">Inicio</a>
        <a href="#" className="navbar__link">Productos</a>
        <a href="#" className="navbar__link">Contacto</a>
      </nav>

      <div className="navbar__right">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
