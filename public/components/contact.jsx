var Contact = ({ dealerName, closeModal, handleFormInputChange, ownPoolOrSpa, toggled, contactProperties }) =>
	<div className="contact-card-container">
		<div className="contact-top">
			<div className="container-fluid contact-top-container">
				<span className="fa fa-close close-contact-button" onClick={closeModal} />
				<p>EMAIL</p>
				<p className="contact-dealer-name">
					{dealerName}
				</p>
			</div>
		</div>
		<div className="container-fluid">
			<div className="gray">
				<p className="below-contact-header">
					Fill out the form below and {dealerName} will get in touch.
				</p>
			</div>
			<div className="container-fluid container-email">
				<form className="form">
					<div className="form-group contact-form-label">
						<div className="contact-label-row">
							<label className="icon-label">First and last name</label>
							<span className={`accent ${contactProperties.name ? `fa fa-check-circle-o` : `fa fa-circle-o`}`} />
						</div>
						<input
							type="text"
							value={contactProperties.name}
							name="name"
							className="form-control"
							onChange={e => handleFormInputChange(e)}
						/>
					</div>
					<div className="form-group contact-form-label phone-label">
						<div className="contact-label-row">
							<label>Phone number</label>

							<span className={`accent ${contactProperties.number ? `fa fa-check-circle-o` : `fa fa-circle-o`}`} />
						</div>
						<input
							type="text"
							value={contactProperties.number}
							name="number"
							className="form-control"
							onChange={e => handleFormInputChange(e)}
						/>
					</div>
					<div className="form-group contact-form-label">
						<div className="contact-label-row">
							<label>Email address</label>

							<span className={`accent ${contactProperties.address ? `fa fa-check-circle-o` : `fa fa-circle-o`}`} />
						</div>

						<input
							type="text"
							value={contactProperties.address}
							name="address"
							className="form-control"
							onChange={e => handleFormInputChange(e)}
						/>
					</div>
					<div className="form-group contact-form-label">
						<div className="contact-label-row">
							<label>Comments or questions</label>
							<p className="optional gray">Optional</p>
						</div>
						<textarea
							type="text"
							value={contactProperties.comments}
							name="comments"
							className="form-control"
							rows="3"
							onChange={e => handleFormInputChange(e)}
						/>
					</div>
					<div className="pool-spa-container">
						<div className="contact-label-row">
							<label>Do you currently own a pool or spa?</label>
							<p className="optional gray">Optional</p>
						</div>

						<div className="own-spa-container">
							<div className="contact-button-container">
								<button
									className={`contact-yes-button ${toggled ? `button-clicked` : `no-pool-or-spa`}`}
									onClick={e => ownPoolOrSpa('yes', e)}
								>
									Yes
								</button>
								<button
									className={`contact-no-button ${toggled === false ? `button-clicked` : `no-pool-or-spa`}`}
									onClick={e => ownPoolOrSpa('no', e)}
								>
									No
								</button>
							</div>
							<ul className="contact-checkbox-container">
								<li>
									<span className="no-padding-left">
										<input type="radio" className="contact-yes-checkbox" />
									</span>
									Yes
								</li>
								<li>
									<span>
										<input type="radio" className="contact-no-checkbox" />
									</span>
									No
								</li>
							</ul>
						</div>
					</div>
				</form>
				<div className="send-email-container">
					<p className="send-email-2 accent">Send</p>
					<p className="send-email-1">
						Send my email<span className="glyphicon glyphicon-chevron-right accent" />
					</p>
				</div>
			</div>
		</div>
		<footer className="text-center container-footer">
			<p className="contact-footer-paragraph">
				*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
			</p>
		</footer>
	</div>;

Contact.propTypes = {
	closeModal: PropTypes.func.isRequired,
	dealerName: PropTypes.string.isRequired,
	contactProperties: PropTypes.shape({
		name: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired,
		address: PropTypes.string.isRequired,
		comments: PropTypes.string.isRequired,
		own: PropTypes.bool.isRequired
	}).isRequired,
	handleFormInputChange: PropTypes.func.isRequired,
	ownPoolOrSpa: PropTypes.func.isRequired,
	toggled: PropTypes.string.isRequired
};

window.Contact = Contact;
