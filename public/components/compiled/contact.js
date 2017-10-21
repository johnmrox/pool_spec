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
	toggled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired
};

window.Contact = Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbnRhY3QuanN4Il0sIm5hbWVzIjpbIkNvbnRhY3QiLCJkZWFsZXJOYW1lIiwiY2xvc2VNb2RhbCIsImhhbmRsZUZvcm1JbnB1dENoYW5nZSIsIm93blBvb2xPclNwYSIsInRvZ2dsZWQiLCJjb250YWN0UHJvcGVydGllcyIsIm5hbWUiLCJlIiwibnVtYmVyIiwiYWRkcmVzcyIsImNvbW1lbnRzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJzaGFwZSIsIm93biIsImJvb2wiLCJvbmVPZlR5cGUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsS0FBR0MsVUFBSCxRQUFHQSxVQUFIO0FBQUEsS0FBZUMsVUFBZixRQUFlQSxVQUFmO0FBQUEsS0FBMkJDLHFCQUEzQixRQUEyQkEscUJBQTNCO0FBQUEsS0FBa0RDLFlBQWxELFFBQWtEQSxZQUFsRDtBQUFBLEtBQWdFQyxPQUFoRSxRQUFnRUEsT0FBaEU7QUFBQSxLQUF5RUMsaUJBQXpFLFFBQXlFQSxpQkFBekU7QUFBQSxRQUNiO0FBQUE7QUFBQSxJQUFLLFdBQVUsd0JBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLGFBQWY7QUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLHVDQUFmO0FBQ0Msa0NBQU0sV0FBVSxrQ0FBaEIsRUFBbUQsU0FBU0osVUFBNUQsR0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRDtBQUdDO0FBQUE7QUFBQSxPQUFHLFdBQVUscUJBQWI7QUFDRUQ7QUFERjtBQUhEO0FBREQsR0FERDtBQVVDO0FBQUE7QUFBQSxLQUFLLFdBQVUsaUJBQWY7QUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLE1BQWY7QUFDQztBQUFBO0FBQUEsT0FBRyxXQUFVLHNCQUFiO0FBQUE7QUFDOEJBLGVBRDlCO0FBQUE7QUFBQTtBQURELElBREQ7QUFNQztBQUFBO0FBQUEsTUFBSyxXQUFV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aWxlIjoiY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb250YWN0ID0gKHsgZGVhbGVyTmFtZSwgY2xvc2VNb2RhbCwgaGFuZGxlRm9ybUlucHV0Q2hhbmdlLCBvd25Qb29sT3JTcGEsIHRvZ2dsZWQsIGNvbnRhY3RQcm9wZXJ0aWVzIH0pID0+XG5cdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jYXJkLWNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC10b3BcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvbnRhY3QtdG9wLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZSBjbG9zZS1jb250YWN0LWJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9IC8+XG5cdFx0XHRcdDxwPkVNQUlMPC9wPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb250YWN0LWRlYWxlci1uYW1lXCI+XG5cdFx0XHRcdFx0e2RlYWxlck5hbWV9XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyYXlcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYmVsb3ctY29udGFjdC1oZWFkZXJcIj5cblx0XHRcdFx0XHRGaWxsIG91dCB0aGUgZm9ybSBiZWxvdyBhbmQge2RlYWxlck5hbWV9IHdpbGwgZ2V0IGluIHRvdWNoLlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvbnRhaW5lci1lbWFpbFwiPlxuXHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbnRhY3QtZm9ybS1sYWJlbFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxhYmVsLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiaWNvbi1sYWJlbFwiPkZpcnN0IGFuZCBsYXN0IG5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2BhY2NlbnQgJHtjb250YWN0UHJvcGVydGllcy5uYW1lID8gYGZhIGZhLWNoZWNrLWNpcmNsZS1vYCA6IGBmYSBmYS1jaXJjbGUtb2B9YH0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2NvbnRhY3RQcm9wZXJ0aWVzLm5hbWV9XG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gaGFuZGxlRm9ybUlucHV0Q2hhbmdlKGUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29udGFjdC1mb3JtLWxhYmVsIHBob25lLWxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGFiZWwtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5QaG9uZSBudW1iZXI8L2xhYmVsPlxuXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17YGFjY2VudCAke2NvbnRhY3RQcm9wZXJ0aWVzLm51bWJlciA/IGBmYSBmYS1jaGVjay1jaXJjbGUtb2AgOiBgZmEgZmEtY2lyY2xlLW9gfWB9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtjb250YWN0UHJvcGVydGllcy5udW1iZXJ9XG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBoYW5kbGVGb3JtSW5wdXRDaGFuZ2UoZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb250YWN0LWZvcm0tbGFiZWxcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1sYWJlbC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17YGFjY2VudCAke2NvbnRhY3RQcm9wZXJ0aWVzLmFkZHJlc3MgPyBgZmEgZmEtY2hlY2stY2lyY2xlLW9gIDogYGZhIGZhLWNpcmNsZS1vYH1gfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtjb250YWN0UHJvcGVydGllcy5hZGRyZXNzfVxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiYWRkcmVzc1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IGhhbmRsZUZvcm1JbnB1dENoYW5nZShlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbnRhY3QtZm9ybS1sYWJlbFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxhYmVsLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+Q29tbWVudHMgb3IgcXVlc3Rpb25zPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwib3B0aW9uYWwgZ3JheVwiPk9wdGlvbmFsPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17Y29udGFjdFByb3BlcnRpZXMuY29tbWVudHN9XG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJjb21tZW50c1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdHJvd3M9XCIzXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gaGFuZGxlRm9ybUlucHV0Q2hhbmdlKGUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvb2wtc3BhLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxhYmVsLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+RG8geW91IGN1cnJlbnRseSBvd24gYSBwb29sIG9yIHNwYT88L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJvcHRpb25hbCBncmF5XCI+T3B0aW9uYWw8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvd24tc3BhLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtYnV0dG9uLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGNvbnRhY3QteWVzLWJ1dHRvbiAke3RvZ2dsZWQgPyBgYnV0dG9uLWNsaWNrZWRgIDogYG5vLXBvb2wtb3Itc3BhYH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZSA9PiBvd25Qb29sT3JTcGEoJ3llcycsIGUpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFllc1xuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGNvbnRhY3Qtbm8tYnV0dG9uICR7dG9nZ2xlZCA9PT0gZmFsc2UgPyBgYnV0dG9uLWNsaWNrZWRgIDogYG5vLXBvb2wtb3Itc3BhYH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZSA9PiBvd25Qb29sT3JTcGEoJ25vJywgZSl9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0Tm9cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJjb250YWN0LWNoZWNrYm94LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5vLXBhZGRpbmctbGVmdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3NOYW1lPVwiY29udGFjdC15ZXMtY2hlY2tib3hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0WWVzXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImNvbnRhY3Qtbm8tY2hlY2tib3hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0Tm9cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZW5kLWVtYWlsLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNlbmQtZW1haWwtMiBhY2NlbnRcIj5TZW5kPC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNlbmQtZW1haWwtMVwiPlxuXHRcdFx0XHRcdFx0U2VuZCBteSBlbWFpbDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodCBhY2NlbnRcIiAvPlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGNvbnRhaW5lci1mb290ZXJcIj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbnRhY3QtZm9vdGVyLXBhcmFncmFwaFwiPlxuXHRcdFx0XHQqTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZVxuXHRcdFx0XHRtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXguXG5cdFx0XHQ8L3A+XG5cdFx0PC9mb290ZXI+XG5cdDwvZGl2PjtcblxuQ29udGFjdC5wcm9wVHlwZXMgPSB7XG5cdGNsb3NlTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdGRlYWxlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y29udGFjdFByb3BlcnRpZXM6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0bmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdG51bWJlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGFkZHJlc3M6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjb21tZW50czogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdG93bjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxuXHR9KS5pc1JlcXVpcmVkLFxuXHRoYW5kbGVGb3JtSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdG93blBvb2xPclNwYTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0dG9nZ2xlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuQ29udGFjdCA9IENvbnRhY3Q7XG4iXX0=