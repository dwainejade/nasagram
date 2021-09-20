import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <ul>
        <li className="navbar">
          <NavLink
            to="/"
            exact
            activeStyle={{
              // fontWeight: "bold",
              borderBottom: "2px solid salmon"
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            activeStyle={{
              // fontWeight: "bold",
              borderBottom: "2px solid salmon"
            }}
          >
            Favorites
          </NavLink>
          <NavLink
            to="/search"
            activeStyle={{
              // fontWeight: "bold",
              borderBottom: "2px solid salmon"
            }}
          >
            Search
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
