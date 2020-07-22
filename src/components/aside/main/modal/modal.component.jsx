import React, {useState} from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

//Modal.setAppElement("#root")

const ShowModal=() =>{
  const [isOpen, setIsOpen] = useState(false) 

  return (
    <div>
      <button onClick={()=> setIsOpen(!isOpen)}>Open Modal</button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
        <h2>Modal Tittle</h2>
        <p>Modal Body</p>
        <button onClick={()=> setIsOpen(!isOpen)}>Close Modal</button>
      </Modal>

    </div>
  );
}

export default ShowModal;
