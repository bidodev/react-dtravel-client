import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Quiz from "./quiz/Quiz.component";
import Landing from "./landing/landing.component";
        
// About component, please move to it own file.
function About() {
  return (
      <div className="about">
        About Component
      </div>
  );
}

//Blog component please move to it own file.
function Blog() {
  return (
      <div className="blog">
        Hello Blog
      </div>
  );
}

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
       </Switch>
    </div>
  );
};
export default Intro;



