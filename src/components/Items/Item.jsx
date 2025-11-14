import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, imagen }) => {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item
