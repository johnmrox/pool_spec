var DealerList = ({ dealers, openModal }) =>
	<div>
		<div className="flex-container">
			{' '}{dealers.map(dealer =>
				<DealerEntry dealer={dealer.data} key={dealer.data.companyID} openModal={openModal} />
			)}
		</div>
	</div>;

DealerList.propTypes = {
	dealers: PropTypes.arrayOf(
		PropTypes.shape({
			data: PropTypes.object.isRequired
		})
	).isRequired,
	openModal: PropTypes.func.isRequired
};

window.DealerList = DealerList;
