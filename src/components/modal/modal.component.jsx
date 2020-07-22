import React, { Fragment } from "react";
import Modal from "react-modal";
import './modal.component.styles.scss'

Modal.setAppElement("#root");
function ShowModal({ modalIsOpen, closeModal, data }) {
  const {
    productName,
    src,
    src2,
    description,
    continent,
    prices
  } = data;

  const customStyles = {
    content : {
      overflow: 'hidden',
      width: '95vw'
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className={"offers-item"}>
            <h3>
            <span>{"⭐"}{productName}</span>
          </h3>
          <button onClick={closeModal}>Close</button>
            <div className="img-container">
              <div className="profile-img">
                <img src={src} alt={productName} />
              </div>
            </div>
            <p>
              <ion-icon name="navigate-outline"></ion-icon>: &nbsp;
              {continent}
            </p>
            <p>
              <ion-icon name="cash-outline"></ion-icon>: &nbsp; {prices}
            </p>
            <p className="description">{description}</p>
        </div>
      </Modal>
    </div>
  );
}

//to be fixed
// {src2 ? (
//   <div className="gallery-container">
//     {src2.map((element) => {
//       return <img src={element} alt={productName} />;
//     })}
//   </div>
// ) : null}

export default ShowModal;
