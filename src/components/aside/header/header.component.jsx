import React from "react";
import { NavLink } from "react-router-dom";
import './header.component.styles.scss'

const Header = () => {
  return (
    <nav className="aside-header">
      <ul className="aside-header__nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
