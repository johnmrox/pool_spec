"use strict";

var DealerEntry = function DealerEntry(props) {
	return React.createElement(
		"div",
		{ className: "col-md-4 text-center all-card-container" },
		React.createElement(
			"div",
			{ className: "col-md-12 mx-auto card card-container" },
			React.createElement(
				"div",
				{ className: "container-fluid card-body" },
				React.createElement(
					"div",
					{ className: "card-top container-fluid" },
					React.createElement(
						"p",
						{ className: "dealer-name" },
						props.dealer.name
					)
				),
				React.createElement(
					"div",
					{ className: "phone-number-container" },
					React.createElement(
						"h3",
						null,
						React.createElement("span", { className: "fa fa-phone-square blue" }),
						React.createElement(
							"span",
							{ className: "tap-to-call" },
							React.createElement(
								"label",
								null,
								"Tap to call"
							)
						),
						props.dealer.phone1
					)
				),
				React.createElement(
					"p",
					{ className: "sub-header" },
					"Can't talk now? Click below to send an email"
				),
				React.createElement(
					"div",
					{ className: "dealer-button-container" },
					React.createElement(
						"button",
						{ className: "contact-dealer-btn", onClick: function onClick(e) {
								return props.openModal(props.dealer.name);
							} },
						React.createElement("span", { className: "fa fa-envelope navy" }),
						"Contact This Pro"
					)
				),
				React.createElement(
					"div",
					{ className: "business-hours" },
					React.createElement(
						"div",
						{ className: "bold-text" },
						"Business Hours"
					),
					React.createElement(
						"div",
						null,
						Object.keys(props.dealer.weekHours).map(function (day, index) {
							return React.createElement(
								"div",
								{ className: "gray", key: day },
								props.dealer.weekHours[day]
							);
						})
					)
				)
			),
			React.createElement(
				"div",
				{ className: "card-footer gray" },
				React.createElement(
					"div",
					{ className: "cert-container" },
					props.dealer.certifications.map(function (certificationObj, index) {
						return React.createElement(
							"div",
							{ className: "cert text-left", key: index },
							React.createElement("span", { className: certificationObj.className }),
							certificationObj.certification
						);
					})
				)
			)
		)
	);
};

DealerEntry.propTypes = {
	dealer: PropTypes.shape({
		companyID: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		phone1: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		addressLine1: PropTypes.string.isRequired,
		addressLine2: PropTypes.string,
		city: PropTypes.string.isRequired,
		state: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		zipcode: PropTypes.string.isRequired,
		certifications: PropTypes.array.isRequired
	}).isRequired,
	openModal: PropTypes.func.isRequired
};

