'use strict';

var DealerEntry = function DealerEntry(props) {
	var phone1 = props.dealer.phone1.split('-').join('.');

	return React.createElement(
		'div',
		{ className: 'col-md-4 text-center all-card-container' },
		React.createElement(
			'div',
			{ className: 'col-md-12 mx-auto card card-container' },
			React.createElement(
				'div',
				{ className: 'container-fluid card-body' },
				React.createElement(
					'div',
					{ className: 'card-top container-fluid' },
					React.createElement(
						'p',
						{ className: 'dealer-name' },
						props.dealer.name
					)
				),
				React.createElement(
					'div',
					{ className: 'phone-number-container' },
					React.createElement(
						'h3',
						null,
						React.createElement('span', { className: 'fa fa-phone-square blue' }),
						React.createElement(
							'span',
							{ className: 'tap-to-call' },
							React.createElement(
								'label',
								null,
								'Tap to call'
							)
						),
						phone1
					)
				),
				React.createElement(
					'p',
					{ className: 'sub-header' },
					'Can\'t talk now? Click below to send an email'
				),
				React.createElement(
					'div',
					{ className: 'dealer-button-container' },
					React.createElement(
						'button',
						{ className: 'contact-dealer-btn', onClick: function onClick(e) {
								return props.openModal(props.dealer.name);
							} },
						React.createElement('span', { className: 'fa fa-envelope navy' }),
						'Contact This Pro'
					)
				),
				React.createElement(Hours, { weekHours: props.dealer.weekHours })
			),
			React.createElement(
				'div',
				{ className: 'card-footer gray' },
				React.createElement(
					'div',
					{ className: 'cert-container' },
					props.dealer.certifications.map(function (certificationObj, index) {
						return React.createElement(
							'div',
							{ className: 'cert text-left', key: index },
							React.createElement('span', { className: certificationObj.className }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2RlYWxlckVudHJ5LmpzeCJdLCJuYW1lcyI6WyJEZWFsZXJFbnRyeSIsInBob25lMSIsInByb3BzIiwiZGVhbGVyIiwic3BsaXQiLCJqb2luIiwibmFtZSIsIm9wZW5Nb2RhbCIsIndlZWtIb3VycyIsImNlcnRpZmljYXRpb25zIiwibWFwIiwiY2VydGlmaWNhdGlvbk9iaiIsImluZGV4IiwiY2xhc3NOYW1lIiwiY2VydGlmaWNhdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwiY29tcGFueUlEIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImVtYWlsIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsInN0YXRlIiwiY291bnRyeSIsInppcGNvZGUiLCJhcnJheSIsImZ1bmMiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjLFFBQVM7QUFDMUIsS0FBSUMsU0FBU0MsTUFBTUMsTUFBTixDQUFhRixNQUFiLENBQW9CRyxLQUFwQixDQUEwQixHQUExQixFQUErQkMsSUFBL0IsQ0FBb0MsR0FBcEMsQ0FBYjs7QUFFQSxRQUNDO0FBQUE7QUFBQSxJQUFLLFdBQVUseUNBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLHVDQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSwyQkFBZjtBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsMEJBQWY7QUFDQztBQUFBO0FBQUEsUUFBRyxXQUFVLGFBQWI7QUFDRUgsWUFBTUMsTUFBTixDQUFhRztBQURmO0FBREQsS0FERDtBQU1DO0FBQUE7QUFBQSxPQUFLLFdBQVUsd0JBQWY7QUFDQztBQUFBO0FBQUE7QUFDQyxvQ0FBTSxXQUFVLHlCQUFoQixHQUREO0FBRUM7QUFBQTtBQUFBLFNBQU0sV0FBVSxhQUFoQjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxPQUZEO0FBS0VMO0FBTEY7QUFERCxLQU5EO0FBZUM7QUFBQTtBQUFBLE9BQUcsV0FBVSxZQUFiO0FBQUE7QUFBQSxLQWZEO0FBZ0JDO0FBQUE7QUFBQSxPQUFLLFdBQVUseUJBQWY7QUFDQztBQUFBO0FBQUEsUUFBUSxXQUFVLG9CQUFsQixFQUF1QyxTQUFTO0FBQUEsZUFBS0MsTUFBTUssU0FBTixDQUFnQkwsTUFBTUMsTUFBTixDQUFhRyxJQUE3QixDQUFMO0FBQUEsUUFBaEQ7QUFDQyxvQ0FBTSxXQUFVLHFCQUFoQixHQUREO0FBQUE7QUFBQTtBQURELEtBaEJEO0FBcUJDLHdCQUFDLEtBQUQsSUFBTyxXQUFXSixNQUFNQyxNQUFOLENBQWFLLFNBQS9CO0FBckJELElBREQ7QUF3QkM7QUFBQTtBQUFBLE1BQUssV0FBVSxrQkFBZjtBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsZ0JBQWY7QUFDRU4sV0FBTUMsTUFBTixDQUFhTSxjQUFiLENBQTRCQyxHQUE1QixDQUFnQyxVQUFDQyxnQkFBRCxFQUFtQkMsS0FBbkI7QUFBQSxhQUNoQztBQUFBO0FBQUEsU0FBSyxXQUFVLGdCQUFmLEVBQWdDLEtBQUtBLEtBQXJDO0FBQ0MscUNBQU0sV0FBV0QsaUJBQWlCRSxTQUFsQyxHQUREO0FBRUVGLHdCQUFpQkc7QUFGbkIsT0FEZ0M7QUFBQSxNQUFoQztBQURGO0FBREQ7QUF4QkQ7QUFERCxFQUREO0FBdUNBLENBMUNEOztBQTRDQWQsWUFBWWUsU0FBWixHQUF3QjtBQUN2QlosU0FBUWEsVUFBVUMsS0FBVixDQUFnQjtBQUN2QkMsYUFBV0YsVUFBVUcsTUFBVixDQUFpQkMsVUFETDtBQUV2QmQsUUFBTVUsVUFBVUssTUFBVixDQUFpQkQsVUFGQTtBQUd2QkUsU0FBT04sVUFBVUssTUFBVixDQUFpQkQsVUFIRDtBQUl2QkcsZ0JBQWNQLFVBQVVLLE1BQVYsQ0FBaUJELFVBSlI7QUFLdkJJLGdCQUFjUixVQUFVSyxNQUxEO0FBTXZCSSxRQUFNVCxVQUFVSyxNQUFWLENBQWlCRCxVQU5BO0FBT3ZCTSxTQUFPVixVQUFVSyxNQUFWLENBQWlCRCxVQVBEO0FBUXZCTyxXQUFTWCxVQUFVSyxNQUFWLENBQWlCRCxVQVJIO0FBU3ZCUSxXQUFTWixVQUFVSyxNQUFWLENBQWlCRCxVQVRIO0FBVXZCWCxrQkFBZ0JPLFVBQVVhLEtBQVYsQ0FBZ0JUO0FBVlQsRUFBaEIsRUFXTEEsVUFab0I7QUFhdkJiLFlBQVdTLFVBQVVjLElBQVYsQ0FBZVY7QUFiSCxDQUF4Qjs7QUFnQkFXLE9BQU8vQixXQUFQLEdBQXFCQSxXQUFyQiIsImZpbGUiOiJkZWFsZXJFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBEZWFsZXJFbnRyeSA9IHByb3BzID0+IHtcblx0bGV0IHBob25lMSA9IHByb3BzLmRlYWxlci5waG9uZTEuc3BsaXQoJy0nKS5qb2luKCcuJyk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHRleHQtY2VudGVyIGFsbC1jYXJkLWNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgbXgtYXV0byBjYXJkIGNhcmQtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNhcmQtYm9keVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10b3AgY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkZWFsZXItbmFtZVwiPlxuXHRcdFx0XHRcdFx0XHR7cHJvcHMuZGVhbGVyLm5hbWV9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwaG9uZS1udW1iZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8aDM+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXBob25lLXNxdWFyZSBibHVlXCIgLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGFwLXRvLWNhbGxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+VGFwIHRvIGNhbGw8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdHtwaG9uZTF9XG5cdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN1Yi1oZWFkZXJcIj5DYW4ndCB0YWxrIG5vdz8gQ2xpY2sgYmVsb3cgdG8gc2VuZCBhbiBlbWFpbDwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlYWxlci1idXR0b24tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRhY3QtZGVhbGVyLWJ0blwiIG9uQ2xpY2s9e2UgPT4gcHJvcHMub3Blbk1vZGFsKHByb3BzLmRlYWxlci5uYW1lKX0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlIG5hdnlcIiAvPkNvbnRhY3QgVGhpcyBQcm9cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxIb3VycyB3ZWVrSG91cnM9e3Byb3BzLmRlYWxlci53ZWVrSG91cnN9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyIGdyYXlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlcnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHR7cHJvcHMuZGVhbGVyLmNlcnRpZmljYXRpb25zLm1hcCgoY2VydGlmaWNhdGlvbk9iaiwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2VydCB0ZXh0LWxlZnRcIiBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NlcnRpZmljYXRpb25PYmouY2xhc3NOYW1lfSAvPlxuXHRcdFx0XHRcdFx0XHRcdHtjZXJ0aWZpY2F0aW9uT2JqLmNlcnRpZmljYXRpb259XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkRlYWxlckVudHJ5LnByb3BUeXBlcyA9IHtcblx0ZGVhbGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdGNvbXBhbnlJRDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGFkZHJlc3NMaW5lMTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGFkZHJlc3NMaW5lMjogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRjaXR5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0c3RhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjb3VudHJ5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0emlwY29kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGNlcnRpZmljYXRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuXHR9KS5pc1JlcXVpcmVkLFxuXHRvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5EZWFsZXJFbnRyeSA9IERlYWxlckVudHJ5O1xuIl19