import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./discover.component.styles.scss";

import handleOfferSearch from "../../../helpers/filter.offers";
import ShowModal from "../../modal/offer.component";
import ExperienceItem from "./experiences/experience.item.component";

const Discover = () => {
  const [item, updateItem] = useState("places");
 
   //1. We have to select our full data from the state
   const fullData = useSelector(({ data }) => data);

  //2. Check which input the user passed..
  const searchInput = useSelector((state) => state.searchInput);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [lastIndex, setLastIndex] = useState(2)

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

  const HandleNav = (current) => {
    const filteredSearch = (switchData) => {
    return handleOfferSearch(
        searchInput,
        switchData
      );
    } 
    switch (item) {
      case "experiences":
        return (
          filteredSearch(fullData.experiences).filter((item, index) => index < lastIndex).map(({ ...item }) => (
            <ExperienceItem key={item.id} {...item} openModal={openModal} />
          ))
        )
      case "places":
        return (
          filteredSearch(fullData.destinations).filter((item, index) => index < lastIndex).map(({ ...item }) => (
            <ExperienceItem key={item.id} {...item} openModal={openModal} />
          ))
        )
      case "housings":
        return (
          filteredSearch(fullData.housings).map(({ ...item }) => (
            <ExperienceItem key={item.id} {...item} openModal={openModal} />
          ))
        )
      default:
        return false;
    }
  }

  return (
    <div className="aside-main">
      <h2>Discover</h2>
      <nav className="aside-main-nav" onClick={(event) => updateItem(event.target.value)}>
        <button value="places">Places</button>
        <button value="experiences">Experiences</button>
        <button value="housings">Housings</button>
      </nav>

      <ShowModal
        data={dataModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />

      <div className="aside-main__carrousel">
        <HandleNav />
      </div>
    </div>
  );
};

export default Discover;