var Filter = props =>
	<div className="filter-outer-container">
		<div className="filter-inner-container">
			<div className="filter-component">
				<ul>
					<li className="blue dealer-numbers">
						<span />
						{props.dealerTotal} dealers in {props.dealer.zipcode}
					</li>
					<li>
						<span />Filter Results
					</li>
				</ul>
			</div>
			<div className="credential-component gray">
				<ul className="credential-list-container">
					<li>
						<span>
							<input
								className="form-check-input"
								type="checkbox"
								name="service"
								onChange={e => props.handleFilterChange(e)}
							/>
						</span>Service
					</li>
					<li>
						<span>
							<input className="" type="checkbox" name="installation" onChange={e => props.handleFilterChange(e)} />
						</span>Installation
					</li>
					<li>
						<span>
							<input className="" type="checkbox" name="residential" onChange={e => props.handleFilterChange(e)} />
						</span>Residential
					</li>
					<li>
						<span>
							<input className="" type="checkbox" name="commercial" onChange={e => props.handleFilterChange(e)} />
						</span>Commercial<span className="glyphicon glyphicon-question-sign light-grey" />
					</li>
				</ul>
			</div>
		</div>
	</div>;

window.Filter = Filter;
