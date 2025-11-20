import { useParams } from "react-router-dom";
import { productos } from "../../data/products";
import ItemCard from "../Items/ItemCard";
import "./ItemListContainer.css";

function ItemListContainer() {
  const { categoryId } = useParams();

  const productosFiltrados = categoryId
    ? productos.filter((p) => p.categoria === categoryId)
    : productos;

  return (
    <div className="ml-container">
      <h2 className="ml-titulo">Catálogo de productos</h2>

      <div className="ml-grid">
        {productosFiltrados.map((prod) => (
          <ItemCard key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
