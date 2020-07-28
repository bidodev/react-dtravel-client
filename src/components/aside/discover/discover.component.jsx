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
  const [item, updateItem] = useState("experiences");

  //1. We have to select our full data from the state
  const fullData = useSelector(({ data }) => data);

  //2. Check which input the user passed..
  const searchInput = useSelector((state) => state.searchInput);

  // let slicedResults = [];
  // slicedResults = [...filteredSearch].filter((elem, index) => {
  //   if (filteredSearch.length === 1) {
  //     return index === 0;
  //   }
  //   return index >= startIndex && index <= finalIndex;
  // });

  // const previousCard = () => {
  //   if (startIndex === 0) {
  //     return;
  //   }
  //   setStartIndex(startIndex - 1);
  //   setFinalIndex(finalIndex - 1);
  // };

  // const nextCard = () => {
  //   if (finalIndex === filteredSearch.length - 2) {
  //     return;
  //   }
  //   setStartIndex(startIndex + 1);
  //   setFinalIndex(finalIndex + 1);
  // };

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

  const HandleNav = () => {
    const filteredSearch = (switchData) => {
    return handleOfferSearch(
        searchInput,
        switchData
      );
    } 
    switch (item) {
      case "experiences":
        return (filteredSearch(fullData.experiences).filter((item,index) => index < 2).map(({ ...item }) => (
          <ExperienceItem key={item.id} {...item} openModal={openModal} />
        )))
      case "places":
        return (filteredSearch(fullData.destinations).filter((item,index) => index < 2).map(({ ...item }) => (
          <ExperienceItem key={item.id} {...item} openModal={openModal} />
        )))
      case "housings":
        return (filteredSearch(fullData.housings).filter((item,index) => index < 2).map(({ ...item }) => (
          <ExperienceItem key={item.id} {...item} openModal={openModal} />
        )))
      default:
        return false;
    }
 
  }
  return (
    <div className="aside-main">
      <h2>Discover</h2>
      <nav onClick={(event) => updateItem(event.target.value)}>
        <button value="experiences">Experiences</button>
        <button value="places">Places</button>
        <button value="housings">Housings</button>
      </nav>

      <ShowModal
        data={dataModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
      {/* <div className="pagination">
        <ion-icon name="chevron-back-outline" onClick={previousCard}></ion-icon>
        <ion-icon name="chevron-forward-outline" onClick={nextCard}></ion-icon>
      </div> */}
      <div className="aside-main__carrousel">
        <HandleNav/>
      </div>
    </div>
  );
};

export default Discover;
