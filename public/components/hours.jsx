var Hours = props => {
	return (
		<div className="business-hours">
			<div className="bold-text">Business Hours</div>
			<div>
				{Object.keys(props.weekHours).map((day, index) =>
					<div className="gray" key={day}>
						{props.weekHours[day]}
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
