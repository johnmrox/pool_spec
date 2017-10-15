"use strict";

var Contact = function Contact(props) {
	return React.createElement(
		"div",
		{ className: "contact-card-container" },
		React.createElement(
			"div",
			{ className: "contact-top" },
			React.createElement(
				"div",
				{ className: "container-fluid contact-top-container" },
				React.createElement("span", { className: "fa fa-close close-contact-button", onClick: props.closeModal }),
				React.createElement(
					"p",
					null,
					"EMAIL"
				),
				React.createElement(
					"p",
					{ className: "contact-dealer-name" },
					props.dealerName
				)
			)
		),
		React.createElement(
			"div",
			{ className: "container-fluid" },
			React.createElement(
				"div",
				{ className: "gray" },
				React.createElement(
					"p",
					{ className: "below-contact-header" },
					"Fill out the form below and ",
					props.dealerName,
					" will get in touch."
				)
			),
			React.createElement(
				"div",
				{ className: "container-fluid container-email" },
				React.createElement(
					"form",
					{ className: "form" },
					React.createElement(
						"div",
						{ className: "form-group contact-form-label" },
						React.createElement(
							"div",
							{ className: "contact-label-row" },
							React.createElement(
								"label",
								{ className: "icon-label" },
								"First and last name"
							),
							React.createElement("span", { className: "accent " + (props.contactProperties.name ? "fa fa-check-circle-o" : "fa fa-circle-o") })
						),
						React.createElement("input", {
							type: "text",
							value: props.contactProperties.name,
							name: "name",
							className: "form-control",
							onChange: function onChange(e) {
								return props.handleFormInputChange(e);
							}
						})
					),
					React.createElement(
						"div",
						{ className: "form-group contact-form-label phone-label" },
						React.createElement(
							"div",
							{ className: "contact-label-row" },
							React.createElement(
								"label",
								null,
								"Phone number"
							),
							React.createElement("span", {
								className: "accent " + (props.contactProperties.number ? "fa fa-check-circle-o" : "fa fa-circle-o")
							})
						),
						React.createElement("input", {
							type: "text",
							value: props.contactProperties.number,
							name: "number",
							className: "form-control",
							onChange: function onChange(e) {
								return props.handleFormInputChange(e);
							}
						})
					),
					React.createElement(
						"div",
						{ className: "form-group contact-form-label" },
						React.createElement(
							"div",
							{ className: "contact-label-row" },
							React.createElement(
								"label",
								null,
								"Email address"
							),
							React.createElement("span", {
								className: "accent " + (props.contactProperties.address ? "fa fa-check-circle-o" : "fa fa-circle-o")
							})
						),
						React.createElement("input", {
							type: "text",
							value: props.contactProperties.address,
							name: "address",
							className: "form-control",
							onChange: function onChange(e) {
								return props.handleFormInputChange(e);
							}
						})
					),
					React.createElement(
						"div",
						{ className: "form-group contact-form-label" },
						React.createElement(
							"div",
							{ className: "contact-label-row" },
							React.createElement(
								"label",
								null,
								"Comments or questions"
							),
							React.createElement(
								"p",
								{ className: "optional gray" },
								"Optional"
							)
						),
						React.createElement("textarea", {
							type: "text",
							value: props.contactProperties.comments,
							name: "comments",
							className: "form-control",
							rows: "3",
							onChange: function onChange(e) {
								return props.handleFormInputChange(e);
							}
						})
					),
					React.createElement(
						"div",
						{ className: "pool-spa-container" },
						React.createElement(
							"div",
							{ className: "contact-label-row" },
							React.createElement(
								"label",
								null,
								"Do you currently own a pool or spa?"
							),
							React.createElement(
								"p",
								{ className: "optional gray" },
								"Optional"
							)
						),
						React.createElement(
							"div",
							{ className: "own-spa-container" },
							React.createElement(
								"div",
								{ className: "contact-button-container" },
								React.createElement(
									"button",
									{
										className: "contact-yes-button " + (props.toggled ? "button-clicked" : "no-pool-or-spa"),
										onClick: function onClick(e) {
											return props.ownPoolOrSpa('yes', e);
										}
									},
									"Yes"
								),
								React.createElement(
									"button",
									{
										className: "contact-no-button " + (props.toggled === false ? "button-clicked" : "no-pool-or-spa"),
										onClick: function onClick(e) {
											return props.ownPoolOrSpa('no', e);
										}
									},
									"No"
								)
							),
							React.createElement(
								"ul",
								{ className: "contact-checkbox-container" },
								React.createElement(
									"li",
									null,
									React.createElement(
										"span",
										{ className: "no-padding-left" },
										React.createElement("input", { type: "radio", className: "contact-yes-checkbox" })
									),
									"Yes"
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"span",
										null,
										React.createElement("input", { type: "radio", className: "contact-no-checkbox" })
									),
									"No"
								)
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "send-email-container" },
					React.createElement(
						"p",
						{ className: "send-email-2 accent" },
						"Send"
					),
					React.createElement(
						"p",
						{ className: "send-email-1" },
						"Send my email",
						React.createElement("span", { className: "glyphicon glyphicon-chevron-right accent" })
					)
				)
			)
		),
		React.createElement(
			"footer",
			{ className: "text-center container-footer" },
			React.createElement(
				"p",
				{ className: "contact-footer-paragraph" },
				"*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
			)
		)
	);
};

window.Contact = Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbnRhY3QuanN4Il0sIm5hbWVzIjpbIkNvbnRhY3QiLCJwcm9wcyIsImNsb3NlTW9kYWwiLCJkZWFsZXJOYW1lIiwiY29udGFjdFByb3BlcnRpZXMiLCJuYW1lIiwiaGFuZGxlRm9ybUlucHV0Q2hhbmdlIiwiZSIsIm51bWJlciIsImFkZHJlc3MiLCJjb21tZW50cyIsInRvZ2dsZWQiLCJvd25Qb29sT3JTcGEiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsUUFDYjtBQUFBO0FBQUEsSUFBSyxXQUFVLHdCQUFmO0FBQ0M7QUFBQTtBQUFBLEtBQUssV0FBVSxhQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSx1Q0FBZjtBQUNDLGtDQUFNLFdBQVUsa0NBQWhCLEVBQW1ELFNBQVNDLE1BQU1DLFVBQWxFLEdBREQ7QUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkQ7QUFHQztBQUFBO0FBQUEsT0FBRyxXQUFVLHFCQUFiO0FBQ0VELFdBQU1FO0FBRFI7QUFIRDtBQURELEdBREQ7QUFVQztBQUFBO0FBQUEsS0FBSyxXQUFVLGlCQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxNQUFmO0FBQ0M7QUFBQTtBQUFBLE9BQUcsV0FBVSxzQkFBYjtBQUFBO0FBQzhCRixXQUFNRSxVQURwQztBQUFBO0FBQUE7QUFERCxJQUREO0FBTUM7QUFBQTtBQUFBLE1BQUssV0FBVSxpQ0FBZjtBQUNDO0FBQUE7QUFBQSxPQUFNLFdBQVUsTUFBaEI7QUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLCtCQUFmO0FBQ0M7QUFBQTtBQUFBLFNBQUssV0FBVSxtQkFBZjtBQUNDO0FBQUE7QUFBQSxVQUFPLFdBQVUsWUFBakI7QUFBQTtBQUFBLFFBREQ7QUFFQyxxQ0FBTSx3QkFBcUJGLE1BQU1HLGlCQUFOLENBQXdCQyxJQUF4Qiw0Q0FBckIsQ0FBTjtBQUZELE9BREQ7QUFLQztBQUNDLGFBQUssTUFETjtBQUVDLGNBQU9K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QUREO0FBQUE7QUFBQTtBQVBEO0FBZkQ7QUFORDtBQTdERCxLQUREO0FBb0dDO0FBQUE7QUFBQSxPQUFLLFdBQVUsc0JBQWY7QUFDQztBQUFBO0FBQUEsUUFBRyxXQUFVLHFCQUFiO0FBQUE7QUFBQSxNQUREO0FBRUM7QUFBQTtBQUFBLFFBQUcsV0FBVSxjQUFiO0FBQUE7QUFDYyxvQ0FBTSxXQUFVLDBDQUFoQjtBQURkO0FBRkQ7QUFwR0Q7QUFORCxHQVZEO0FBNEhDO0FBQUE7QUFBQSxLQUFRLFdBQVUsOEJBQWxCO0FBQ0M7QUFBQTtBQUFBLE1BQUcsV0FBVSwwQkFBYjtBQUFBO0FBQUE7QUFERDtBQTVIRCxFQURhO0FBQUEsQ0FBZDs7QUFxSUFNLE9BQU9iLE9BQVAsR0FBaUJBLE9BQWpCIiwiZmlsZSI6ImNvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29udGFjdCA9IHByb3BzID0+XG5cdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jYXJkLWNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC10b3BcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvbnRhY3QtdG9wLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZSBjbG9zZS1jb250YWN0LWJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLmNsb3NlTW9kYWx9IC8+XG5cdFx0XHRcdDxwPkVNQUlMPC9wPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb250YWN0LWRlYWxlci1uYW1lXCI+XG5cdFx0XHRcdFx0e3Byb3BzLmRlYWxlck5hbWV9XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyYXlcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYmVsb3ctY29udGFjdC1oZWFkZXJcIj5cblx0XHRcdFx0XHRGaWxsIG91dCB0aGUgZm9ybSBiZWxvdyBhbmQge3Byb3BzLmRlYWxlck5hbWV9IHdpbGwgZ2V0IGluIHRvdWNoLlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvbnRhaW5lci1lbWFpbFwiPlxuXHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbnRhY3QtZm9ybS1sYWJlbFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxhYmVsLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiaWNvbi1sYWJlbFwiPkZpcnN0IGFuZCBsYXN0IG5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2BhY2NlbnQgJHtwcm9wcy5jb250YWN0UHJvcGVydGllcy5uYW1lID8gYGZhIGZhLWNoZWNrLWNpcmNsZS1vYCA6IGBmYSBmYS1jaXJjbGUtb2B9YH0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLmNvbnRhY3RQcm9wZXJ0aWVzLm5hbWV9XG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gcHJvcHMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlKGUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29udGFjdC1mb3JtLWxhYmVsIHBob25lLWxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5QaG9uZSBudW1iZXI8L2xhYmVsPlxuXG5cdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYWNjZW50ICR7cHJvcHMuY29udGFjdFByb3BlcnRpZXMubnVtYmVyID8gYGZhIGZhLWNoZWNrLWNpcmNsZS1vYCA6IGBmYSBmYS1jaXJjbGUtb2B9YH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLmNvbnRhY3RQcm9wZXJ0aWVzLm51bWJlcn1cblx0XHRcdFx0XHRcdFx0bmFtZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHByb3BzLmhhbmRsZUZvcm1JbnB1dENoYW5nZShlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbnRhY3QtZm9ybS1sYWJlbFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxhYmVsLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+RW1haWwgYWRkcmVzczwvbGFiZWw+XG5cblx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BhY2NlbnQgJHtwcm9wcy5jb250YWN0UHJvcGVydGllcy5hZGRyZXNzID8gYGZhIGZhLWNoZWNrLWNpcmNsZS1vYCA6IGBmYSBmYS1jaXJjbGUtb2B9YH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuY29udGFjdFByb3BlcnRpZXMuYWRkcmVzc31cblx0XHRcdFx0XHRcdFx0bmFtZT1cImFkZHJlc3NcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBwcm9wcy5oYW5kbGVGb3JtSW5wdXRDaGFuZ2UoZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb250YWN0LWZvcm0tbGFiZWxcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1sYWJlbC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPkNvbW1lbnRzIG9yIHF1ZXN0aW9uczwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm9wdGlvbmFsIGdyYXlcIj5PcHRpb25hbDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHRleHRhcmVhXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLmNvbnRhY3RQcm9wZXJ0aWVzLmNvbW1lbnRzfVxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiY29tbWVudHNcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRyb3dzPVwiM1wiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHByb3BzLmhhbmRsZUZvcm1JbnB1dENoYW5nZShlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb29sLXNwYS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1sYWJlbC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPkRvIHlvdSBjdXJyZW50bHkgb3duIGEgcG9vbCBvciBzcGE/PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwib3B0aW9uYWwgZ3JheVwiPk9wdGlvbmFsPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3duLXNwYS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWJ1dHRvbi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bjb250YWN0LXllcy1idXR0b24gJHtwcm9wcy50b2dnbGVkID8gYGJ1dHRvbi1jbGlja2VkYCA6IGBuby1wb29sLW9yLXNwYWB9YH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2UgPT4gcHJvcHMub3duUG9vbE9yU3BhKCd5ZXMnLCBlKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRZZXNcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bjb250YWN0LW5vLWJ1dHRvbiAke3Byb3BzLnRvZ2dsZWQgPT09IGZhbHNlID8gYGJ1dHRvbi1jbGlja2VkYCA6IGBuby1wb29sLW9yLXNwYWB9YH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2UgPT4gcHJvcHMub3duUG9vbE9yU3BhKCdubycsIGUpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdE5vXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiY29udGFjdC1jaGVja2JveC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuby1wYWRkaW5nLWxlZnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImNvbnRhY3QteWVzLWNoZWNrYm94XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFllc1xuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJjb250YWN0LW5vLWNoZWNrYm94XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdE5vXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VuZC1lbWFpbC1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzZW5kLWVtYWlsLTIgYWNjZW50XCI+U2VuZDwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzZW5kLWVtYWlsLTFcIj5cblx0XHRcdFx0XHRcdFNlbmQgbXkgZW1haWw8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQgYWNjZW50XCIgLz5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjb250YWluZXItZm9vdGVyXCI+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJjb250YWN0LWZvb3Rlci1wYXJhZ3JhcGhcIj5cblx0XHRcdFx0KkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmVcblx0XHRcdFx0bWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4LlxuXHRcdFx0PC9wPlxuXHRcdDwvZm9vdGVyPlxuXHQ8L2Rpdj47XG5cbndpbmRvdy5Db250YWN0ID0gQ29udGFjdDtcbiJdfQ==