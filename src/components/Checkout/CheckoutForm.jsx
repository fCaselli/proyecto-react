import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./CheckoutForm.css";


function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Completá todos los datos");
      return;
    }

    // Acá después va Firestore.
    const fakeId = "ORD-" + Math.floor(Math.random() * 1000000);
    setOrderId(fakeId);
    clearCart();
  };

  if (cart.length === 0 && orderId) {
    return (
      <div className="checkout-page">
        <h2>¡Gracias por tu compra!</h2>
        <p>
          Tu número de orden es: <span>{orderId}</span>
        </p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <h2>No hay productos en el carrito</h2>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h3 className="checkout-total">
        Total a pagar: ${cart.reduce((acc, item) => acc + item.precio * item.quantity, 0).toLocaleString()}
      </h3>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
        />

        <button type="submit" className="primary-btn">
          Confirmar compra
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
