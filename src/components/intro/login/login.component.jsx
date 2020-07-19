import React, { useState } from "react";
import "./login.component.styles.scss";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="main-title">
      <form>
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  );
}

export default Login;
