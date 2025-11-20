import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductoById } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    getProductoById(itemId)
      .then((res) => {
        if (!res) {
          setError("Producto no encontrado.");
        } else {
          setProducto(res);
        }
      })
      .catch(() => setError("Error al cargar el producto."))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <h2 className="loading">Cargando producto...</h2>;
  if (error) return <h2 className="error">{error}</h2>;

  return (
    <div className="item-detail-container">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
