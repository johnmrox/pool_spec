"use strict";

var DealerEntry = function DealerEntry(props) {
	return React.createElement(
		"div",
		{ className: "col-md-4 text-center all-card-container" },
		React.createElement(
			"div",
			{ className: "col-md-12 mx-auto card  card-container" },
			React.createElement(
				"div",
				{ className: "container-fluid" },
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
					{ className: "row container-fluid text-left" },
					props.dealer.certifications.map(function (certificationObj, index) {
						return React.createElement(
							"div",
							{ className: "col-xs-6", key: index },
							React.createElement("span", { className: certificationObj.className }),
							certificationObj.certification
						);
					})
				)
			)
		)
	);
};

window.DealerEntry = DealerEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2RlYWxlckVudHJ5LmpzeCJdLCJuYW1lcyI6WyJEZWFsZXJFbnRyeSIsInByb3BzIiwiZGVhbGVyIiwibmFtZSIsInBob25lMSIsIm9wZW5Nb2RhbCIsIk9iamVjdCIsImtleXMiLCJ3ZWVrSG91cnMiLCJtYXAiLCJkYXkiLCJpbmRleCIsImNlcnRpZmljYXRpb25zIiwiY2VydGlmaWNhdGlvbk9iaiIsImNsYXNzTmFtZSIsImNlcnRpZmljYXRpb24iLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsUUFDakI7QUFBQTtBQUFBLElBQUssV0FBVSx5Q0FBZjtBQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVUsd0NBQWY7QUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLGlCQUFmO0FBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSwwQkFBZjtBQUNDO0FBQUE7QUFBQSxRQUFHLFdBQVUsYUFBYjtBQUNFQyxZQUFNQyxNQUFOLENBQWFDO0FBRGY7QUFERCxLQUREO0FBTUM7QUFBQTtBQUFBLE9BQUssV0FBVSx3QkFBZjtBQUNDO0FBQUE7QUFBQTtBQUNDLG9DQUFNLFdBQVUseUJBQWhCLEdBREQ7QUFFQztBQUFBO0FBQUEsU0FBTSxXQUFVLGFBQWhCO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELE9BRkQ7QUFLRUYsWUFBTUMsTUFBTixDQUFhRTtBQUxmO0FBREQsS0FORDtBQWVDO0FBQUE7QUFBQSxPQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUEsS0FmRDtBQWdCQztBQUFBO0FBQUEsT0FBSyxXQUFVLHlCQUFmO0FBQ0M7QUFBQTtBQUFBLFFBQVEsV0FBVSxvQkFBbEIsRUFBdUMsU0FBUztBQUFBLGVBQUtILE1BQU1JLFNBQU4sQ0FBZ0JKLE1BQU1DLE1BQU4sQ0FBYUMsSUFBN0IsQ0FBTDtBQUFBLFFBQWhEO0FBQ0Msb0NBQU0sV0FBVSxxQkFBaEIsR0FERDtBQUFBO0FBQUE7QUFERCxLQWhCRDtBQXFCQztBQUFBO0FBQUEsT0FBSyxXQUFVLGdCQUFmO0FBQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQUE7QUFBQSxNQUREO0FBRUM7QUFBQTtBQUFBO0FBQ0VHLGFBQU9DLElBQVAsQ0FBWU4sTUFBTUMsTUFBTixDQUFhTSxTQUF6QixFQUFvQ0MsR0FBcEMsQ0FBd0MsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOO0FBQUEsY0FDeEM7QUFBQTtBQUFBLFVBQUssV0FBVSxNQUFmLEVBQXNCLEtBQUtELEdBQTNCO0FBQ0VULGNBQU1DLE1BQU4sQ0FBYU0sU0FBYixDQUF1QkUsR0FBdkI7QUFERixRQUR3QztBQUFBLE9BQXhDO0FBREY7QUFGRDtBQXJCRCxJQUREO0FBaUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsa0JBQWY7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLCtCQUFmO0FBQ0VULFdBQU1DLE1BQU4sQ0FBYVUsY0FBYixDQUE0QkgsR0FBNUIsQ0FBZ0MsVUFBQ0ksZ0JBQUQsRUFBbUJGLEtBQW5CO0FBQUEsYUFDaEM7QUFBQTtBQUFBLFNBQUssV0FBVSxVQUFmLEVBQTBCLEtBQUtBLEtBQS9CO0FBQ0MscUNBQU0sV0FBV0UsaUJBQWlCQyxTQUFsQyxHQUREO0FBRUVELHdCQUFpQkU7QUFGbkIsT0FEZ0M7QUFBQSxNQUFoQztBQURGO0FBREQ7QUFqQ0Q7QUFERCxFQURpQjtBQUFBLENBQWxCOztBQWdEQUMsT0FBT2hCLFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6ImRlYWxlckVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIERlYWxlckVudHJ5ID0gcHJvcHMgPT5cblx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCB0ZXh0LWNlbnRlciBhbGwtY2FyZC1jb250YWluZXJcIj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBteC1hdXRvIGNhcmQgIGNhcmQtY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdG9wIGNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImRlYWxlci1uYW1lXCI+XG5cdFx0XHRcdFx0XHR7cHJvcHMuZGVhbGVyLm5hbWV9XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwaG9uZS1udW1iZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGgzPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtcGhvbmUtc3F1YXJlIGJsdWVcIiAvPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGFwLXRvLWNhbGxcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlRhcCB0byBjYWxsPC9sYWJlbD5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdHtwcm9wcy5kZWFsZXIucGhvbmUxfVxuXHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWItaGVhZGVyXCI+Q2FuJ3QgdGFsayBub3c/IENsaWNrIGJlbG93IHRvIHNlbmQgYW4gZW1haWw8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVhbGVyLWJ1dHRvbi1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRhY3QtZGVhbGVyLWJ0blwiIG9uQ2xpY2s9e2UgPT4gcHJvcHMub3Blbk1vZGFsKHByb3BzLmRlYWxlci5uYW1lKX0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZSBuYXZ5XCIgLz5Db250YWN0IFRoaXMgUHJvXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzLWhvdXJzXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2xkLXRleHRcIj5CdXNpbmVzcyBIb3VyczwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMocHJvcHMuZGVhbGVyLndlZWtIb3VycykubWFwKChkYXksIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyYXlcIiBrZXk9e2RheX0+XG5cdFx0XHRcdFx0XHRcdFx0e3Byb3BzLmRlYWxlci53ZWVrSG91cnNbZGF5XX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBncmF5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbnRhaW5lci1mbHVpZCB0ZXh0LWxlZnRcIj5cblx0XHRcdFx0XHR7cHJvcHMuZGVhbGVyLmNlcnRpZmljYXRpb25zLm1hcCgoY2VydGlmaWNhdGlvbk9iaiwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02XCIga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2VydGlmaWNhdGlvbk9iai5jbGFzc05hbWV9IC8+XG5cdFx0XHRcdFx0XHRcdHtjZXJ0aWZpY2F0aW9uT2JqLmNlcnRpZmljYXRpb259XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj47XG5cbndpbmRvdy5EZWFsZXJFbnRyeSA9IERlYWxlckVudHJ5O1xuIl19