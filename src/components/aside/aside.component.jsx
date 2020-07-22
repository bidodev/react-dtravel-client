import React from "react";
import Header from "./header/header.component";
import Discover from "./main/discover.component";
import Search from "./search/search.component";
import { useSelector } from "react-redux";
import AdventurousMood from "./adventurousmood/adventurousmood.component.jsx";

function Aside() {
  const LoginPage = () => {
    return (
      <div>
        <h1>Login Panel</h1>
      </div>
    );
  };

  const NotSignedIn = () => {
    return (
      <React.Fragment>
        <Search />
        <Discover />
        <AdventurousMood />
      </React.Fragment>
    );
  };

  const currentUser = useSelector(({ login }) => login.currentUser);
  return (
    <div className="aside">
      <Header />
      {currentUser ? <LoginPage /> : <NotSignedIn />}
    </div>
  );
}

export default Aside;
