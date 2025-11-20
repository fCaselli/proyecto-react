import ItemCount from "../Items/ItemCount";

function ItemDetail({ producto }) {
  const { nombre, imagen, precio, rating, reviews } = producto;

  return (
    <div className="detail-card">
      <img src={imagen} alt={nombre} className="detail-img" />

      <div className="detail-info">
        <h2>{nombre}</h2>
        <p className="detail-price">${precio.toLocaleString()}</p>

        <p>⭐ {rating} ({reviews} reviews)</p>

        {/* 🔥 Acá insertás el contador */}
        <ItemCount 
          stock={10} 
          onAdd={(cantidad) => console.log("Agregado:", cantidad)} 
        />
      </div>
    </div>
  );
}

export default ItemDetail;
