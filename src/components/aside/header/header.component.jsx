import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="aside-header">
      <div className="aside-header__menu">Menu</div>
      <div className="aside-header__nav">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <img src="/img/sophie.jpg" alt="avatar"></img>
      </div>
    </div>
  );
}

export default Header;
