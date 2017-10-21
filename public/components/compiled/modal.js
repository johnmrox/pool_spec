"use strict";

var Modal = function Modal(_ref) {
  var onClose = _ref.onClose,
      isOpen = _ref.isOpen,
      children = _ref.children;

  if (!isOpen) {
    return null;
  }

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "modal-overlay" },
      children
    ),
    React.createElement("div", { className: "modal-backdrop", onClick: onClose })
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

window.Modal = Modal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21vZGFsLmpzeCJdLCJuYW1lcyI6WyJNb2RhbCIsIm9uQ2xvc2UiLCJpc09wZW4iLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm5vZGUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxTQUFSQSxLQUFRLE9BQW1DO0FBQUEsTUFBaENDLE9BQWdDLFFBQWhDQSxPQUFnQztBQUFBLE1BQXZCQyxNQUF1QixRQUF2QkEsTUFBdUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQzdDLE1BQUksQ0FBQ0QsTUFBTCxFQUFhO0FBQ1gsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGVBQWY7QUFDR0M7QUFESCxLQURGO0FBSUUsaUNBQUssV0FBVSxnQkFBZixFQUFnQyxTQUFTRixPQUF6QztBQUpGLEdBREY7QUFRRCxDQWJEOztBQWVBRCxNQUFNSSxTQUFOLEdBQWtCO0FBQ2hCSCxXQUFTSSxVQUFVQyxJQUFWLENBQWVDLFVBRFI7QUFFaEJMLFVBQVFHLFVBQVVHLElBQVYsQ0FBZUQsVUFGUDtBQUdoQkosWUFBVUUsVUFBVUksSUFBVixDQUFlRjtBQUhULENBQWxCOztBQU1BRyxPQUFPVixLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTW9kYWwgPSAoeyBvbkNsb3NlLCBpc09wZW4sIGNoaWxkcmVuIH0pID0+IHtcbiAgaWYgKCFpc09wZW4pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmFja2Ryb3BcIiBvbkNsaWNrPXtvbkNsb3NlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuTW9kYWwgPSBNb2RhbDtcbiJdfQ==