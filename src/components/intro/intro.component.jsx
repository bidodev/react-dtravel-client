import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import MainTitle from "./mainTitle/MainTitle.component";
import Quiz from "./quiz/Quiz.component";

const Intro = () => {
  return (
    <div className="intro">  
      {/* Page change */}
      <div className="pages">
        <Switch>
          <Route exact path="/">
            <MainTitle />
         </Route>
         <Route exact path="/quiz">
              <Quiz />
        </Route>
      </Switch>
        </div>
      </div>
  );
};
export default Intro;
