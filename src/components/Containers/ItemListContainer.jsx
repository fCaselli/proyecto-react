import { useParams } from "react-router-dom";
import productos from "../../data/products.js";
import "./ItemListContainer.css";

function ItemListContainer() {
  const { categoriaId } = useParams();

  const productosFiltrados = categoriaId
    ? productos.filter((p) => p.categoria === categoriaId)
    : productos;

  return (
    <div className="ml-container">
      <h2 className="ml-titulo">Catálogo de productos</h2>

      <div className="ml-grid">
        {productosFiltrados.map((prod) => (
          <div key={prod.id} className="ml-card">
            <img src={prod.imagen} alt={prod.nombre} className="ml-img" />

            <div className="ml-badge">Envío gratis</div>

            <h3 className="ml-nombre">{prod.nombre}</h3>

            <p className="ml-precio">${prod.precio.toLocaleString()}</p>

            <div className="ml-rating">⭐⭐⭐⭐☆ (128)</div>

            <button className="ml-btn">Ver detalle</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
