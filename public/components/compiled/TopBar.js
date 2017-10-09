"use strict";

var TopBar = function TopBar(props) {
  return React.createElement(
    "nav",
    { className: "outer-top-bar" },
    React.createElement(
      "div",
      { className: "container-fluid nav-top-first top-bar-container" },
      React.createElement(
        "ul",
        { className: "nav navbar-nav nav-top top-bar-item-container" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#" },
            "Dealers and Distributors"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#" },
            "Commercial Service",
            React.createElement("span", { className: "glyphicon glyphicon-share" })
          )
        )
      )
    )
  );
};

window.TopBar = TopBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RvcGJhci5qc3giXSwibmFtZXMiOlsiVG9wQmFyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQ1g7QUFBQTtBQUFBLE1BQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxpREFBZjtBQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsK0NBQWQ7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFHLE1BQUssR0FBUjtBQUFBO0FBQ29CLDBDQUFNLFdBQVUsMkJBQWhCO0FBRHBCO0FBREY7QUFKRjtBQURGO0FBREYsR0FEVztBQUFBLENBQWI7O0FBZ0JBQyxPQUFPRCxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJ0b3BiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVG9wQmFyID0gcHJvcHMgPT5cbiAgPG5hdiBjbGFzc05hbWU9XCJvdXRlci10b3AtYmFyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbmF2LXRvcC1maXJzdCB0b3AtYmFyLWNvbnRhaW5lclwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdi10b3AgdG9wLWJhci1pdGVtLWNvbnRhaW5lclwiPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5EZWFsZXJzIGFuZCBEaXN0cmlidXRvcnM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgQ29tbWVyY2lhbCBTZXJ2aWNlPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zaGFyZVwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+O1xuXG53aW5kb3cuVG9wQmFyID0gVG9wQmFyO1xuIl19