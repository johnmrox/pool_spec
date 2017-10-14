"use strict";

var TopBar = function TopBar(props) {
  return React.createElement(
    "nav",
    { className: "outer-top-bar" },
    React.createElement(
      "div",
      { className: "x1-container" },
      React.createElement(
        "ul",
        { className: "footer-list" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RvcGJhci5qc3giXSwibmFtZXMiOlsiVG9wQmFyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQ1g7QUFBQTtBQUFBLE1BQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSxhQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURGLFNBREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBRyxNQUFLLEdBQVI7QUFBQTtBQUNvQiwwQ0FBTSxXQUFVLDJCQUFoQjtBQURwQjtBQURGO0FBSkY7QUFERjtBQURGLEdBRFc7QUFBQSxDQUFiOztBQWdCQUMsT0FBT0QsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoidG9wYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRvcEJhciA9IHByb3BzID0+XG4gIDxuYXYgY2xhc3NOYW1lPVwib3V0ZXItdG9wLWJhclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwieDEtY29udGFpbmVyXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyLWxpc3RcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RGVhbGVycyBhbmQgRGlzdHJpYnV0b3JzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIENvbW1lcmNpYWwgU2VydmljZTxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2hhcmVcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvbmF2Pjtcblxud2luZG93LlRvcEJhciA9IFRvcEJhcjtcbiJdfQ==