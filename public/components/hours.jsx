var Hours = props => {
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

	return (
		<div className="business-hours">
			<div className="bold-text">Business Hours</div>
			<div>
				{Object.keys(props.dealer.weekHours).map((day, index) =>
					<div className="gray" key={day}>
						{props.dealer.weekHours[day]}
					</div>
				)}
			</div>
		</div>
	);
};

Hours.propTypes = {
	dealer: PropTypes.shape({
		weekHours: PropTypes.object.isRequired
	})
};

DealerEntry.propTypes = {};

window.Hours = Hours;
