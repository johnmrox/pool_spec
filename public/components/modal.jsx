class Modal extends React.Component {
  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if (this.props.isOpen === false) {
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
          {this.props.children}
        </div>
        {!this.props.noBackdrop &&
          <div className="modal-backdrop" style={backdropStyle} onClick={e => this.close(e)} />}
      </div>
    );
  }
}

window.Modal = Modal;
