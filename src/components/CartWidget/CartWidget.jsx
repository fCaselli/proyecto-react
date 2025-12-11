import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CartWidget.css";

function CartWidget() {
  const { cartQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      {cartQuantity() > 0 && (
        <span className="cart-count">{cartQuantity()}</span>
      )}
    </Link>
  );
}

export default CartWidget;
