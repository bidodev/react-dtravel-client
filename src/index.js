import React from "react";
import ReactDOM from "react-dom";

//redux imports
import { Provider } from "react-redux";
import reduxStore from "./redux/store";

//react router dom
import { BrowserRouter as Router } from "react-router-dom";

import './scss/main.scss'
import App from "./App";

ReactDOM.render(
  <Provider store={reduxStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);