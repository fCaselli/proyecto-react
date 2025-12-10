import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartItem.css";

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  const subtotal = item.precio * item.quantity;

  return (
    <div className="cartitem">
      <img src={item.imagen} alt={item.nombre} className="cartitem__img" />

      <div className="cartitem__info">
        <h3>{item.nombre}</h3>
        <p>Precio unitario: ${item.precio.toLocaleString()}</p>
        <p>Cantidad: {item.quantity}</p>
        <p className="cartitem__subtotal">
          Subtotal: ${subtotal.toLocaleString()}
        </p>
      </div>

      <button
        className="cartitem__remove"
        onClick={() => removeItem(item.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;
