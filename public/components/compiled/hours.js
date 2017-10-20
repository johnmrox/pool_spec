"use strict";

var Hours = function Hours(props) {
	// let modifiedWeek = {
	// 	mon: 'Mondays',
	// 	tue: 'Tuesdays',
	// 	wed: 'Wednesdays',
	// 	thu: 'Thursdays',
	// 	fri: 'Fridays',
	// 	sat: 'Saturdays',
	// 	sun: 'Sundays'
	// };

	// let finalDays = [];
	// let base = week.mon;
	// let same = true;

	// finalDays[0] = `Mondays ${week.mon}`;

	// for (let i = 1; i < 5; i++) {
	// 	let day = `${Object.keys(week)[i]}`;
	// 	let hours = week[day] === 'On Call' ? '- On Call' : week[day] || '- CLOSED';

	// 	finalDays.push(`${[modifiedWeek[day]]} ${hours}`);
	// 	if (week[Object.keys(week)[i]] !== base) {
	// 		same = false;
	// 	}
	// }

	// if (same) {
	// 	finalDays.splice(0);
	// 	finalDays[0] = `Weekdays ${base}`;
	// }

	// for (let i = 5; i < 7; i++) {
	// 	let day = i === 5 ? 'sat' : 'sun';
	// 	let hours = week[day] === 'On Call' ? '- On Call' : week[day] || '- CLOSED';

	// 	finalDays.push(`${[modifiedWeek[day]]} ${hours}`);
	// }

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
			Object.keys(props.dealer.weekHours).map(function (day, index) {
				return React.createElement(
					"div",
					{ className: "gray", key: day },
					props.dealer.weekHours[day]
				);
			})
		)
	);
};

Hours.propTypes = {
	dealer: PropTypes.shape({
		weekHours: PropTypes.object.isRequired
	})
};

DealerEntry.propTypes = {};

window.Hours = Hours;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2hvdXJzLmpzeCJdLCJuYW1lcyI6WyJIb3VycyIsIk9iamVjdCIsImtleXMiLCJwcm9wcyIsImRlYWxlciIsIndlZWtIb3VycyIsIm1hcCIsImRheSIsImluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiRGVhbGVyRW50cnkiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxTQUFSQSxLQUFRLFFBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUNDO0FBQUE7QUFBQSxJQUFLLFdBQVUsZ0JBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLFdBQWY7QUFBQTtBQUFBLEdBREQ7QUFFQztBQUFBO0FBQUE7QUFDRUMsVUFBT0MsSUFBUCxDQUFZQyxNQUFNQyxNQUFOLENBQWFDLFNBQXpCLEVBQW9DQyxHQUFwQyxDQUF3QyxVQUFDQyxHQUFELEVBQU1DLEtBQU47QUFBQSxXQUN4QztBQUFBO0FBQUEsT0FBSyxXQUFVLE1BQWYsRUFBc0IsS0FBS0QsR0FBM0I7QUFDRUosV0FBTUMsTUFBTixDQUFhQyxTQUFiLENBQXVCRSxHQUF2QjtBQURGLEtBRHdDO0FBQUEsSUFBeEM7QUFERjtBQUZELEVBREQ7QUFZQSxDQW5ERDs7QUFxREFQLE1BQU1TLFNBQU4sR0FBa0I7QUFDakJMLFNBQVFNLFVBQVVDLEtBQVYsQ0FBZ0I7QUFDdkJOLGFBQVdLLFVBQVVFLE1BQVYsQ0FBaUJDO0FBREwsRUFBaEI7QUFEUyxDQUFsQjs7QUFNQUMsWUFBWUwsU0FBWixHQUF3QixFQUF4Qjs7QUFFQU0sT0FBT2YsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6ImhvdXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEhvdXJzID0gcHJvcHMgPT4ge1xuXHQvLyBsZXQgbW9kaWZpZWRXZWVrID0ge1xuXHQvLyBcdG1vbjogJ01vbmRheXMnLFxuXHQvLyBcdHR1ZTogJ1R1ZXNkYXlzJyxcblx0Ly8gXHR3ZWQ6ICdXZWRuZXNkYXlzJyxcblx0Ly8gXHR0aHU6ICdUaHVyc2RheXMnLFxuXHQvLyBcdGZyaTogJ0ZyaWRheXMnLFxuXHQvLyBcdHNhdDogJ1NhdHVyZGF5cycsXG5cdC8vIFx0c3VuOiAnU3VuZGF5cydcblx0Ly8gfTtcblxuXHQvLyBsZXQgZmluYWxEYXlzID0gW107XG5cdC8vIGxldCBiYXNlID0gd2Vlay5tb247XG5cdC8vIGxldCBzYW1lID0gdHJ1ZTtcblxuXHQvLyBmaW5hbERheXNbMF0gPSBgTW9uZGF5cyAke3dlZWsubW9ufWA7XG5cblx0Ly8gZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcblx0Ly8gXHRsZXQgZGF5ID0gYCR7T2JqZWN0LmtleXMod2VlaylbaV19YDtcblx0Ly8gXHRsZXQgaG91cnMgPSB3ZWVrW2RheV0gPT09ICdPbiBDYWxsJyA/ICctIE9uIENhbGwnIDogd2Vla1tkYXldIHx8ICctIENMT1NFRCc7XG5cblx0Ly8gXHRmaW5hbERheXMucHVzaChgJHtbbW9kaWZpZWRXZWVrW2RheV1dfSAke2hvdXJzfWApO1xuXHQvLyBcdGlmICh3ZWVrW09iamVjdC5rZXlzKHdlZWspW2ldXSAhPT0gYmFzZSkge1xuXHQvLyBcdFx0c2FtZSA9IGZhbHNlO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG5cdC8vIGlmIChzYW1lKSB7XG5cdC8vIFx0ZmluYWxEYXlzLnNwbGljZSgwKTtcblx0Ly8gXHRmaW5hbERheXNbMF0gPSBgV2Vla2RheXMgJHtiYXNlfWA7XG5cdC8vIH1cblxuXHQvLyBmb3IgKGxldCBpID0gNTsgaSA8IDc7IGkrKykge1xuXHQvLyBcdGxldCBkYXkgPSBpID09PSA1ID8gJ3NhdCcgOiAnc3VuJztcblx0Ly8gXHRsZXQgaG91cnMgPSB3ZWVrW2RheV0gPT09ICdPbiBDYWxsJyA/ICctIE9uIENhbGwnIDogd2Vla1tkYXldIHx8ICctIENMT1NFRCc7XG5cblx0Ly8gXHRmaW5hbERheXMucHVzaChgJHtbbW9kaWZpZWRXZWVrW2RheV1dfSAke2hvdXJzfWApO1xuXHQvLyB9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzLWhvdXJzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvbGQtdGV4dFwiPkJ1c2luZXNzIEhvdXJzPC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7T2JqZWN0LmtleXMocHJvcHMuZGVhbGVyLndlZWtIb3VycykubWFwKChkYXksIGluZGV4KSA9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JheVwiIGtleT17ZGF5fT5cblx0XHRcdFx0XHRcdHtwcm9wcy5kZWFsZXIud2Vla0hvdXJzW2RheV19XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkhvdXJzLnByb3BUeXBlcyA9IHtcblx0ZGVhbGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdHdlZWtIb3VyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG5cdH0pXG59O1xuXG5EZWFsZXJFbnRyeS5wcm9wVHlwZXMgPSB7fTtcblxud2luZG93LkhvdXJzID0gSG91cnM7XG4iXX0=