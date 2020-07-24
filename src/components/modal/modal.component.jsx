import React from "react";
import Modal from "react-modal";
import "./modal.component.styles.scss";

Modal.setAppElement("#root");
function ShowModal({ modalIsOpen, closeModal, addWishList, data }) {
  const {
    productName,
    src,
    additionalImages,
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
              <button onClick={addWishList}>+ Add Wish List</button>
            </span>
          </h3>

          <div className="img-container">
            <div className="profile-img">
              <img src={src} alt={productName} />
            </div>
            {additionalImages ? (
              <div className="gallery-container">
                {additionalImages.map((element) => (
                  <img src={element} alt={productName} />
                ))}
              </div>
            ) : null}
          </div>
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
