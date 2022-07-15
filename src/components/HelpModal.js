import React from "react";
import Modal from "react-modal";
import Word from "./Word";

Modal.setAppElement("#root");

function HelpModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="overlay"
        className="modal"
      >
        <div className="button close-help" onClick={closeModal}>
          x
        </div>
        <div className="flex home-text home-text-wrapper">HOW TO PLAY</div>
        <div className="home-subtext">
          <p>
            Guess the word in in a certain amount of tries (amount varies based
            on the length of the word){" "}
          </p>{" "}
          <p>Each guess must be a valid word.</p> Hit the enter button to
          submit.{" "}
          <p>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>{" "}
          <hr></hr>
          <b>Examples:</b>
          <div className="grid center">
            <Word word={"WORD"} guess={"BARD"} displayColors={true} />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default HelpModal;
