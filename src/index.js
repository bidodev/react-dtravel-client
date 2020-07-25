import React from "react";
import ReactDOM from "react-dom";

//redux imports
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

//react router dom
import { BrowserRouter as Router } from "react-router-dom";

import "./scss/main.scss";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);
