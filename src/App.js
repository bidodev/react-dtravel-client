import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Intro from './components/intro/intro.component';
import Aside from './components/aside/aside.component';


const App = () => {
  return (
    <div className="App">
      <Intro />
      <Aside /> 
      {/* <Header />
      <Nav />
      <Search />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={LoginPage} />
      </Switch> */}
    </div>
  );
};

export default App;
