import React from "react";
/*
  Uso react-icons para el ícono. Si no querés instalar, reemplazá <FaShoppingCart />
  por una <img src="..." alt="carrito" /> y quitá la dependencia.
*/
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = ({ count = 3 }) => {
  return (
    <div className="cart">
      <FaShoppingCart className="cart__icon" />
      <span className="cart__count">{count}</span>
    </div>
  );
};

export default CartWidget;
