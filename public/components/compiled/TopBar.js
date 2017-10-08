"use strict";

var TopBar = function TopBar(props) {
  return React.createElement(
    "nav",
    { className: "outer-top-bar navbar" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RvcGJhci5qc3giXSwibmFtZXMiOlsiVG9wQmFyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQ1g7QUFBQTtBQUFBLE1BQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsaURBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLCtDQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURGLFNBREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBRyxNQUFLLEdBQVI7QUFBQTtBQUNvQiwwQ0FBTSxXQUFVLDJCQUFoQjtBQURwQjtBQURGO0FBSkY7QUFERjtBQURGLEdBRFc7QUFBQSxDQUFiOztBQWdCQUMsT0FBT0QsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoidG9wYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRvcEJhciA9IHByb3BzID0+XG4gIDxuYXYgY2xhc3NOYW1lPVwib3V0ZXItdG9wLWJhciBuYXZiYXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBuYXYtdG9wLWZpcnN0IHRvcC1iYXItY29udGFpbmVyXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2LXRvcCB0b3AtYmFyLWl0ZW0tY29udGFpbmVyXCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkRlYWxlcnMgYW5kIERpc3RyaWJ1dG9yczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICBDb21tZXJjaWFsIFNlcnZpY2U8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNoYXJlXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L25hdj47XG5cbndpbmRvdy5Ub3BCYXIgPSBUb3BCYXI7XG4iXX0=