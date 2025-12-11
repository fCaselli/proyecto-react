import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>El carrito está vacío</h2>
        <Link to="/" className="btn-back btn-primary">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Tu carrito</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <h3 className="cart-total">
        Total: ${totalPrice().toLocaleString()}
      </h3>

      <div className="cart-actions">
        <button className="btn-empty" onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout" className="btn-checkout">Finalizar compra</Link>
      </div>
    </div>
  );
}

export default Cart;
