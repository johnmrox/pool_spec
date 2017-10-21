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
		key: 'openModal',
		value: function openModal(dealerName) {
			this.setState({
				isModalOpen: true,
				dealerName: dealerName
			});
		}
	}, {
		key: 'closeModal',
		value: function closeModal(e) {
			e.preventDefault();
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
			return React.createElement(
				'div',
				{ className: 'outer-container' },
				React.createElement(
					Modal,
					{ isOpen: this.state.isModalOpen, onClose: this.closeModal },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImNlcnRpZmljYXRpb25DaGVja2VkIiwiY29tbWVyY2lhbCIsImluc3RhbGxhdGlvbiIsInJlc2lkZW50aWFsIiwic2VydmljZSIsImNvbnRhY3RGb3JtIiwibmFtZSIsIm51bWJlciIsImFkZHJlc3MiLCJjb21tZW50cyIsIm93biIsImlzTW9kYWxPcGVuIiwiZGVhbGVyTmFtZSIsImRlYWxlckxpc3QiLCJkZWFsZXJzIiwidG9nZ2xlZCIsInNob3dNZW51IiwiaGlkZU1lbnUiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlRm9ybUlucHV0Q2hhbmdlIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwidG9nZ2xlTWVudSIsImRlYWxlcnNXaXRoVXBkYXRlZEhvdXJzIiwibWFwIiwidGVtcERlYWxlciIsIk9iamVjdCIsImFzc2lnbiIsImRlYWxlciIsImRhdGEiLCJ3ZWVrSG91cnMiLCJncm91cERheXNPZndlZWsiLCJjZXJ0aWZpY2F0aW9ucyIsImFkZENsYXNzTmFtZSIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzaG93blN0YXRlIiwiaGlkZGVuU3RhdGUiLCJjZXJ0aWZpY2F0aW9uU3RhdGVzIiwia2V5cyIsImkiLCJsZW5ndGgiLCJrZXkiLCJjaGVja2VkIiwiZmlsdGVyQnlDZXJ0aWZpY2F0aW9uIiwiY2VydGlmaWNhdGlvbkFycmF5Iiwiam9pbmVkVmFsdWVzIiwicmVkdWNlIiwicnVubmluZ1dvcmQiLCJjdXJyZW50V29yZCIsImNlcnRpZmljYXRpb24iLCJmaWx0ZXJlZERlYWxlcnMiLCJ3aW5kb3ciLCJkZWFsZXJEYXRhIiwiZmlsdGVyIiwiam9pbmVkQ2VydGlmaWNhdGlvbnMiLCJqb2luQ2VydGlmaWNhdGlvbnMiLCJpbmRleE9mIiwiY2VydGlmaWNhdGlvbkFyciIsImNlcnRpZmljYXRpb25DbGFzc0Fzc29jaWF0aW9ucyIsImNlcnRpZmljYXRpb25DbGFzc2VzIiwiY2VydE9iaiIsImNsYXNzTmFtZSIsIndlZWsiLCJtb2RpZmllZFdlZWsiLCJtb24iLCJ0dWUiLCJ3ZWQiLCJ0aHUiLCJmcmkiLCJzYXQiLCJzdW4iLCJmaW5hbERheXMiLCJiYXNlIiwic2FtZSIsImRheSIsImhvdXJzIiwicHVzaCIsInNwbGljZSIsInJlc3BvbnNlIiwiemlwY29kZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibG9jYXRpb24iLCJhcnJheSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFHbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLHlCQUFzQjtBQUNyQkMsZ0JBQVksS0FEUztBQUVyQkMsa0JBQWMsS0FGTztBQUdyQkMsaUJBQWEsS0FIUTtBQUlyQkMsYUFBUztBQUpZLElBRFY7QUFPWkMsZ0JBQWE7QUFDWkMsVUFBTSxFQURNO0FBRVpDLFlBQVEsRUFGSTtBQUdaQyxhQUFTLEVBSEc7QUFJWkMsY0FBVSxFQUpFO0FBS1pDLFNBQUs7QUFMTyxJQVBEO0FBY1pDLGdCQUFhLEtBZEQ7QUFlWkMsZUFBWSxFQWZBO0FBZ0JaQyxlQUFZZixNQUFNZ0IsT0FBTixDQUFjQSxPQWhCZDtBQWlCWkMsWUFBUyxFQWpCRztBQWtCWkMsYUFBVSxTQWxCRTtBQW1CWkMsYUFBVTtBQW5CRSxHQUFiO0FBcUJBLFFBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QixPQUExQjtBQUNBLFFBQUtDLHFCQUFMLEdBQTZCLE1BQUtBLHFCQUFMLENBQTJCRCxJQUEzQixPQUE3QjtBQUNBLFFBQUtF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SUFBSyxZQUFZLEtBQUtFLFVBQXRCLEVBQWtDLFVBQVUsS0FBS3pCLEtBQUwsQ0FBV2lCLFFBQXZELEVBQWlFLFVBQVUsS0FBS2pCLEtBQUwsQ0FBV2tCLFFBQXRGLEdBRkQ7QUFHQyxrQ0FBSyxXQUFVLHVCQUFmLEdBSEQ7QUFJQztBQUFBO0FBQUEsUUFBSyxXQUFVLGtCQUFmO0FBQ0MsMEJBQUMsTUFBRDtBQUNDLGVBQVEsS0FBS25CLEtBQUwsQ0FBV2dCLE9BQVgsQ0FBbUJBLE9BRDVCO0FBRUMsWUFBSyxLQUFLaEIsS0FBTCxDQUFXZ0IsT0FBWCxDQUFtQnVFLE9BRnpCO0FBR0MsMkJBQW9CLEtBQUtuRTtBQUgxQixRQUREO0FBTUMsMEJBQUMsVUFBRDtBQUNDLGdCQUFTLEtBQUtuQixLQUFMLENBQVdjLFVBRHJCO0FBRUMscUJBQWMsS0FBS2QsS0FBTCxDQUFXQyxvQkFGMUI7QUFHQyxrQkFBVyxLQUFLcUI7QUFIakI7QUFORCxNQUpEO0FBZ0JDLHlCQUFDLFNBQUQsT0FoQkQ7QUFpQkMseUJBQUMsTUFBRDtBQWpCRDtBQVhELElBREQ7QUFpQ0E7Ozs7RUF0T2dCaUUsTUFBTUMsUzs7QUF5T3hCMUYsSUFBSTJGLFNBQUosR0FBZ0I7QUFDZjFFLFVBQVMyRSxVQUFVQyxLQUFWLENBQWdCO0FBQ3hCTCxXQUFTSSxVQUFVRSxNQUFWLENBQWlCQyxVQURGO0FBRXhCQyxZQUFVSixVQUFVN0QsTUFGSTtBQUd4QmQsV0FBUzJFLFVBQVVLLEtBQVYsQ0FBZ0JGO0FBSEQsRUFBaEIsRUFJTkE7QUFMWSxDQUFoQjs7QUFRQUcsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELElBQUssU0FBU3ZDLE9BQU9DLFVBQXJCLEdBQWhCLEVBQXFEdUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFyRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjZXJ0aWZpY2F0aW9uQ2hlY2tlZDoge1xuXHRcdFx0XHRjb21tZXJjaWFsOiBmYWxzZSxcblx0XHRcdFx0aW5zdGFsbGF0aW9uOiBmYWxzZSxcblx0XHRcdFx0cmVzaWRlbnRpYWw6IGZhbHNlLFxuXHRcdFx0XHRzZXJ2aWNlOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGNvbnRhY3RGb3JtOiB7XG5cdFx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0XHRudW1iZXI6ICcnLFxuXHRcdFx0XHRhZGRyZXNzOiAnJyxcblx0XHRcdFx0Y29tbWVudHM6ICcnLFxuXHRcdFx0XHRvd246IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0aXNNb2RhbE9wZW46IGZhbHNlLFxuXHRcdFx0ZGVhbGVyTmFtZTogJycsXG5cdFx0XHRkZWFsZXJMaXN0OiBwcm9wcy5kZWFsZXJzLmRlYWxlcnMsXG5cdFx0XHR0b2dnbGVkOiAnJyxcblx0XHRcdHNob3dNZW51OiAnc2hvd2luZycsXG5cdFx0XHRoaWRlTWVudTogJ2hpZGluZydcblx0XHR9O1xuXHRcdHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUZvcm1JbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2sgPSB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50b2dnbGVNZW51ID0gdGhpcy50b2dnbGVNZW51LmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgZGVhbGVyc1dpdGhVcGRhdGVkSG91cnMgPSB0aGlzLnN0YXRlLmRlYWxlckxpc3QubWFwKGRlYWxlciA9PiB7XG5cdFx0XHRsZXQgdGVtcERlYWxlciA9IE9iamVjdC5hc3NpZ24oe30sIGRlYWxlcik7XG5cdFx0XHR0ZW1wRGVhbGVyLmRhdGEud2Vla0hvdXJzID0gdGhpcy5ncm91cERheXNPZndlZWsodGVtcERlYWxlci5kYXRhLndlZWtIb3Vycyk7XG5cdFx0XHR0ZW1wRGVhbGVyLmRhdGEuY2VydGlmaWNhdGlvbnMgPSB0aGlzLmFkZENsYXNzTmFtZSh0ZW1wRGVhbGVyLmRhdGEuY2VydGlmaWNhdGlvbnMpO1xuXHRcdFx0cmV0dXJuIHRlbXBEZWFsZXI7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRlYWxlckxpc3Q6IGRlYWxlcnNXaXRoVXBkYXRlZEhvdXJzXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVGb3JtSW5wdXRDaGFuZ2UoZSkge1xuXHRcdGxldCBuYW1lID0gZS50YXJnZXQubmFtZTtcblx0XHRsZXQgY29udGFjdEZvcm0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmNvbnRhY3RGb3JtKTtcblxuXHRcdGNvbnRhY3RGb3JtW25hbWVdID0gZS50YXJnZXQudmFsdWU7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNvbnRhY3RGb3JtOiBjb250YWN0Rm9ybVxuXHRcdH0pO1xuXHR9XG5cblx0b3Blbk1vZGFsKGRlYWxlck5hbWUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGlzTW9kYWxPcGVuOiB0cnVlLFxuXHRcdFx0ZGVhbGVyTmFtZTogZGVhbGVyTmFtZVxuXHRcdH0pO1xuXHR9XG5cblx0Y2xvc2VNb2RhbChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogZmFsc2UgfSk7XG5cdH1cblxuXHR0b2dnbGVNZW51KCkge1xuXHRcdGxldCBzaG93blN0YXRlID0gdGhpcy5zdGF0ZS5zaG93TWVudSA9PT0gJ3Nob3dpbmcnID8gJ2hpZGluZycgOiAnc2hvd2luZyc7XG5cdFx0bGV0IGhpZGRlblN0YXRlID0gdGhpcy5zdGF0ZS5oaWRlTWVudSA9PT0gJ2hpZGluZycgPyAnc2hvd2luZycgOiAnaGlkaW5nJztcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2hvd01lbnU6IHNob3duU3RhdGUsXG5cdFx0XHRoaWRlTWVudTogaGlkZGVuU3RhdGVcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUZpbHRlckNoYW5nZShlKSB7XG5cdFx0bGV0IGNlcnRpZmljYXRpb25TdGF0ZXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkKTtcblx0XHRsZXQgY2VydGlmaWNhdGlvbkNoZWNrZWQgPSB7fTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZCkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBrZXkgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkKVtpXTtcblx0XHRcdGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWRba2V5XTtcblx0XHRcdGNlcnRpZmljYXRpb25DaGVja2VkW2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRjZXJ0aWZpY2F0aW9uQ2hlY2tlZFtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cblx0XHR0aGlzLmZpbHRlckJ5Q2VydGlmaWNhdGlvbihjZXJ0aWZpY2F0aW9uQ2hlY2tlZCk7XG5cdH1cblxuXHRqb2luQ2VydGlmaWNhdGlvbnMoY2VydGlmaWNhdGlvbkFycmF5KSB7XG5cdFx0bGV0IGpvaW5lZFZhbHVlcyA9IGNlcnRpZmljYXRpb25BcnJheS5yZWR1Y2UoKHJ1bm5pbmdXb3JkLCBjdXJyZW50V29yZCkgPT4ge1xuXHRcdFx0cmV0dXJuIChydW5uaW5nV29yZCArPSBgICR7Y3VycmVudFdvcmQuY2VydGlmaWNhdGlvbn1gKTtcblx0XHR9LCAnJyk7XG5cblx0XHRyZXR1cm4gam9pbmVkVmFsdWVzO1xuXHR9XG5cblx0ZmlsdGVyQnlDZXJ0aWZpY2F0aW9uKGNlcnRpZmljYXRpb25DaGVja2VkKSB7XG5cdFx0bGV0IGZpbHRlcmVkRGVhbGVycyA9IHdpbmRvdy5kZWFsZXJEYXRhLmRlYWxlcnMuZmlsdGVyKGRlYWxlciA9PiB7XG5cdFx0XHRsZXQgam9pbmVkQ2VydGlmaWNhdGlvbnMgPSB0aGlzLmpvaW5DZXJ0aWZpY2F0aW9ucyhkZWFsZXIuZGF0YS5jZXJ0aWZpY2F0aW9ucyk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdCghY2VydGlmaWNhdGlvbkNoZWNrZWQuc2VydmljZSAmJlxuXHRcdFx0XHRcdCFjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5pbnN0YWxsYXRpb24gJiZcblx0XHRcdFx0XHQhY2VydGlmaWNhdGlvbkNoZWNrZWQucmVzaWRlbnRpYWwgJiZcblx0XHRcdFx0XHQhY2VydGlmaWNhdGlvbkNoZWNrZWQuY29tbWVyY2lhbCkgfHxcblx0XHRcdFx0KGNlcnRpZmljYXRpb25DaGVja2VkLnNlcnZpY2UgJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignU2VydmljZSBQcm8nKSA+PSAwKSB8fFxuXHRcdFx0XHQoY2VydGlmaWNhdGlvbkNoZWNrZWQuaW5zdGFsbGF0aW9uICYmIGpvaW5lZENlcnRpZmljYXRpb25zLmluZGV4T2YoJ0luc3RhbGxhdGlvbiBQcm8nKSA+PSAwKSB8fFxuXHRcdFx0XHQoY2VydGlmaWNhdGlvbkNoZWNrZWQucmVzaWRlbnRpYWwgJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignUmVzaWRlbnRpYWwgUHJvJykgPj0gMCkgfHxcblx0XHRcdFx0KGNlcnRpZmljYXRpb25DaGVja2VkLmNvbW1lcmNpYWwgJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignQ29tbWVyY2lhbCBQcm8nKSA+PSAwKVxuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y2VydGlmaWNhdGlvbkNoZWNrZWQ6IGNlcnRpZmljYXRpb25DaGVja2VkLFxuXHRcdFx0ZGVhbGVyTGlzdDogZmlsdGVyZWREZWFsZXJzXG5cdFx0fSk7XG5cdH1cblxuXHRhZGRDbGFzc05hbWUoY2VydGlmaWNhdGlvbkFycikge1xuXHRcdGxldCBjZXJ0aWZpY2F0aW9uQ2xhc3NBc3NvY2lhdGlvbnMgPSB7XG5cdFx0XHRbJ0luc3RhbGxhdGlvbiBQcm8nXTogJ2dseXBoaWNvbiBnbHlwaGljb24tc3RhcicsXG5cdFx0XHRbJ0NvbW1lcmNpYWwgUHJvJ106ICdnbHlwaGljb24gZ2x5cGhpY29uLXVzZXInLFxuXHRcdFx0WydSZXNpZGVudGlhbCBQcm8nXTogJ2dseXBoaWNvbiBnbHlwaGljb24taG9tZScsXG5cdFx0XHRbJ1NlcnZpY2UgUHJvJ106ICdnbHlwaGljb24gZ2x5cGhpY29uLWNvZydcblx0XHR9O1xuXG5cdFx0bGV0IGNlcnRpZmljYXRpb25DbGFzc2VzID0gY2VydGlmaWNhdGlvbkFyci5tYXAoY2VydGlmaWNhdGlvbiA9PiB7XG5cdFx0XHRsZXQgY2VydE9iaiA9IHt9O1xuXHRcdFx0Y2VydE9iai5jZXJ0aWZpY2F0aW9uID0gY2VydGlmaWNhdGlvbjtcblx0XHRcdGNlcnRPYmouY2xhc3NOYW1lID0gY2VydGlmaWNhdGlvbkNsYXNzQXNzb2NpYXRpb25zW2NlcnRpZmljYXRpb25dO1xuXHRcdFx0cmV0dXJuIGNlcnRPYmo7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY2VydGlmaWNhdGlvbkNsYXNzZXM7XG5cdH1cblxuXHRncm91cERheXNPZndlZWsod2Vlaykge1xuXHRcdGxldCBtb2RpZmllZFdlZWsgPSB7XG5cdFx0XHRtb246ICdNb25kYXlzJyxcblx0XHRcdHR1ZTogJ1R1ZXNkYXlzJyxcblx0XHRcdHdlZDogJ1dlZG5lc2RheXMnLFxuXHRcdFx0dGh1OiAnVGh1cnNkYXlzJyxcblx0XHRcdGZyaTogJ0ZyaWRheXMnLFxuXHRcdFx0c2F0OiAnU2F0dXJkYXlzJyxcblx0XHRcdHN1bjogJ1N1bmRheXMnXG5cdFx0fTtcblxuXHRcdGxldCBmaW5hbERheXMgPSBbXTtcblx0XHRsZXQgYmFzZSA9IHdlZWsubW9uO1xuXHRcdGxldCBzYW1lID0gdHJ1ZTtcblxuXHRcdGZpbmFsRGF5c1swXSA9IGBNb25kYXlzICR7d2Vlay5tb259YDtcblxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG5cdFx0XHRsZXQgZGF5ID0gYCR7T2JqZWN0LmtleXMod2VlaylbaV19YDtcblx0XHRcdGxldCBob3VycyA9IHdlZWtbZGF5XSA9PT0gJ09uIENhbGwnID8gJy0gT24gQ2FsbCcgOiB3ZWVrW2RheV0gfHwgJy0gQ0xPU0VEJztcblxuXHRcdFx0ZmluYWxEYXlzLnB1c2goYCR7W21vZGlmaWVkV2Vla1tkYXldXX0gJHtob3Vyc31gKTtcblx0XHRcdGlmICh3ZWVrW09iamVjdC5rZXlzKHdlZWspW2ldXSAhPT0gYmFzZSkge1xuXHRcdFx0XHRzYW1lID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHNhbWUpIHtcblx0XHRcdGZpbmFsRGF5cy5zcGxpY2UoMCk7XG5cdFx0XHRmaW5hbERheXNbMF0gPSBgV2Vla2RheXMgJHtiYXNlfWA7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDU7IGkgPCA3OyBpKyspIHtcblx0XHRcdGxldCBkYXkgPSBpID09PSA1ID8gJ3NhdCcgOiAnc3VuJztcblx0XHRcdGxldCBob3VycyA9IHdlZWtbZGF5XSA9PT0gJ09uIENhbGwnID8gJy0gT24gQ2FsbCcgOiB3ZWVrW2RheV0gfHwgJy0gQ0xPU0VEJztcblxuXHRcdFx0ZmluYWxEYXlzLnB1c2goYCR7W21vZGlmaWVkV2Vla1tkYXldXX0gJHtob3Vyc31gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZpbmFsRGF5cztcblx0fVxuXG5cdGhhbmRsZUJ1dHRvbkNsaWNrKHJlc3BvbnNlLCBlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmIChyZXNwb25zZSA9PT0gJ3llcycpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVkOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvZ2dsZWQ6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdDxNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUuaXNNb2RhbE9wZW59IG9uQ2xvc2U9e3RoaXMuY2xvc2VNb2RhbH0+XG5cdFx0XHRcdFx0PENvbnRhY3Rcblx0XHRcdFx0XHRcdGRlYWxlck5hbWU9e3RoaXMuc3RhdGUuZGVhbGVyTmFtZX1cblx0XHRcdFx0XHRcdGNvbnRhY3RQcm9wZXJ0aWVzPXt0aGlzLnN0YXRlLmNvbnRhY3RGb3JtfVxuXHRcdFx0XHRcdFx0aGFuZGxlRm9ybUlucHV0Q2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1JbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdG93blBvb2xPclNwYT17dGhpcy5oYW5kbGVCdXR0b25DbGlja31cblx0XHRcdFx0XHRcdHRvZ2dsZWQ9e3RoaXMuc3RhdGUudG9nZ2xlZH1cblx0XHRcdFx0XHRcdGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VNb2RhbH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXBvc2l0aW9uaW5nLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxUb3BCYXIgLz5cblx0XHRcdFx0XHQ8TmF2IHRvZ2dsZU1lbnU9e3RoaXMudG9nZ2xlTWVudX0gc2hvd01lbnU9e3RoaXMuc3RhdGUuc2hvd01lbnV9IGhpZGVNZW51PXt0aGlzLnN0YXRlLmhpZGVNZW51fSAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1pbWFnZS1tYWluXCIgLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b21cIj5cblx0XHRcdFx0XHRcdDxGaWx0ZXJcblx0XHRcdFx0XHRcdFx0ZGVhbGVyPXt0aGlzLnByb3BzLmRlYWxlcnMuZGVhbGVyc31cblx0XHRcdFx0XHRcdFx0emlwPXt0aGlzLnByb3BzLmRlYWxlcnMuemlwY29kZX1cblx0XHRcdFx0XHRcdFx0aGFuZGxlRmlsdGVyQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbHRlckNoYW5nZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8RGVhbGVyTGlzdFxuXHRcdFx0XHRcdFx0XHRkZWFsZXJzPXt0aGlzLnN0YXRlLmRlYWxlckxpc3R9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWRJdGVtcz17dGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZH1cblx0XHRcdFx0XHRcdFx0b3Blbk1vZGFsPXt0aGlzLm9wZW5Nb2RhbH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PFRvcEZvb3RlciAvPlxuXHRcdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG5cdGRlYWxlcnM6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0emlwY29kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGxvY2F0aW9uOiBQcm9wVHlwZXMuT2JqZWN0LFxuXHRcdGRlYWxlcnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG5cdH0pLmlzUmVxdWlyZWRcbn07XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIGRlYWxlcnM9e3dpbmRvdy5kZWFsZXJEYXRhfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==