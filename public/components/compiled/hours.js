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

window.Hours = Hours;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2hvdXJzLmpzeCJdLCJuYW1lcyI6WyJIb3VycyIsIndlZWtIb3VycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJkYXkiLCJpbmRleCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRLFNBQVJBLEtBQVEsT0FBbUI7QUFBQSxLQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUM5QixRQUNDO0FBQUE7QUFBQSxJQUFLLFdBQVUsZ0JBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLFdBQWY7QUFBQTtBQUFBLEdBREQ7QUFFQztBQUFBO0FBQUE7QUFDRUMsVUFBT0MsSUFBUCxDQUFZRixTQUFaLEVBQXVCRyxHQUF2QixDQUEyQixVQUFDQyxHQUFELEVBQU1DLEtBQU47QUFBQSxXQUMzQjtBQUFBO0FBQUEsT0FBSyxXQUFVLE1BQWYsRUFBc0IsS0FBS0QsR0FBM0I7QUFDRUosZUFBVUksR0FBVjtBQURGLEtBRDJCO0FBQUEsSUFBM0I7QUFERjtBQUZELEVBREQ7QUFZQSxDQWJEOztBQWVBRSxPQUFPUCxLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoiaG91cnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSG91cnMgPSAoeyB3ZWVrSG91cnMgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MtaG91cnNcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9sZC10ZXh0XCI+QnVzaW5lc3MgSG91cnM8L2Rpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtPYmplY3Qua2V5cyh3ZWVrSG91cnMpLm1hcCgoZGF5LCBpbmRleCkgPT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyYXlcIiBrZXk9e2RheX0+XG5cdFx0XHRcdFx0XHR7d2Vla0hvdXJzW2RheV19XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbndpbmRvdy5Ib3VycyA9IEhvdXJzO1xuIl19