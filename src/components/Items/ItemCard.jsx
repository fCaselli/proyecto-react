import { Link } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ producto }) {
  const { id, nombre, precio, imagen, rating = 4, reviews = 0 } = producto;

  return (
    <article className="item-card">
      <div className="item-img-wrapper">
        <img src={imagen} alt={nombre} className="item-img" />
      </div>

      <div className="badge">Envío gratis</div>

      <h3 className="item-nombre">{nombre}</h3>

      <p className="item-precio">${precio.toLocaleString()}</p>

      <div className="item-rating">
        {"⭐".repeat(Math.round(rating))}{" "}
        <span className="reviews">({reviews})</span>
      </div>

      <Link to={`/item/${id}`} className="item-btn">
        Ver detalle
      </Link>
    </article>
  );
}

export default ItemCard;
