'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
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
		_this.handleFilterChange = _this.handleFilterChange.bind(_this);
		_this.handleFormInputChange = _this.handleFormInputChange.bind(_this);
		_this.openModal = _this.openModal.bind(_this);
		_this.closeModal = _this.closeModal.bind(_this);
		_this.handleButtonClick = _this.handleButtonClick.bind(_this);
		_this.toggleMenu = _this.toggleMenu.bind(_this);
		_this.hovering = _this.hovering.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var dealersWithUpdatedHours = this.state.dealerList.map(function (dealer) {
				var tempDealer = Object.assign({}, dealer);
				tempDealer.data.weekHours = _this2.groupDaysOfweek(tempDealer.data.weekHours);
				tempDealer.data.certifications = _this2.addClassName(tempDealer.data.certifications);
				return tempDealer;
			});

			this.setState({
				dealerList: dealersWithUpdatedHours
			});
		}
	}, {
		key: 'handleFormInputChange',
		value: function handleFormInputChange(e) {
			var name = e.target.name;
			var contactForm = Object.assign({}, this.state.contactForm);

			contactForm[name] = e.target.value;

			this.setState({
				contactForm: contactForm
			});
		}
	}, {
		key: 'hovering',
		value: function hovering() {
			console.log('hover state: ', this.state.hover);
			this.setState({ hover: !this.state.hover });
		}
	}, {
		key: 'openModal',
		value: function openModal(dealerName) {
			this.setState({
				isModalOpen: true,
				dealerName: dealerName
			});
		}
	}, {
		key: 'closeModal',
		value: function closeModal() {
			this.setState({ isModalOpen: false });
		}
	}, {
		key: 'toggleMenu',
		value: function toggleMenu() {
			var shownState = this.state.showMenu === 'showing' ? 'hiding' : 'showing';
			var hiddenState = this.state.hideMenu === 'hiding' ? 'showing' : 'hiding';

			this.setState({
				showMenu: shownState,
				hideMenu: hiddenState
			});
		}
	}, {
		key: 'handleFilterChange',
		value: function handleFilterChange(e) {
			var certificationStates = Object.keys(this.state.certificationChecked);
			var certificationChecked = {};

			for (var i = 0; i < Object.keys(this.state.certificationChecked).length; i++) {
				var key = Object.keys(this.state.certificationChecked)[i];
				var value = this.state.certificationChecked[key];
				certificationChecked[key] = value;
			}

			certificationChecked[e.target.name] = e.target.checked;

			this.filterByCertification(certificationChecked);
		}
	}, {
		key: 'joinCertifications',
		value: function joinCertifications(certificationArray) {
			var joinedValues = certificationArray.reduce(function (runningWord, currentWord) {
				return runningWord += ' ' + currentWord.certification;
			}, '');

			return joinedValues;
		}
	}, {
		key: 'filterByCertification',
		value: function filterByCertification(certificationChecked) {
			var _this3 = this;

			var filteredDealers = window.dealerData.dealers.filter(function (dealer) {
				var joinedCertifications = _this3.joinCertifications(dealer.data.certifications);

				return !certificationChecked.service && !certificationChecked.installation && !certificationChecked.residential && !certificationChecked.commercial || certificationChecked.service && joinedCertifications.indexOf('Service Pro') >= 0 || certificationChecked.installation && joinedCertifications.indexOf('Installation Pro') >= 0 || certificationChecked.residential && joinedCertifications.indexOf('Residential Pro') >= 0 || certificationChecked.commercial && joinedCertifications.indexOf('Commercial Pro') >= 0;
			});

			this.setState({
				certificationChecked: certificationChecked,
				dealerList: filteredDealers
			});
		}
	}, {
		key: 'addClassName',
		value: function addClassName(certificationArr) {
			var _certificationClassAs;

			var certificationClassAssociations = (_certificationClassAs = {}, _defineProperty(_certificationClassAs, 'Installation Pro', 'glyphicon glyphicon-star'), _defineProperty(_certificationClassAs, 'Commercial Pro', 'glyphicon glyphicon-user'), _defineProperty(_certificationClassAs, 'Residential Pro', 'glyphicon glyphicon-home'), _defineProperty(_certificationClassAs, 'Service Pro', 'glyphicon glyphicon-cog'), _certificationClassAs);

			var certificationClasses = certificationArr.map(function (certification) {
				var certObj = {};
				certObj.certification = certification;
				certObj.className = certificationClassAssociations[certification];
				return certObj;
			});

			return certificationClasses;
		}
	}, {
		key: 'groupDaysOfweek',
		value: function groupDaysOfweek(week) {
			var modifiedWeek = {
				mon: 'Mondays',
				tue: 'Tuesdays',
				wed: 'Wednesdays',
				thu: 'Thursdays',
				fri: 'Fridays',
				sat: 'Saturdays',
				sun: 'Sundays'
			};

			var finalDays = [];
			var base = week.mon;
			var same = true;

			finalDays[0] = 'Mondays ' + week.mon;

			for (var i = 1; i < 5; i++) {
				var day = '' + Object.keys(week)[i];
				var hours = week[day] === 'On Call' ? '- On Call' : week[day] || '- CLOSED';

				finalDays.push([modifiedWeek[day]] + ' ' + hours);
				if (week[Object.keys(week)[i]] !== base) {
					same = false;
				}
			}

			if (same) {
				finalDays.splice(0);
				finalDays[0] = 'Weekdays ' + base;
			}

			for (var _i = 5; _i < 7; _i++) {
				var _day = _i === 5 ? 'sat' : 'sun';
				var _hours = week[_day] === 'On Call' ? '- On Call' : week[_day] || '- CLOSED';

				finalDays.push([modifiedWeek[_day]] + ' ' + _hours);
			}
			return finalDays;
		}
	}, {
		key: 'handleButtonClick',
		value: function handleButtonClick(response, e) {
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
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			return React.createElement(
				'div',
				{ className: 'outer-container' },
				React.createElement(
					Modal,
					{ isOpen: this.state.isModalOpen, onClose: function onClose() {
							return _this4.closeModal();
						} },
					React.createElement(Contact, {
						dealerName: this.state.dealerName,
						contactProperties: this.state.contactForm,
						handleFormInputChange: this.handleFormInputChange,
						ownPoolOrSpa: this.handleButtonClick,
						toggled: this.state.toggled,
						closeModal: this.closeModal
					})
				),
				React.createElement(
					'div',
					{ className: 'outer-positioning-container' },
					React.createElement(TopBar, null),
					React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.showMenu, hideMenu: this.state.hideMenu }),
					React.createElement('div', { className: 'background-image-main' }),
					React.createElement(
						'div',
						{ className: 'container-custom' },
						React.createElement(Filter, {
							dealer: this.props.dealers.dealers,
							zip: this.props.dealers.zipcode,
							handleFilterChange: this.handleFilterChange
						}),
						React.createElement(DealerList, {
							dealers: this.state.dealerList,
							checkedItems: this.state.certificationChecked,
							openModal: this.openModal
						})
					),
					React.createElement(TopFooter, null),
					React.createElement(Footer, null)
				)
			);
		}
	}]);

	return App;
}(React.Component);

