"use strict";

var Filter = function Filter(props) {
	return React.createElement(
		"div",
		{ className: "filter-outer-container" },
		React.createElement(
			"div",
			{ className: "filter-inner-container" },
			React.createElement(
				"div",
				{ className: "filter-component" },
				React.createElement(
					"div",
					{ className: "blue dealer-numbers filter-header" },
					React.createElement(
						"span",
						null,
						props.dealerTotal,
						" dealers in ",
						props.dealer.zipcode
					)
				),
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
									return props.handleFilterChange(e);
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
									return props.handleFilterChange(e);
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
									return props.handleFilterChange(e);
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
									return props.handleFilterChange(e);
								} })
						),
						"Commercial",
						React.createElement("span", { className: "glyphicon glyphicon-question-sign light-grey" })
					)
				)
			)
		)
	);
};

Filter.propTypes = {
	dealerTotal: PropTypes.number.isRequired,
	dealer: PropTypes.shape({
		zipcode: PropTypes.string.isRequired,
		location: PropTypes.Object,
		dealers: PropTypes.array.isRequired
	}).isRequired,
	handleFilterChange: PropTypes.func.isRequired
};

window.Filter = Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbHRlci5qc3giXSwibmFtZXMiOlsiRmlsdGVyIiwicHJvcHMiLCJkZWFsZXJUb3RhbCIsImRlYWxlciIsInppcGNvZGUiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwic3RyaW5nIiwibG9jYXRpb24iLCJPYmplY3QiLCJkZWFsZXJzIiwiYXJyYXkiLCJmdW5jIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUztBQUFBLFFBQ1o7QUFBQTtBQUFBLElBQUssV0FBVSx3QkFBZjtBQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVUsd0JBQWY7QUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLGtCQUFmO0FBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSxtQ0FBZjtBQUNDO0FBQUE7QUFBQTtBQUNFQyxZQUFNQyxXQURSO0FBQUE7QUFDaUNELFlBQU1FLE1BQU4sQ0FBYUM7QUFEOUM7QUFERCxLQUREO0FBTUM7QUFBQTtBQUFBLE9BQUssV0FBVSxlQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELEtBTkQ7QUFTQztBQUFBO0FBQUEsT0FBSyxXQUFVLHlCQUFmO0FBQ0MsbUNBQU0sV0FBVSxxQ0FBaEI7QUFERDtBQVRELElBREQ7QUFjQztBQUFBO0FBQUEsTUFBSyxXQUFVLDJCQUFmO0FBQ0M7QUFBQTtBQUFBLE9BQUksV0FBVSwyQkFBZDtBQUNDO0FBQUE7QUFBQSxRQUFJLFdBQVUsaUJBQWQ7QUFDQztBQUFBO0FBQUE7QUFDQztBQUNDLG1CQUFVLGtCQURYO0FBRUMsY0FBSyxVQUZOO0FBR0MsY0FBSyxTQUhOO0FBSUMsa0JBQVU7QUFBQSxnQkFBS0gsTUFBTUksa0JBQU4sQ0FBeUJDLENBQXpCLENBQUw7QUFBQTtBQUpYO0FBREQsT0FERDtBQUFBO0FBQUEsTUFERDtBQVdDO0FBQUE7QUFBQSxRQUFJLFdBQVUsaUJBQWQ7QUFDQztBQUFBO0FBQUE7QUFDQyxzQ0FBTyxXQUFVLEVBQWpCLEVBQW9CLE1BQUssVUFBekIsRUFBb0MsTUFBSyxjQUF6QyxFQUF3RCxVQUFVO0FBQUEsZ0JBQUtMLE1BQU1JLGtCQUFOLENBQXlCQyxDQUF6QixDQUFMO0FBQUEsU0FBbEU7QUFERCxPQUREO0FBQUE7QUFBQSxNQVhEO0FBZ0JDO0FBQUE7QUFBQSxRQUFJLFdBQVUsaUJBQWQ7QUFDQztBQUFBO0FBQUE7QUFDQyxzQ0FBTyxXQUFVLEVBQWpCLEVBQW9CLE1BQUssVUFBekIsRUFBb0MsTUFBSyxhQUF6QyxFQUF1RCxVQUFVO0FBQUEsZ0JBQUtMLE1BQU1JLGtCQUFOLENBQXlCQyxDQUF6QixDQUFMO0FBQUEsU0FBakU7QUFERCxPQUREO0FBQUE7QUFBQSxNQWhCRDtBQXFCQztBQUFBO0FBQUEsUUFBSSxXQUFVLGlCQUFkO0FBQ0M7QUFBQTtBQUFBO0FBQ0Msc0NBQU8sV0FBVSxFQUFqQixFQUFvQixNQUFLLFVBQXpCLEVBQW9DLE1BQUssWUFBekMsRUFBc0QsVUFBVTtBQUFBLGdCQUFLTCxNQUFNSSxrQkFBTixDQUF5QkMsQ0FBekIsQ0FBTDtBQUFBLFNBQWhFO0FBREQsT0FERDtBQUFBO0FBR2tCLG9DQUFNLFdBQVUsOENBQWhCO0FBSGxCO0FBckJEO0FBREQ7QUFkRDtBQURELEVBRFk7QUFBQSxDQUFiOztBQWdEQU4sT0FBT08sU0FBUCxHQUFtQjtBQUNsQkwsY0FBYU0sVUFBVUMsTUFBVixDQUFpQkMsVUFEWjtBQUVsQlAsU0FBUUssVUFBVUcsS0FBVixDQUFnQjtBQUN2QlAsV0FBU0ksVUFBVUksTUFBVixDQUFpQkYsVUFESDtBQUV2QkcsWUFBVUwsVUFBVU0sTUFGRztBQUd2QkMsV0FBU1AsVUFBVVEsS0FBVixDQUFnQk47QUFIRixFQUFoQixFQUlMQSxVQU5lO0FBT2xCTCxxQkFBb0JHLFVBQVVTLElBQVYsQ0FBZVA7QUFQakIsQ0FBbkI7O0FBVUFRLE9BQU9sQixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJmaWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRmlsdGVyID0gcHJvcHMgPT5cblx0PGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItb3V0ZXItY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaW5uZXItY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1jb21wb25lbnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibHVlIGRlYWxlci1udW1iZXJzIGZpbHRlci1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdHtwcm9wcy5kZWFsZXJUb3RhbH0gZGVhbGVycyBpbiB7cHJvcHMuZGVhbGVyLnppcGNvZGV9XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaGVhZGVyXCI+XG5cdFx0XHRcdFx0PHNwYW4+RmlsdGVyIFJlc3VsdHM8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1oZWFkZXIgZnVsbC1oaWRlXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1ib3R0b21cIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjcmVkZW50aWFsLWNvbXBvbmVudCBncmF5XCI+XG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJjcmVkZW50aWFsLWxpc3QtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImNyZWRlbnRpYWwtaXRlbVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInNlcnZpY2VcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHByb3BzLmhhbmRsZUZpbHRlckNoYW5nZShlKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5TZXJ2aWNlXG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiY3JlZGVudGlhbC1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cIlwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpbnN0YWxsYXRpb25cIiBvbkNoYW5nZT17ZSA9PiBwcm9wcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoZSl9IC8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+SW5zdGFsbGF0aW9uXG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiY3JlZGVudGlhbC1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cIlwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXNpZGVudGlhbFwiIG9uQ2hhbmdlPXtlID0+IHByb3BzLmhhbmRsZUZpbHRlckNoYW5nZShlKX0gLz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5SZXNpZGVudGlhbFxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImNyZWRlbnRpYWwtaXRlbVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tbWVyY2lhbFwiIG9uQ2hhbmdlPXtlID0+IHByb3BzLmhhbmRsZUZpbHRlckNoYW5nZShlKX0gLz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5Db21tZXJjaWFsPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1xdWVzdGlvbi1zaWduIGxpZ2h0LWdyZXlcIiAvPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+O1xuXG5GaWx0ZXIucHJvcFR5cGVzID0ge1xuXHRkZWFsZXJUb3RhbDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRkZWFsZXI6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0emlwY29kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGxvY2F0aW9uOiBQcm9wVHlwZXMuT2JqZWN0LFxuXHRcdGRlYWxlcnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG5cdH0pLmlzUmVxdWlyZWQsXG5cdGhhbmRsZUZpbHRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxud2luZG93LkZpbHRlciA9IEZpbHRlcjtcbiJdfQ==