import Item from "./Item";
import { products } from "../../data/products.js"

const ItemList = () => {
  return (
    <div className="catalogo">
      {products.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