window.DealerEntry = DealerEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2RlYWxlckVudHJ5LmpzeCJdLCJuYW1lcyI6WyJEZWFsZXJFbnRyeSIsInByb3BzIiwiZGVhbGVyIiwibmFtZSIsInBob25lMSIsIm9wZW5Nb2RhbCIsIk9iamVjdCIsImtleXMiLCJ3ZWVrSG91cnMiLCJtYXAiLCJkYXkiLCJpbmRleCIsImNlcnRpZmljYXRpb25zIiwiY2VydGlmaWNhdGlvbk9iaiIsImNsYXNzTmFtZSIsImNlcnRpZmljYXRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImNvbXBhbnlJRCIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJlbWFpbCIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImNpdHkiLCJzdGF0ZSIsImNvdW50cnkiLCJ6aXBjb2RlIiwiYXJyYXkiLCJmdW5jIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGNBQWMsU0FBZEEsV0FBYztBQUFBLFFBQ2pCO0FBQUE7QUFBQSxJQUFLLFdBQVUseUNBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLHVDQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSwyQkFBZjtBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsMEJBQWY7QUFDQztBQUFBO0FBQUEsUUFBRyxXQUFVLGFBQWI7QUFDRUMsWUFBTUMsTUFBTixDQUFhQztBQURmO0FBREQsS0FERDtBQU1DO0FBQUE7QUFBQSxPQUFLLFdBQVUsd0JBQWY7QUFDQztBQUFBO0FBQUE7QUFDQyxvQ0FBTSxXQUFVLHlCQUFoQixHQUREO0FBRUM7QUFBQTtBQUFBLFNBQU0sV0FBVSxhQUFoQjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxPQUZEO0FBS0VGLFlBQU1DLE1BQU4sQ0FBYUU7QUFMZjtBQURELEtBTkQ7QUFlQztBQUFBO0FBQUEsT0FBRyxXQUFVLFlBQWI7QUFBQTtBQUFBLEtBZkQ7QUFnQkM7QUFBQTtBQUFBLE9BQUssV0FBVSx5QkFBZjtBQUNDO0FBQUE7QUFBQSxRQUFRLFdBQVUsb0JBQWxCLEVBQXVDLFNBQVM7QUFBQSxlQUFLSCxNQUFNSSxTQUFOLENBQWdCSixNQUFNQyxNQUFOLENBQWFDLElBQTdCLENBQUw7QUFBQSxRQUFoRDtBQUNDLG9DQUFNLFdBQVUscUJBQWhCLEdBREQ7QUFBQTtBQUFBO0FBREQsS0FoQkQ7QUFxQkM7QUFBQTtBQUFBLE9BQUssV0FBVSxnQkFBZjtBQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsV0FBZjtBQUFBO0FBQUEsTUFERDtBQUVDO0FBQUE7QUFBQTtBQUNFRyxhQUFPQyxJQUFQLENBQVlOLE1BQU1DLE1BQU4sQ0FBYU0sU0FBekIsRUFBb0NDLEdBQXBDLENBQXdDLFVBQUNDLEdBQUQsRUFBTUMsS0FBTjtBQUFBLGNBQ3hDO0FBQUE7QUFBQSxVQUFLLFdBQVUsTUFBZixFQUFzQixLQUFLRCxHQUEzQjtBQUNFVCxjQUFNQyxNQUFOLENBQWFNLFNBQWIsQ0FBdUJFLEdBQXZCO0FBREYsUUFEd0M7QUFBQSxPQUF4QztBQURGO0FBRkQ7QUFyQkQsSUFERDtBQWlDQztBQUFBO0FBQUEsTUFBSyxXQUFVLGtCQUFmO0FBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSxnQkFBZjtBQUNFVCxXQUFNQyxNQUFOLENBQWFVLGNBQWIsQ0FBNEJILEdBQTVCLENBQWdDLFVBQUNJLGdCQUFELEVBQW1CRixLQUFuQjtBQUFBLGFBQ2hDO0FBQUE7QUFBQSxTQUFLLFdBQVUsZ0JBQWYsRUFBZ0MsS0FBS0EsS0FBckM7QUFDQyxxQ0FBTSxXQUFXRSxpQkFBaUJDLFNBQWxDLEdBREQ7QUFFRUQsd0JBQWlCRTtBQUZuQixPQURnQztBQUFBLE1BQWhDO0FBREY7QUFERDtBQWpDRDtBQURELEVBRGlCO0FBQUEsQ0FBbEI7O0FBZ0RBZixZQUFZZ0IsU0FBWixHQUF3QjtBQUN2QmQsU0FBUWUsVUFBVUMsS0FBVixDQUFnQjtBQUN2QkMsYUFBV0YsVUFBVUcsTUFBVixDQUFpQkMsVUFETDtBQUV2QmxCLFFBQU1jLFVBQVVLLE1BQVYsQ0FBaUJELFVBRkE7QUFHdkJqQixVQUFRYSxVQUFVSyxNQUFWLENBQWlCRCxVQUhGO0FBSXZCRSxTQUFPTixVQUFVSyxNQUFWLENBQWlCRCxVQUpEO0FBS3ZCRyxnQkFBY1AsVUFBVUssTUFBVixDQUFpQkQsVUFMUjtBQU12QkksZ0JBQWNSLFVBQVVLLE1BTkQ7QUFPdkJJLFFBQU1ULFVBQVVLLE1BQVYsQ0FBaUJELFVBUEE7QUFRdkJNLFNBQU9WLFVBQVVLLE1BQVYsQ0FBaUJELFVBUkQ7QUFTdkJPLFdBQVNYLFVBQVVLLE1BQVYsQ0FBaUJELFVBVEg7QUFVdkJRLFdBQVNaLFVBQVVLLE1BQVYsQ0FBaUJELFVBVkg7QUFXdkJULGtCQUFnQkssVUFBVWEsS0FBVixDQUFnQlQ7QUFYVCxFQUFoQixFQVlMQSxVQWJvQjtBQWN2QmhCLFlBQVdZLFVBQVVjLElBQVYsQ0FBZVY7QUFkSCxDQUF4Qjs7QUFpQkFXLE9BQU9oQyxXQUFQLEdBQXFCQSxXQUFyQiIsImZpbGUiOiJkZWFsZXJFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBEZWFsZXJFbnRyeSA9IHByb3BzID0+XG5cdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgdGV4dC1jZW50ZXIgYWxsLWNhcmQtY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgbXgtYXV0byBjYXJkIGNhcmQtY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjYXJkLWJvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLXRvcCBjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkZWFsZXItbmFtZVwiPlxuXHRcdFx0XHRcdFx0e3Byb3BzLmRlYWxlci5uYW1lfVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGhvbmUtbnVtYmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxoMz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXBob25lLXNxdWFyZSBibHVlXCIgLz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRhcC10by1jYWxsXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5UYXAgdG8gY2FsbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHR7cHJvcHMuZGVhbGVyLnBob25lMX1cblx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3ViLWhlYWRlclwiPkNhbid0IHRhbGsgbm93PyBDbGljayBiZWxvdyB0byBzZW5kIGFuIGVtYWlsPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlYWxlci1idXR0b24tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJjb250YWN0LWRlYWxlci1idG5cIiBvbkNsaWNrPXtlID0+IHByb3BzLm9wZW5Nb2RhbChwcm9wcy5kZWFsZXIubmFtZSl9PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGUgbmF2eVwiIC8+Q29udGFjdCBUaGlzIFByb1xuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1ob3Vyc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9sZC10ZXh0XCI+QnVzaW5lc3MgSG91cnM8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHByb3BzLmRlYWxlci53ZWVrSG91cnMpLm1hcCgoZGF5LCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmF5XCIga2V5PXtkYXl9PlxuXHRcdFx0XHRcdFx0XHRcdHtwcm9wcy5kZWFsZXIud2Vla0hvdXJzW2RheV19XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXIgZ3JheVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlcnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0e3Byb3BzLmRlYWxlci5jZXJ0aWZpY2F0aW9ucy5tYXAoKGNlcnRpZmljYXRpb25PYmosIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZXJ0IHRleHQtbGVmdFwiIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NlcnRpZmljYXRpb25PYmouY2xhc3NOYW1lfSAvPlxuXHRcdFx0XHRcdFx0XHR7Y2VydGlmaWNhdGlvbk9iai5jZXJ0aWZpY2F0aW9ufVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+O1xuXG5EZWFsZXJFbnRyeS5wcm9wVHlwZXMgPSB7XG5cdGRlYWxlcjogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRjb21wYW55SUQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHRuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0cGhvbmUxOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0ZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRhZGRyZXNzTGluZTE6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRhZGRyZXNzTGluZTI6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0Y2l0eTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHN0YXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0Y291bnRyeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHppcGNvZGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjZXJ0aWZpY2F0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcblx0fSkuaXNSZXF1aXJlZCxcblx0b3Blbk1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuRGVhbGVyRW50cnkgPSBEZWFsZXJFbnRyeTtcbiJdfQ==