var DealerEntry = props =>
	<div className="col-md-4 text-center all-card-container">
		<div className="col-md-12 mx-auto card card-container">
			<div className="container-fluid card-body">
				<div className="card-top container-fluid">
					<p className="dealer-name">
						{props.dealer.name}
					</p>
				</div>
				<div className="phone-number-container">
					<h3>
						<span className="fa fa-phone-square blue" />
						<span className="tap-to-call">
							<label>Tap to call</label>
						</span>
						{props.dealer.phone1}
					</h3>
				</div>
				<p className="sub-header">Can't talk now? Click below to send an email</p>
				<div className="dealer-button-container">
					<button className="contact-dealer-btn" onClick={e => props.openModal(props.dealer.name)}>
						<span className="fa fa-envelope navy" />Contact This Pro
					</button>
				</div>
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
			</div>
			<div className="card-footer gray">
				<div className="cert-container">
					{props.dealer.certifications.map((certificationObj, index) =>
						<div className="cert text-left" key={index}>
							<span className={certificationObj.className} />
							{certificationObj.certification}
						</div>
					)}
				</div>
			</div>
		</div>
	</div>;

DealerEntry.propTypes = {
	dealer: PropTypes.object.isRequired,
	openModal: PropTypes.func.isRequired
};

window.DealerEntry = DealerEntry;
