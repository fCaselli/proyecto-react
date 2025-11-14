import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, imagen }) => {
  return (
    <div className="ml-card">
      <img src={imagen} alt={nombre} className="ml-img" />

      <div className="ml-badge">Envío gratis</div>

      <h3 className="ml-nombre">{nombre}</h3>

      <p className="ml-precio">${precio.toLocaleString()}</p>

      <div className="ml-rating">⭐⭐⭐⭐☆ (128)</div>

      <Link to={`/item/${id}`} className="ml-btn">
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
