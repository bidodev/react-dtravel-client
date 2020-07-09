import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ExperienceItem from './experiences/experience.item.component'


const Carrousel = ({match}) => {
    console.log(match)

  const fakeDB = [{ id: 1, title: "Juca" }, {id: 2, title: "Jose" }, {id:3, title: "Pedro" }];

  return (
    <div>
      {fakeDB.map(({id, ...otherProps}) => (
          <ExperienceItem key={id}{...otherProps} />
      ))}
      {/* generate the list of experiences */}
    </div>
  );
};

const Main = () => {
  return (
    <div className="aside-main">
      <h1>Discover</h1>
      <nav className="aside-main__nav">
        <Link to="/experiences">Experiences</Link>
        <Link to="/places">Places</Link>
        <Link to="/housings">Housings</Link>
      </nav>

      <div className="aside-main__carrousel">
        <Switch>
          <Route exact path="/experiences" component={Carrousel} />
          <Route exact path="/places" component={Carrousel} />
          <Route exact path="/housings" component={Carrousel} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
