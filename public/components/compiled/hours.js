"use strict";

var Hours = function Hours(_ref) {
	var weekHours = _ref.weekHours;

	return React.createElement(
		"div",
		{ className: "business-hours" },
		React.createElement(
			"div",
			{ className: "bold-text" },
			"Business Hours"
		),
		React.createElement(
			"div",
			null,
			Object.keys(weekHours).map(function (day, index) {
				return React.createElement(
					"div",
					{ className: "gray", key: day },
					weekHours[day]
				);
			})
		)
	);
};

Hours.propTypes = {
	weekHours: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

window.Hours = Hours;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2hvdXJzLmpzeCJdLCJuYW1lcyI6WyJIb3VycyIsIndlZWtIb3VycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJkYXkiLCJpbmRleCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImFycmF5IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRLFNBQVJBLEtBQVEsT0FBbUI7QUFBQSxLQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUM5QixRQUNDO0FBQUE7QUFBQSxJQUFLLFdBQVUsZ0JBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLFdBQWY7QUFBQTtBQUFBLEdBREQ7QUFFQztBQUFBO0FBQUE7QUFDRUMsVUFBT0MsSUFBUCxDQUFZRixTQUFaLEVBQXVCRyxHQUF2QixDQUEyQixVQUFDQyxHQUFELEVBQU1DLEtBQU47QUFBQSxXQUMzQjtBQUFBO0FBQUEsT0FBSyxXQUFVLE1BQWYsRUFBc0IsS0FBS0QsR0FBM0I7QUFDRUosZUFBVUksR0FBVjtBQURGLEtBRDJCO0FBQUEsSUFBM0I7QUFERjtBQUZELEVBREQ7QUFZQSxDQWJEOztBQWVBTCxNQUFNTyxTQUFOLEdBQWtCO0FBQ2pCTixZQUFXTyxVQUFVQyxTQUFWLENBQW9CLENBQUNELFVBQVVFLE1BQVgsRUFBbUJGLFVBQVVHLEtBQTdCLENBQXBCLEVBQXlEQztBQURuRCxDQUFsQjs7QUFJQUMsT0FBT2IsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6ImhvdXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEhvdXJzID0gKHsgd2Vla0hvdXJzIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzLWhvdXJzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvbGQtdGV4dFwiPkJ1c2luZXNzIEhvdXJzPC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7T2JqZWN0LmtleXMod2Vla0hvdXJzKS5tYXAoKGRheSwgaW5kZXgpID0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmF5XCIga2V5PXtkYXl9PlxuXHRcdFx0XHRcdFx0e3dlZWtIb3Vyc1tkYXldfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5Ib3Vycy5wcm9wVHlwZXMgPSB7XG5cdHdlZWtIb3VyczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5XSkuaXNSZXF1aXJlZFxufTtcblxud2luZG93LkhvdXJzID0gSG91cnM7XG4iXX0=