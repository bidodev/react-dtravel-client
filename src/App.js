import React, { useEffect } from "react";

import Intro from "./components/intro/intro.component";
import Aside from "./components/aside/aside.component";
import { useDispatch } from "react-redux";

import { auth } from "./firebase/firebase.utils.js";

const App = () => {
  //1. Use dispatch
  const dispatch = useDispatch();

  //2. Similar to componentDidMount
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //Update our redux store with the newUser Object.
      dispatch({ type: "LOGIN_USER", payload: user });
    });
  });

  return (
    <div className="App">
      <Intro />
      <Aside />
    </div>
  );
};

export default App;
