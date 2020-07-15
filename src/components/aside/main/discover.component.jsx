import React, { useState } from "react";
import ExperienceItem from "./experiences/experience.item.component";
import { useSelector } from "react-redux";

import handleOfferSearch from "../../offers/handleOfferSearch";

const Main = () => {
  
  //obj to return for no match
  const noOfferMatch = [
    {
      id: 404,
      description: "Try one more time",
      photo: "../public/img/404.jpg",
      country: "Neverland",
    },
  ];

  //just a workarround to work..
  const [startIndex, setStartIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(2);

  //1. We have to select our full data from the state
  const offersFullData = useSelector((state) => state.destinations);

  //2. Check which input the user passed..
  const searchInput = useSelector((state) => state.searchInput);

  const filteredSearch = handleOfferSearch(
    searchInput,
    noOfferMatch,
    offersFullData
  );


  const slicedResults = filteredSearch.slice(startIndex, finalIndex);

  const handlePage = () => {
    if (finalIndex >= offersFullData.length) {
      setStartIndex(0);
      setFinalIndex(2);
    }
    const start = startIndex + 1;
    const final = finalIndex + 1;
    setStartIndex(start);
    setFinalIndex(final);
  };

  return (
    <div className="aside-main">
      <h1>Discover</h1>

      <div className="aside-main__carrousel">
        {slicedResults.map(({ ...item }) => (
          <ExperienceItem {...item} />
        ))}
      </div>
      <div className="pagination">
        <ion-icon name="chevron-back-outline" onClick={handlePage}></ion-icon>
        <ion-icon
          name="chevron-forward-outline"
          onClick={handlePage}
        ></ion-icon>
      </div>
    </div>
  );
};

export default Main;
