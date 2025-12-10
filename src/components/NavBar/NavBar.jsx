import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          Mi Tienda
        </Link>

        {/* Links */}
        <div className="nav-links">
          <NavLink
            to="/categoria/ropa"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Ropa
          </NavLink>

          <NavLink
            to="/categoria/calzado"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Calzado
          </NavLink>

          <NavLink
            to="/categoria/accesorios"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Accesorios
          </NavLink>
        </div>

        {/* carrito a la derecha */}
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
