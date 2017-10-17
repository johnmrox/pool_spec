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
			dealerList: window.dealerData.dealers,
			totalDealers: 0,
			toggled: '',
			showMenu: 'showing',
			hideMenu: 'hiding'
		};
		_this.handleFilterChange = _this.handleFilterChange.bind(_this);
		_this.handleFormInputChange = _this.handleFormInputChange.bind(_this);
		_this.openModal = _this.openModal.bind(_this);
		_this.closeModal = _this.closeModal.bind(_this);
		_this.handleButtonClick = _this.handleButtonClick.bind(_this);
		_this.toggleMenu = _this.toggleMenu.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var dealersWithUpdatedHours = this.state.dealerList.map(function (dealer) {
				var tempDealer = Object.assign({}, dealer);
				tempDealer.data.phone1 = tempDealer.data.phone1.split('-').join('.');
				tempDealer.data.weekHours = _this2.groupDaysOfweek(tempDealer.data.weekHours);
				tempDealer.data.certifications = _this2.addClassName(tempDealer.data.certifications);
				return tempDealer;
			});

			this.setState({
				dealerList: dealersWithUpdatedHours,
				totalDealers: this.state.dealerList.length
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
							dealerTotal: this.state.totalDealers,
							dealer: this.props.dealers,
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

ReactDOM.render(React.createElement(App, { dealers: window.dealerData }), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImNlcnRpZmljYXRpb25DaGVja2VkIiwiY29tbWVyY2lhbCIsImluc3RhbGxhdGlvbiIsInJlc2lkZW50aWFsIiwic2VydmljZSIsImNvbnRhY3RGb3JtIiwibmFtZSIsIm51bWJlciIsImFkZHJlc3MiLCJjb21tZW50cyIsIm93biIsImlzTW9kYWxPcGVuIiwiZGVhbGVyTmFtZSIsImRlYWxlckxpc3QiLCJ3aW5kb3ciLCJkZWFsZXJEYXRhIiwiZGVhbGVycyIsInRvdGFsRGVhbGVycyIsInRvZ2dsZWQiLCJzaG93TWVudSIsImhpZGVNZW51IiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiYmluZCIsImhhbmRsZUZvcm1JbnB1dENoYW5nZSIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJoYW5kbGVCdXR0b25DbGljayIsInRvZ2dsZU1lbnUiLCJkZWFsZXJzV2l0aFVwZGF0ZWRIb3VycyIsIm1hcCIsInRlbXBEZWFsZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWFsZXIiLCJkYXRhIiwicGhvbmUxIiwic3BsaXQiLCJqb2luIiwid2Vla0hvdXJzIiwiZ3JvdXBEYXlzT2Z3ZWVrIiwiY2VydGlmaWNhdGlvbnMiLCJhZGRDbGFzc05hbWUiLCJzZXRTdGF0ZSIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNob3duU3RhdGUiLCJoaWRkZW5TdGF0ZSIsImNlcnRpZmljYXRpb25TdGF0ZXMiLCJrZXlzIiwiaSIsImtleSIsImNoZWNrZWQiLCJmaWx0ZXJCeUNlcnRpZmljYXRpb24iLCJjZXJ0aWZpY2F0aW9uQXJyYXkiLCJqb2luZWRWYWx1ZXMiLCJyZWR1Y2UiLCJydW5uaW5nV29yZCIsImN1cnJlbnRXb3JkIiwiY2VydGlmaWNhdGlvbiIsImZpbHRlcmVkRGVhbGVycyIsImZpbHRlciIsImpvaW5lZENlcnRpZmljYXRpb25zIiwiam9pbkNlcnRpZmljYXRpb25zIiwiaW5kZXhPZiIsImNlcnRpZmljYXRpb25BcnIiLCJjZXJ0aWZpY2F0aW9uQ2xhc3NBc3NvY2lhdGlvbnMiLCJjZXJ0aWZpY2F0aW9uQ2xhc3NlcyIsImNlcnRPYmoiLCJjbGFzc05hbWUiLCJ3ZWVrIiwibW9kaWZpZWRXZWVrIiwibW9uIiwidHVlIiwid2VkIiwidGh1IiwiZnJpIiwic2F0Iiwic3VuIiwiZmluYWxEYXlzIiwiYmFzZSIsInNhbWUiLCJkYXkiLCJob3VycyIsInB1c2giLCJzcGxpY2UiLCJyZXNwb25zZSIsInByZXZlbnREZWZhdWx0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBR2xCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyx5QkFBc0I7QUFDckJDLGdCQUFZLEtBRFM7QUFFckJDLGtCQUFjLEtBRk87QUFHckJDLGlCQUFhLEtBSFE7QUFJckJDLGFBQVM7QUFKWSxJQURWO0FBT1pDLGdCQUFhO0FBQ1pDLFVBQU0sRUFETTtBQUVaQyxZQUFRLEVBRkk7QUFHWkMsYUFBUyxFQUhHO0FBSVpDLGNBQVUsRUFKRTtBQUtaQyxTQUFLO0FBTE8sSUFQRDtBQWNaQyxnQkFBYSxLQWREO0FBZVpDLGVBQVksRUFmQTtBQWdCWkMsZUFBWUMsT0FBT0MsVUFBUCxDQUFrQkMsT0FoQmxCO0FBaUJaQyxpQkFBYyxDQWpCRjtBQWtCWkMsWUFBUyxFQWxCRztBQW1CWkMsYUFBVSxTQW5CRTtBQW9CWkMsYUFBVTtBQXBCRSxHQUFiO0FBc0JBLFFBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QixPQUExQjtBQUNBLFFBQUtDLHFCQUFMLEdBQTZCLE1BQUtBLHFCQUFMLENBQTJCRCxJQUEzQixPQUE3QjtBQUNBLFFBQUtFLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxD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QWMsS0FBS0csaUJBSnBCO0FBS0MsZUFBUyxLQUFLM0IsS0FBTCxDQUFXbUIsT0FMckI7QUFNQyxrQkFBWSxLQUFLTztBQU5sQjtBQURELEtBREQ7QUFXQztBQUFBO0FBQUEsT0FBSyxXQUFVLDZCQUFmO0FBQ0MseUJBQUMsTUFBRCxPQUREO0FBRUMseUJBQUMsR0FBRCxJQUFLLFlBQVksS0FBS0UsVUFBdEIsRUFBa0MsVUFBVSxLQUFLNUIsS0FBTCxDQUFXb0IsUUFBdkQsRUFBaUUsVUFBVSxLQUFLcEIsS0FBTCxDQUFXcUIsUUFBdEYsR0FGRDtBQUdDLGtDQUFLLFdBQVUsdUJBQWYsR0FIRDtBQUlDO0FBQUE7QUFBQSxRQUFLLFdBQVUsa0JBQWY7QUFDQywwQkFBQyxNQUFEO0FBQ0Msb0JBQWEsS0FBS3JCLEtBQUwsQ0FBV2tCLFlBRHpCO0FBRUMsZUFBUSxLQUFLbkIsS0FBTCxDQUFXa0IsT0FGcEI7QUFHQywyQkFBb0IsS0FBS0s7QUFIMUIsUUFERDtBQU1DLDBCQUFDLFVBQUQ7QUFDQyxnQkFBUyxLQUFLdEIsS0FBTCxDQUFXYyxVQURyQjtBQUVDLHFCQUFjLEtBQUtkLEtBQUwsQ0FBV0Msb0JBRjFCO0FBR0Msa0JBQVcsS0FBS3dCO0FBSGpCO0FBTkQsTUFKRDtBQWdCQyx5QkFBQyxTQUFELE9BaEJEO0FBaUJDLHlCQUFDLE1BQUQ7QUFqQkQ7QUFYRCxJQUREO0FBaUNBOzs7O0VBeE9nQmlFLE1BQU1DLFM7O0FBMk94QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELElBQUssU0FBUzlFLE9BQU9DLFVBQXJCLEdBQWhCLEVBQXFEOEUsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFyRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjZXJ0aWZpY2F0aW9uQ2hlY2tlZDoge1xuXHRcdFx0XHRjb21tZXJjaWFsOiBmYWxzZSxcblx0XHRcdFx0aW5zdGFsbGF0aW9uOiBmYWxzZSxcblx0XHRcdFx0cmVzaWRlbnRpYWw6IGZhbHNlLFxuXHRcdFx0XHRzZXJ2aWNlOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGNvbnRhY3RGb3JtOiB7XG5cdFx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0XHRudW1iZXI6ICcnLFxuXHRcdFx0XHRhZGRyZXNzOiAnJyxcblx0XHRcdFx0Y29tbWVudHM6ICcnLFxuXHRcdFx0XHRvd246IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0aXNNb2RhbE9wZW46IGZhbHNlLFxuXHRcdFx0ZGVhbGVyTmFtZTogJycsXG5cdFx0XHRkZWFsZXJMaXN0OiB3aW5kb3cuZGVhbGVyRGF0YS5kZWFsZXJzLFxuXHRcdFx0dG90YWxEZWFsZXJzOiAwLFxuXHRcdFx0dG9nZ2xlZDogJycsXG5cdFx0XHRzaG93TWVudTogJ3Nob3dpbmcnLFxuXHRcdFx0aGlkZU1lbnU6ICdoaWRpbmcnXG5cdFx0fTtcblx0XHR0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSA9IHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oYW5kbGVGb3JtSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUZvcm1JbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrID0gdGhpcy5oYW5kbGVCdXR0b25DbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0bGV0IGRlYWxlcnNXaXRoVXBkYXRlZEhvdXJzID0gdGhpcy5zdGF0ZS5kZWFsZXJMaXN0Lm1hcChkZWFsZXIgPT4ge1xuXHRcdFx0bGV0IHRlbXBEZWFsZXIgPSBPYmplY3QuYXNzaWduKHt9LCBkZWFsZXIpO1xuXHRcdFx0dGVtcERlYWxlci5kYXRhLnBob25lMSA9IHRlbXBEZWFsZXIuZGF0YS5waG9uZTEuc3BsaXQoJy0nKS5qb2luKCcuJyk7XG5cdFx0XHR0ZW1wRGVhbGVyLmRhdGEud2Vla0hvdXJzID0gdGhpcy5ncm91cERheXNPZndlZWsodGVtcERlYWxlci5kYXRhLndlZWtIb3Vycyk7XG5cdFx0XHR0ZW1wRGVhbGVyLmRhdGEuY2VydGlmaWNhdGlvbnMgPSB0aGlzLmFkZENsYXNzTmFtZSh0ZW1wRGVhbGVyLmRhdGEuY2VydGlmaWNhdGlvbnMpO1xuXHRcdFx0cmV0dXJuIHRlbXBEZWFsZXI7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRlYWxlckxpc3Q6IGRlYWxlcnNXaXRoVXBkYXRlZEhvdXJzLFxuXHRcdFx0dG90YWxEZWFsZXJzOiB0aGlzLnN0YXRlLmRlYWxlckxpc3QubGVuZ3RoXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVGb3JtSW5wdXRDaGFuZ2UoZSkge1xuXHRcdGxldCBuYW1lID0gZS50YXJnZXQubmFtZTtcblx0XHRsZXQgY29udGFjdEZvcm0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmNvbnRhY3RGb3JtKTtcblxuXHRcdGNvbnRhY3RGb3JtW25hbWVdID0gZS50YXJnZXQudmFsdWU7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNvbnRhY3RGb3JtOiBjb250YWN0Rm9ybVxuXHRcdH0pO1xuXHR9XG5cblx0b3Blbk1vZGFsKGRlYWxlck5hbWUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGlzTW9kYWxPcGVuOiB0cnVlLFxuXHRcdFx0ZGVhbGVyTmFtZTogZGVhbGVyTmFtZVxuXHRcdH0pO1xuXHR9XG5cblx0Y2xvc2VNb2RhbCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgaXNNb2RhbE9wZW46IGZhbHNlIH0pO1xuXHR9XG5cblx0dG9nZ2xlTWVudSgpIHtcblx0XHRsZXQgc2hvd25TdGF0ZSA9IHRoaXMuc3RhdGUuc2hvd01lbnUgPT09ICdzaG93aW5nJyA/ICdoaWRpbmcnIDogJ3Nob3dpbmcnO1xuXHRcdGxldCBoaWRkZW5TdGF0ZSA9IHRoaXMuc3RhdGUuaGlkZU1lbnUgPT09ICdoaWRpbmcnID8gJ3Nob3dpbmcnIDogJ2hpZGluZyc7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNob3dNZW51OiBzaG93blN0YXRlLFxuXHRcdFx0aGlkZU1lbnU6IGhpZGRlblN0YXRlXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVGaWx0ZXJDaGFuZ2UoZSkge1xuXHRcdGxldCBjZXJ0aWZpY2F0aW9uU3RhdGVzID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZCk7XG5cdFx0bGV0IGNlcnRpZmljYXRpb25DaGVja2VkID0ge307XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWQpLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQga2V5ID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZClbaV07XG5cdFx0XHRsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkW2tleV07XG5cdFx0XHRjZXJ0aWZpY2F0aW9uQ2hlY2tlZFtrZXldID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0Y2VydGlmaWNhdGlvbkNoZWNrZWRbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC5jaGVja2VkO1xuXG5cdFx0dGhpcy5maWx0ZXJCeUNlcnRpZmljYXRpb24oY2VydGlmaWNhdGlvbkNoZWNrZWQpO1xuXHR9XG5cblx0am9pbkNlcnRpZmljYXRpb25zKGNlcnRpZmljYXRpb25BcnJheSkge1xuXHRcdGxldCBqb2luZWRWYWx1ZXMgPSBjZXJ0aWZpY2F0aW9uQXJyYXkucmVkdWNlKChydW5uaW5nV29yZCwgY3VycmVudFdvcmQpID0+IHtcblx0XHRcdHJldHVybiAocnVubmluZ1dvcmQgKz0gYCAke2N1cnJlbnRXb3JkLmNlcnRpZmljYXRpb259YCk7XG5cdFx0fSwgJycpO1xuXG5cdFx0cmV0dXJuIGpvaW5lZFZhbHVlcztcblx0fVxuXG5cdGZpbHRlckJ5Q2VydGlmaWNhdGlvbihjZXJ0aWZpY2F0aW9uQ2hlY2tlZCkge1xuXHRcdGxldCBmaWx0ZXJlZERlYWxlcnMgPSB3aW5kb3cuZGVhbGVyRGF0YS5kZWFsZXJzLmZpbHRlcihkZWFsZXIgPT4ge1xuXHRcdFx0bGV0IGpvaW5lZENlcnRpZmljYXRpb25zID0gdGhpcy5qb2luQ2VydGlmaWNhdGlvbnMoZGVhbGVyLmRhdGEuY2VydGlmaWNhdGlvbnMpO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQoIWNlcnRpZmljYXRpb25DaGVja2VkLnNlcnZpY2UgJiZcblx0XHRcdFx0XHQhY2VydGlmaWNhdGlvbkNoZWNrZWQuaW5zdGFsbGF0aW9uICYmXG5cdFx0XHRcdFx0IWNlcnRpZmljYXRpb25DaGVja2VkLnJlc2lkZW50aWFsICYmXG5cdFx0XHRcdFx0IWNlcnRpZmljYXRpb25DaGVja2VkLmNvbW1lcmNpYWwpIHx8XG5cdFx0XHRcdChjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5zZXJ2aWNlICYmIGpvaW5lZENlcnRpZmljYXRpb25zLmluZGV4T2YoJ1NlcnZpY2UgUHJvJykgPj0gMCkgfHxcblx0XHRcdFx0KGNlcnRpZmljYXRpb25DaGVja2VkLmluc3RhbGxhdGlvbiAmJiBqb2luZWRDZXJ0aWZpY2F0aW9ucy5pbmRleE9mKCdJbnN0YWxsYXRpb24gUHJvJykgPj0gMCkgfHxcblx0XHRcdFx0KGNlcnRpZmljYXRpb25DaGVja2VkLnJlc2lkZW50aWFsICYmIGpvaW5lZENlcnRpZmljYXRpb25zLmluZGV4T2YoJ1Jlc2lkZW50aWFsIFBybycpID49IDApIHx8XG5cdFx0XHRcdChjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5jb21tZXJjaWFsICYmIGpvaW5lZENlcnRpZmljYXRpb25zLmluZGV4T2YoJ0NvbW1lcmNpYWwgUHJvJykgPj0gMClcblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNlcnRpZmljYXRpb25DaGVja2VkOiBjZXJ0aWZpY2F0aW9uQ2hlY2tlZCxcblx0XHRcdGRlYWxlckxpc3Q6IGZpbHRlcmVkRGVhbGVyc1xuXHRcdH0pO1xuXHR9XG5cblx0YWRkQ2xhc3NOYW1lKGNlcnRpZmljYXRpb25BcnIpIHtcblx0XHRsZXQgY2VydGlmaWNhdGlvbkNsYXNzQXNzb2NpYXRpb25zID0ge1xuXHRcdFx0WydJbnN0YWxsYXRpb24gUHJvJ106ICdnbHlwaGljb24gZ2x5cGhpY29uLXN0YXInLFxuXHRcdFx0WydDb21tZXJjaWFsIFBybyddOiAnZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyJyxcblx0XHRcdFsnUmVzaWRlbnRpYWwgUHJvJ106ICdnbHlwaGljb24gZ2x5cGhpY29uLWhvbWUnLFxuXHRcdFx0WydTZXJ2aWNlIFBybyddOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1jb2cnXG5cdFx0fTtcblxuXHRcdGxldCBjZXJ0aWZpY2F0aW9uQ2xhc3NlcyA9IGNlcnRpZmljYXRpb25BcnIubWFwKGNlcnRpZmljYXRpb24gPT4ge1xuXHRcdFx0bGV0IGNlcnRPYmogPSB7fTtcblx0XHRcdGNlcnRPYmouY2VydGlmaWNhdGlvbiA9IGNlcnRpZmljYXRpb247XG5cdFx0XHRjZXJ0T2JqLmNsYXNzTmFtZSA9IGNlcnRpZmljYXRpb25DbGFzc0Fzc29jaWF0aW9uc1tjZXJ0aWZpY2F0aW9uXTtcblx0XHRcdHJldHVybiBjZXJ0T2JqO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNlcnRpZmljYXRpb25DbGFzc2VzO1xuXHR9XG5cblx0Z3JvdXBEYXlzT2Z3ZWVrKHdlZWspIHtcblx0XHRsZXQgbW9kaWZpZWRXZWVrID0ge1xuXHRcdFx0bW9uOiAnTW9uZGF5cycsXG5cdFx0XHR0dWU6ICdUdWVzZGF5cycsXG5cdFx0XHR3ZWQ6ICdXZWRuZXNkYXlzJyxcblx0XHRcdHRodTogJ1RodXJzZGF5cycsXG5cdFx0XHRmcmk6ICdGcmlkYXlzJyxcblx0XHRcdHNhdDogJ1NhdHVyZGF5cycsXG5cdFx0XHRzdW46ICdTdW5kYXlzJ1xuXHRcdH07XG5cblx0XHRsZXQgZmluYWxEYXlzID0gW107XG5cdFx0bGV0IGJhc2UgPSB3ZWVrLm1vbjtcblx0XHRsZXQgc2FtZSA9IHRydWU7XG5cblx0XHRmaW5hbERheXNbMF0gPSBgTW9uZGF5cyAke3dlZWsubW9ufWA7XG5cblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuXHRcdFx0bGV0IGRheSA9IGAke09iamVjdC5rZXlzKHdlZWspW2ldfWA7XG5cdFx0XHRsZXQgaG91cnMgPSB3ZWVrW2RheV0gPT09ICdPbiBDYWxsJyA/ICctIE9uIENhbGwnIDogd2Vla1tkYXldIHx8ICctIENMT1NFRCc7XG5cblx0XHRcdGZpbmFsRGF5cy5wdXNoKGAke1ttb2RpZmllZFdlZWtbZGF5XV19ICR7aG91cnN9YCk7XG5cdFx0XHRpZiAod2Vla1tPYmplY3Qua2V5cyh3ZWVrKVtpXV0gIT09IGJhc2UpIHtcblx0XHRcdFx0c2FtZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzYW1lKSB7XG5cdFx0XHRmaW5hbERheXMuc3BsaWNlKDApO1xuXHRcdFx0ZmluYWxEYXlzWzBdID0gYFdlZWtkYXlzICR7YmFzZX1gO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSA1OyBpIDwgNzsgaSsrKSB7XG5cdFx0XHRsZXQgZGF5ID0gaSA9PT0gNSA/ICdzYXQnIDogJ3N1bic7XG5cdFx0XHRsZXQgaG91cnMgPSB3ZWVrW2RheV0gPT09ICdPbiBDYWxsJyA/ICctIE9uIENhbGwnIDogd2Vla1tkYXldIHx8ICctIENMT1NFRCc7XG5cblx0XHRcdGZpbmFsRGF5cy5wdXNoKGAke1ttb2RpZmllZFdlZWtbZGF5XV19ICR7aG91cnN9YCk7XG5cdFx0fVxuXHRcdHJldHVybiBmaW5hbERheXM7XG5cdH1cblxuXHRoYW5kbGVCdXR0b25DbGljayhyZXNwb25zZSwgZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAocmVzcG9uc2UgPT09ICd5ZXMnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0dG9nZ2xlZDogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVkOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8TW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLmlzTW9kYWxPcGVufSBvbkNsb3NlPXsoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKX0+XG5cdFx0XHRcdFx0PENvbnRhY3Rcblx0XHRcdFx0XHRcdGRlYWxlck5hbWU9e3RoaXMuc3RhdGUuZGVhbGVyTmFtZX1cblx0XHRcdFx0XHRcdGNvbnRhY3RQcm9wZXJ0aWVzPXt0aGlzLnN0YXRlLmNvbnRhY3RGb3JtfVxuXHRcdFx0XHRcdFx0aGFuZGxlRm9ybUlucHV0Q2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1JbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdG93blBvb2xPclNwYT17dGhpcy5oYW5kbGVCdXR0b25DbGlja31cblx0XHRcdFx0XHRcdHRvZ2dsZWQ9e3RoaXMuc3RhdGUudG9nZ2xlZH1cblx0XHRcdFx0XHRcdGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VNb2RhbH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXBvc2l0aW9uaW5nLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxUb3BCYXIgLz5cblx0XHRcdFx0XHQ8TmF2IHRvZ2dsZU1lbnU9e3RoaXMudG9nZ2xlTWVudX0gc2hvd01lbnU9e3RoaXMuc3RhdGUuc2hvd01lbnV9IGhpZGVNZW51PXt0aGlzLnN0YXRlLmhpZGVNZW51fSAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1pbWFnZS1tYWluXCIgLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b21cIj5cblx0XHRcdFx0XHRcdDxGaWx0ZXJcblx0XHRcdFx0XHRcdFx0ZGVhbGVyVG90YWw9e3RoaXMuc3RhdGUudG90YWxEZWFsZXJzfVxuXHRcdFx0XHRcdFx0XHRkZWFsZXI9e3RoaXMucHJvcHMuZGVhbGVyc31cblx0XHRcdFx0XHRcdFx0aGFuZGxlRmlsdGVyQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbHRlckNoYW5nZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8RGVhbGVyTGlzdFxuXHRcdFx0XHRcdFx0XHRkZWFsZXJzPXt0aGlzLnN0YXRlLmRlYWxlckxpc3R9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWRJdGVtcz17dGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZH1cblx0XHRcdFx0XHRcdFx0b3Blbk1vZGFsPXt0aGlzLm9wZW5Nb2RhbH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PFRvcEZvb3RlciAvPlxuXHRcdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIGRlYWxlcnM9e3dpbmRvdy5kZWFsZXJEYXRhfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==