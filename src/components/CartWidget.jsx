import React from "react";
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
