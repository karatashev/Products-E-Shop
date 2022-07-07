import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <h1 className="logo">DecShop</h1>
      <ul className="menu">
        <li className="menu-item">
          <NavLink className="menu-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink className="menu-link" to="/products">
            Products
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink className="menu-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
