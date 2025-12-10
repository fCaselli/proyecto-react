import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="primary-btn">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Carrito de compras</h2>

      <div className="cart-list">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <p>
          Total: <span>${totalPrice.toLocaleString()}</span>
        </p>
        <div className="cart-actions">
          <button className="secondary-btn" onClick={clearCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout" className="primary-btn">
            Ir al checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
