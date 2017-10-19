var Filter = props =>
	<div className="filter-outer-container">
		<div className="filter-inner-container">
			<div className="filter-component">
				<div className="blue dealer-numbers filter-header">
					<span>
						{props.dealerTotal} dealers in {props.dealer.zipcode}
					</span>
				</div>
				<div className="filter-header">
					<span>Filter Results</span>
				</div>
				<div className="filter-header full-hide">
					<span className="glyphicon glyphicon-triangle-bottom" />
				</div>
			</div>
			<div className="credential-component gray">
				<ul className="credential-list-container">
					<li className="credential-item">
						<span>
							<input
								className="form-check-input"
								type="checkbox"
								name="service"
								onChange={e => props.handleFilterChange(e)}
							/>
						</span>Service
					</li>
					<li className="credential-item">
						<span>
							<input className="" type="checkbox" name="installation" onChange={e => props.handleFilterChange(e)} />
						</span>Installation
					</li>
					<li className="credential-item">
						<span>
							<input className="" type="checkbox" name="residential" onChange={e => props.handleFilterChange(e)} />
						</span>Residential
					</li>
					<li className="credential-item">
						<span>
							<input className="" type="checkbox" name="commercial" onChange={e => props.handleFilterChange(e)} />
						</span>Commercial<span className="glyphicon glyphicon-question-sign light-grey" />
					</li>
				</ul>
			</div>
		</div>
	</div>;

Filter.propTypes = {
	dealerTotal: PropTypes.number.isRequired,
	dealer: PropTypes.object.isRequired,
	handleFilterChange: PropTypes.func.isRequired
};

window.Filter = Filter;
