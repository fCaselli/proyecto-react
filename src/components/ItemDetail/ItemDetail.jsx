import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "../Items/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ producto }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const { nombre, imagen, precio, categoria, rating, reviews } = producto;

  const handleAdd = (cantidad) => {
    addItem(producto, cantidad);
    setAdded(true);
  };

  return (
    <div className="detail-card">
      <div className="detail-img-wrapper">
        <img src={imagen} alt={nombre} className="detail-img" />
      </div>

      <div className="detail-info">
        <p className="detail-category">
          Categoría: <span>{categoria}</span>
        </p>

        <h2 className="detail-name">{nombre}</h2>

        <p className="detail-price">${precio.toLocaleString()}</p>

        <p className="detail-rating">
          ⭐ {rating} <span>({reviews} reviews)</span>
        </p>

        <p className="detail-description">
          Producto pensado para tu día a día, con materiales de calidad y
          diseño urbano. Ideal para completar tu outfit y combinar con todo.
        </p>

        {!added ? (
          <ItemCount stock={10} initial={1} onAdd={handleAdd} />
        ) : (
          <div className="detail-actions">
            <Link to="/cart" className="primary-btn">
              Ir al carrito
            </Link>
            <Link to="/" className="secondary-btn">
              Seguir comprando
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
