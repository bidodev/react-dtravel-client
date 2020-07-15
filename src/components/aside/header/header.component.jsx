import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="aside-header">
      <div className="aside-header__menu"></div>
      <div className="aside-header__nav">
        <NavLink
          to="/"
          activeStyle={{
            color: "#303030",
          }}
        >
          Home
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <div className="account-img">
          <img src="/img/sophie2.jpg" alt="avatar"></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
