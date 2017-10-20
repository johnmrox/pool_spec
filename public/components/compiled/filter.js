"use strict";

var Filter = function Filter(_ref) {
	var dealer = _ref.dealer,
	    zip = _ref.zip,
	    handleFilterChange = _ref.handleFilterChange;
	return React.createElement(
		"div",
		{ className: "filter-outer-container" },
		React.createElement(
			"div",
			{ className: "filter-inner-container" },
			React.createElement(
				"div",
				{ className: "filter-component" },
				React.createElement(Stats, { dealers: dealer, zip: zip }),
				React.createElement(
					"div",
					{ className: "filter-header" },
					React.createElement(
						"span",
						null,
						"Filter Results"
					)
				),
				React.createElement(
					"div",
					{ className: "filter-header full-hide" },
					React.createElement("span", { className: "glyphicon glyphicon-triangle-bottom" })
				)
			),
			React.createElement(
				"div",
				{ className: "credential-component gray" },
				React.createElement(
					"ul",
					{ className: "credential-list-container" },
					React.createElement(
						"li",
						{ className: "credential-item" },
						React.createElement(
							"span",
							null,
							React.createElement("input", {
								className: "form-check-input",
								type: "checkbox",
								name: "service",
								onChange: function onChange(e) {
									return handleFilterChange(e);
								}
							})
						),
						"Service"
					),
					React.createElement(
						"li",
						{ className: "credential-item" },
						React.createElement(
							"span",
							null,
							React.createElement("input", { className: "", type: "checkbox", name: "installation", onChange: function onChange(e) {
									return handleFilterChange(e);
								} })
						),
						"Installation"
					),
					React.createElement(
						"li",
						{ className: "credential-item" },
						React.createElement(
							"span",
							null,
							React.createElement("input", { className: "", type: "checkbox", name: "residential", onChange: function onChange(e) {
									return handleFilterChange(e);
								} })
						),
						"Residential"
					),
					React.createElement(
						"li",
						{ className: "credential-item" },
						React.createElement(
							"span",
							null,
							React.createElement("input", { className: "", type: "checkbox", name: "commercial", onChange: function onChange(e) {
									return handleFilterChange(e);
								} })
						),
						"Commercial",
						React.createElement(
							"span",
							{ className: "glyphicon glyphicon-question-sign light-grey question" },
							React.createElement(
								"span",
								{ className: "pop-up" },
								"Limited to a few locations"
							)
						)
					)
				)
			)
		)
	);
};

Filter.propTypes = {
	dealer: PropTypes.array.isRequired,
	handleFilterChange: PropTypes.func.isRequired,
	zip: PropTypes.string.isRequired
};

