import { useEffect, useMemo, useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const normalizedStock = Number.isFinite(stock) ? Math.max(0, stock) : 0;

  const initialCount = useMemo(() => {
    if (normalizedStock === 0) return 0;
    const safeInitial = Number.isFinite(initial) ? Math.floor(initial) : 1;
    return Math.min(Math.max(safeInitial, 1), normalizedStock);
  }, [initial, normalizedStock]);

  const [count, setCount] = useState(initialCount);

  // si cambia el stock/initial (ej: cambia el producto), recalculamos el contador
  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const aumentar = () => {
    if (count < normalizedStock) setCount((c) => c + 1);
  };

  const disminuir = () => {
    if (count > 1) setCount((c) => c - 1);
  };

  const handleAdd = () => {
    if (normalizedStock === 0) return;
    if (count < 1 || count > normalizedStock) return;
    onAdd?.(count);
  };

  return (
    <div className="itemcount-container">
      <div className="itemcount-controls">
        <button
          className="itemcount-btn"
          onClick={disminuir}
          disabled={normalizedStock === 0 || count <= 1}
          aria-disabled={normalizedStock === 0 || count <= 1}
        >
          −
        </button>

        <span className="itemcount-display">{count}</span>

        <button
          className="itemcount-btn"
          onClick={aumentar}
          disabled={normalizedStock === 0 || count >= normalizedStock}
          aria-disabled={normalizedStock === 0 || count >= normalizedStock}
        >
          +
        </button>
      </div>

      <button
        className="itemcount-add"
        disabled={normalizedStock === 0 || count < 1}
        onClick={handleAdd}
      >
        {normalizedStock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
}

export default ItemCount;
