import React from "react";
import offersData from "../../data.json";

import OfferEndList from './OfferEndList';
import { MainTitle } from "./MainTitle.component";

const Intro = () => {
  return (
    <div className="intro">
      {/* Page change */}
      <div className="pages">
        <MainTitle />
         <OfferEndList offersArr = {offersData}/>
        </div>
      </div>
  );
};
export default Intro;
