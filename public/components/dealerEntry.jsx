var DealerEntry = ({ dealer, openModal }) => {
	let phone1 = dealer.phone1.split('-').join('.');

	return (
		<div className="col-md-4 text-center all-card-container">
			<div className="col-md-12 mx-auto card card-container">
				<div className="container-fluid card-body">
					<div className="card-top container-fluid">
						<p className="dealer-name">
							{dealer.name}
						</p>
					</div>
					<div className="phone-number-container">
						<h3>
							<span className="fa fa-phone-square blue" />
							<span className="tap-to-call">
								<label>Tap to call</label>
							</span>
							{phone1}
						</h3>
					</div>
					<p className="sub-header">Can't talk now? Click below to send an email</p>
					<div className="dealer-button-container">
						<button className="contact-dealer-btn" onClick={e => openModal(dealer.name)}>
							<span className="fa fa-envelope navy" />Contact This Pro
						</button>
					</div>
					<Hours weekHours={dealer.weekHours} />
				</div>
				<div className="card-footer gray">
					<div className="cert-container">
						{dealer.certifications.map((certificationObj, index) =>
							<div className="cert text-left" key={index}>
								<span className={certificationObj.className} />
								{certificationObj.certification}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

DealerEntry.propTypes = {
	dealer: PropTypes.shape({
		companyID: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		addressLine1: PropTypes.string.isRequired,
		addressLine2: PropTypes.string,
		city: PropTypes.string.isRequired,
		state: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		zipcode: PropTypes.string.isRequired,
		certifications: PropTypes.array.isRequired
	}).isRequired,
	openModal: PropTypes.func.isRequired
};

window.DealerEntry = DealerEntry;
