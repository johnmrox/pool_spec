'use strict';

var DealerEntry = function DealerEntry(_ref) {
	var dealer = _ref.dealer,
	    openModal = _ref.openModal;

	var phone1 = dealer.phone1.split('-').join('.');

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
						dealer.name
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
								return openModal(dealer.name);
							} },
						React.createElement('span', { className: 'fa fa-envelope navy' }),
						'Contact This Pro'
					)
				),
				React.createElement(Hours, { weekHours: dealer.weekHours })
			),
			React.createElement(
				'div',
				{ className: 'card-footer gray' },
				React.createElement(
					'div',
					{ className: 'cert-container' },
					dealer.certifications.map(function (certificationObj, index) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2RlYWxlckVudHJ5LmpzeCJdLCJuYW1lcyI6WyJEZWFsZXJFbnRyeSIsImRlYWxlciIsIm9wZW5Nb2RhbCIsInBob25lMSIsInNwbGl0Iiwiam9pbiIsIm5hbWUiLCJ3ZWVrSG91cnMiLCJjZXJ0aWZpY2F0aW9ucyIsIm1hcCIsImNlcnRpZmljYXRpb25PYmoiLCJpbmRleCIsImNsYXNzTmFtZSIsImNlcnRpZmljYXRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImNvbXBhbnlJRCIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJlbWFpbCIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImNpdHkiLCJzdGF0ZSIsImNvdW50cnkiLCJ6aXBjb2RlIiwiYXJyYXkiLCJmdW5jIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGNBQWMsU0FBZEEsV0FBYyxPQUEyQjtBQUFBLEtBQXhCQyxNQUF3QixRQUF4QkEsTUFBd0I7QUFBQSxLQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUM1QyxLQUFJQyxTQUFTRixPQUFPRSxNQUFQLENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJDLElBQXpCLENBQThCLEdBQTlCLENBQWI7O0FBRUEsUUFDQztBQUFBO0FBQUEsSUFBSyxXQUFVLHlDQUFmO0FBQ0M7QUFBQTtBQUFBLEtBQUssV0FBVSx1Q0FBZjtBQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsMkJBQWY7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLDBCQUFmO0FBQ0M7QUFBQTtBQUFBLFFBQUcsV0FBVSxhQUFiO0FBQ0VKLGFBQU9LO0FBRFQ7QUFERCxLQUREO0FBTUM7QUFBQTtBQUFBLE9BQUssV0FBVSx3QkFBZjtBQUNDO0FBQUE7QUFBQTtBQUNDLG9DQUFNLFdBQVUseUJBQWhCLEdBREQ7QUFFQztBQUFBO0FBQUEsU0FBTSxXQUFVLGFBQWhCO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELE9BRkQ7QUFLRUg7QUFMRjtBQURELEtBTkQ7QUFlQztBQUFBO0FBQUEsT0FBRyxXQUFVLFlBQWI7QUFBQTtBQUFBLEtBZkQ7QUFnQkM7QUFBQTtBQUFBLE9BQUssV0FBVSx5QkFBZjtBQUNDO0FBQUE7QUFBQSxRQUFRLFdBQVUsb0JBQWxCLEVBQXVDLFNBQVM7QUFBQSxlQUFLRCxVQUFVRCxPQUFPSyxJQUFqQixDQUFMO0FBQUEsUUFBaEQ7QUFDQyxvQ0FBTSxXQUFVLHFCQUFoQixHQUREO0FBQUE7QUFBQTtBQURELEtBaEJEO0FBcUJDLHdCQUFDLEtBQUQsSUFBTyxXQUFXTCxPQUFPTSxTQUF6QjtBQXJCRCxJQUREO0FBd0JDO0FBQUE7QUFBQSxNQUFLLFdBQVUsa0JBQWY7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLGdCQUFmO0FBQ0VOLFlBQU9PLGNBQVAsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQUNDLGdCQUFELEVBQW1CQyxLQUFuQjtBQUFBLGFBQzFCO0FBQUE7QUFBQSxTQUFLLFdBQVUsZ0JBQWYsRUFBZ0MsS0FBS0EsS0FBckM7QUFDQyxxQ0FBTSxXQUFXRCxpQkFBaUJFLFNBQWxDLEdBREQ7QUFFRUYsd0JBQWlCRztBQUZuQixPQUQwQjtBQUFBLE1BQTFCO0FBREY7QUFERDtBQXhCRDtBQURELEVBREQ7QUF1Q0EsQ0ExQ0Q7O0FBNENBYixZQUFZYyxTQUFaLEdBQXdCO0FBQ3ZCYixTQUFRYyxVQUFVQyxLQUFWLENBQWdCO0FBQ3ZCQyxhQUFXRixVQUFVRyxNQUFWLENBQWlCQyxVQURMO0FBRXZCYixRQUFNUyxVQUFVSyxNQUFWLENBQWlCRCxVQUZBO0FBR3ZCRSxTQUFPTixVQUFVSyxNQUFWLENBQWlCRCxVQUhEO0FBSXZCRyxnQkFBY1AsVUFBVUssTUFBVixDQUFpQkQsVUFKUjtBQUt2QkksZ0JBQWNSLFVBQVVLLE1BTEQ7QUFNdkJJLFFBQU1ULFVBQVVLLE1BQVYsQ0FBaUJELFVBTkE7QUFPdkJNLFNBQU9WLFVBQVVLLE1BQVYsQ0FBaUJELFVBUEQ7QUFRdkJPLFdBQVNYLFVBQVVLLE1BQVYsQ0FBaUJELFVBUkg7QUFTdkJRLFdBQVNaLFVBQVVLLE1BQVYsQ0FBaUJELFVBVEg7QUFVdkJYLGtCQUFnQk8sVUFBVWEsS0FBVixDQUFnQlQ7QUFWVCxFQUFoQixFQVdMQSxVQVpvQjtBQWF2QmpCLFlBQVdhLFVBQVVjLElBQVYsQ0FBZVY7QUFiSCxDQUF4Qjs7QUFnQkFXLE9BQU85QixXQUFQLEdBQXFCQSxXQUFyQiIsImZpbGUiOiJkZWFsZXJFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBEZWFsZXJFbnRyeSA9ICh7IGRlYWxlciwgb3Blbk1vZGFsIH0pID0+IHtcblx0bGV0IHBob25lMSA9IGRlYWxlci5waG9uZTEuc3BsaXQoJy0nKS5qb2luKCcuJyk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHRleHQtY2VudGVyIGFsbC1jYXJkLWNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgbXgtYXV0byBjYXJkIGNhcmQtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNhcmQtYm9keVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10b3AgY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkZWFsZXItbmFtZVwiPlxuXHRcdFx0XHRcdFx0XHR7ZGVhbGVyLm5hbWV9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwaG9uZS1udW1iZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8aDM+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXBob25lLXNxdWFyZSBibHVlXCIgLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGFwLXRvLWNhbGxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+VGFwIHRvIGNhbGw8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdHtwaG9uZTF9XG5cdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN1Yi1oZWFkZXJcIj5DYW4ndCB0YWxrIG5vdz8gQ2xpY2sgYmVsb3cgdG8gc2VuZCBhbiBlbWFpbDwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlYWxlci1idXR0b24tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRhY3QtZGVhbGVyLWJ0blwiIG9uQ2xpY2s9e2UgPT4gb3Blbk1vZGFsKGRlYWxlci5uYW1lKX0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlIG5hdnlcIiAvPkNvbnRhY3QgVGhpcyBQcm9cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxIb3VycyB3ZWVrSG91cnM9e2RlYWxlci53ZWVrSG91cnN9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyIGdyYXlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlcnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHR7ZGVhbGVyLmNlcnRpZmljYXRpb25zLm1hcCgoY2VydGlmaWNhdGlvbk9iaiwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2VydCB0ZXh0LWxlZnRcIiBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NlcnRpZmljYXRpb25PYmouY2xhc3NOYW1lfSAvPlxuXHRcdFx0XHRcdFx0XHRcdHtjZXJ0aWZpY2F0aW9uT2JqLmNlcnRpZmljYXRpb259XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkRlYWxlckVudHJ5LnByb3BUeXBlcyA9IHtcblx0ZGVhbGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdGNvbXBhbnlJRDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGFkZHJlc3NMaW5lMTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGFkZHJlc3NMaW5lMjogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRjaXR5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0c3RhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjb3VudHJ5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0emlwY29kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGNlcnRpZmljYXRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuXHR9KS5pc1JlcXVpcmVkLFxuXHRvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5EZWFsZXJFbnRyeSA9IERlYWxlckVudHJ5O1xuIl19