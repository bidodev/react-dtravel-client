import React from "react";

import Intro from "./components/intro/intro.component";
import Aside from "./components/aside/aside.component";
import OffersEndList from './components/offers/OffersEndList.component';

const App = () => (
  <div className="App">
    <Intro />
    <Aside />
    {/*temporal for tests*/}
    <OffersEndList input={"tropcal eas"}/>
  </div>
);

export default App;
