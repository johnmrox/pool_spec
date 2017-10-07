"use strict";

var DealerList = function DealerList(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"div",
			{ className: "flex-container" },
			' ',
			props.dealers.map(function (dealer) {
				return React.createElement(DealerEntry, {
					dealer: dealer.data,
					key: dealer.data.companyID,
					handleContactProClick: props.handleContactProClick,
					openModal: props.openModal
				});
			})
		)
	);
};

window.DealerList = DealerList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2RlYWxlckxpc3QuanN4Il0sIm5hbWVzIjpbIkRlYWxlckxpc3QiLCJwcm9wcyIsImRlYWxlcnMiLCJtYXAiLCJkZWFsZXIiLCJkYXRhIiwiY29tcGFueUlEIiwiaGFuZGxlQ29udGFjdFByb0NsaWNrIiwib3Blbk1vZGFsIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFFBQ2hCO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVUsZ0JBQWY7QUFDRSxNQURGO0FBQ09DLFNBQU1DLE9BQU4sQ0FBY0MsR0FBZCxDQUFrQjtBQUFBLFdBQ3ZCLG9CQUFDLFdBQUQ7QUFDQyxhQUFRQyxPQUFPQyxJQURoQjtBQUVDLFVBQUtELE9BQU9DLElBQVAsQ0FBWUMsU0FGbEI7QUFHQyw0QkFBdUJMLE1BQU1NLHFCQUg5QjtBQUlDLGdCQUFXTixNQUFNTztBQUpsQixNQUR1QjtBQUFBLElBQWxCO0FBRFA7QUFERCxFQURnQjtBQUFBLENBQWpCOztBQWNBQyxPQUFPVCxVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJkZWFsZXJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIERlYWxlckxpc3QgPSBwcm9wcyA9PlxuXHQ8ZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cblx0XHRcdHsnICd9e3Byb3BzLmRlYWxlcnMubWFwKGRlYWxlciA9PlxuXHRcdFx0XHQ8RGVhbGVyRW50cnlcblx0XHRcdFx0XHRkZWFsZXI9e2RlYWxlci5kYXRhfVxuXHRcdFx0XHRcdGtleT17ZGVhbGVyLmRhdGEuY29tcGFueUlEfVxuXHRcdFx0XHRcdGhhbmRsZUNvbnRhY3RQcm9DbGljaz17cHJvcHMuaGFuZGxlQ29udGFjdFByb0NsaWNrfVxuXHRcdFx0XHRcdG9wZW5Nb2RhbD17cHJvcHMub3Blbk1vZGFsfVxuXHRcdFx0XHQvPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0PC9kaXY+O1xuXG53aW5kb3cuRGVhbGVyTGlzdCA9IERlYWxlckxpc3Q7XG4iXX0=