import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

function GridModal({ isOpen, setIsOpen, success, definition, word }) {
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
        <div className="home-text home-text-wrapper center">
          {success
            ? "Congratulations, you guessed the word correctly!"
            : "Unfortunately, you guessed the word incorrectly. Better luck next time!"}
          <br /> <br />
          The word was {word.toLowerCase()}
          <em>{definition ? `, defined as ${definition}` : ""}</em>
        </div>

        <div className="flex play-wrapper">
          <Link className="button play" role="button" to={`/`}>
            Play Again
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default GridModal;
