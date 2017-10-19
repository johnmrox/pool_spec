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

Contact.propTypes = {
	closeModal: PropTypes.func.isRequired,
	dealerName: PropTypes.string.isRequired,
	contactProperties: PropTypes.object.isRequired,
	handleFormInputChange: PropTypes.func.isRequired,
	ownPoolOrSpa: PropTypes.func.isRequired,
	toggled: PropTypes.string.isRequired
};

window.Contact = Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbnRhY3QuanN4Il0sIm5hbWVzIjpbIkNvbnRhY3QiLCJwcm9wcyIsImNsb3NlTW9kYWwiLCJkZWFsZXJOYW1lIiwiY29udGFjdFByb3BlcnRpZXMiLCJuYW1lIiwiaGFuZGxlRm9ybUlucHV0Q2hhbmdlIiwiZSIsIm51bWJlciIsImFkZHJlc3MiLCJjb21tZW50cyIsInRvZ2dsZWQiLCJvd25Qb29sT3JTcGEiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9iamVjdCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxRQUNiO0FBQUE7QUFBQSxJQUFLLFdBQVUsd0JBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLGFBQWY7QUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLHVDQUFmO0FBQ0Msa0NBQU0sV0FBVSxrQ0FBaEIsRUFBbUQsU0FBU0MsTUFBTUMsVUFBbEUsR0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRDtBQUdDO0FBQUE7QUFBQSxPQUFHLFdBQVUscUJBQWI7QUFDRUQsV0FBTUU7QUFEUjtBQUhEO0FBREQsR0FERDtBQVVDO0FBQUE7QUFBQSxLQUFLLFdBQVUsaUJBQWY7QUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLE1BQWY7QUFDQztBQUFBO0FBQUEsT0FBRyxXQUFVLHNCQUFiO0FBQUE7QUFDOEJGLFdBQU1FLFVBRHBDO0FBQUE7QUFBQTtBQURELElBREQ7QUFNQztBQUFBO0FBQUEsTUFBSyxXQUFVLGlDQUFmO0FBQ0M7QUFBQTtBQUFBLE9BQU0sV0FBVSxNQUFoQjtBQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsK0JBQWY7QUFDQztBQUFBO0FBQUEsU0FBSyxXQUFVLG1CQUFmO0FBQ0M7QUFBQTtBQUFBLFVBQU8sV0FBVSxZQUFqQjtBQUFBO0FBQUEsUUFERDtBQUVDLHFDQUFNLHdCQUFxQkYsTUFBTUcsaUJBQU4sQ0FB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QTtBQUNDO0FBQUE7QUFBQTtBQUNDLHlDQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLHFCQUE5QjtBQURELFVBREQ7QUFBQTtBQUFBO0FBUEQ7QUFmRDtBQU5EO0FBN0RELEtBREQ7QUFvR0M7QUFBQTtBQUFBLE9BQUssV0FBVSxzQkFBZjtBQUNDO0FBQUE7QUFBQSxRQUFHLFdBQVUscUJBQWI7QUFBQTtBQUFBLE1BREQ7QUFFQztBQUFBO0FBQUEsUUFBRyxXQUFVLGNBQWI7QUFBQTtBQUNjLG9DQUFNLFdBQVUsMENBQWhCO0FBRGQ7QUFGRDtBQXBHRDtBQU5ELEdBVkQ7QUE0SEM7QUFBQTtBQUFBLEtBQVEsV0FBVSw4QkFBbEI7QUFDQztBQUFBO0FBQUEsTUFBRyxXQUFVLDBCQUFiO0FBQUE7QUFBQTtBQUREO0FBNUhELEVBRGE7QUFBQSxDQUFkOztBQXFJQVAsUUFBUWEsU0FBUixHQUFvQjtBQUNuQlgsYUFBWVksVUFBVUMsSUFBVixDQUFlQyxVQURSO0FBRW5CYixhQUFZVyxVQUFVRyxNQUFWLENBQWlCRCxVQUZWO0FBR25CWixvQkFBbUJVLFVBQVVJLE1BQVYsQ0FBaUJGLFVBSGpCO0FBSW5CVix3QkFBdUJRLFVBQVVDLElBQVYsQ0FBZUMsVUFKbkI7QUFLbkJKLGVBQWNFLFVBQVVDLElBQVYsQ0FBZUMsVUFMVjtBQU1uQkwsVUFBU0csVUFBVUcsTUFBVixDQUFpQkQ7QUFOUCxDQUFwQjs7QUFTQUcsT0FBT25CLE9BQVAsR0FBaUJBLE9BQWpCIiwiZmlsZSI6ImNvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29udGFjdCA9IHByb3BzID0+XG5cdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jYXJkLWNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC10b3BcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvbnRhY3QtdG9wLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZSBjbG9zZS1jb250YWN0LWJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLmNsb3NlTW9kYWx9IC8+XG5cdFx0XHRcdDxwPkVNQUlMPC9wPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb250YWN0LWRlYWxlci1uYW1lXCI+XG5cdFx0XHRcdFx0e3Byb3BzLmRlYWxlck5hbWV9XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyYXlcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYmVsb3ctY29udGFjdC1oZWFkZXJcIj5cblx0XHRcdFx0XHRGaWxsIG91dCB0aGUgZm9ybSBiZWxvdyBhbmQge3Byb3BzLmRlYWxlck5hbWV9IHdpbGwgZ2V0IGluIHRvdWNoLlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvbnRhaW5lci1lbWFpbFwiPlxuXHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbnRhY3QtZm9ybS1sYWJlbFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxhYmVsLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiaWNvbi1sYWJlbFwiPkZpcnN0IGFuZCBsYXN0IG5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2BhY2NlbnQgJHtwcm9wcy5jb250YWN0UHJvcGVydGllcy5uYW1lID8gYGZhIGZhLWNoZWNrLWNpcmNsZS1vYCA6IGBmYSBmYS1jaXJjbGUtb2B9YH0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLmNvbnRhY3RQcm9wZXJ0aWVzLm5hbWV9XG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gcHJvcHMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlKGUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29udGFjdC1mb3JtLWxhYmVsIHBob25lLWxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5QaG9uZSBudW1iZXI8L2xhYmVsPlxuXG5cdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYWNjZW50ICR7cHJvcHMuY29udGFjdFByb3BlcnRpZXMubnVtYmVyID8gYGZhIGZhLWNoZWNrLWNpcmNsZS1vYCA6IGBmYSBmYS1jaXJjbGUtb2B9YH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLmNvbnRhY3RQcm9wZXJ0aWVzLm51bWJlcn1cblx0XHRcdFx0XHRcdFx0bmFtZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHByb3BzLmhhbmRsZUZvcm1JbnB1dENoYW5nZShlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbnRhY3QtZm9ybS1sYWJlbFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxhYmVsLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+RW1haWwgYWRkcmVzczwvbGFiZWw+XG5cblx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BhY2NlbnQgJHtwcm9wcy5jb250YWN0UHJvcGVydGllcy5hZGRyZXNzID8gYGZhIGZhLWNoZWNrLWNpcmNsZS1vYCA6IGBmYSBmYS1jaXJjbGUtb2B9YH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuY29udGFjdFByb3BlcnRpZXMuYWRkcmVzc31cblx0XHRcdFx0XHRcdFx0bmFtZT1cImFkZHJlc3NcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBwcm9wcy5oYW5kbGVGb3JtSW5wdXRDaGFuZ2UoZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb250YWN0LWZvcm0tbGFiZWxcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1sYWJlbC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPkNvbW1lbnRzIG9yIHF1ZXN0aW9uczwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm9wdGlvbmFsIGdyYXlcIj5PcHRpb25hbDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHRleHRhcmVhXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLmNvbnRhY3RQcm9wZXJ0aWVzLmNvbW1lbnRzfVxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiY29tbWVudHNcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRyb3dzPVwiM1wiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHByb3BzLmhhbmRsZUZvcm1JbnB1dENoYW5nZShlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb29sLXNwYS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1sYWJlbC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPkRvIHlvdSBjdXJyZW50bHkgb3duIGEgcG9vbCBvciBzcGE/PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwib3B0aW9uYWwgZ3JheVwiPk9wdGlvbmFsPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3duLXNwYS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWJ1dHRvbi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bjb250YWN0LXllcy1idXR0b24gJHtwcm9wcy50b2dnbGVkID8gYGJ1dHRvbi1jbGlja2VkYCA6IGBuby1wb29sLW9yLXNwYWB9YH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2UgPT4gcHJvcHMub3duUG9vbE9yU3BhKCd5ZXMnLCBlKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRZZXNcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bjb250YWN0LW5vLWJ1dHRvbiAke3Byb3BzLnRvZ2dsZWQgPT09IGZhbHNlID8gYGJ1dHRvbi1jbGlja2VkYCA6IGBuby1wb29sLW9yLXNwYWB9YH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2UgPT4gcHJvcHMub3duUG9vbE9yU3BhKCdubycsIGUpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdE5vXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiY29udGFjdC1jaGVja2JveC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuby1wYWRkaW5nLWxlZnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImNvbnRhY3QteWVzLWNoZWNrYm94XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFllc1xuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJjb250YWN0LW5vLWNoZWNrYm94XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdE5vXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VuZC1lbWFpbC1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzZW5kLWVtYWlsLTIgYWNjZW50XCI+U2VuZDwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzZW5kLWVtYWlsLTFcIj5cblx0XHRcdFx0XHRcdFNlbmQgbXkgZW1haWw8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQgYWNjZW50XCIgLz5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjb250YWluZXItZm9vdGVyXCI+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJjb250YWN0LWZvb3Rlci1wYXJhZ3JhcGhcIj5cblx0XHRcdFx0KkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmVcblx0XHRcdFx0bWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4LlxuXHRcdFx0PC9wPlxuXHRcdDwvZm9vdGVyPlxuXHQ8L2Rpdj47XG5cbkNvbnRhY3QucHJvcFR5cGVzID0ge1xuXHRjbG9zZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRkZWFsZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGNvbnRhY3RQcm9wZXJ0aWVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cdGhhbmRsZUZvcm1JbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0b3duUG9vbE9yU3BhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHR0b2dnbGVkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5Db250YWN0ID0gQ29udGFjdDtcbiJdfQ==