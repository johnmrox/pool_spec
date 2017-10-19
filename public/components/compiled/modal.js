'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'close',
    value: function close(e) {
      e.preventDefault();

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.isOpen === false) {
        return null;
      }

      var modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        background: '#fff'
      };

      var backdropStyle = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.3)'
      };

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'modal-overlay', style: modalStyle },
          this.props.children
        ),
        !this.props.noBackdrop && React.createElement('div', { className: 'modal-backdrop', style: backdropStyle, onClick: function onClick(e) {
            return _this2.close(e);
          } })
      );
    }
  }]);

  return Modal;
}(React.Component);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

window.Modal = Modal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21vZGFsLmpzeCJdLCJuYW1lcyI6WyJNb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwib25DbG9zZSIsImlzT3BlbiIsIm1vZGFsU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwiYmFja2Ryb3BTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJub0JhY2tkcm9wIiwiY2xvc2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7Ozs7Ozs7OzswQkFDRUMsQyxFQUFHO0FBQ1BBLFFBQUVDLGNBQUY7O0FBRUEsVUFBSSxLQUFLQyxLQUFMLENBQVdDLE9BQWYsRUFBd0I7QUFDdEIsYUFBS0QsS0FBTCxDQUFXQyxPQUFYO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSSxLQUFLRCxLQUFMLENBQVdFLE1BQVgsS0FBc0IsS0FBMUIsRUFBaUM7QUFDL0IsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUMsYUFBYTtBQUNmQyxrQkFBVSxPQURLO0FBRWZDLGFBQUssS0FGVTtBQUdmQyxjQUFNLEtBSFM7QUFJZkMsbUJBQVcsdUJBSkk7QUFLZkMsZ0JBQVEsTUFMTztBQU1mQyxvQkFBWTtBQU5HLE9BQWpCOztBQVNBLFVBQUlDLGdCQUFnQjtBQUNsQk4sa0JBQVUsT0FEUTtBQUVsQk8sZUFBTyxNQUZXO0FBR2xCQyxnQkFBUSxNQUhVO0FBSWxCUCxhQUFLLEtBSmE7QUFLbEJDLGNBQU0sS0FMWTtBQU1sQkUsZ0JBQVEsTUFOVTtBQU9sQkMsb0JBQVk7QUFQTSxPQUFwQjs7QUFVQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsZUFBZixFQUErQixPQUFPTixVQUF0QztBQUNHLGVBQUtILEtBQUwsQ0FBV2E7QUFEZCxTQURGO0FBSUcsU0FBQyxLQUFLYixLQUFMLENBQVdjLFVBQVosSUFDQyw2QkFBSyxXQUFVLGdCQUFmLEVBQWdDLE9BQU9KLGFBQXZDLEVBQXNELFNBQVM7QUFBQSxtQkFBSyxPQUFLSyxLQUFMLENBQVdqQixDQUFYLENBQUw7QUFBQSxXQUEvRDtBQUxKLE9BREY7QUFTRDs7OztFQTFDaUJrQixNQUFNQyxTOztBQTZDMUJwQixNQUFNcUIsU0FBTixHQUFrQjtBQUNoQmpCLFdBQVNrQixVQUFVQyxJQUFWLENBQWVDLFVBRFI7QUFFaEJuQixVQUFRaUIsVUFBVUcsSUFBVixDQUFlRDtBQUZQLENBQWxCOztBQUtBRSxPQUFPMUIsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6Im1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjbG9zZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbG9zZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBtb2RhbFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgbGVmdDogJzUwJScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgICAgekluZGV4OiAnOTk5OScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZidcbiAgICB9O1xuXG4gICAgbGV0IGJhY2tkcm9wU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHRvcDogJzBweCcsXG4gICAgICBsZWZ0OiAnMHB4JyxcbiAgICAgIHpJbmRleDogJzk5OTgnLFxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4zKSdcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiIHN0eWxlPXttb2RhbFN0eWxlfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshdGhpcy5wcm9wcy5ub0JhY2tkcm9wICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1iYWNrZHJvcFwiIHN0eWxlPXtiYWNrZHJvcFN0eWxlfSBvbkNsaWNrPXtlID0+IHRoaXMuY2xvc2UoZSl9IC8+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxud2luZG93Lk1vZGFsID0gTW9kYWw7XG4iXX0=