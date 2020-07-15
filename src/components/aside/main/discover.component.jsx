import React, { useState } from "react";
import ExperienceItem from "./experiences/experience.item.component";
import { useSelector } from "react-redux";

const Main = () => {
  //just a workarround to work..
  const [startIndex, setStartIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(2);

  //1. We have to select our full data from the state
  const offersFullData = useSelector((state) => state.destinations);

  //2. Check which input the user passed..
  const searchInput = useSelector((state) => state.searchInput);
  
 
  //THIS FUNCTION IS just a quick fix, the filteredData must return from the Alex's search function.
  const filteredData = offersFullData.filter((exp) =>
    exp.description.toLowerCase().includes(searchInput.input.toLowerCase())
  );

  //if filteredData return 0 results, we have to give someRandom suggestion to the user..

  const slicedResults = filteredData.slice(startIndex, finalIndex);

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
