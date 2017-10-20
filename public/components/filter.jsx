var Filter = ({ dealer, zip, handleFilterChange }) =>
	<div className="filter-outer-container">
		<div className="filter-inner-container">
			<div className="filter-component">
				<Stats dealers={dealer} zip={zip} />
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
								onChange={e => handleFilterChange(e)}
							/>
						</span>Service
					</li>
					<li className="credential-item">
						<span>
							<input className="" type="checkbox" name="installation" onChange={e => handleFilterChange(e)} />
						</span>Installation
					</li>
					<li className="credential-item">
						<span>
							<input className="" type="checkbox" name="residential" onChange={e => handleFilterChange(e)} />
						</span>Residential
					</li>
					<li className="credential-item">
						<span>
							<input className="" type="checkbox" name="commercial" onChange={e => handleFilterChange(e)} />
						</span>Commercial<span className="glyphicon glyphicon-question-sign light-grey question">
							<span className="pop-up">Limited to a few locations</span>
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>;

Filter.propTypes = {
	dealer: PropTypes.array.isRequired,
	handleFilterChange: PropTypes.func.isRequired,
	zip: PropTypes.string.isRequired
};

window.Filter = Filter;
