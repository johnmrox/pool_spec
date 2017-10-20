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
				React.createElement(Hours, { dealer: props.dealer })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2RlYWxlckVudHJ5LmpzeCJdLCJuYW1lcyI6WyJEZWFsZXJFbnRyeSIsInBob25lMSIsInByb3BzIiwiZGVhbGVyIiwic3BsaXQiLCJqb2luIiwibmFtZSIsIm9wZW5Nb2RhbCIsImNlcnRpZmljYXRpb25zIiwibWFwIiwiY2VydGlmaWNhdGlvbk9iaiIsImluZGV4IiwiY2xhc3NOYW1lIiwiY2VydGlmaWNhdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwiY29tcGFueUlEIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImVtYWlsIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsInN0YXRlIiwiY291bnRyeSIsInppcGNvZGUiLCJhcnJheSIsImZ1bmMiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjLFFBQVM7QUFDMUIsS0FBSUMsU0FBU0MsTUFBTUMsTUFBTixDQUFhRixNQUFiLENBQW9CRyxLQUFwQixDQUEwQixHQUExQixFQUErQkMsSUFBL0IsQ0FBb0MsR0FBcEMsQ0FBYjs7QUFFQSxRQUNDO0FBQUE7QUFBQSxJQUFLLFdBQVUseUNBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLHVDQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSwyQkFBZjtBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsMEJBQWY7QUFDQztBQUFBO0FBQUEsUUFBRyxXQUFVLGFBQWI7QUFDRUgsWUFBTUMsTUFBTixDQUFhRztBQURmO0FBREQsS0FERDtBQU1DO0FBQUE7QUFBQSxPQUFLLFdBQVUsd0JBQWY7QUFDQztBQUFBO0FBQUE7QUFDQyxvQ0FBTSxXQUFVLHlCQUFoQixHQUREO0FBRUM7QUFBQTtBQUFBLFNBQU0sV0FBVSxhQUFoQjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxPQUZEO0FBS0VMO0FBTEY7QUFERCxLQU5EO0FBZUM7QUFBQTtBQUFBLE9BQUcsV0FBVSxZQUFiO0FBQUE7QUFBQSxLQWZEO0FBZ0JDO0FBQUE7QUFBQSxPQUFLLFdBQVUseUJBQWY7QUFDQztBQUFBO0FBQUEsUUFBUSxXQUFVLG9CQUFsQixFQUF1QyxTQUFTO0FBQUEsZUFBS0MsTUFBTUssU0FBTixDQUFnQkwsTUFBTUMsTUFBTixDQUFhRyxJQUE3QixDQUFMO0FBQUEsUUFBaEQ7QUFDQyxvQ0FBTSxXQUFVLHFCQUFoQixHQUREO0FBQUE7QUFBQTtBQURELEtBaEJEO0FBcUJDLHdCQUFDLEtBQUQsSUFBTyxRQUFRSixNQUFNQyxNQUFyQjtBQXJCRCxJQUREO0FBd0JDO0FBQUE7QUFBQSxNQUFLLFdBQVUsa0JBQWY7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLGdCQUFmO0FBQ0VELFdBQU1DLE1BQU4sQ0FBYUssY0FBYixDQUE0QkMsR0FBNUIsQ0FBZ0MsVUFBQ0MsZ0JBQUQsRUFBbUJDLEtBQW5CO0FBQUEsYUFDaEM7QUFBQTtBQUFBLFNBQUssV0FBVSxnQkFBZixFQUFnQyxLQUFLQSxLQUFyQztBQUNDLHFDQUFNLFdBQVdELGlCQUFpQkUsU0FBbEMsR0FERDtBQUVFRix3QkFBaUJHO0FBRm5CLE9BRGdDO0FBQUEsTUFBaEM7QUFERjtBQUREO0FBeEJEO0FBREQsRUFERDtBQXVDQSxDQTFDRDs7QUE0Q0FiLFlBQVljLFNBQVosR0FBd0I7QUFDdkJYLFNBQVFZLFVBQVVDLEtBQVYsQ0FBZ0I7QUFDdkJDLGFBQVdGLFVBQVVHLE1BQVYsQ0FBaUJDLFVBREw7QUFFdkJiLFFBQU1TLFVBQVVLLE1BQVYsQ0FBaUJELFVBRkE7QUFHdkJFLFNBQU9OLFVBQVVLLE1BQVYsQ0FBaUJELFVBSEQ7QUFJdkJHLGdCQUFjUCxVQUFVSyxNQUFWLENBQWlCRCxVQUpSO0FBS3ZCSSxnQkFBY1IsVUFBVUssTUFMRDtBQU12QkksUUFBTVQsVUFBVUssTUFBVixDQUFpQkQsVUFOQTtBQU92Qk0sU0FBT1YsVUFBVUssTUFBVixDQUFpQkQsVUFQRDtBQVF2Qk8sV0FBU1gsVUFBVUssTUFBVixDQUFpQkQsVUFSSDtBQVN2QlEsV0FBU1osVUFBVUssTUFBVixDQUFpQkQsVUFUSDtBQVV2Qlgsa0JBQWdCTyxVQUFVYSxLQUFWLENBQWdCVDtBQVZULEVBQWhCLEVBV0xBLFVBWm9CO0FBYXZCWixZQUFXUSxVQUFVYyxJQUFWLENBQWVWO0FBYkgsQ0FBeEI7O0FBZ0JBVyxPQUFPOUIsV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoiZGVhbGVyRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGVhbGVyRW50cnkgPSBwcm9wcyA9PiB7XG5cdGxldCBwaG9uZTEgPSBwcm9wcy5kZWFsZXIucGhvbmUxLnNwbGl0KCctJykuam9pbignLicpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCB0ZXh0LWNlbnRlciBhbGwtY2FyZC1jb250YWluZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIG14LWF1dG8gY2FyZCBjYXJkLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjYXJkLWJvZHlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdG9wIGNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZGVhbGVyLW5hbWVcIj5cblx0XHRcdFx0XHRcdFx0e3Byb3BzLmRlYWxlci5uYW1lfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGhvbmUtbnVtYmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGgzPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1waG9uZS1zcXVhcmUgYmx1ZVwiIC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRhcC10by1jYWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsPlRhcCB0byBjYWxsPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHR7cGhvbmUxfVxuXHRcdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWItaGVhZGVyXCI+Q2FuJ3QgdGFsayBub3c/IENsaWNrIGJlbG93IHRvIHNlbmQgYW4gZW1haWw8L3A+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZWFsZXItYnV0dG9uLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJjb250YWN0LWRlYWxlci1idG5cIiBvbkNsaWNrPXtlID0+IHByb3BzLm9wZW5Nb2RhbChwcm9wcy5kZWFsZXIubmFtZSl9PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZSBuYXZ5XCIgLz5Db250YWN0IFRoaXMgUHJvXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8SG91cnMgZGVhbGVyPXtwcm9wcy5kZWFsZXJ9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyIGdyYXlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlcnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHR7cHJvcHMuZGVhbGVyLmNlcnRpZmljYXRpb25zLm1hcCgoY2VydGlmaWNhdGlvbk9iaiwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2VydCB0ZXh0LWxlZnRcIiBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NlcnRpZmljYXRpb25PYmouY2xhc3NOYW1lfSAvPlxuXHRcdFx0XHRcdFx0XHRcdHtjZXJ0aWZpY2F0aW9uT2JqLmNlcnRpZmljYXRpb259XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkRlYWxlckVudHJ5LnByb3BUeXBlcyA9IHtcblx0ZGVhbGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdGNvbXBhbnlJRDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGFkZHJlc3NMaW5lMTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGFkZHJlc3NMaW5lMjogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRjaXR5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0c3RhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjb3VudHJ5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0emlwY29kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGNlcnRpZmljYXRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuXHR9KS5pc1JlcXVpcmVkLFxuXHRvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5EZWFsZXJFbnRyeSA9IERlYWxlckVudHJ5O1xuIl19