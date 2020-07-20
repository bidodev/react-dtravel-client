import React, { useEffect } from "react";

import Intro from "./components/intro/intro.component";
import Aside from "./components/aside/aside.component";

//import userDispatch to dispatch actions to our react-reduces
import { useDispatch } from "react-redux";

//import authtentication from firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

const App = () => {
  //Use dispatch, similar to connect when not using Hooks
  const dispatch = useDispatch();

  //2. Similar to componentDidMount when using class components.
  useEffect(() => {
    const unsubsribeFromAuth = null;
    auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user)
    
      //Update our redux store with the newUser Object.
      dispatch({ type: "LOGIN_USER", payload: user });
    });

    //componetWillUnmount
    return () => {
      unsubsribeFromAuth();
    };
  });

  return (
    <div className="App">
      <Intro />
      <Aside />
    </div>
  );
};

export default App;
