import { useLocation, Link, Navigate } from "react-router-dom";

const OrderConfirm = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return <Navigate to="/" />;
  }

  return (
    <div className="order-confirm">
      <h2>🎉 ¡Compra realizada con éxito!</h2>

      <p><strong>Nombre:</strong> {order.buyer.name}</p>
      <p><strong>Email:</strong> {order.buyer.email}</p>
      <p><strong>Teléfono:</strong> {order.buyer.phone}</p>

      <h3>Total pagado: ${order.total}</h3>

      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};

export default OrderConfirm;
