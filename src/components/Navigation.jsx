import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <p>/</p>
        <li>
          <NavLink to="favoritos" className="link">
            Favoritos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;