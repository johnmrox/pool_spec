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

window.Modal = Modal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21vZGFsLmpzeCJdLCJuYW1lcyI6WyJNb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwib25DbG9zZSIsImlzT3BlbiIsIm1vZGFsU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwiYmFja2Ryb3BTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJub0JhY2tkcm9wIiwiY2xvc2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7Ozs7Ozs7OzswQkFDRUMsQyxFQUFHO0FBQ1BBLFFBQUVDLGNBQUY7O0FBRUEsVUFBSSxLQUFLQyxLQUFMLENBQVdDLE9BQWYsRUFBd0I7QUFDdEIsYUFBS0QsS0FBTCxDQUFXQyxPQUFYO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSSxLQUFLRCxLQUFMLENBQVdFLE1BQVgsS0FBc0IsS0FBMUIsRUFBaUM7QUFDL0IsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUMsYUFBYTtBQUNmQyxrQkFBVSxPQURLO0FBRWZDLGFBQUssS0FGVTtBQUdmQyxjQUFNLEtBSFM7QUFJZkMsbUJBQVcsdUJBSkk7QUFLZkMsZ0JBQVEsTUFMTztBQU1mQyxvQkFBWTtBQU5HLE9BQWpCOztBQVNBLFVBQUlDLGdCQUFnQjtBQUNsQk4sa0JBQVUsT0FEUTtBQUVsQk8sZUFBTyxNQUZXO0FBR2xCQyxnQkFBUSxNQUhVO0FBSWxCUCxhQUFLLEtBSmE7QUFLbEJDLGNBQU0sS0FMWTtBQU1sQkUsZ0JBQVEsTUFOVTtBQU9sQkMsb0JBQVk7QUFQTSxPQUFwQjs7QUFVQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsZUFBZixFQUErQixPQUFPTixVQUF0QztBQUNHLGVBQUtILEtBQUwsQ0FBV2E7QUFEZCxTQURGO0FBSUcsU0FBQyxLQUFLYixLQUFMLENBQVdjLFVBQVosSUFDQyw2QkFBSyxXQUFVLGdCQUFmLEVBQWdDLE9BQU9KLGFBQXZDLEVBQXNELFNBQVM7QUFBQSxtQkFBSyxPQUFLSyxLQUFMLENBQVdqQixDQUFYLENBQUw7QUFBQSxXQUEvRDtBQUxKLE9BREY7QUFTRDs7OztFQTFDaUJrQixNQUFNQyxTOztBQTZDMUJDLE9BQU9yQixLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNsb3NlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IG1vZGFsU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICB6SW5kZXg6ICc5OTk5JyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJ1xuICAgIH07XG5cbiAgICBsZXQgYmFja2Ryb3BTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgdG9wOiAnMHB4JyxcbiAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgekluZGV4OiAnOTk5OCcsXG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjMpJ1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCIgc3R5bGU9e21vZGFsU3R5bGV9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyF0aGlzLnByb3BzLm5vQmFja2Ryb3AgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJhY2tkcm9wXCIgc3R5bGU9e2JhY2tkcm9wU3R5bGV9IG9uQ2xpY2s9e2UgPT4gdGhpcy5jbG9zZShlKX0gLz59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5Nb2RhbCA9IE1vZGFsO1xuIl19