App.propTypes = {
	dealers: PropTypes.shape({
		zipcode: PropTypes.string.isRequired,
		location: PropTypes.Object,
		dealers: PropTypes.array.isRequired
	}).isRequired
};

ReactDOM.render(React.createElement(App, { dealers: window.dealerData }), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImNlcnRpZmljYXRpb25DaGVja2VkIiwiY29tbWVyY2lhbCIsImluc3RhbGxhdGlvbiIsInJlc2lkZW50aWFsIiwic2VydmljZSIsImNvbnRhY3RGb3JtIiwibmFtZSIsIm51bWJlciIsImFkZHJlc3MiLCJjb21tZW50cyIsIm93biIsImlzTW9kYWxPcGVuIiwiZGVhbGVyTmFtZSIsImRlYWxlckxpc3QiLCJkZWFsZXJzIiwidG9nZ2xlZCIsInNob3dNZW51IiwiaGlkZU1lbnUiLCJob3ZlciIsImhhbmRsZUZpbHRlckNoYW5nZSIsImJpbmQiLCJoYW5kbGVGb3JtSW5wdXRDaGFuZ2UiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJ0b2dnbGVNZW51IiwiaG92ZXJpbmciLCJkZWFsZXJzV2l0aFVwZGF0ZWRIb3VycyIsIm1hcCIsInRlbXBEZWFsZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWFsZXIiLCJkYXRhIiwid2Vla0hvdXJzIiwiZ3JvdXBEYXlzT2Z3ZWVrIiwiY2VydGlmaWNhdGlvbnMiLCJhZGRDbGFzc05hbWUiLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzaG93blN0YXRlIiwiaGlkZGVuU3RhdGUiLCJjZXJ0aWZpY2F0aW9uU3RhdGVzIiwia2V5cyIsImkiLCJsZW5ndGgiLCJrZXkiLCJjaGVja2VkIiwiZmlsdGVyQnlDZXJ0aWZpY2F0aW9uIiwiY2VydGlmaWNhdGlvbkFycmF5Iiwiam9pbmVkVmFsdWVzIiwicmVkdWNlIiwicnVubmluZ1dvcmQiLCJjdXJyZW50V29yZCIsImNlcnRpZmljYXRpb24iLCJmaWx0ZXJlZERlYWxlcnMiLCJ3aW5kb3ciLCJkZWFsZXJEYXRhIiwiZmlsdGVyIiwiam9pbmVkQ2VydGlmaWNhdGlvbnMiLCJqb2luQ2VydGlmaWNhdGlvbnMiLCJpbmRleE9mIiwiY2VydGlmaWNhdGlvbkFyciIsImNlcnRpZmljYXRpb25DbGFzc0Fzc29jaWF0aW9ucyIsImNlcnRpZmljYXRpb25DbGFzc2VzIiwiY2VydE9iaiIsImNsYXNzTmFtZSIsIndlZWsiLCJtb2RpZmllZFdlZWsiLCJtb24iLCJ0dWUiLCJ3ZWQiLCJ0aHUiLCJmcmkiLCJzYXQiLCJzdW4iLCJmaW5hbERheXMiLCJiYXNlIiwic2FtZSIsImRheSIsImhvdXJzIiwicHVzaCIsInNwbGljZSIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJ6aXBjb2RlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJsb2NhdGlvbiIsImFycmF5IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUdsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMseUJBQXNCO0FBQ3JCQyxnQkFBWSxLQURTO0FBRXJCQyxrQkFBYyxLQUZPO0FBR3JCQyxpQkFBYSxLQUhRO0FBSXJCQyxhQUFTO0FBSlksSUFEVjtBQU9aQyxnQkFBYTtBQUNaQyxVQUFNLEVBRE07QUFFWkMsWUFBUSxFQUZJO0FBR1pDLGFBQVMsRUFIRztBQUlaQyxjQUFVLEVBSkU7QUFLWkMsU0FBSztBQUxPLElBUEQ7QUFjWkMsZ0JBQWEsS0FkRDtBQWVaQyxlQUFZLEVBZkE7QUFnQlpDLGVBQVlmLE1BQU1nQixPQUFOLENBQWNBLE9BaEJkO0FBaUJaQyxZQUFTLEVBakJHO0FBa0JaQyxhQUFVLFNBbEJFO0FBbUJaQyxhQUFVLFFBbkJFO0FBb0JaQyxVQUFPO0FBcEJLLEdBQWI7QUFzQkEsUUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLE9BQTFCO0FBQ0EsUUFBS0Ms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QWdCRjtBQUhELEVBQWhCLEVBSU5BO0FBTFksQ0FBaEI7O0FBUUFHLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxJQUFLLFNBQVN4QyxPQUFPQyxVQUFyQixHQUFoQixFQUFxRHdDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBckQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y2VydGlmaWNhdGlvbkNoZWNrZWQ6IHtcblx0XHRcdFx0Y29tbWVyY2lhbDogZmFsc2UsXG5cdFx0XHRcdGluc3RhbGxhdGlvbjogZmFsc2UsXG5cdFx0XHRcdHJlc2lkZW50aWFsOiBmYWxzZSxcblx0XHRcdFx0c2VydmljZTogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRjb250YWN0Rm9ybToge1xuXHRcdFx0XHRuYW1lOiAnJyxcblx0XHRcdFx0bnVtYmVyOiAnJyxcblx0XHRcdFx0YWRkcmVzczogJycsXG5cdFx0XHRcdGNvbW1lbnRzOiAnJyxcblx0XHRcdFx0b3duOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGlzTW9kYWxPcGVuOiBmYWxzZSxcblx0XHRcdGRlYWxlck5hbWU6ICcnLFxuXHRcdFx0ZGVhbGVyTGlzdDogcHJvcHMuZGVhbGVycy5kZWFsZXJzLFxuXHRcdFx0dG9nZ2xlZDogJycsXG5cdFx0XHRzaG93TWVudTogJ3Nob3dpbmcnLFxuXHRcdFx0aGlkZU1lbnU6ICdoaWRpbmcnLFxuXHRcdFx0aG92ZXI6IGZhbHNlXG5cdFx0fTtcblx0XHR0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSA9IHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oYW5kbGVGb3JtSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUZvcm1JbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrID0gdGhpcy5oYW5kbGVCdXR0b25DbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaG92ZXJpbmcgPSB0aGlzLmhvdmVyaW5nLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgZGVhbGVyc1dpdGhVcGRhdGVkSG91cnMgPSB0aGlzLnN0YXRlLmRlYWxlckxpc3QubWFwKGRlYWxlciA9PiB7XG5cdFx0XHRsZXQgdGVtcERlYWxlciA9IE9iamVjdC5hc3NpZ24oe30sIGRlYWxlcik7XG5cdFx0XHR0ZW1wRGVhbGVyLmRhdGEud2Vla0hvdXJzID0gdGhpcy5ncm91cERheXNPZndlZWsodGVtcERlYWxlci5kYXRhLndlZWtIb3Vycyk7XG5cdFx0XHR0ZW1wRGVhbGVyLmRhdGEuY2VydGlmaWNhdGlvbnMgPSB0aGlzLmFkZENsYXNzTmFtZSh0ZW1wRGVhbGVyLmRhdGEuY2VydGlmaWNhdGlvbnMpO1xuXHRcdFx0cmV0dXJuIHRlbXBEZWFsZXI7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRlYWxlckxpc3Q6IGRlYWxlcnNXaXRoVXBkYXRlZEhvdXJzXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVGb3JtSW5wdXRDaGFuZ2UoZSkge1xuXHRcdGxldCBuYW1lID0gZS50YXJnZXQubmFtZTtcblx0XHRsZXQgY29udGFjdEZvcm0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmNvbnRhY3RGb3JtKTtcblxuXHRcdGNvbnRhY3RGb3JtW25hbWVdID0gZS50YXJnZXQudmFsdWU7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNvbnRhY3RGb3JtOiBjb250YWN0Rm9ybVxuXHRcdH0pO1xuXHR9XG5cblx0aG92ZXJpbmcoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2hvdmVyIHN0YXRlOiAnLCB0aGlzLnN0YXRlLmhvdmVyKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgaG92ZXI6ICF0aGlzLnN0YXRlLmhvdmVyIH0pO1xuXHR9XG5cblx0b3Blbk1vZGFsKGRlYWxlck5hbWUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGlzTW9kYWxPcGVuOiB0cnVlLFxuXHRcdFx0ZGVhbGVyTmFtZTogZGVhbGVyTmFtZVxuXHRcdH0pO1xuXHR9XG5cblx0Y2xvc2VNb2RhbCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgaXNNb2RhbE9wZW46IGZhbHNlIH0pO1xuXHR9XG5cblx0dG9nZ2xlTWVudSgpIHtcblx0XHRsZXQgc2hvd25TdGF0ZSA9IHRoaXMuc3RhdGUuc2hvd01lbnUgPT09ICdzaG93aW5nJyA/ICdoaWRpbmcnIDogJ3Nob3dpbmcnO1xuXHRcdGxldCBoaWRkZW5TdGF0ZSA9IHRoaXMuc3RhdGUuaGlkZU1lbnUgPT09ICdoaWRpbmcnID8gJ3Nob3dpbmcnIDogJ2hpZGluZyc7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNob3dNZW51OiBzaG93blN0YXRlLFxuXHRcdFx0aGlkZU1lbnU6IGhpZGRlblN0YXRlXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVGaWx0ZXJDaGFuZ2UoZSkge1xuXHRcdGxldCBjZXJ0aWZpY2F0aW9uU3RhdGVzID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZCk7XG5cdFx0bGV0IGNlcnRpZmljYXRpb25DaGVja2VkID0ge307XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWQpLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQga2V5ID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZClbaV07XG5cdFx0XHRsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkW2tleV07XG5cdFx0XHRjZXJ0aWZpY2F0aW9uQ2hlY2tlZFtrZXldID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0Y2VydGlmaWNhdGlvbkNoZWNrZWRbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC5jaGVja2VkO1xuXG5cdFx0dGhpcy5maWx0ZXJCeUNlcnRpZmljYXRpb24oY2VydGlmaWNhdGlvbkNoZWNrZWQpO1xuXHR9XG5cblx0am9pbkNlcnRpZmljYXRpb25zKGNlcnRpZmljYXRpb25BcnJheSkge1xuXHRcdGxldCBqb2luZWRWYWx1ZXMgPSBjZXJ0aWZpY2F0aW9uQXJyYXkucmVkdWNlKChydW5uaW5nV29yZCwgY3VycmVudFdvcmQpID0+IHtcblx0XHRcdHJldHVybiAocnVubmluZ1dvcmQgKz0gYCAke2N1cnJlbnRXb3JkLmNlcnRpZmljYXRpb259YCk7XG5cdFx0fSwgJycpO1xuXG5cdFx0cmV0dXJuIGpvaW5lZFZhbHVlcztcblx0fVxuXG5cdGZpbHRlckJ5Q2VydGlmaWNhdGlvbihjZXJ0aWZpY2F0aW9uQ2hlY2tlZCkge1xuXHRcdGxldCBmaWx0ZXJlZERlYWxlcnMgPSB3aW5kb3cuZGVhbGVyRGF0YS5kZWFsZXJzLmZpbHRlcihkZWFsZXIgPT4ge1xuXHRcdFx0bGV0IGpvaW5lZENlcnRpZmljYXRpb25zID0gdGhpcy5qb2luQ2VydGlmaWNhdGlvbnMoZGVhbGVyLmRhdGEuY2VydGlmaWNhdGlvbnMpO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQoIWNlcnRpZmljYXRpb25DaGVja2VkLnNlcnZpY2UgJiZcblx0XHRcdFx0XHQhY2VydGlmaWNhdGlvbkNoZWNrZWQuaW5zdGFsbGF0aW9uICYmXG5cdFx0XHRcdFx0IWNlcnRpZmljYXRpb25DaGVja2VkLnJlc2lkZW50aWFsICYmXG5cdFx0XHRcdFx0IWNlcnRpZmljYXRpb25DaGVja2VkLmNvbW1lcmNpYWwpIHx8XG5cdFx0XHRcdChjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5zZXJ2aWNlICYmIGpvaW5lZENlcnRpZmljYXRpb25zLmluZGV4T2YoJ1NlcnZpY2UgUHJvJykgPj0gMCkgfHxcblx0XHRcdFx0KGNlcnRpZmljYXRpb25DaGVja2VkLmluc3RhbGxhdGlvbiAmJiBqb2luZWRDZXJ0aWZpY2F0aW9ucy5pbmRleE9mKCdJbnN0YWxsYXRpb24gUHJvJykgPj0gMCkgfHxcblx0XHRcdFx0KGNlcnRpZmljYXRpb25DaGVja2VkLnJlc2lkZW50aWFsICYmIGpvaW5lZENlcnRpZmljYXRpb25zLmluZGV4T2YoJ1Jlc2lkZW50aWFsIFBybycpID49IDApIHx8XG5cdFx0XHRcdChjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5jb21tZXJjaWFsICYmIGpvaW5lZENlcnRpZmljYXRpb25zLmluZGV4T2YoJ0NvbW1lcmNpYWwgUHJvJykgPj0gMClcblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNlcnRpZmljYXRpb25DaGVja2VkOiBjZXJ0aWZpY2F0aW9uQ2hlY2tlZCxcblx0XHRcdGRlYWxlckxpc3Q6IGZpbHRlcmVkRGVhbGVyc1xuXHRcdH0pO1xuXHR9XG5cblx0YWRkQ2xhc3NOYW1lKGNlcnRpZmljYXRpb25BcnIpIHtcblx0XHRsZXQgY2VydGlmaWNhdGlvbkNsYXNzQXNzb2NpYXRpb25zID0ge1xuXHRcdFx0WydJbnN0YWxsYXRpb24gUHJvJ106ICdnbHlwaGljb24gZ2x5cGhpY29uLXN0YXInLFxuXHRcdFx0WydDb21tZXJjaWFsIFBybyddOiAnZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyJyxcblx0XHRcdFsnUmVzaWRlbnRpYWwgUHJvJ106ICdnbHlwaGljb24gZ2x5cGhpY29uLWhvbWUnLFxuXHRcdFx0WydTZXJ2aWNlIFBybyddOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1jb2cnXG5cdFx0fTtcblxuXHRcdGxldCBjZXJ0aWZpY2F0aW9uQ2xhc3NlcyA9IGNlcnRpZmljYXRpb25BcnIubWFwKGNlcnRpZmljYXRpb24gPT4ge1xuXHRcdFx0bGV0IGNlcnRPYmogPSB7fTtcblx0XHRcdGNlcnRPYmouY2VydGlmaWNhdGlvbiA9IGNlcnRpZmljYXRpb247XG5cdFx0XHRjZXJ0T2JqLmNsYXNzTmFtZSA9IGNlcnRpZmljYXRpb25DbGFzc0Fzc29jaWF0aW9uc1tjZXJ0aWZpY2F0aW9uXTtcblx0XHRcdHJldHVybiBjZXJ0T2JqO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNlcnRpZmljYXRpb25DbGFzc2VzO1xuXHR9XG5cblx0Z3JvdXBEYXlzT2Z3ZWVrKHdlZWspIHtcblx0XHRsZXQgbW9kaWZpZWRXZWVrID0ge1xuXHRcdFx0bW9uOiAnTW9uZGF5cycsXG5cdFx0XHR0dWU6ICdUdWVzZGF5cycsXG5cdFx0XHR3ZWQ6ICdXZWRuZXNkYXlzJyxcblx0XHRcdHRodTogJ1RodXJzZGF5cycsXG5cdFx0XHRmcmk6ICdGcmlkYXlzJyxcblx0XHRcdHNhdDogJ1NhdHVyZGF5cycsXG5cdFx0XHRzdW46ICdTdW5kYXlzJ1xuXHRcdH07XG5cblx0XHRsZXQgZmluYWxEYXlzID0gW107XG5cdFx0bGV0IGJhc2UgPSB3ZWVrLm1vbjtcblx0XHRsZXQgc2FtZSA9IHRydWU7XG5cblx0XHRmaW5hbERheXNbMF0gPSBgTW9uZGF5cyAke3dlZWsubW9ufWA7XG5cblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuXHRcdFx0bGV0IGRheSA9IGAke09iamVjdC5rZXlzKHdlZWspW2ldfWA7XG5cdFx0XHRsZXQgaG91cnMgPSB3ZWVrW2RheV0gPT09ICdPbiBDYWxsJyA/ICctIE9uIENhbGwnIDogd2Vla1tkYXldIHx8ICctIENMT1NFRCc7XG5cblx0XHRcdGZpbmFsRGF5cy5wdXNoKGAke1ttb2RpZmllZFdlZWtbZGF5XV19ICR7aG91cnN9YCk7XG5cdFx0XHRpZiAod2Vla1tPYmplY3Qua2V5cyh3ZWVrKVtpXV0gIT09IGJhc2UpIHtcblx0XHRcdFx0c2FtZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzYW1lKSB7XG5cdFx0XHRmaW5hbERheXMuc3BsaWNlKDApO1xuXHRcdFx0ZmluYWxEYXlzWzBdID0gYFdlZWtkYXlzICR7YmFzZX1gO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSA1OyBpIDwgNzsgaSsrKSB7XG5cdFx0XHRsZXQgZGF5ID0gaSA9PT0gNSA/ICdzYXQnIDogJ3N1bic7XG5cdFx0XHRsZXQgaG91cnMgPSB3ZWVrW2RheV0gPT09ICdPbiBDYWxsJyA/ICctIE9uIENhbGwnIDogd2Vla1tkYXldIHx8ICctIENMT1NFRCc7XG5cblx0XHRcdGZpbmFsRGF5cy5wdXNoKGAke1ttb2RpZmllZFdlZWtbZGF5XV19ICR7aG91cnN9YCk7XG5cdFx0fVxuXHRcdHJldHVybiBmaW5hbERheXM7XG5cdH1cblxuXHRoYW5kbGVCdXR0b25DbGljayhyZXNwb25zZSwgZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAocmVzcG9uc2UgPT09ICd5ZXMnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0dG9nZ2xlZDogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVkOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8TW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLmlzTW9kYWxPcGVufSBvbkNsb3NlPXsoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKX0+XG5cdFx0XHRcdFx0PENvbnRhY3Rcblx0XHRcdFx0XHRcdGRlYWxlck5hbWU9e3RoaXMuc3RhdGUuZGVhbGVyTmFtZX1cblx0XHRcdFx0XHRcdGNvbnRhY3RQcm9wZXJ0aWVzPXt0aGlzLnN0YXRlLmNvbnRhY3RGb3JtfVxuXHRcdFx0XHRcdFx0aGFuZGxlRm9ybUlucHV0Q2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1JbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdG93blBvb2xPclNwYT17dGhpcy5oYW5kbGVCdXR0b25DbGlja31cblx0XHRcdFx0XHRcdHRvZ2dsZWQ9e3RoaXMuc3RhdGUudG9nZ2xlZH1cblx0XHRcdFx0XHRcdGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VNb2RhbH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXBvc2l0aW9uaW5nLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxUb3BCYXIgLz5cblx0XHRcdFx0XHQ8TmF2IHRvZ2dsZU1lbnU9e3RoaXMudG9nZ2xlTWVudX0gc2hvd01lbnU9e3RoaXMuc3RhdGUuc2hvd01lbnV9IGhpZGVNZW51PXt0aGlzLnN0YXRlLmhpZGVNZW51fSAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1pbWFnZS1tYWluXCIgLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b21cIj5cblx0XHRcdFx0XHRcdDxGaWx0ZXJcblx0XHRcdFx0XHRcdFx0ZGVhbGVyPXt0aGlzLnByb3BzLmRlYWxlcnMuZGVhbGVyc31cblx0XHRcdFx0XHRcdFx0emlwPXt0aGlzLnByb3BzLmRlYWxlcnMuemlwY29kZX1cblx0XHRcdFx0XHRcdFx0aGFuZGxlRmlsdGVyQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbHRlckNoYW5nZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8RGVhbGVyTGlzdFxuXHRcdFx0XHRcdFx0XHRkZWFsZXJzPXt0aGlzLnN0YXRlLmRlYWxlckxpc3R9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWRJdGVtcz17dGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZH1cblx0XHRcdFx0XHRcdFx0b3Blbk1vZGFsPXt0aGlzLm9wZW5Nb2RhbH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PFRvcEZvb3RlciAvPlxuXHRcdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG5cdGRlYWxlcnM6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0emlwY29kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGxvY2F0aW9uOiBQcm9wVHlwZXMuT2JqZWN0LFxuXHRcdGRlYWxlcnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG5cdH0pLmlzUmVxdWlyZWRcbn07XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIGRlYWxlcnM9e3dpbmRvdy5kZWFsZXJEYXRhfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==