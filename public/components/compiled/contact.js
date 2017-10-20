"use strict";

var Contact = function Contact(_ref) {
	var dealerName = _ref.dealerName,
	    closeModal = _ref.closeModal,
	    handleFormInputChange = _ref.handleFormInputChange,
	    ownPoolOrSpa = _ref.ownPoolOrSpa,
	    toggled = _ref.toggled,
	    contactProperties = _ref.contactProperties;
	return React.createElement(
		"div",
		{ className: "contact-card-container" },
		React.createElement(
			"div",
			{ className: "contact-top" },
			React.createElement(
				"div",
				{ className: "container-fluid contact-top-container" },
				React.createElement("span", { className: "fa fa-close close-contact-button", onClick: closeModal }),
				React.createElement(
					"p",
					null,
					"EMAIL"
				),
				React.createElement(
					"p",
					{ className: "contact-dealer-name" },
					dealerName
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
					dealerName,
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
							React.createElement("span", { className: "accent " + (contactProperties.name ? "fa fa-check-circle-o" : "fa fa-circle-o") })
						),
						React.createElement("input", {
							type: "text",
							value: contactProperties.name,
							name: "name",
							className: "form-control",
							onChange: function onChange(e) {
								return handleFormInputChange(e);
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
							React.createElement("span", { className: "accent " + (contactProperties.number ? "fa fa-check-circle-o" : "fa fa-circle-o") })
						),
						React.createElement("input", {
							type: "text",
							value: contactProperties.number,
							name: "number",
							className: "form-control",
							onChange: function onChange(e) {
								return handleFormInputChange(e);
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
							React.createElement("span", { className: "accent " + (contactProperties.address ? "fa fa-check-circle-o" : "fa fa-circle-o") })
						),
						React.createElement("input", {
							type: "text",
							value: contactProperties.address,
							name: "address",
							className: "form-control",
							onChange: function onChange(e) {
								return handleFormInputChange(e);
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
							value: contactProperties.comments,
							name: "comments",
							className: "form-control",
							rows: "3",
							onChange: function onChange(e) {
								return handleFormInputChange(e);
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
										className: "contact-yes-button " + (toggled ? "button-clicked" : "no-pool-or-spa"),
										onClick: function onClick(e) {
											return ownPoolOrSpa('yes', e);
										}
									},
									"Yes"
								),
								React.createElement(
									"button",
									{
										className: "contact-no-button " + (toggled === false ? "button-clicked" : "no-pool-or-spa"),
										onClick: function onClick(e) {
											return ownPoolOrSpa('no', e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbnRhY3QuanN4Il0sIm5hbWVzIjpbIkNvbnRhY3QiLCJkZWFsZXJOYW1lIiwiY2xvc2VNb2RhbCIsImhhbmRsZUZvcm1JbnB1dENoYW5nZSIsIm93blBvb2xPclNwYSIsInRvZ2dsZWQiLCJjb250YWN0UHJvcGVydGllcyIsIm5hbWUiLCJlIiwibnVtYmVyIiwiYWRkcmVzcyIsImNvbW1lbnRzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJzaGFwZSIsIm93biIsImJvb2wiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsS0FBR0MsVUFBSCxRQUFHQSxVQUFIO0FBQUEsS0FBZUMsVUFBZixRQUFlQSxVQUFmO0FBQUEsS0FBMkJDLHFCQUEzQixRQUEyQkEscUJBQTNCO0FBQUEsS0FBa0RDLFlBQWxELFFBQWtEQSxZQUFsRDtBQUFBLEtBQWdFQyxPQUFoRSxRQUFnRUEsT0FBaEU7QUFBQSxLQUF5RUMsaUJBQXpFLFFBQXlFQSxpQkFBekU7QUFBQSxRQUNiO0FBQUE7QUFBQSxJQUFLLFdBQVUsd0JBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLGFBQWY7QUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLHVDQUFmO0FBQ0Msa0NBQU0sV0FBVSxrQ0FBaEIsRUFBbUQsU0FBU0osVUFBNUQsR0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRDtBQUdDO0FBQUE7QUFBQSxPQUFHLFdBQVUscUJBQWI7QUFDRUQ7QUFERjtBQUhEO0FBREQsR0FERDtBQVVDO0FBQUE7QUFBQSxLQUFLLFdBQVUsaUJBQWY7QUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLE1BQWY7QUFDQztBQUFBO0FBQUEsT0FBRyxXQUFVLHNCQUFiO0FBQUE7QUFDOEJBLGVBRDlCO0FBQUE7QUFBQTtBQURELElBREQ7QUFNQztBQUFBO0FBQUEsTUFBSyxXQUFVLGlDQUFmO0FBQ0M7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YW1lLCBjbG9zZU1vZGFsLCBoYW5kbGVGb3JtSW5wdXRDaGFuZ2UsIG93blBvb2xPclNwYSwgdG9nZ2xlZCwgY29udGFjdFByb3BlcnRpZXMgfSkgPT5cblx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWNhcmQtY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXRvcFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29udGFjdC10b3AtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWNsb3NlIGNsb3NlLWNvbnRhY3QtYnV0dG9uXCIgb25DbGljaz17Y2xvc2VNb2RhbH0gLz5cblx0XHRcdFx0PHA+RU1BSUw8L3A+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbnRhY3QtZGVhbGVyLW5hbWVcIj5cblx0XHRcdFx0XHR7ZGVhbGVyTmFtZX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JheVwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJiZWxvdy1jb250YWN0LWhlYWRlclwiPlxuXHRcdFx0XHRcdEZpbGwgb3V0IHRoZSBmb3JtIGJlbG93IGFuZCB7ZGVhbGVyTmFtZX0gd2lsbCBnZXQgaW4gdG91Y2guXG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29udGFpbmVyLWVtYWlsXCI+XG5cdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29udGFjdC1mb3JtLWxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJpY29uLWxhYmVsXCI+Rmlyc3QgYW5kIGxhc3QgbmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17YGFjY2VudCAke2NvbnRhY3RQcm9wZXJ0aWVzLm5hbWUgPyBgZmEgZmEtY2hlY2stY2lyY2xlLW9gIDogYGZhIGZhLWNpcmNsZS1vYH1gfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17Y29udGFjdFByb3BlcnRpZXMubmFtZX1cblx0XHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBoYW5kbGVGb3JtSW5wdXRDaGFuZ2UoZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb250YWN0LWZvcm0tbGFiZWwgcGhvbmUtbGFiZWxcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1sYWJlbC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlBob25lIG51bWJlcjwvbGFiZWw+XG5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtgYWNjZW50ICR7Y29udGFjdFByb3BlcnRpZXMubnVtYmVyID8gYGZhIGZhLWNoZWNrLWNpcmNsZS1vYCA6IGBmYSBmYS1jaXJjbGUtb2B9YH0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2NvbnRhY3RQcm9wZXJ0aWVzLm51bWJlcn1cblx0XHRcdFx0XHRcdFx0bmFtZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IGhhbmRsZUZvcm1JbnB1dENoYW5nZShlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbnRhY3QtZm9ybS1sYWJlbFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxhYmVsLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+RW1haWwgYWRkcmVzczwvbGFiZWw+XG5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtgYWNjZW50ICR7Y29udGFjdFByb3BlcnRpZXMuYWRkcmVzcyA/IGBmYSBmYS1jaGVjay1jaXJjbGUtb2AgOiBgZmEgZmEtY2lyY2xlLW9gfWB9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2NvbnRhY3RQcm9wZXJ0aWVzLmFkZHJlc3N9XG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJhZGRyZXNzXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gaGFuZGxlRm9ybUlucHV0Q2hhbmdlKGUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29udGFjdC1mb3JtLWxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5Db21tZW50cyBvciBxdWVzdGlvbnM8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJvcHRpb25hbCBncmF5XCI+T3B0aW9uYWw8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtjb250YWN0UHJvcGVydGllcy5jb21tZW50c31cblx0XHRcdFx0XHRcdFx0bmFtZT1cImNvbW1lbnRzXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0cm93cz1cIjNcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBoYW5kbGVGb3JtSW5wdXRDaGFuZ2UoZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9vbC1zcGEtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5EbyB5b3UgY3VycmVudGx5IG93biBhIHBvb2wgb3Igc3BhPzwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm9wdGlvbmFsIGdyYXlcIj5PcHRpb25hbDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm93bi1zcGEtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1idXR0b24tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgY29udGFjdC15ZXMtYnV0dG9uICR7dG9nZ2xlZCA/IGBidXR0b24tY2xpY2tlZGAgOiBgbm8tcG9vbC1vci1zcGFgfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlID0+IG93blBvb2xPclNwYSgneWVzJywgZSl9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0WWVzXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgY29udGFjdC1uby1idXR0b24gJHt0b2dnbGVkID09PSBmYWxzZSA/IGBidXR0b24tY2xpY2tlZGAgOiBgbm8tcG9vbC1vci1zcGFgfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlID0+IG93blBvb2xPclNwYSgnbm8nLCBlKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHROb1xuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImNvbnRhY3QtY2hlY2tib3gtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibm8tcGFkZGluZy1sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJjb250YWN0LXllcy1jaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRZZXNcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3NOYW1lPVwiY29udGFjdC1uby1jaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHROb1xuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlbmQtZW1haWwtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic2VuZC1lbWFpbC0yIGFjY2VudFwiPlNlbmQ8L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic2VuZC1lbWFpbC0xXCI+XG5cdFx0XHRcdFx0XHRTZW5kIG15IGVtYWlsPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0IGFjY2VudFwiIC8+XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxmb290ZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgY29udGFpbmVyLWZvb3RlclwiPlxuXHRcdFx0PHAgY2xhc3NOYW1lPVwiY29udGFjdC1mb290ZXItcGFyYWdyYXBoXCI+XG5cdFx0XHRcdCpMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlXG5cdFx0XHRcdG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleC5cblx0XHRcdDwvcD5cblx0XHQ8L2Zvb3Rlcj5cblx0PC9kaXY+O1xuXG5Db250YWN0LnByb3BUeXBlcyA9IHtcblx0Y2xvc2VNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0ZGVhbGVyTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRjb250YWN0UHJvcGVydGllczogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0bnVtYmVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0YWRkcmVzczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGNvbW1lbnRzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0b3duOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG5cdH0pLmlzUmVxdWlyZWQsXG5cdGhhbmRsZUZvcm1JbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0b3duUG9vbE9yU3BhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHR0b2dnbGVkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5Db250YWN0ID0gQ29udGFjdDtcbiJdfQ==