import React from "react";
import Modal from "react-modal";
import "./modal.component.styles.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

Modal.setAppElement("#root");
function ShowModal({ modalIsOpen, closeModal, addWishList, data }) {
  const {
    id,
    productName,
    cover,
    extraImgs,
    description,
    continent,
    prices,
  } = data;

  const customStyles = {
    content: {
      overflow: "hidden",
      width: "60vw",
      marginLeft: "2rem",
      borderRadius: "30px",
    },
  };

    const getConfigurableProps = {
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: false,
    showThumbs: true,
    useKeyboardArrows: true,
    autoPlay: false,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: true,
    thumbWidth: 200,
    selectedItem: 0,
    interval: 60000,
    transitionTime: 400,
    swipeScrollTolerance: 5,
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Offers Modal"
        style={customStyles}
      >
        <div className="offers-item">
          <h3>
            <span>
              {"⭐"}
              {productName}
              <button onClick={closeModal}>X Close</button>
              <button onClick={() => addWishList(id)}>+ Add Wish List</button>
            </span>
          </h3>
          
          <Carousel {...getConfigurableProps}>
              {extraImgs ? [cover, ...extraImgs].map((img) => (
                <div>
                  <img src={img} alt={productName}/>
                </div>
              )) : null}
          </Carousel>

          <div className="exp-infos">
            <span>
              <ion-icon name="navigate-outline"></ion-icon>:{continent}
            </span>
            <span>
              <ion-icon name="cash-outline"></ion-icon>:{prices}
            </span>
          </div>
          <p className="description">{description}</p>
        </div>
      </Modal>
    </div>
  );
}

//to be fixed

export default ShowModal;