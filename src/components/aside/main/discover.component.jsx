import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const ExperienceItem = ({ title }) => {
  return <h1>{title}</h1>;
};
const Experiences = () => {
  const fakeDB = [{ title: "Juca" }, { title: "Jose" }, { title: "Pedro" }];

  return (
    <div>
      {fakeDB.map((exp) => (
        <ExperienceItem {...exp} />
      ))}
      {/* generate the list of experiences */}
    </div>
  );
};
const Places = () => <div>Hello Places</div>;
const Housing = () => <div>Hello Housing</div>;

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
          <Route exact path="/experiences" component={Experiences} />
          <Route exact path="/places" component={Places} />
          <Route exact path="/housings" component={Housing} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
