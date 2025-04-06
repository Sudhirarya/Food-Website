import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Add your CSS here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-logo">
          MyApp
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipe" className="nav-link" activeClassName="active">
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
