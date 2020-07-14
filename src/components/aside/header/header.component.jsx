import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="aside-header">
      <div className="aside-header__menu"></div>
      <div className="aside-header__nav">
        <NavLink
          to="/"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          Home
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <img src="/img/sophie.jpg" alt="avatar"></img>
      </div>
    </div>
  );
}

export default Header;
