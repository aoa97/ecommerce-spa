import "./styles.scss";
import IconButton from "../IconButton";

const Modal = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-tittle">Title</h4>
          <IconButton name="x" onClick={onClose} />
        </div>
        <div className="modal-body">This is modal content</div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
