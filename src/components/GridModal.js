import React from "react";
import Modal from "react-modal";
import Word from "./Word";

Modal.setAppElement("#root");

function GridModal({ isOpen, setIsOpen, children }) {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Grid Modal"
        overlayClassName="overlay"
        className="modal"
      >
        <div className="button close-help" onClick={closeModal}>
          x
        </div>
        {children}
      </Modal>
    </div>
  );
}

export default GridModal;
