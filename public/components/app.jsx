class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			certificationChecked: {
				commercial: false,
				installation: false,
				residential: false,
				service: false
			},
			contactForm: {
				name: '',
				number: '',
				address: '',
				comments: '',
				own: false
			},
			isModalOpen: false,
			dealerName: '',
			dealerList: props.dealers.dealers,
			toggled: '',
			showMenu: 'showing',
			hideMenu: 'hiding',
			hover: false
		};
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.handleFormInputChange = this.handleFormInputChange.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.hovering = this.hovering.bind(this);
	}

	componentDidMount() {
		let dealersWithUpdatedHours = this.state.dealerList.map(dealer => {
			let tempDealer = Object.assign({}, dealer);
			tempDealer.data.weekHours = this.groupDaysOfweek(tempDealer.data.weekHours);
			tempDealer.data.certifications = this.addClassName(tempDealer.data.certifications);
			return tempDealer;
		});

		this.setState({
			dealerList: dealersWithUpdatedHours
		});
	}

	handleFormInputChange(e) {
		let name = e.target.name;
		let contactForm = Object.assign({}, this.state.contactForm);

		contactForm[name] = e.target.value;

		this.setState({
			contactForm: contactForm
		});
	}

	hovering() {
		console.log('hover state: ', this.state.hover);
		this.setState({ hover: !this.state.hover });
	}

	openModal(dealerName) {
		this.setState({
			isModalOpen: true,
			dealerName: dealerName
		});
	}

	closeModal() {
		this.setState({ isModalOpen: false });
	}

	toggleMenu() {
		let shownState = this.state.showMenu === 'showing' ? 'hiding' : 'showing';
		let hiddenState = this.state.hideMenu === 'hiding' ? 'showing' : 'hiding';

		this.setState({
			showMenu: shownState,
			hideMenu: hiddenState
		});
	}

	handleFilterChange(e) {
		let certificationStates = Object.keys(this.state.certificationChecked);
		let certificationChecked = {};

		for (let i = 0; i < Object.keys(this.state.certificationChecked).length; i++) {
			let key = Object.keys(this.state.certificationChecked)[i];
			let value = this.state.certificationChecked[key];
			certificationChecked[key] = value;
		}

		certificationChecked[e.target.name] = e.target.checked;

		this.filterByCertification(certificationChecked);
	}

	joinCertifications(certificationArray) {
		let joinedValues = certificationArray.reduce((runningWord, currentWord) => {
			return (runningWord += ` ${currentWord.certification}`);
		}, '');

		return joinedValues;
	}

	filterByCertification(certificationChecked) {
		let filteredDealers = window.dealerData.dealers.filter(dealer => {
			let joinedCertifications = this.joinCertifications(dealer.data.certifications);

			return (
				(!certificationChecked.service &&
					!certificationChecked.installation &&
					!certificationChecked.residential &&
					!certificationChecked.commercial) ||
				(certificationChecked.service && joinedCertifications.indexOf('Service Pro') >= 0) ||
				(certificationChecked.installation && joinedCertifications.indexOf('Installation Pro') >= 0) ||
				(certificationChecked.residential && joinedCertifications.indexOf('Residential Pro') >= 0) ||
				(certificationChecked.commercial && joinedCertifications.indexOf('Commercial Pro') >= 0)
			);
		});

		this.setState({
			certificationChecked: certificationChecked,
			dealerList: filteredDealers
		});
	}

	addClassName(certificationArr) {
		let certificationClassAssociations = {
			['Installation Pro']: 'glyphicon glyphicon-star',
			['Commercial Pro']: 'glyphicon glyphicon-user',
			['Residential Pro']: 'glyphicon glyphicon-home',
			['Service Pro']: 'glyphicon glyphicon-cog'
		};

		let certificationClasses = certificationArr.map(certification => {
			let certObj = {};
			certObj.certification = certification;
			certObj.className = certificationClassAssociations[certification];
			return certObj;
		});

		return certificationClasses;
	}

	groupDaysOfweek(week) {
		let modifiedWeek = {
			mon: 'Mondays',
			tue: 'Tuesdays',
			wed: 'Wednesdays',
			thu: 'Thursdays',
			fri: 'Fridays',
			sat: 'Saturdays',
			sun: 'Sundays'
		};

		let finalDays = [];
		let base = week.mon;
		let same = true;

		finalDays[0] = `Mondays ${week.mon}`;

		for (let i = 1; i < 5; i++) {
			let day = `${Object.keys(week)[i]}`;
			let hours = week[day] === 'On Call' ? '- On Call' : week[day] || '- CLOSED';

			finalDays.push(`${[modifiedWeek[day]]} ${hours}`);
			if (week[Object.keys(week)[i]] !== base) {
				same = false;
			}
		}

		if (same) {
			finalDays.splice(0);
			finalDays[0] = `Weekdays ${base}`;
		}

		for (let i = 5; i < 7; i++) {
			let day = i === 5 ? 'sat' : 'sun';
			let hours = week[day] === 'On Call' ? '- On Call' : week[day] || '- CLOSED';

			finalDays.push(`${[modifiedWeek[day]]} ${hours}`);
		}
		return finalDays;
	}

	handleButtonClick(response, e) {
		e.preventDefault();
		if (response === 'yes') {
			this.setState({
				toggled: true
			});
		} else {
			this.setState({
				toggled: false
			});
		}
	}

	render() {
		return (
			<div className="outer-container">
				<Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
					<Contact
						dealerName={this.state.dealerName}
						contactProperties={this.state.contactForm}
						handleFormInputChange={this.handleFormInputChange}
						ownPoolOrSpa={this.handleButtonClick}
						toggled={this.state.toggled}
						closeModal={this.closeModal}
					/>
				</Modal>
				<div className="outer-positioning-container">
					<TopBar />
					<Nav toggleMenu={this.toggleMenu} showMenu={this.state.showMenu} hideMenu={this.state.hideMenu} />
					<div className="background-image-main" />
					<div className="container-custom">
						<Filter
							dealer={this.props.dealers.dealers}
							zip={this.props.dealers.zipcode}
							handleFilterChange={this.handleFilterChange}
						/>
						<DealerList
							dealers={this.state.dealerList}
							checkedItems={this.state.certificationChecked}
							openModal={this.openModal}
						/>
					</div>
					<TopFooter />
					<Footer />
				</div>
			</div>
		);
	}
}

App.propTypes = {
	dealers: PropTypes.shape({
		zipcode: PropTypes.string.isRequired,
		location: PropTypes.Object,
		dealers: PropTypes.array.isRequired
	}).isRequired
};

ReactDOM.render(<App dealers={window.dealerData} />, document.getElementById('app'));
