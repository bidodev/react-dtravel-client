import React from "react";
import "./header.component.styles.scss";

import { NavLink} from "react-router-dom";

import { useSelector } from "react-redux";
import { auth } from "../../../firebase/firebase.utils";

const Header = () => {

  //load the currentUser propertie from the redux store.
  const currentUser = useSelector(({ login }) => login.currentUser);

  return (
    <nav className="aside-header">
      <ul className="aside-header__nav">
        <li>
          <NavLink to="/">Discover</NavLink>
        </li>
        <li>
          <NavLink to="/Discover">Blog</NavLink>
        </li>
        {currentUser ? (
          <div className="option-logged" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </ul>
    </nav>
  );
};

export default Header;
