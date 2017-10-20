var Stats = ({ dealers, zip }) => {
	var totalDealers = dealers.length;

	return (
		<div className="blue dealer-numbers filter-header">
			{totalDealers} dealers in {zip}
		</div>
	);
};

Stats.propTypes = {
	dealers: PropTypes.array.isRequired,
	zip: PropTypes.string.isRequired
};

window.Stats = Stats;
