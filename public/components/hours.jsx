var Hours = ({ weekHours }) => {
	return (
		<div className="business-hours">
			<div className="bold-text">Business Hours</div>
			<div>
				{Object.keys(weekHours).map((day, index) =>
					<div className="gray" key={day}>
						{weekHours[day]}
					</div>
				)}
			</div>
		</div>
	);
};

Hours.propTypes = {
	weekHours: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

window.Hours = Hours;
