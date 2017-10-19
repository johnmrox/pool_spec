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
			totalDealers: 0,
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

App.propTypes = {
	dealers: PropTypes.object.isRequired
};

ReactDOM.render(React.createElement(App, { dealers: window.dealerData }), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImNlcnRpZmljYXRpb25DaGVja2VkIiwiY29tbWVyY2lhbCIsImluc3RhbGxhdGlvbiIsInJlc2lkZW50aWFsIiwic2VydmljZSIsImNvbnRhY3RGb3JtIiwibmFtZSIsIm51bWJlciIsImFkZHJlc3MiLCJjb21tZW50cyIsIm93biIsImlzTW9kYWxPcGVuIiwiZGVhbGVyTmFtZSIsImRlYWxlckxpc3QiLCJkZWFsZXJzIiwidG90YWxEZWFsZXJzIiwidG9nZ2xlZCIsInNob3dNZW51IiwiaGlkZU1lbnUiLCJob3ZlciIsImhhbmRsZUZpbHRlckNoYW5nZSIsImJpbmQiLCJoYW5kbGVGb3JtSW5wdXRDaGFuZ2UiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJ0b2dnbGVNZW51IiwiaG92ZXJpbmciLCJkZWFsZXJzV2l0aFVwZGF0ZWRIb3VycyIsIm1hcCIsInRlbXBEZWFsZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWFsZXIiLCJkYXRhIiwicGhvbmUxIiwic3BsaXQiLCJqb2luIiwid2Vla0hvdXJzIiwiZ3JvdXBEYXlzT2Z3ZWVrIiwiY2VydGlmaWNhdGlvbnMiLCJhZGRDbGFzc05hbWUiLCJzZXRTdGF0ZSIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzaG93blN0YXRlIiwiaGlkZGVuU3RhdGUiLCJjZXJ0aWZpY2F0aW9uU3RhdGVzIiwia2V5cyIsImkiLCJrZXkiLCJjaGVja2VkIiwiZmlsdGVyQnlDZXJ0aWZpY2F0aW9uIiwiY2VydGlmaWNhdGlvbkFycmF5Iiwiam9pbmVkVmFsdWVzIiwicmVkdWNlIiwicnVubmluZ1dvcmQiLCJjdXJyZW50V29yZCIsImNlcnRpZmljYXRpb24iLCJmaWx0ZXJlZERlYWxlcnMiLCJ3aW5kb3ciLCJkZWFsZXJEYXRhIiwiZmlsdGVyIiwiam9pbmVkQ2VydGlmaWNhdGlvbnMiLCJqb2luQ2VydGlmaWNhdGlvbnMiLCJpbmRleE9mIiwiY2VydGlmaWNhdGlvbkFyciIsImNlcnRpZmljYXRpb25DbGFzc0Fzc29jaWF0aW9ucyIsImNlcnRpZmljYXRpb25DbGFzc2VzIiwiY2VydE9iaiIsImNsYXNzTmFtZSIsIndlZWsiLCJtb2RpZmllZFdlZWsiLCJtb24iLCJ0dWUiLCJ3ZWQiLCJ0aHUiLCJmcmkiLCJzYXQiLCJzdW4iLCJmaW5hbERheXMiLCJiYXNlIiwic2FtZSIsImRheSIsImhvdXJzIiwicHVzaCIsInNwbGljZSIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBR2xCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyx5QkFBc0I7QUFDckJDLGdCQUFZLEtBRFM7QUFFckJDLGtCQUFjLEtBRk87QUFHckJDLGlCQUFhLEtBSFE7QUFJckJDLGFBQVM7QUFKWSxJQURWO0FBT1pDLGdCQUFhO0FBQ1pDLFVBQU0sRUFETTtBQUVaQyxZQUFRLEVBRkk7QUFHWkMsYUFBUyxFQUhHO0FBSVpDLGNBQVUsRUFKRTtBQUtaQyxTQUFLO0FBTE8sSUFQRDtBQWNaQyxnQkFBYSxLQWREO0FBZVpDLGVBQVksRUFmQTtBQWdCWkMsZUFBWWYsTUFBTWdCLE9BQU4sQ0FBY0EsT0FoQmQ7QUFpQlpDLGlCQUFjLENBakJGO0FBa0JaQyxZQUFTLEVBbEJHO0FBbUJaQyxhQUFVLFNBbkJFO0FBb0JaQyxhQUFVLFFBcEJFO0FBcUJaQyxVQUFPO0FBckJLLEdBQWI7QUF1QkEsUUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JDLElB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QS9PZ0JzRSxNQUFNQyxTOztBQWtQeEJqRyxJQUFJa0csU0FBSixHQUFnQjtBQUNmakYsVUFBU2tGLFVBQVVDLE1BQVYsQ0FBaUJDO0FBRFgsQ0FBaEI7O0FBSUFDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxJQUFLLFNBQVNwQyxPQUFPQyxVQUFyQixHQUFoQixFQUFxRG9DLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBckQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y2VydGlmaWNhdGlvbkNoZWNrZWQ6IHtcblx0XHRcdFx0Y29tbWVyY2lhbDogZmFsc2UsXG5cdFx0XHRcdGluc3RhbGxhdGlvbjogZmFsc2UsXG5cdFx0XHRcdHJlc2lkZW50aWFsOiBmYWxzZSxcblx0XHRcdFx0c2VydmljZTogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRjb250YWN0Rm9ybToge1xuXHRcdFx0XHRuYW1lOiAnJyxcblx0XHRcdFx0bnVtYmVyOiAnJyxcblx0XHRcdFx0YWRkcmVzczogJycsXG5cdFx0XHRcdGNvbW1lbnRzOiAnJyxcblx0XHRcdFx0b3duOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGlzTW9kYWxPcGVuOiBmYWxzZSxcblx0XHRcdGRlYWxlck5hbWU6ICcnLFxuXHRcdFx0ZGVhbGVyTGlzdDogcHJvcHMuZGVhbGVycy5kZWFsZXJzLFxuXHRcdFx0dG90YWxEZWFsZXJzOiAwLFxuXHRcdFx0dG9nZ2xlZDogJycsXG5cdFx0XHRzaG93TWVudTogJ3Nob3dpbmcnLFxuXHRcdFx0aGlkZU1lbnU6ICdoaWRpbmcnLFxuXHRcdFx0aG92ZXI6IGZhbHNlXG5cdFx0fTtcblx0XHR0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSA9IHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oYW5kbGVGb3JtSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUZvcm1JbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrID0gdGhpcy5oYW5kbGVCdXR0b25DbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaG92ZXJpbmcgPSB0aGlzLmhvdmVyaW5nLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgZGVhbGVyc1dpdGhVcGRhdGVkSG91cnMgPSB0aGlzLnN0YXRlLmRlYWxlckxpc3QubWFwKGRlYWxlciA9PiB7XG5cdFx0XHRsZXQgdGVtcERlYWxlciA9IE9iamVjdC5hc3NpZ24oe30sIGRlYWxlcik7XG5cdFx0XHR0ZW1wRGVhbGVyLmRhdGEucGhvbmUxID0gdGVtcERlYWxlci5kYXRhLnBob25lMS5zcGxpdCgnLScpLmpvaW4oJy4nKTtcblx0XHRcdHRlbXBEZWFsZXIuZGF0YS53ZWVrSG91cnMgPSB0aGlzLmdyb3VwRGF5c09md2Vlayh0ZW1wRGVhbGVyLmRhdGEud2Vla0hvdXJzKTtcblx0XHRcdHRlbXBEZWFsZXIuZGF0YS5jZXJ0aWZpY2F0aW9ucyA9IHRoaXMuYWRkQ2xhc3NOYW1lKHRlbXBEZWFsZXIuZGF0YS5jZXJ0aWZpY2F0aW9ucyk7XG5cdFx0XHRyZXR1cm4gdGVtcERlYWxlcjtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGVhbGVyTGlzdDogZGVhbGVyc1dpdGhVcGRhdGVkSG91cnMsXG5cdFx0XHR0b3RhbERlYWxlcnM6IHRoaXMuc3RhdGUuZGVhbGVyTGlzdC5sZW5ndGhcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUZvcm1JbnB1dENoYW5nZShlKSB7XG5cdFx0bGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuXHRcdGxldCBjb250YWN0Rm9ybSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuY29udGFjdEZvcm0pO1xuXG5cdFx0Y29udGFjdEZvcm1bbmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y29udGFjdEZvcm06IGNvbnRhY3RGb3JtXG5cdFx0fSk7XG5cdH1cblxuXHRob3ZlcmluZygpIHtcblx0XHRjb25zb2xlLmxvZygnaG92ZXIgc3RhdGU6ICcsIHRoaXMuc3RhdGUuaG92ZXIpO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogIXRoaXMuc3RhdGUuaG92ZXIgfSk7XG5cdH1cblxuXHRvcGVuTW9kYWwoZGVhbGVyTmFtZSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aXNNb2RhbE9wZW46IHRydWUsXG5cdFx0XHRkZWFsZXJOYW1lOiBkZWFsZXJOYW1lXG5cdFx0fSk7XG5cdH1cblxuXHRjbG9zZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogZmFsc2UgfSk7XG5cdH1cblxuXHR0b2dnbGVNZW51KCkge1xuXHRcdGxldCBzaG93blN0YXRlID0gdGhpcy5zdGF0ZS5zaG93TWVudSA9PT0gJ3Nob3dpbmcnID8gJ2hpZGluZycgOiAnc2hvd2luZyc7XG5cdFx0bGV0IGhpZGRlblN0YXRlID0gdGhpcy5zdGF0ZS5oaWRlTWVudSA9PT0gJ2hpZGluZycgPyAnc2hvd2luZycgOiAnaGlkaW5nJztcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2hvd01lbnU6IHNob3duU3RhdGUsXG5cdFx0XHRoaWRlTWVudTogaGlkZGVuU3RhdGVcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUZpbHRlckNoYW5nZShlKSB7XG5cdFx0bGV0IGNlcnRpZmljYXRpb25TdGF0ZXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkKTtcblx0XHRsZXQgY2VydGlmaWNhdGlvbkNoZWNrZWQgPSB7fTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZCkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBrZXkgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkKVtpXTtcblx0XHRcdGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWRba2V5XTtcblx0XHRcdGNlcnRpZmljYXRpb25DaGVja2VkW2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRjZXJ0aWZpY2F0aW9uQ2hlY2tlZFtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cblx0XHR0aGlzLmZpbHRlckJ5Q2VydGlmaWNhdGlvbihjZXJ0aWZpY2F0aW9uQ2hlY2tlZCk7XG5cdH1cblxuXHRqb2luQ2VydGlmaWNhdGlvbnMoY2VydGlmaWNhdGlvbkFycmF5KSB7XG5cdFx0bGV0IGpvaW5lZFZhbHVlcyA9IGNlcnRpZmljYXRpb25BcnJheS5yZWR1Y2UoKHJ1bm5pbmdXb3JkLCBjdXJyZW50V29yZCkgPT4ge1xuXHRcdFx0cmV0dXJuIChydW5uaW5nV29yZCArPSBgICR7Y3VycmVudFdvcmQuY2VydGlmaWNhdGlvbn1gKTtcblx0XHR9LCAnJyk7XG5cblx0XHRyZXR1cm4gam9pbmVkVmFsdWVzO1xuXHR9XG5cblx0ZmlsdGVyQnlDZXJ0aWZpY2F0aW9uKGNlcnRpZmljYXRpb25DaGVja2VkKSB7XG5cdFx0bGV0IGZpbHRlcmVkRGVhbGVycyA9IHdpbmRvdy5kZWFsZXJEYXRhLmRlYWxlcnMuZmlsdGVyKGRlYWxlciA9PiB7XG5cdFx0XHRsZXQgam9pbmVkQ2VydGlmaWNhdGlvbnMgPSB0aGlzLmpvaW5DZXJ0aWZpY2F0aW9ucyhkZWFsZXIuZGF0YS5jZXJ0aWZpY2F0aW9ucyk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdCghY2VydGlmaWNhdGlvbkNoZWNrZWQuc2VydmljZSAmJlxuXHRcdFx0XHRcdCFjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5pbnN0YWxsYXRpb24gJiZcblx0XHRcdFx0XHQhY2VydGlmaWNhdGlvbkNoZWNrZWQucmVzaWRlbnRpYWwgJiZcblx0XHRcdFx0XHQhY2VydGlmaWNhdGlvbkNoZWNrZWQuY29tbWVyY2lhbCkgfHxcblx0XHRcdFx0KGNlcnRpZmljYXRpb25DaGVja2VkLnNlcnZpY2UgJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignU2VydmljZSBQcm8nKSA+PSAwKSB8fFxuXHRcdFx0XHQoY2VydGlmaWNhdGlvbkNoZWNrZWQuaW5zdGFsbGF0aW9uICYmIGpvaW5lZENlcnRpZmljYXRpb25zLmluZGV4T2YoJ0luc3RhbGxhdGlvbiBQcm8nKSA+PSAwKSB8fFxuXHRcdFx0XHQoY2VydGlmaWNhdGlvbkNoZWNrZWQucmVzaWRlbnRpYWwgJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignUmVzaWRlbnRpYWwgUHJvJykgPj0gMCkgfHxcblx0XHRcdFx0KGNlcnRpZmljYXRpb25DaGVja2VkLmNvbW1lcmNpYWwgJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignQ29tbWVyY2lhbCBQcm8nKSA+PSAwKVxuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y2VydGlmaWNhdGlvbkNoZWNrZWQ6IGNlcnRpZmljYXRpb25DaGVja2VkLFxuXHRcdFx0ZGVhbGVyTGlzdDogZmlsdGVyZWREZWFsZXJzXG5cdFx0fSk7XG5cdH1cblxuXHRhZGRDbGFzc05hbWUoY2VydGlmaWNhdGlvbkFycikge1xuXHRcdGxldCBjZXJ0aWZpY2F0aW9uQ2xhc3NBc3NvY2lhdGlvbnMgPSB7XG5cdFx0XHRbJ0luc3RhbGxhdGlvbiBQcm8nXTogJ2dseXBoaWNvbiBnbHlwaGljb24tc3RhcicsXG5cdFx0XHRbJ0NvbW1lcmNpYWwgUHJvJ106ICdnbHlwaGljb24gZ2x5cGhpY29uLXVzZXInLFxuXHRcdFx0WydSZXNpZGVudGlhbCBQcm8nXTogJ2dseXBoaWNvbiBnbHlwaGljb24taG9tZScsXG5cdFx0XHRbJ1NlcnZpY2UgUHJvJ106ICdnbHlwaGljb24gZ2x5cGhpY29uLWNvZydcblx0XHR9O1xuXG5cdFx0bGV0IGNlcnRpZmljYXRpb25DbGFzc2VzID0gY2VydGlmaWNhdGlvbkFyci5tYXAoY2VydGlmaWNhdGlvbiA9PiB7XG5cdFx0XHRsZXQgY2VydE9iaiA9IHt9O1xuXHRcdFx0Y2VydE9iai5jZXJ0aWZpY2F0aW9uID0gY2VydGlmaWNhdGlvbjtcblx0XHRcdGNlcnRPYmouY2xhc3NOYW1lID0gY2VydGlmaWNhdGlvbkNsYXNzQXNzb2NpYXRpb25zW2NlcnRpZmljYXRpb25dO1xuXHRcdFx0cmV0dXJuIGNlcnRPYmo7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY2VydGlmaWNhdGlvbkNsYXNzZXM7XG5cdH1cblxuXHRncm91cERheXNPZndlZWsod2Vlaykge1xuXHRcdGxldCBtb2RpZmllZFdlZWsgPSB7XG5cdFx0XHRtb246ICdNb25kYXlzJyxcblx0XHRcdHR1ZTogJ1R1ZXNkYXlzJyxcblx0XHRcdHdlZDogJ1dlZG5lc2RheXMnLFxuXHRcdFx0dGh1OiAnVGh1cnNkYXlzJyxcblx0XHRcdGZyaTogJ0ZyaWRheXMnLFxuXHRcdFx0c2F0OiAnU2F0dXJkYXlzJyxcblx0XHRcdHN1bjogJ1N1bmRheXMnXG5cdFx0fTtcblxuXHRcdGxldCBmaW5hbERheXMgPSBbXTtcblx0XHRsZXQgYmFzZSA9IHdlZWsubW9uO1xuXHRcdGxldCBzYW1lID0gdHJ1ZTtcblxuXHRcdGZpbmFsRGF5c1swXSA9IGBNb25kYXlzICR7d2Vlay5tb259YDtcblxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG5cdFx0XHRsZXQgZGF5ID0gYCR7T2JqZWN0LmtleXMod2VlaylbaV19YDtcblx0XHRcdGxldCBob3VycyA9IHdlZWtbZGF5XSA9PT0gJ09uIENhbGwnID8gJy0gT24gQ2FsbCcgOiB3ZWVrW2RheV0gfHwgJy0gQ0xPU0VEJztcblxuXHRcdFx0ZmluYWxEYXlzLnB1c2goYCR7W21vZGlmaWVkV2Vla1tkYXldXX0gJHtob3Vyc31gKTtcblx0XHRcdGlmICh3ZWVrW09iamVjdC5rZXlzKHdlZWspW2ldXSAhPT0gYmFzZSkge1xuXHRcdFx0XHRzYW1lID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHNhbWUpIHtcblx0XHRcdGZpbmFsRGF5cy5zcGxpY2UoMCk7XG5cdFx0XHRmaW5hbERheXNbMF0gPSBgV2Vla2RheXMgJHtiYXNlfWA7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDU7IGkgPCA3OyBpKyspIHtcblx0XHRcdGxldCBkYXkgPSBpID09PSA1ID8gJ3NhdCcgOiAnc3VuJztcblx0XHRcdGxldCBob3VycyA9IHdlZWtbZGF5XSA9PT0gJ09uIENhbGwnID8gJy0gT24gQ2FsbCcgOiB3ZWVrW2RheV0gfHwgJy0gQ0xPU0VEJztcblxuXHRcdFx0ZmluYWxEYXlzLnB1c2goYCR7W21vZGlmaWVkV2Vla1tkYXldXX0gJHtob3Vyc31gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZpbmFsRGF5cztcblx0fVxuXG5cdGhhbmRsZUJ1dHRvbkNsaWNrKHJlc3BvbnNlLCBlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmIChyZXNwb25zZSA9PT0gJ3llcycpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVkOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvZ2dsZWQ6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdDxNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUuaXNNb2RhbE9wZW59IG9uQ2xvc2U9eygpID0+IHRoaXMuY2xvc2VNb2RhbCgpfT5cblx0XHRcdFx0XHQ8Q29udGFjdFxuXHRcdFx0XHRcdFx0ZGVhbGVyTmFtZT17dGhpcy5zdGF0ZS5kZWFsZXJOYW1lfVxuXHRcdFx0XHRcdFx0Y29udGFjdFByb3BlcnRpZXM9e3RoaXMuc3RhdGUuY29udGFjdEZvcm19XG5cdFx0XHRcdFx0XHRoYW5kbGVGb3JtSW5wdXRDaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0b3duUG9vbE9yU3BhPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrfVxuXHRcdFx0XHRcdFx0dG9nZ2xlZD17dGhpcy5zdGF0ZS50b2dnbGVkfVxuXHRcdFx0XHRcdFx0Y2xvc2VNb2RhbD17dGhpcy5jbG9zZU1vZGFsfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItcG9zaXRpb25pbmctY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PFRvcEJhciAvPlxuXHRcdFx0XHRcdDxOYXYgdG9nZ2xlTWVudT17dGhpcy50b2dnbGVNZW51fSBzaG93TWVudT17dGhpcy5zdGF0ZS5zaG93TWVudX0gaGlkZU1lbnU9e3RoaXMuc3RhdGUuaGlkZU1lbnV9IC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWltYWdlLW1haW5cIiAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWN1c3RvbVwiPlxuXHRcdFx0XHRcdFx0PEZpbHRlclxuXHRcdFx0XHRcdFx0XHRkZWFsZXJUb3RhbD17dGhpcy5zdGF0ZS50b3RhbERlYWxlcnN9XG5cdFx0XHRcdFx0XHRcdGRlYWxlcj17dGhpcy5wcm9wcy5kZWFsZXJzfVxuXHRcdFx0XHRcdFx0XHRoYW5kbGVGaWx0ZXJDaGFuZ2U9e3RoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxEZWFsZXJMaXN0XG5cdFx0XHRcdFx0XHRcdGRlYWxlcnM9e3RoaXMuc3RhdGUuZGVhbGVyTGlzdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZEl0ZW1zPXt0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkfVxuXHRcdFx0XHRcdFx0XHRvcGVuTW9kYWw9e3RoaXMub3Blbk1vZGFsfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8VG9wRm9vdGVyIC8+XG5cdFx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcblx0ZGVhbGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBkZWFsZXJzPXt3aW5kb3cuZGVhbGVyRGF0YX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=