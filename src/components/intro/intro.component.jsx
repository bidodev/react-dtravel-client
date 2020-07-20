import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./landing/landing.component";
import About from "./about/about.component";
import Blog from "./blog/blog.component";
import Quiz from "./quiz/Quiz.component";

//pages
import Login from "../../pages/login/login.component";

// About Intro Component
// Intro is one of the main component along aside.
// While ASIDE behaves as a navbar INTRO switch componenets inside on demanad.

//The intro CSS Class control the size / border and fallback background of the container only.

//The Main Tittle, About, Blog are dynamic componenets, they will switch inside of the INTRO Component.
const Intro = () => {

  return (
    <div className="intro">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  )
};
  
export default Intro;
