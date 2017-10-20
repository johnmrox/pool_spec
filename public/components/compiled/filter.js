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
				React.createElement(Stats, { dealers: props.dealer, zip: props.zip }),
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
	handleFilterChange: PropTypes.func.isRequired
};

window.Filter = Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbHRlci5qc3giXSwibmFtZXMiOlsiRmlsdGVyIiwicHJvcHMiLCJkZWFsZXIiLCJ6aXAiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxRQUNaO0FBQUE7QUFBQSxJQUFLLFdBQVUsd0JBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLHdCQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxrQkFBZjtBQUNDLHdCQUFDLEtBQUQsSUFBTyxTQUFTQyxNQUFNQyxNQUF0QixFQUE4QixLQUFLRCxNQUFNRSxHQUF6QyxHQUREO0FBRUM7QUFBQTtBQUFBLE9BQUssV0FBVSxlQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELEtBRkQ7QUFLQztBQUFBO0FBQUEsT0FBSyxXQUFVLHlCQUFmO0FBQ0MsbUNBQU0sV0FBVSxxQ0FBaEI7QUFERDtBQUxELElBREQ7QUFVQztBQUFBO0FBQUEsTUFBSyxXQUFVLDJCQUFmO0FBQ0M7QUFBQTtBQUFBLE9BQUksV0FBVSwyQkFBZDtBQUNDO0FBQUE7QUFBQSxRQUFJLFdBQVUsaUJBQWQ7QUFDQztBQUFBO0FBQUE7QUFDQztBQUNDLG1CQUFVLGtCQURYO0FBRUMsY0FBSyxVQUZOO0FBR0MsY0FBSyxTQUhOO0FBSUMsa0JBQVU7QUFBQSxnQkFBS0YsTUFBTUcsa0JBQU4sQ0FBeUJDLENBQXpCLENBQUw7QUFBQTtBQUpYO0FBREQsT0FERDtBQUFBO0FBQUEsTUFERDtBQVdDO0FBQUE7QUFBQSxRQUFJLFdBQVUsaUJBQWQ7QUFDQztBQUFBO0FBQUE7QUFDQyxzQ0FBTyxXQUFVLEVBQWpCLEVBQW9CLE1BQUssVUFBekIsRUFBb0MsTUFBSyxjQUF6QyxFQUF3RCxVQUFVO0FBQUEsZ0JBQUtKLE1BQU1HLGtCQUFOLENBQXlCQyxDQUF6QixDQUFMO0FBQUEsU0FBbEU7QUFERCxPQUREO0FBQUE7QUFBQSxNQVhEO0FBZ0JDO0FBQUE7QUFBQSxRQUFJLFdBQVUsaUJBQWQ7QUFDQztBQUFBO0FBQUE7QUFDQyxzQ0FBTyxXQUFVLEVBQWpCLEVBQW9CLE1BQUssVUFBekIsRUFBb0MsTUFBSyxhQUF6QyxFQUF1RCxVQUFVO0FBQUEsZ0JBQUtKLE1BQU1HLGtCQUFOLENBQXlCQyxDQUF6QixDQUFMO0FBQUEsU0FBakU7QUFERCxPQUREO0FBQUE7QUFBQSxNQWhCRDtBQXFCQztBQUFBO0FBQUEsUUFBSSxXQUFVLGlCQUFkO0FBQ0M7QUFBQTtBQUFBO0FBQ0Msc0NBQU8sV0FBVSxFQUFqQixFQUFvQixNQUFLLFVBQXpCLEVBQW9DLE1BQUssWUFBekMsRUFBc0QsVUFBVTtBQUFBLGdCQUFLSixNQUFNRyxrQkFBTixDQUF5QkMsQ0FBekIsQ0FBTDtBQUFBLFNBQWhFO0FBREQsT0FERDtBQUFBO0FBR2tCO0FBQUE7QUFBQSxTQUFNLFdBQVUsdURBQWhCO0FBQ2hCO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBO0FBRGdCO0FBSGxCO0FBckJEO0FBREQ7QUFWRDtBQURELEVBRFk7QUFBQSxDQUFiOztBQThDQUwsT0FBT00sU0FBUCxHQUFtQjtBQUNsQkosU0FBUUssVUFBVUMsS0FBVixDQUFnQkMsVUFETjtBQUVsQkwscUJBQW9CRyxVQUFVRyxJQUFWLENBQWVEO0FBRmpCLENBQW5COztBQUtBRSxPQUFPWCxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJmaWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRmlsdGVyID0gcHJvcHMgPT5cblx0PGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItb3V0ZXItY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaW5uZXItY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1jb21wb25lbnRcIj5cblx0XHRcdFx0PFN0YXRzIGRlYWxlcnM9e3Byb3BzLmRlYWxlcn0gemlwPXtwcm9wcy56aXB9IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWhlYWRlclwiPlxuXHRcdFx0XHRcdDxzcGFuPkZpbHRlciBSZXN1bHRzPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaGVhZGVyIGZ1bGwtaGlkZVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtYm90dG9tXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3JlZGVudGlhbC1jb21wb25lbnQgZ3JheVwiPlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiY3JlZGVudGlhbC1saXN0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJjcmVkZW50aWFsLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJzZXJ2aWNlXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBwcm9wcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoZSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+U2VydmljZVxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImNyZWRlbnRpYWwtaXRlbVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiaW5zdGFsbGF0aW9uXCIgb25DaGFuZ2U9e2UgPT4gcHJvcHMuaGFuZGxlRmlsdGVyQ2hhbmdlKGUpfSAvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPkluc3RhbGxhdGlvblxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImNyZWRlbnRpYWwtaXRlbVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVzaWRlbnRpYWxcIiBvbkNoYW5nZT17ZSA9PiBwcm9wcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoZSl9IC8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+UmVzaWRlbnRpYWxcblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJjcmVkZW50aWFsLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNvbW1lcmNpYWxcIiBvbkNoYW5nZT17ZSA9PiBwcm9wcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoZSl9IC8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+Q29tbWVyY2lhbDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnbiBsaWdodC1ncmV5IHF1ZXN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBvcC11cFwiPkxpbWl0ZWQgdG8gYSBmZXcgbG9jYXRpb25zPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+O1xuXG5GaWx0ZXIucHJvcFR5cGVzID0ge1xuXHRkZWFsZXI6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXHRoYW5kbGVGaWx0ZXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5GaWx0ZXIgPSBGaWx0ZXI7XG4iXX0=