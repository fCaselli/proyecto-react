import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const { nombre, precio, categoria, imagen, rating, reviews } = producto;

  return (
    <div className="item-detail">
      <img src={imagen} alt={nombre} />

      <div className="item-info">
        <h2>{nombre}</h2>

        <p className="category">
          Categoría: <span>{categoria}</span>
        </p>

        <p className="rating">
          {"⭐".repeat(rating)} <span className="reviews">({reviews})</span>
        </p>

        <p className="price">${precio.toLocaleString()}</p>

        <p className="description">
          Un producto de excelente calidad. Materiales premium, diseño moderno y
          perfecto para uso diario.
        </p>

        <button className="add-btn">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
