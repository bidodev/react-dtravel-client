import React, { useState } from "react";
import "./login.component.styles.scss";

import {signInWithGoogle} from '../../firebase/firebase.utils'

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //update redux
  const handleLoginData = (event) => {
    event.preventDefault();
  };

  //update localState
  const handleValues = (event) => {
    const inputValue = event.target.value;

    switch (event.target.id) {
      case "user":
        return setUserName(inputValue);
      case "password":
        return setUserPassword(inputValue);
      default:
    }
  };

  return (
    <div className="main-title">
      <form onSubmit={handleLoginData}>
        <input id="user" type="text" value={userName} onChange={handleValues} />
        <input
          id="password"
          type="text"
          value={userPassword}
          onChange={handleValues}
        />
        <button>Login</button>
        <button onClick={signInWithGoogle}>Sign In</button>

      </form>
    </div>
  );
};

export default Login;
