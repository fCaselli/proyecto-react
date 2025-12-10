import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products.js";
import ItemDetail from "./ItemDetail.jsx";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams(); // MUY IMPORTANTE: coincide con App (/item/:id)

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    getProductById(id)
      .then((res) => setProducto(res))
      .catch(() => setError("Producto no encontrado"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="status">Cargando producto...</p>;
  }

  if (error || !producto) {
    return <p className="status error">{error || "Producto no encontrado"}</p>;
  }

  return (
    <div className="item-detail-container">
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;
