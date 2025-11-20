import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../data/products";
import ItemCard from "../Items/ItemCard";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    getProductos()
      .then((res) => {
        if (categoryId) {
          setItems(res.filter((p) => p.categoria === categoryId));
        } else {
          setItems(res);
        }
      })
      .catch(() => setError("Error al cargar los productos."))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <h2 className="loading">Cargando productos...</h2>;
  if (error) return <h2 className="error">{error}</h2>;

  return (
    <div className="ml-container">
      <h2 className="ml-titulo">Catálogo de productos</h2>

      <div className="ml-grid">
        {items.map((prod) => (
          <ItemCard key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
