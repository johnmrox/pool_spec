var Stats = props => {
	var totalDealers = props.dealers.length;

	return (
		<div className="blue dealer-numbers filter-header">
			{totalDealers} dealers in {props.zip}
		</div>
	);
};

Stats.propTypes = {
	dealers: PropTypes.array.isRequired,
	zip: PropTypes.string.isRequired
};

window.Stats = Stats;
