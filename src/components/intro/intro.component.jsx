import React from "react";

import OfferEndList from "./OfferEndList.component";
import Landing from "./landing.component";

import { Route, Switch } from 'react-router-dom';


function About() {
  return (
      <div className="about">
        About Component
      </div>
  );
}

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
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </div>
  );
};
export default Intro;



//  {/* Page change */}
//       <div className="pages">
//         {/* <MainTitle /> */}
//         {/* <OfferEndList input={null} /> */}
//       </div>