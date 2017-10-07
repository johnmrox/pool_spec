var DealerList = props =>
	<div>
		<div className="flex-container">
			{' '}{props.dealers.map(dealer =>
				<DealerEntry
					dealer={dealer.data}
					key={dealer.data.companyID}
					handleContactProClick={props.handleContactProClick}
					openModal={props.openModal}
				/>
			)}
		</div>
	</div>;

window.DealerList = DealerList;
