import Logo from "../assets/logo .png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
        <span>shopmate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart">
        <span>Cart:2</span>
      </Link>
    </header>
  );
};
