import { useState } from 'react'

function ItemCount({ stock, inicial }) {
  const [cantidad, setCantidad] = useState(inicial)

  const sumar = () => cantidad < stock && setCantidad(cantidad + 1)
  const restar = () => cantidad > 1 && setCantidad(cantidad - 1)

  return (
    <div className="item-count">
      <div>
        <button onClick={restar}>-</button>
        <span>{cantidad}</span>
        <button onClick={sumar}>+</button>
      </div>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
