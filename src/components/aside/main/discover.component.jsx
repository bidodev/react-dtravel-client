import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="aside-main">
      <h1>Discover</h1>
      <nav className="aside-main__nav">
        <Link to="/experiences">Experiences</Link>
        <Link to="/places">Places</Link>
        <Link to="/houses">Housings</Link>
      </nav>
      <div className="aside-main__carrousel">Carrousel</div>
    </div>
  );
}

export default Main;