window.Filter = Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbHRlci5qc3giXSwibmFtZXMiOlsiRmlsdGVyIiwiZGVhbGVyIiwiemlwIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJzdHJpbmciLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsS0FBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsS0FBV0MsR0FBWCxRQUFXQSxHQUFYO0FBQUEsS0FBZ0JDLGtCQUFoQixRQUFnQkEsa0JBQWhCO0FBQUEsUUFDWjtBQUFBO0FBQUEsSUFBSyxXQUFVLHdCQUFmO0FBQ0M7QUFBQTtBQUFBLEtBQUssV0FBVSx3QkFBZjtBQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsa0JBQWY7QUFDQyx3QkFBQyxLQUFELElBQU8sU0FBU0YsTUFBaEIsRUFBd0IsS0FBS0MsR0FBN0IsR0FERDtBQUVDO0FBQUE7QUFBQSxPQUFLLFdBQVUsZUFBZjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxLQUZEO0FBS0M7QUFBQTtBQUFBLE9BQUssV0FBVSx5QkFBZjtBQUNDLG1DQUFNLFdBQVUscUNBQWhCO0FBREQ7QUFMRCxJQUREO0FBVUM7QUFBQTtBQUFBLE1BQUssV0FBVSwyQkFBZjtBQUNDO0FBQUE7QUFBQSxPQUFJLFdBQVUsMkJBQWQ7QUFDQztBQUFBO0FBQUEsUUFBSSxXQUFVLGlCQUFkO0FBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFDQyxtQkFBVSxrQkFEWDtBQUVDLGNBQUssVUFGTjtBQUdDLGNBQUssU0FITjtBQUlDLGtCQUFVO0FBQUEsZ0JBQUtDLG1CQUFtQkMsQ0FBbkIsQ0FBTDtBQUFBO0FBSlg7QUFERCxPQUREO0FBQUE7QUFBQSxNQUREO0FBV0M7QUFBQTtBQUFBLFFBQUksV0FBVSxpQkFBZDtBQUNDO0FBQUE7QUFBQTtBQUNDLHNDQUFPLFdBQVUsRUFBakIsRUFBb0IsTUFBSyxVQUF6QixFQUFvQyxNQUFLLGNBQXpDLEVBQXdELFVBQVU7QUFBQSxnQkFBS0QsbUJBQW1CQyxDQUFuQixDQUFMO0FBQUEsU0FBbEU7QUFERCxPQUREO0FBQUE7QUFBQSxNQVhEO0FBZ0JDO0FBQUE7QUFBQSxRQUFJLFdBQVUsaUJBQWQ7QUFDQztBQUFBO0FBQUE7QUFDQyxzQ0FBTyxXQUFVLEVBQWpCLEVBQW9CLE1BQUssVUFBekIsRUFBb0MsTUFBSyxhQUF6QyxFQUF1RCxVQUFVO0FBQUEsZ0JBQUtELG1CQUFtQkMsQ0FBbkIsQ0FBTDtBQUFBLFNBQWpFO0FBREQsT0FERDtBQUFBO0FBQUEsTUFoQkQ7QUFxQkM7QUFBQTtBQUFBLFFBQUksV0FBVSxpQkFBZDtBQUNDO0FBQUE7QUFBQTtBQUNDLHNDQUFPLFdBQVUsRUFBakIsRUFBb0IsTUFBSyxVQUF6QixFQUFvQyxNQUFLLFlBQXpDLEVBQXNELFVBQVU7QUFBQSxnQkFBS0QsbUJBQW1CQyxDQUFuQixDQUFMO0FBQUEsU0FBaEU7QUFERCxPQUREO0FBQUE7QUFHa0I7QUFBQTtBQUFBLFNBQU0sV0FBVSx1REFBaEI7QUFDaEI7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUE7QUFEZ0I7QUFIbEI7QUFyQkQ7QUFERDtBQVZEO0FBREQsRUFEWTtBQUFBLENBQWI7O0FBOENBSixPQUFPSyxTQUFQLEdBQW1CO0FBQ2xCSixTQUFRSyxVQUFVQyxLQUFWLENBQWdCQyxVQUROO0FBRWxCTCxxQkFBb0JHLFVBQVVHLElBQVYsQ0FBZUQsVUFGakI7QUFHbEJOLE1BQUtJLFVBQVVJLE1BQVYsQ0FBaUJGO0FBSEosQ0FBbkI7O0FBTUFHLE9BQU9YLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6ImZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBGaWx0ZXIgPSAoeyBkZWFsZXIsIHppcCwgaGFuZGxlRmlsdGVyQ2hhbmdlIH0pID0+XG5cdDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLW91dGVyLWNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWlubmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY29tcG9uZW50XCI+XG5cdFx0XHRcdDxTdGF0cyBkZWFsZXJzPXtkZWFsZXJ9IHppcD17emlwfSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8c3Bhbj5GaWx0ZXIgUmVzdWx0czwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWhlYWRlciBmdWxsLWhpZGVcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWJvdHRvbVwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNyZWRlbnRpYWwtY29tcG9uZW50IGdyYXlcIj5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImNyZWRlbnRpYWwtbGlzdC1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiY3JlZGVudGlhbC1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwic2VydmljZVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gaGFuZGxlRmlsdGVyQ2hhbmdlKGUpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlNlcnZpY2Vcblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJjcmVkZW50aWFsLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImluc3RhbGxhdGlvblwiIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUZpbHRlckNoYW5nZShlKX0gLz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5JbnN0YWxsYXRpb25cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJjcmVkZW50aWFsLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlc2lkZW50aWFsXCIgb25DaGFuZ2U9e2UgPT4gaGFuZGxlRmlsdGVyQ2hhbmdlKGUpfSAvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlJlc2lkZW50aWFsXG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiY3JlZGVudGlhbC1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cIlwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjb21tZXJjaWFsXCIgb25DaGFuZ2U9e2UgPT4gaGFuZGxlRmlsdGVyQ2hhbmdlKGUpfSAvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPkNvbW1lcmNpYWw8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24gbGlnaHQtZ3JleSBxdWVzdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwb3AtdXBcIj5MaW1pdGVkIHRvIGEgZmV3IGxvY2F0aW9uczwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PjtcblxuRmlsdGVyLnByb3BUeXBlcyA9IHtcblx0ZGVhbGVyOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblx0aGFuZGxlRmlsdGVyQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHR6aXA6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxud2luZG93LkZpbHRlciA9IEZpbHRlcjtcbiJdfQ==