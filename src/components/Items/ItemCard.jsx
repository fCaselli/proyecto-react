import { Link } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ producto }) {
  const { id, nombre, precio, imagen, rating = 4, reviews = 128 } = producto;

  return (
    <div className="item-card">
      
      {/* Imagen */}
      <div className="item-img-wrapper">
        <img src={imagen} alt={nombre} className="item-img" />
      </div>

      {/* Badge */}
      <div className="badge">Envío gratis</div>

      {/* Información */}
      <h3 className="item-nombre">{nombre}</h3>
      <p className="item-precio">${precio.toLocaleString()}</p>

      <div className="item-rating">
        {"⭐".repeat(rating)}{" "}
        <span className="reviews">({reviews})</span>
      </div>

      {/* Botón */}
      <Link to={`/item/${id}`} className="item-btn">
        Ver detalle
      </Link>

    </div>
  );
}

export default ItemCard;
