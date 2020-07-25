import React, { useEffect } from "react";
import axios from 'axios';

import Intro from "./components/intro/intro.component";
import Aside from "./components/aside/aside.component";

//import userDispatch to dispatch actions to our react-reduces
import { useDispatch } from "react-redux";

//import authtentication from firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

const App = () => {

  //Use dispatch, similar to connect when not using Hooks
  const dispatch = useDispatch();

  useEffect(() => {
    axios("https://my-json-server.typicode.com/bidodev/dtravel.api/db").then((res) => {
      dispatch({
        type: "UPDATE_DATA",
        payload: res.data,
      });
      console.log(res.data)
    })
  })

  //2. Similar to componentDidMount when using class components.
  useEffect(() => {
    //console.log("componentDidMount");
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          //Update our redux store with the newUser Object.
          dispatch({
            type: "LOGIN_USER",
            payload: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        dispatch({
          type: "LOGIN_USER",
          payload: userAuth, //it will be null
        });
      }
    });

    //componetWillUnmount
    return () => {
      //console.log("componetWillUnmount");
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Intro />
      <Aside />
    </div>
  );
};

export default App;
