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
	contactProperties: PropTypes.shape({
		name: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired,
		address: PropTypes.string.isRequired,
		comments: PropTypes.string.isRequired,
		own: PropTypes.bool.isRequired
	}).isRequired,
	handleFormInputChange: PropTypes.func.isRequired,
	ownPoolOrSpa: PropTypes.func.isRequired,
	toggled: PropTypes.string.isRequired
};

window.Contact = Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbnRhY3QuanN4Il0sIm5hbWVzIjpbIkNvbnRhY3QiLCJwcm9wcyIsImNsb3NlTW9kYWwiLCJkZWFsZXJOYW1lIiwiY29udGFjdFByb3BlcnRpZXMiLCJuYW1lIiwiaGFuZGxlRm9ybUlucHV0Q2hhbmdlIiwiZSIsIm51bWJlciIsImFkZHJlc3MiLCJjb21tZW50cyIsInRvZ2dsZWQiLCJvd25Qb29sT3JTcGEiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsInNoYXBlIiwib3duIiwiYm9vbCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxRQUNiO0FBQUE7QUFBQSxJQUFLLFdBQVUsd0JBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLGFBQWY7QUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLHVDQUFmO0FBQ0Msa0NBQU0sV0FBVSxrQ0FBaEIsRUFBbUQsU0FBU0MsTUFBTUMsVUFBbEUsR0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRDtBQUdDO0FBQUE7QUFBQSxPQUFHLFdBQVUscUJBQWI7QUFDRUQsV0FBTUU7QUFEUjtBQUhEO0FBREQsR0FERDtBQVVDO0FBQUE7QUFBQSxLQUFLLFdBQVUsaUJBQWY7QUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLE1BQWY7QUFDQztBQUFBO0FBQUEsT0FBRyxXQUFVLHNCQUFiO0FBQUE7QUFDOEJGLFdBQU1FLFVBRHBDO0FBQUE7QUFBQTtBQURELElBREQ7QUFNQztBQUFBO0FBQUEsTUFBSyxXQUFVLGlDQUFmO0FBQ0M7QUFBQTtBQUFBLE9BQU0sV0FBVSxNQUFoQjtBQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsK0JBQWY7QUFDQztBQUFBO0FBQUEsU0FBSyxXQUFVLG1CQUFmO0FBQ0M7QUFBQTtBQUFBLFVBQU8sV0FBVSxZQUFqQjtBQUFBO0FBQUEsUUFERDtBQUVDLHFDQUFNLHdCQUFxQkYsTUFBTUcsaUJBQU4sQ0FBd0JDLElBQXhCLDRDQUFyQixDQUFOO0FBRkQsT0FERDtBQUtDO0FBQ0MsYUFBSyxNQUROO0FBRUMsY0FBT0osTUFBTUcsaUJBQU4sQ0FBd0JDLElBRmhDO0FBR0MsYUFBSyxNQUhOO0FBSUMsa0JBQVUsY0FKWDtBQUtDLGlCQUFVO0FBQUEsZUFBS0osTUFBTUsscUJBQU4sQ0FBNEJDLENBQTVCLENBQUw7QUFBQTtBQUxYO0FBTEQsTUFERDtBQWNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsMkNBQWY7QUFDQztBQUFBO0FBQUEsU0FBSyxXQUFVLG1CQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUREO0FBR0M7QUFDQyxnQ0FBcUJOLE1BQU1HLGlCQUFOLENBQXdCSSxNQUF4Qiw0Q0FBckI7QUFERDtBQUhELE9BREQ7QUFRQztBQUNDLGFBQUssTUFETjtBQUVDLGNBQU9QLE1BQU1HLGlCQUFOLENBQXdCSSxNQUZoQztBQUdDLGFBQUssUUFITjtBQUlDLGtCQUFVLGNBSlg7QUFLQyxpQkFBVTtBQUFBLGVBQUtQLE1BQU1LLHFCQUFOLENBQTRCQyxDQUE1QixDQUFMO0FBQUE7QUFMWDtBQVJELE1BZEQ7QUE4QkM7QUFBQTtBQUFBLFFBQUssV0FBVSwrQkFBZjtBQUNDO0FBQUE7QUFBQSxTQUFLLFdBQVUsbUJBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQ7QUFHQztBQUNDLGdDQUFxQk4sTUFBTUcsaUJBQU4sQ0FBd0JLLE9BQXhCLDRDQUFyQjtBQUREO0FBSEQsT0FERDtBQVNDO0FBQ0MsYUFBSyxNQUROO0FBRUMsY0FBT1IsTUFBTUcsaUJBQU4sQ0FBd0JLLE9BRmhDO0FBR0MsYUFBSyxTQUhOO0FBSUMsa0JBQVUsY0FKWDtBQUtDLGlCQUFVO0FBQUEsZUFBS1IsTUFBTUsscUJBQU4sQ0FBNEJDLENBQTVCLENBQUw7QUFBQTtBQUxYO0FBVEQsTUE5QkQ7QUErQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSwrQkFBZjtBQUNDO0FBQUE7QUFBQSxTQUFLLFdBQVUsbUJBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQ7QUFFQztBQUFBO0FBQUEsVUFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBO0FBRkQsT0FERDtBQUtDO0FBQ0MsYUFBSyxNQUROO0FBRUMsY0FBT04sTUFBTUcsaUJBQU4sQ0FBd0JNLFFBRmhDO0FBR0MsYUFBSyxVQUhOO0FBSUMsa0JBQVUsY0FKWDtBQUtDLGFBQUssR0FMTjtBQU1DLGlCQUFVO0FBQUEsZUFBS1QsTUFBTUsscUJBQU4sQ0FBNEJDLENBQTVCLENBQUw7QUFBQTtBQU5YO0FBTEQsTUEvQ0Q7QUE2REM7QUFBQTtBQUFBLFFBQUssV0FBVSxvQkFBZjtBQUNDO0FBQUE7QUFBQSxTQUFLLFdBQVUsbUJBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQ7QUFFQztBQUFBO0FBQUEsVUFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBO0FBRkQsT0FERDtBQU1DO0FBQUE7QUFBQSxTQUFLLFdBQVUsbUJBQWY7QUFDQztBQUFBO0FBQUEsVUFBSyxXQUFVLDBCQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQ0MsOENBQWlDTixNQUFNVSxPQUFOLHNDQUFqQyxDQUREO0FBRUMsbUJBQVM7QUFBQSxrQkFBS1YsTUFBTVcsWUFBTixDQUFtQixLQUFuQixFQUEwQkwsQ0FBMUIsQ0FBTDtBQUFBO0FBRlY7QUFBQTtBQUFBLFNBREQ7QUFPQztBQUFBO0FBQUE7QUFDQyw2Q0FBZ0NOLE1BQU1VLE9BQU4sS0FBa0IsS0FBbEIsc0NBQWhDLENBREQ7QUFFQyxtQkFBUztBQUFBLGtCQUFLVixNQUFNVyxZQUFOLENBQW1CLElBQW5CLEVBQXlCTCxDQUF6QixDQUFMO0FBQUE7QUFGVjtBQUFBO0FBQUE7QUFQRCxRQUREO0FBZUM7QUFBQTtBQUFBLFVBQUksV0FBVSw0QkFBZDtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxZQUFNLFdBQVUsaUJBQWhCO0FBQ0MseUNBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQVUsc0JBQTlCO0FBREQsVUFERDtBQUFBO0FBQUEsU0FERDtBQU9DO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNDLHlDQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLHFCQUE5QjtBQURELFVBREQ7QUFBQTtBQUFBO0FBUEQ7QUFmRDtBQU5EO0FBN0RELEtBREQ7QUFvR0M7QUFBQTtBQUFBLE9BQUssV0FBVSxzQkFBZjtBQUNDO0FBQUE7QUFBQSxRQUFHLFdBQVUscUJBQWI7QUFBQTtBQUFBLE1BREQ7QUFFQztBQUFBO0FBQUEsUUFBRyxXQUFVLGNBQWI7QUFBQTtBQUNjLG9DQUFNLFdBQVUsMENBQWhCO0FBRGQ7QUFGRDtBQXBHRDtBQU5ELEdBVkQ7QUE0SEM7QUFBQTtBQUFBLEtBQVEsV0FBVSw4QkFBbEI7QUFDQztBQUFBO0FBQUEsTUFBRyxXQUFVLDBCQUFiO0FBQUE7QUFBQTtBQUREO0FBNUhELEVBRGE7QUFBQSxDQUFkOztBQXFJQVAsUUFBUWEsU0FBUixHQUFvQjtBQUNuQlgsYUFBWVksVUFBVUMsSUFBVixDQUFlQyxVQURSO0FBRW5CYixhQUFZVyxVQUFVRyxNQUFWLENBQWlCRCxVQUZWO0FBR25CWixvQkFBbUJVLFVBQVVJLEtBQVYsQ0FBZ0I7QUFDbENiLFFBQU1TLFVBQVVHLE1BQVYsQ0FBaUJELFVBRFc7QUFFbENSLFVBQVFNLFVBQVVHLE1BQVYsQ0FBaUJELFVBRlM7QUFHbENQLFdBQVNLLFVBQVVHLE1BQVYsQ0FBaUJELFVBSFE7QUFJbENOLFlBQVVJLFVBQVVHLE1BQVYsQ0FBaUJELFVBSk87QUFLbENHLE9BQUtMLFVBQVVNLElBQVYsQ0FBZUo7QUFMYyxFQUFoQixFQU1oQkEsVUFUZ0I7QUFVbkJWLHdCQUF1QlEsVUFBVUMsSUFBVixDQUFlQyxVQVZuQjtBQVduQkosZUFBY0UsVUFBVUMsSUFBVixDQUFlQyxVQVhWO0FBWW5CTCxVQUFTRyxVQUFVRyxNQUFWLENBQWlCRDtBQVpQLENBQXBCOztBQWVBSyxPQUFPckIsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb250YWN0ID0gcHJvcHMgPT5cblx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWNhcmQtY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXRvcFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29udGFjdC10b3AtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWNsb3NlIGNsb3NlLWNvbnRhY3QtYnV0dG9uXCIgb25DbGljaz17cHJvcHMuY2xvc2VNb2RhbH0gLz5cblx0XHRcdFx0PHA+RU1BSUw8L3A+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbnRhY3QtZGVhbGVyLW5hbWVcIj5cblx0XHRcdFx0XHR7cHJvcHMuZGVhbGVyTmFtZX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JheVwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJiZWxvdy1jb250YWN0LWhlYWRlclwiPlxuXHRcdFx0XHRcdEZpbGwgb3V0IHRoZSBmb3JtIGJlbG93IGFuZCB7cHJvcHMuZGVhbGVyTmFtZX0gd2lsbCBnZXQgaW4gdG91Y2guXG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29udGFpbmVyLWVtYWlsXCI+XG5cdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29udGFjdC1mb3JtLWxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJpY29uLWxhYmVsXCI+Rmlyc3QgYW5kIGxhc3QgbmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17YGFjY2VudCAke3Byb3BzLmNvbnRhY3RQcm9wZXJ0aWVzLm5hbWUgPyBgZmEgZmEtY2hlY2stY2lyY2xlLW9gIDogYGZhIGZhLWNpcmNsZS1vYH1gfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuY29udGFjdFByb3BlcnRpZXMubmFtZX1cblx0XHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBwcm9wcy5oYW5kbGVGb3JtSW5wdXRDaGFuZ2UoZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb250YWN0LWZvcm0tbGFiZWwgcGhvbmUtbGFiZWxcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1sYWJlbC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlBob25lIG51bWJlcjwvbGFiZWw+XG5cblx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BhY2NlbnQgJHtwcm9wcy5jb250YWN0UHJvcGVydGllcy5udW1iZXIgPyBgZmEgZmEtY2hlY2stY2lyY2xlLW9gIDogYGZhIGZhLWNpcmNsZS1vYH1gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuY29udGFjdFByb3BlcnRpZXMubnVtYmVyfVxuXHRcdFx0XHRcdFx0XHRuYW1lPVwibnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gcHJvcHMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlKGUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29udGFjdC1mb3JtLWxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cblxuXHRcdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGFjY2VudCAke3Byb3BzLmNvbnRhY3RQcm9wZXJ0aWVzLmFkZHJlc3MgPyBgZmEgZmEtY2hlY2stY2lyY2xlLW9gIDogYGZhIGZhLWNpcmNsZS1vYH1gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtwcm9wcy5jb250YWN0UHJvcGVydGllcy5hZGRyZXNzfVxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiYWRkcmVzc1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHByb3BzLmhhbmRsZUZvcm1JbnB1dENoYW5nZShlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbnRhY3QtZm9ybS1sYWJlbFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxhYmVsLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+Q29tbWVudHMgb3IgcXVlc3Rpb25zPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwib3B0aW9uYWwgZ3JheVwiPk9wdGlvbmFsPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuY29udGFjdFByb3BlcnRpZXMuY29tbWVudHN9XG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJjb21tZW50c1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdHJvd3M9XCIzXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gcHJvcHMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlKGUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvb2wtc3BhLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxhYmVsLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+RG8geW91IGN1cnJlbnRseSBvd24gYSBwb29sIG9yIHNwYT88L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJvcHRpb25hbCBncmF5XCI+T3B0aW9uYWw8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvd24tc3BhLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtYnV0dG9uLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGNvbnRhY3QteWVzLWJ1dHRvbiAke3Byb3BzLnRvZ2dsZWQgPyBgYnV0dG9uLWNsaWNrZWRgIDogYG5vLXBvb2wtb3Itc3BhYH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZSA9PiBwcm9wcy5vd25Qb29sT3JTcGEoJ3llcycsIGUpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFllc1xuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGNvbnRhY3Qtbm8tYnV0dG9uICR7cHJvcHMudG9nZ2xlZCA9PT0gZmFsc2UgPyBgYnV0dG9uLWNsaWNrZWRgIDogYG5vLXBvb2wtb3Itc3BhYH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZSA9PiBwcm9wcy5vd25Qb29sT3JTcGEoJ25vJywgZSl9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0Tm9cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJjb250YWN0LWNoZWNrYm94LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5vLXBhZGRpbmctbGVmdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3NOYW1lPVwiY29udGFjdC15ZXMtY2hlY2tib3hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0WWVzXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImNvbnRhY3Qtbm8tY2hlY2tib3hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0Tm9cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZW5kLWVtYWlsLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNlbmQtZW1haWwtMiBhY2NlbnRcIj5TZW5kPC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNlbmQtZW1haWwtMVwiPlxuXHRcdFx0XHRcdFx0U2VuZCBteSBlbWFpbDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodCBhY2NlbnRcIiAvPlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGNvbnRhaW5lci1mb290ZXJcIj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbnRhY3QtZm9vdGVyLXBhcmFncmFwaFwiPlxuXHRcdFx0XHQqTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZVxuXHRcdFx0XHRtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXguXG5cdFx0XHQ8L3A+XG5cdFx0PC9mb290ZXI+XG5cdDwvZGl2PjtcblxuQ29udGFjdC5wcm9wVHlwZXMgPSB7XG5cdGNsb3NlTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdGRlYWxlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y29udGFjdFByb3BlcnRpZXM6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0bmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdG51bWJlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGFkZHJlc3M6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjb21tZW50czogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdG93bjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxuXHR9KS5pc1JlcXVpcmVkLFxuXHRoYW5kbGVGb3JtSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdG93blBvb2xPclNwYTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0dG9nZ2xlZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuQ29udGFjdCA9IENvbnRhY3Q7XG4iXX0=