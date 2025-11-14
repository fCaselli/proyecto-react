import { useParams } from "react-router-dom";
import productos from "../../data/products.js";
import ItemList from "../Items/ItemList";
import "./ItemListContainer.css";

function ItemListContainer() {
  const { categoryId } = useParams();

  const productosFiltrados = categoryId
    ? productos.filter((p) => p.categoria === categoryId)
    : productos;

  return (
    <div className="ml-container">
      <h2 className="ml-titulo">Catálogo de productos</h2>

      <ItemList items={productosFiltrados} />
    </div>
  );
}

export default ItemListContainer;
