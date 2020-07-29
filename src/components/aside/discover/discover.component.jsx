import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./discover.component.styles.scss";

import handleOfferSearch from "../../../helpers/filter.offers";
import ShowModal from "../../modal/offer.component";
import Slider from "./slider.jsx"

const Discover = () => {
  const [item, updateItem] = useState("places");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});

  //1. We have to select our full data from the state
  const fullData = useSelector(({ data }) => data);

  //2. Check which input the user passed..
  const searchInput = useSelector((state) => state.searchInput);


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
        return (<Slider data={filteredSearch(fullData.experiences)} openModal={openModal} />)
      case "places":
        return (<Slider data={filteredSearch(fullData.destinations)} openModal={openModal} />)
      case "housings":
        return (<Slider data={filteredSearch(fullData.housings)} openModal={openModal} />)
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
      <HandleNav />
      {/* <div className="pagination">
        <ion-icon name="chevron-back-outline" onClick={previousCard}></ion-icon>
        <ion-icon name="chevron-forward-outline" onClick={nextCard}></ion-icon>
      </div> */}
      
    </div>
  );
};

export default Discover;
