import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartItem.css";

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.imagen} alt={item.nombre} />

      <div className="cart-info">
        <h4>{item.nombre}</h4>
        <p>Cantidad: {item.quantity}</p>
        <p>Subtotal: ${(item.precio * item.quantity).toLocaleString()}</p>

        <button className="btn-remove" onClick={() => removeItem(item.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default CartItem;
