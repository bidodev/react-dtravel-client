import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Intro from './components/intro.component';

const Aside = () => (<div className="aside">Hello Aside</div>)

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
