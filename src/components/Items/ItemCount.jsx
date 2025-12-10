import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const aumentar = () => {
    if (count < stock) setCount(count + 1);
  };

  const disminuir = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="itemcount-container">
      <div className="itemcount-controls">
        <button className="itemcount-btn" onClick={disminuir}>
          −
        </button>

        <span className="itemcount-display">{count}</span>

        <button className="itemcount-btn" onClick={aumentar}>
          +
        </button>
      </div>

      <button
        className="itemcount-add"
        disabled={stock === 0}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
