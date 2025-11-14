import Item from "./Item";
import productos from "../../data/products.js";

const ItemList = ({ items }) => {
  return (
    <div className="ml-grid">
      {items.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          nombre={prod.nombre}
          precio={prod.precio}
          imagen={prod.imagen}
        />
      ))}
    </div>
  );
};

export default ItemList;
