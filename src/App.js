import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

const Intro = () => (<div className="intro">Hello Intro</div>)
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
