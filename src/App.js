import React from "react";

import Intro from "./components/intro/intro.component";
import Aside from "./components/aside/aside.component";
import OffersEndList from './components/offers/OffersEndList.component';
import { useSelector } from "react-redux";

const App = () => {
  const input = useSelector((state) => state.searchInput);
  const quizInput = useSelector((state) => state.quizInput);
  return(
  
    <div className="App">
      <Intro />
      <Aside />
      {/*temporal for tests*/}
      <OffersEndList input={input} />
    </div>
  )
};

export default App;
