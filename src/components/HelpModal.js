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
        contentLabel="Help Modal"
        overlayClassName="overlay"
        className="modal"
      >
        <div className="button close-help" onClick={closeModal}>
          x
        </div>
        <div className="flex home-text home-text-wrapper">HOW TO PLAY</div>
        <div>
          <p>
            Guess the word in in a certain amount of tries (amount varies based
            on the length of the word)
          </p>
          <p>Each guess must be a valid word.</p> Hit the enter button to
          submit.
          <p>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>
          <hr className="home-subtext"></hr>
          <div className="flex home-text home-text-wrapper">EXAMPLES</div>
          <div className="grid center">
            <div className="modal-grid-block">
              <Word word={"BORN"} guess={"DART"} displayColors={true} />
              The letter R is in the word and in the correct position.
            </div>
            <div className="modal-grid-block">
              <Word word={"TORB"} guess={"BREAK"} displayColors={true} />
              The letters B and R are in the word but aren't in their correct
              positions.
            </div>
            <div className="modal-grid-block">
              <Word word={"MMMMMMM"} guess={"DESTROY"} displayColors={true} />
              None of the letters are in the word nor are they in their correct
              positions.
            </div>
          </div>
          <hr className="home-subtext"></hr>
          You will get a random word to guess each time you start a new game.
        </div>
      </Modal>
    </div>
  );
}

export default HelpModal;
