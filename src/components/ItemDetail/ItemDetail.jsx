import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  return (
    <div className="item-detail">
      {/* Imagen */}
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="item-image"
      />

      {/* Info */}
      <div className="item-info">
        <h2>{producto.nombre}</h2>

        <p className="category">
          Categoría: <span>{producto.categoria}</span>
        </p>

        <div className="rating">⭐⭐⭐⭐☆</div>
        <p className="reviews">(128 reseñas)</p>

        <p className="price">${producto.precio.toLocaleString()}</p>

        <p className="description">
          Producto premium con excelente calidad.  
          Ideal para quienes buscan rendimiento y durabilidad.
        </p>

        <button className="add-btn">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
