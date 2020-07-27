import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./discover.component.styles.scss";

import handleOfferSearch from "../../../helpers/filter.offers";
import ShowModal from "../../modal/offer.component";
import ExperienceItem from "./experiences/experience.item.component";

const Discover = () => {

  const [startIndex, setStartIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(1);

  //1. We have to select our full data from the state
  const offersFullData = useSelector(({ data }) => data.destinations);


  //2. Check which input the user passed..
  const searchInput = useSelector((state) => state.searchInput);

  const filteredSearch = handleOfferSearch(
    searchInput,
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

  /**
   * 1. This function set the status of the Modal to Open.
   * 2. It updates the local state with the Data to render the modal.
   * 3. It checks if the item is on the Favorites and pass (false or true)
   */
  const openModal = (props) => {
    /**
     * update localState with modal state/data
     */
    setIsOpen(true);
    setDataModal(props);
  };

  /**
   * This function update the local state and close the modal.
   */
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="aside-main">
      <h2>Discover</h2>
      <nav>
        <Link to="places">Places</Link>
        <Link to="experiences">Experiences</Link>
        <Link to="housings">Housings</Link>
      </nav>

      <ShowModal
        data={dataModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />

      <div className="aside-main__carrousel">
        {slicedResults.map(({ ...item }) => (
          <ExperienceItem key={item.id} {...item} openModal={openModal} />
        ))}
      </div>
      <div className="pagination">
        <ion-icon name="chevron-back-outline" onClick={previousCard}></ion-icon>
        <ion-icon name="chevron-forward-outline" onClick={nextCard}></ion-icon>
      </div>
    </div>
  );
};

export default Discover;
