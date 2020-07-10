import React from "react";

import OfferEndList from './OfferEndList.component';
import MainTitle from "./MainTitle.component";

const Intro = () => {
  return (
    <div className="intro">
      {/* Page change */}
      <div className="pages">
        <MainTitle />
         <OfferEndList input={null}/>
        </div>
      </div>
  );
};
export default Intro;
