import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Mi Tienda</Link>

        <div className="nav-links">
          <NavLink to="/categoria/ropa" className="nav-item">Ropa</NavLink>
          <NavLink to="/categoria/calzado" className="nav-item">Calzado</NavLink>
          <NavLink to="/categoria/accesorios" className="nav-item">Accesorios</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
