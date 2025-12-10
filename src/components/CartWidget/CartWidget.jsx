import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import "./CartWidget.css";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cartwidget">
      <FaShoppingCart className="cartwidget__icon" />
      <span className="cartwidget__count">{totalQuantity}</span>
    </Link>
  );
}

export default CartWidget;
