var Modal = ({ onClose, isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  let modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    background: '#fff'
  };

  let backdropStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    zIndex: '9998',
    background: 'rgba(0, 0, 0, 0.3)'
  };

  return (
    <div>
      <div className="modal-overlay" style={modalStyle}>
        {children}
      </div>
      <div className="modal-backdrop" style={backdropStyle} onClick={onClose} />
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

window.Modal = Modal;
