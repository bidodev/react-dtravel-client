import React, { useState } from "react";
import "./signin.component.styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../forms/input.component";
import CustomButton from "../custom-button/custom-button.component";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //update redux
  const handleLoginData = (event) => {
    event.preventDefault();
  };

  //update localState
  const handleInputValue = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "email":
        return setUserName(value);
      case "password":
        return setUserPassword(value);
      default:
    }
  };

  return (
    <div>
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
      </div>
      <form onSubmit={handleLoginData}>
        <FormInput
          name="email"
          type="email"
          value={userName}
          required
          label="email"
          handleInputValue={handleInputValue}
        />
        <FormInput
          name="password"
          type="password"
          value={userPassword}
          required
          label="password"
          handleInputValue={handleInputValue}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSingIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
