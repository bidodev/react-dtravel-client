import React, { useState } from "react";
import ExperienceItem from "./experiences/experience.item.component";
import { useSelector } from "react-redux";

import handleOfferSearch from "../../offers/handleOfferSearch";

const Main = () => {

  //obj to return for no match
  const noOfferMatch = [
    {
      id: 404,
      productName: "Neverland",
      description: "Try one more time",
      src: "./img/404.jpg",
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

  const previousCard = () => {
    console.log("Previous Card")
  };

  const nextCard = () => {
    console.log("Next Card")
  };

  return (
    <div className="aside-main">
      <h1>Discover</h1>

      <div className="aside-main__carrousel">
        {filteredSearch.map(({ ...item }) => (
          <ExperienceItem {...item} />
        ))}
      </div>
      <div className="pagination">
        <ion-icon name="chevron-back-outline" onClick={previousCard}></ion-icon>
        <ion-icon
          name="chevron-forward-outline"
          onClick={nextCard}
        ></ion-icon>
      </div>
    </div>
  );
};

export default Main;
