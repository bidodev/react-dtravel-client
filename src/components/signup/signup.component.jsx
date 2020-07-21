import React, { useState } from "react";
import "./signup.styles.component.scss";

import FormInput from "../forms/input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userPassword !== confirmPassword) {
      console.log("Passwords dont match...");
    }
  };

  //update localState
  const handleInputValue = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "displayName":
        return setDisplayName(value);
      case "email":
        return setUserEmail(value);
      case "password":
        return setUserPassword(value);
      case "confirmPassword":
        return setConfirmPassword(value);
      default:
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          handleInputValue={handleInputValue}
        />
        <FormInput
          type="email"
          name="email"
          value={userEmail}
          label="Email"
          handleInputValue={handleInputValue}
        />
        <FormInput
          type="password"
          name="password"
          value={userPassword}
          label="Password"
          handleInputValue={handleInputValue}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          handleInputValue={handleInputValue}
              />
                      <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSingIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
