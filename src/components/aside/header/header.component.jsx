import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="aside-header">
      <div className="aside-header__menu">Menu</div>
      <ul>
        <Link to="/discover">Discover</Link>
        <Link to="/about">About</Link>
        <li>user_img</li>
      </ul>
    </div>
  );
}

export default Header;
