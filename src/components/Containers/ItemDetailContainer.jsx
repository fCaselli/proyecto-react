import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { productos } from "../../data/products";   // ← IMPORT CORRECTO
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    // Simulación de fetch (luego lo cambiamos al servicio real)
    const found = productos.find((p) => p.id === Number(itemId));

    if (!found) {
      setError("Producto no encontrado");
    } else {
      setProducto(found);
    }

    setLoading(false);
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
