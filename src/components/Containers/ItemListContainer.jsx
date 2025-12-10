import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../data/products";
import ItemList from "../Items/ItemList.jsx";
import "./ItemListContainer.css";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    const fetchFn = categoryId ? getProductsByCategory : getProducts;

    fetchFn(categoryId)
      .then((res) => setProductos(res))
      .catch(() => setError("Error al cargar productos"))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return <p className="status">Cargando productos...</p>;
  }

  if (error) {
    return <p className="status error">{error}</p>;
  }

  if (productos.length === 0) {
    return (
      <p className="status">
        No hay productos para esta categoría todavía.
      </p>
    );
  }

  return (
    <main className="list-page">
      <h2 className="list-title">Catálogo de productos</h2>
      <ItemList productos={productos} />
    </main>
  );
}

export default ItemListContainer;
