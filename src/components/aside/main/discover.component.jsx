import React, { useState } from "react";
import ExperienceItem from "./experiences/experience.item.component";
import { useSelector } from "react-redux";

import handleOfferSearch from "../../offers/handleOfferSearch";
import ShowModal from "../../modal/modal.component";

const Main = () => {
  //obj to return for no match
  //obj to return for no match
  //just a workarround to work..

  const [startIndex, setStartIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(1);

  //1. We have to select our full data from the state
  const offersFullData = useSelector(({data}) => data.destinations);

  const noOfferMatch = [
    offersFullData.find((element) => element.id.toString() === "404"),
  ];

  //2. Check which input the user passed..
  const searchInput = useSelector((state) => state.searchInput);

  const filteredSearch = handleOfferSearch(
    searchInput,
    noOfferMatch,
    offersFullData
  );

  let slicedResults = [];
  slicedResults = [...filteredSearch].filter((elem, index) => {
    if (filteredSearch.length === 1) {
      return index === 0;
    }
    return index >= startIndex && index <= finalIndex;
  });

  const previousCard = () => {
    if (startIndex === 0) {
      return;
    }
    setStartIndex(startIndex - 1);
    setFinalIndex(finalIndex - 1);
  };

  const nextCard = () => {
    if (finalIndex === filteredSearch.length - 2) {
      return;
    }
    setStartIndex(startIndex + 1);
    setFinalIndex(finalIndex + 1);
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});

  function openModal(props) {
    setIsOpen(true);
    setDataModal(props)
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addWishList = (offerID) => {
    console.log("Hello", offerID)

  }

  return (
    <div className="aside-main">
      <h1>Discover</h1>
      
      <ShowModal
        data={dataModal}
        closeModal={closeModal}
        addWishList={addWishList}
        modalIsOpen={modalIsOpen}
      />

      <div className="aside-main__carrousel">
        {slicedResults.map(({ ...item }) => (
          <ExperienceItem key={item.id} {...item} openModal={openModal}/>
        ))}
      </div>
      <div className="pagination">
        <ion-icon name="chevron-back-outline" onClick={previousCard}></ion-icon>
        <ion-icon name="chevron-forward-outline" onClick={nextCard}></ion-icon>
      </div>
    </div>
  );
};

export default Main;
