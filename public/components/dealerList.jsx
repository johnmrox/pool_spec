var DealerList = props =>
	<div>
		<div className="flex-container">
			{' '}{props.dealers.map(dealer =>
				<DealerEntry dealer={dealer.data} key={dealer.data.companyID} openModal={props.openModal} />
			)}
		</div>
	</div>;

DealerList.propTypes = {
	dealers: PropTypes.array.isRequired,
	openModal: PropTypes.func.isRequired
};

window.DealerList = DealerList;
