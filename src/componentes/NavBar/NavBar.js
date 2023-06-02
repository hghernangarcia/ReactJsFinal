import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { facartshopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/lemonslogo2.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <div className="container-all">
        <h1>Descubri los nuevos colores de nuestros tejidos</h1>{" "}
      </div>
      <div className="nav-container">
        {/* Botón de menú  */}
        {/*  <div className="menu-botton">
      <FontAwesomeIcon icon={faBars} size="lg" color="black"/>
      <span>Menu</span>
      </div> */}

        <header>
      {/*     <img src={Logo} className="nav-brand" /> */}
          <h1   className="nav-brand1"> Le Mons </h1>
        </header>

        {/* links de navegación */}
        <ul className="nav__link nav__link--menu">
          <li className="nav__items">
            <Link to={"/"}> INICIO</Link>
          </li>
          <li className="nav__items">
            <Link to={"/items"}> CATALOGO</Link>
          </li>
          <li className="nav__items">
            <Link to={"/category/otoño"}>OTOÑO</Link>
          </li>
          <li className="nav__items">
            <Link to={"/category/verano"}>VERANO</Link>
          </li>
          <li className="nav__items">
            <Link to={"/category/invierno"}> INVIERNO</Link>
          </li>

          <li className="nav__items">
            <Link to={"/category/primavera"}> PRIMAVERA</Link>
          </li>
        </ul>
        <CartWidget  />
     
      </div>
    </>
  );
};

export default NavBar;
