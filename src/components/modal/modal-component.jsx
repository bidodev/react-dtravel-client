import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ShowModal({ modalIsOpen, openModal, closeModal }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}

export default ShowModal;
