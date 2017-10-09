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
							React.createElement("span", { className: "teal " + (props.contactProperties.name ? "fa fa-check-circle-o" : "fa fa-circle-o") })
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
							React.createElement("span", { className: "teal " + (props.contactProperties.number ? "fa fa-check-circle-o" : "fa fa-circle-o") })
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
							React.createElement("span", { className: "teal " + (props.contactProperties.address ? "fa fa-check-circle-o" : "fa fa-circle-o") })
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
						{ className: "send-email-2 teal" },
						"Send"
					),
					React.createElement(
						"p",
						{ className: "send-email-1" },
						"Send my email",
						React.createElement("span", { className: "glyphicon glyphicon-chevron-right teal" })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbnRhY3QuanN4Il0sIm5hbWVzIjpbIkNvbnRhY3QiLCJwcm9wcyIsImNsb3NlTW9kYWwiLCJkZWFsZXJOYW1lIiwiY29udGFjdFByb3BlcnRpZXMiLCJuYW1lIiwiaGFuZGxlRm9ybUlucHV0Q2hhbmdlIiwiZSIsIm51bWJlciIsImFkZHJlc3MiLCJjb21tZW50cyIsInRvZ2dsZWQiLCJvd25Qb29sT3JTcGEiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsUUFDYjtBQUFBO0FBQUEsSUFBSyxXQUFVLHdCQUFmO0FBQ0M7QUFBQTtBQUFBLEtBQUssV0FBVSxhQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSx1Q0FBZjtBQUNDLGtDQUFNLFdBQVUsa0NBQWhCLEVBQW1ELFNBQVNDLE1BQU1DLFVBQWxFLEdBREQ7QUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkQ7QUFHQztBQUFBO0FBQUEsT0FBRyxXQUFVLHFCQUFiO0FBQ0VELFdBQU1FO0FBRFI7QUFIRDtBQURELEdBREQ7QUFVQztBQUFBO0FBQUEsS0FBSyxXQUFVLGlCQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxNQUFmO0FBQ0M7QUFBQTtBQUFBLE9BQUcsV0FBVSxzQkFBYjtBQUFBO0FBQzhCRixXQUFNRSxVQURwQztBQUFBO0FBQUE7QUFERCxJQUREO0FBTUM7QUFBQTtBQUFBLE1BQUssV0FBVSxpQ0FBZjtBQUNDO0FBQUE7QUFBQSxPQUFNLFdBQVUsTUFBaEI7QUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLCtCQUFmO0FBQ0M7QUFBQTtBQUFBLFNBQUssV0FBVSxtQkFBZjtBQUNDO0FBQUE7QUFBQSxVQUFPLFdBQVUsWUFBakI7QUFBQTtBQUFBLFFBREQ7QUFFQyxxQ0FBTSxzQkFBbUJGLE1BQU1HLGlCQUFOLENBQXdCQyxJQUF4Qiw0Q0FBbkIsQ0FBTjtBQUZELE9BREQ7QUFLQztBQUNDLGFBQUssTUFETjtBQUVDLGNBQU9KLE1BQU1HLGlCQUFOLENBQXdCQyxJQUZoQztBQUdDLGFBQUssTUFITjtBQUlDLGtCQUFVLGNBSlg7QUFLQyxpQkFBVTtBQUFBLGVBQUtKLE1BQU1LLHFCQUFOLENBQTRCQyxDQUE1QixDQUFMO0FBQUE7QUFMWDtBQUxELE1BREQ7QUFjQztBQUFBO0FBQUEsUUFBSyxXQUFVLDJDQUFmO0FBQ0M7QUFBQTtBQUFBLFNBQUssV0FBVSxtQkFBZjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERDtBQUdDLHFDQUFNLHNCQUFtQk4sTUFBTUcsaUJBQU4sQ0FBd0JJLE1BQXhCLDRDQUFuQixDQUFOO0FBSEQsT0FERDtBQU1DO0FBQ0MsYUFBSyxNQUROO0FBRUMsY0FBT1AsTUFBTUcsaUJBQU4sQ0FBd0JJLE1BRmhDO0FBR0MsYUFBSyxRQUhOO0FBSUMsa0JBQVUsY0FKWDtBQUtDLGlCQUFVO0FBQUEsZUFBS1AsTUFBTUsscUJBQU4sQ0FBNEJDLENBQTVCLENBQUw7QUFBQTtBQUxYO0FBTkQsTUFkRDtBQTRCQztBQUFBO0FBQUEsUUFBSyxXQUFVLCtCQUFmO0FBQ0M7QUFBQTtBQUFBLFNBQUssV0FBVSxtQkFBZjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERDtBQUdDLHFDQUFNLHNCQUFtQk4sTUFBTUcsaUJBQU4sQ0FBd0JLLE9BQXhCLDRDQUFuQixDQUFOO0FBSEQsT0FERDtBQU9DO0FBQ0MsYUFBSyxNQUROO0FBRUMsY0FBT1IsTUFBTUcsaUJBQU4sQ0FBd0JLLE9BRmhDO0FBR0MsYUFBSyxTQUhOO0FBSUMsa0JBQVUsY0FKWDtBQUtDLGlCQUFVO0FBQUEsZUFBS1IsTUFBTUsscUJBQU4sQ0FBNEJDLENBQTVCLENBQUw7QUFBQTtBQUxYO0FBUEQsTUE1QkQ7QUEyQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSwrQkFBZjtBQUNDO0FBQUE7QUFBQSxTQUFLLFdBQVUsbUJBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQ7QUFFQztBQUFBO0FBQUEsVUFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBO0FBRkQsT0FERDtBQUtDO0FBQ0MsYUFBSyxNQUROO0FBRUMsY0FBT04sTUFBTUcsaUJBQU4sQ0FBd0JNLFFBRmhDO0FBR0MsYUFBSyxVQUhOO0FBSUMsa0JBQVUsY0FKWDtBQUtDLGFBQUssR0FMTjtBQU1DLGlCQUFVO0FBQUEsZUFBS1QsTUFBTUsscUJBQU4sQ0FBNEJDLENBQTVCLENBQUw7QUFBQTtBQU5YO0FBTEQsTUEzQ0Q7QUF5REM7QUFBQTtBQUFBLFFBQUssV0FBVSxvQkFBZjtBQUNDO0FBQUE7QUFBQSxTQUFLLFdBQVUsbUJBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQ7QUFFQztBQUFBO0FBQUEsVUFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBO0FBRkQsT0FERDtBQU1DO0FBQUE7QUFBQSxTQUFLLFdBQVUsbUJBQWY7QUFDQztBQUFBO0FBQUEsVUFBSyxXQUFVLDBCQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQ0MsOENBQWlDTixNQUFNVSxPQUFOLHNDQUFqQyxDQUREO0FBRUMsbUJBQVM7QUFBQSxrQkFBS1YsTUFBTVcsWUFBTixDQUFtQixLQUFuQixFQUEwQkwsQ0FBMUIsQ0FBTDtBQUFBO0FBRlY7QUFBQTtBQUFBLFNBREQ7QUFPQztBQUFBO0FBQUE7QUFDQyw2Q0FBZ0NOLE1BQU1VLE9BQU4sS0FBa0IsS0FBbEIsc0NBQWhDLENBREQ7QUFFQyxtQkFBUztBQUFBLGtCQUFLVixNQUFNVyxZQUFOLENBQW1CLElBQW5CLEVBQXlCTCxDQUF6QixDQUFMO0FBQUE7QUFGVjtBQUFBO0FBQUE7QUFQRCxRQUREO0FBZUM7QUFBQTtBQUFBLFVBQUksV0FBVSw0QkFBZDtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxZQUFNLFdBQVUsaUJBQWhCO0FBQ0MseUNBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQVUsc0JBQTlCO0FBREQsVUFERDtBQUFBO0FBQUEsU0FERDtBQU9DO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNDLHlDQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLHFCQUE5QjtBQURELFVBREQ7QUFBQTtBQUFBO0FBUEQ7QUFmRDtBQU5EO0FBekRELEtBREQ7QUFnR0M7QUFBQTtBQUFBLE9BQUssV0FBVSxzQkFBZjtBQUNDO0FBQUE7QUFBQSxRQUFHLFdBQVUsbUJBQWI7QUFBQTtBQUFBLE1BREQ7QUFFQztBQUFBO0FBQUEsUUFBRyxXQUFVLGNBQWI7QUFBQTtBQUNjLG9DQUFNLFdBQVUsd0NBQWhCO0FBRGQ7QUFGRDtBQWhHRDtBQU5ELEdBVkQ7QUF3SEM7QUFBQTtBQUFBLEtBQVEsV0FBVSw4QkFBbEI7QUFDQztBQUFBO0FBQUEsTUFBRyxXQUFVLDBCQUFiO0FBQUE7QUFBQTtBQUREO0FBeEhELEVBRGE7QUFBQSxDQUFkOztBQWlJQU0sT0FBT2IsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb250YWN0ID0gcHJvcHMgPT5cblx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWNhcmQtY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXRvcFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29udGFjdC10b3AtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWNsb3NlIGNsb3NlLWNvbnRhY3QtYnV0dG9uXCIgb25DbGljaz17cHJvcHMuY2xvc2VNb2RhbH0gLz5cblx0XHRcdFx0PHA+RU1BSUw8L3A+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbnRhY3QtZGVhbGVyLW5hbWVcIj5cblx0XHRcdFx0XHR7cHJvcHMuZGVhbGVyTmFtZX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JheVwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJiZWxvdy1jb250YWN0LWhlYWRlclwiPlxuXHRcdFx0XHRcdEZpbGwgb3V0IHRoZSBmb3JtIGJlbG93IGFuZCB7cHJvcHMuZGVhbGVyTmFtZX0gd2lsbCBnZXQgaW4gdG91Y2guXG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29udGFpbmVyLWVtYWlsXCI+XG5cdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29udGFjdC1mb3JtLWxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJpY29uLWxhYmVsXCI+Rmlyc3QgYW5kIGxhc3QgbmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17YHRlYWwgJHtwcm9wcy5jb250YWN0UHJvcGVydGllcy5uYW1lID8gYGZhIGZhLWNoZWNrLWNpcmNsZS1vYCA6IGBmYSBmYS1jaXJjbGUtb2B9YH0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLmNvbnRhY3RQcm9wZXJ0aWVzLm5hbWV9XG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gcHJvcHMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlKGUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29udGFjdC1mb3JtLWxhYmVsIHBob25lLWxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5QaG9uZSBudW1iZXI8L2xhYmVsPlxuXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17YHRlYWwgJHtwcm9wcy5jb250YWN0UHJvcGVydGllcy5udW1iZXIgPyBgZmEgZmEtY2hlY2stY2lyY2xlLW9gIDogYGZhIGZhLWNpcmNsZS1vYH1gfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuY29udGFjdFByb3BlcnRpZXMubnVtYmVyfVxuXHRcdFx0XHRcdFx0XHRuYW1lPVwibnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gcHJvcHMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlKGUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29udGFjdC1mb3JtLWxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cblxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2B0ZWFsICR7cHJvcHMuY29udGFjdFByb3BlcnRpZXMuYWRkcmVzcyA/IGBmYSBmYS1jaGVjay1jaXJjbGUtb2AgOiBgZmEgZmEtY2lyY2xlLW9gfWB9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLmNvbnRhY3RQcm9wZXJ0aWVzLmFkZHJlc3N9XG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJhZGRyZXNzXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gcHJvcHMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlKGUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29udGFjdC1mb3JtLWxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5Db21tZW50cyBvciBxdWVzdGlvbnM8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJvcHRpb25hbCBncmF5XCI+T3B0aW9uYWw8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtwcm9wcy5jb250YWN0UHJvcGVydGllcy5jb21tZW50c31cblx0XHRcdFx0XHRcdFx0bmFtZT1cImNvbW1lbnRzXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0cm93cz1cIjNcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBwcm9wcy5oYW5kbGVGb3JtSW5wdXRDaGFuZ2UoZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9vbC1zcGEtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5EbyB5b3UgY3VycmVudGx5IG93biBhIHBvb2wgb3Igc3BhPzwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm9wdGlvbmFsIGdyYXlcIj5PcHRpb25hbDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm93bi1zcGEtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1idXR0b24tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgY29udGFjdC15ZXMtYnV0dG9uICR7cHJvcHMudG9nZ2xlZCA/IGBidXR0b24tY2xpY2tlZGAgOiBgbm8tcG9vbC1vci1zcGFgfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlID0+IHByb3BzLm93blBvb2xPclNwYSgneWVzJywgZSl9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0WWVzXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgY29udGFjdC1uby1idXR0b24gJHtwcm9wcy50b2dnbGVkID09PSBmYWxzZSA/IGBidXR0b24tY2xpY2tlZGAgOiBgbm8tcG9vbC1vci1zcGFgfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlID0+IHByb3BzLm93blBvb2xPclNwYSgnbm8nLCBlKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHROb1xuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImNvbnRhY3QtY2hlY2tib3gtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibm8tcGFkZGluZy1sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJjb250YWN0LXllcy1jaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRZZXNcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3NOYW1lPVwiY29udGFjdC1uby1jaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHROb1xuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlbmQtZW1haWwtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic2VuZC1lbWFpbC0yIHRlYWxcIj5TZW5kPC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNlbmQtZW1haWwtMVwiPlxuXHRcdFx0XHRcdFx0U2VuZCBteSBlbWFpbDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodCB0ZWFsXCIgLz5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjb250YWluZXItZm9vdGVyXCI+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJjb250YWN0LWZvb3Rlci1wYXJhZ3JhcGhcIj5cblx0XHRcdFx0KkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmVcblx0XHRcdFx0bWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4LlxuXHRcdFx0PC9wPlxuXHRcdDwvZm9vdGVyPlxuXHQ8L2Rpdj47XG5cbndpbmRvdy5Db250YWN0ID0gQ29udGFjdDtcbiJdfQ==