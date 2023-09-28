import "./Modal.css";

const Modal = ({ onSetModal }) => {
  return (
    <div className="modal-box">
      <div
        className="backdrop"
        onClick={() => {
          onSetModal(false);
        }} />
      <div className="modal-child">
        <h2>Error</h2>
        <p>The inputs must not be empty!</p>
        <button
          className="close-button"
          onClick={() => {
            onSetModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
