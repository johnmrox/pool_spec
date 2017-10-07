"use strict";

var TopBar = function TopBar(props) {
  return React.createElement(
    "nav",
    { className: "outer-top-bar navbar navbar-fixed-top" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RvcGJhci5qc3giXSwibmFtZXMiOlsiVG9wQmFyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQ1g7QUFBQTtBQUFBLE1BQUssV0FBVSx1Q0FBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsaURBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLCtDQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURGLFNBREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBRyxNQUFLLEdBQVI7QUFBQTtBQUNvQiwwQ0FBTSxXQUFVLDJCQUFoQjtBQURwQjtBQURGO0FBSkY7QUFERjtBQURGLEdBRFc7QUFBQSxDQUFiOztBQWdCQUMsT0FBT0QsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoidG9wYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRvcEJhciA9IHByb3BzID0+XG4gIDxuYXYgY2xhc3NOYW1lPVwib3V0ZXItdG9wLWJhciBuYXZiYXIgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG5hdi10b3AtZmlyc3QgdG9wLWJhci1jb250YWluZXJcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXYtdG9wIHRvcC1iYXItaXRlbS1jb250YWluZXJcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RGVhbGVycyBhbmQgRGlzdHJpYnV0b3JzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIENvbW1lcmNpYWwgU2VydmljZTxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2hhcmVcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvbmF2Pjtcblxud2luZG93LlRvcEJhciA9IFRvcEJhcjtcbiJdfQ==