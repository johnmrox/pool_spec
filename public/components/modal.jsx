var Modal = ({ onClose, isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div className="modal-overlay">
        {children}
      </div>
      <div className="modal-backdrop" onClick={onClose} />
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

window.Modal = Modal;
