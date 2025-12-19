import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "../Items/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

function ItemDetail({ producto }) {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const onAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAdded(true);
  };

  const { nombre, imagen, precio, rating, reviews, stock = 0 } = producto;

  return (
    <div className="detail-card">
      <img src={imagen} alt={nombre} className="detail-img" />

      <div className="detail-info">
        <h2>{nombre}</h2>
        <p className="detail-price">${precio.toLocaleString()}</p>
        <p>⭐ {rating} ({reviews})</p>
        <p className="detail-stock">Stock disponible: {stock}</p>

        {!added ? (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        ) : (
          <Link to="/cart" className="primary-btn">
            Ir al carrito
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
