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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImNlcnRpZmljYXRpb25DaGVja2VkIiwiY29tbWVyY2lhbCIsImluc3RhbGxhdGlvbiIsInJlc2lkZW50aWFsIiwic2VydmljZSIsImNvbnRhY3RGb3JtIiwibmFtZSIsIm51bWJlciIsImFkZHJlc3MiLCJjb21tZW50cyIsIm93biIsImlzTW9kYWxPcGVuIiwiZGVhbGVyTmFtZSIsImRlYWxlckxpc3QiLCJkZWFsZXJzIiwidG9nZ2xlZCIsInNob3dNZW51IiwiaGlkZU1lbnUiLCJob3ZlciIsImhhbmRsZUZpbHRlckNoYW5nZSIsImJpbmQiLCJoYW5kbGVGb3JtSW5wdXRDaGFuZ2UiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJ0b2dnbGVNZW51IiwiaG92ZXJpbmciLCJkZWFsZXJzV2l0aFVwZGF0ZWRIb3VycyIsIm1hcCIsInRlbXBEZWFsZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWFsZXIiLCJkYXRhIiwicGhvbmUxIiwic3BsaXQiLCJqb2luIiwid2Vla0hvdXJzIiwiZ3JvdXBEYXlzT2Z3ZWVrIiwiY2VydGlmaWNhdGlvbnMiLCJhZGRDbGFzc05hbWUiLCJzZXRTdGF0ZSIsInRvdGFsRGVhbGVycyIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzaG93blN0YXRlIiwiaGlkZGVuU3RhdGUiLCJjZXJ0aWZpY2F0aW9uU3RhdGVzIiwia2V5cyIsImkiLCJrZXkiLCJjaGVja2VkIiwiZmlsdGVyQnlDZXJ0aWZpY2F0aW9uIiwiY2VydGlmaWNhdGlvbkFycmF5Iiwiam9pbmVkVmFsdWVzIiwicmVkdWNlIiwicnVubmluZ1dvcmQiLCJjdXJyZW50V29yZCIsImNlcnRpZmljYXRpb24iLCJmaWx0ZXJlZERlYWxlcnMiLCJ3aW5kb3ciLCJkZWFsZXJEYXRhIiwiZmlsdGVyIiwiam9pbmVkQ2VydGlmaWNhdGlvbnMiLCJqb2luQ2VydGlmaWNhdGlvbnMiLCJpbmRleE9mIiwiY2VydGlmaWNhdGlvbkFyciIsImNlcnRpZmljYXRpb25DbGFzc0Fzc29jaWF0aW9ucyIsImNlcnRpZmljYXRpb25DbGFzc2VzIiwiY2VydE9iaiIsImNsYXNzTmFtZSIsIndlZWsiLCJtb2RpZmllZFdlZWsiLCJtb24iLCJ0dWUiLCJ3ZWQiLCJ0aHUiLCJmcmkiLCJzYXQiLCJzdW4iLCJmaW5hbERheXMiLCJiYXNlIiwic2FtZSIsImRheSIsImhvdXJzIiwicHVzaCIsInNwbGljZSIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJ6aXBjb2RlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJsb2NhdGlvbiIsImFycmF5IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUdsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMseUJBQXNCO0FBQ3JCQyxnQkFBWSxLQURTO0FBRXJCQyxrQkFBYyxLQUZPO0FBR3JCQyxpQkFBYSxLQUhRO0FBSXJCQyxhQUFTO0FBSlksSUFEVjtBQU9aQyxnQkFBYTtBQUNaQyxVQUFNLEVBRE07QUFFWkMsWUFBUSxFQUZJO0FBR1pDLGFBQVMsRUFIRztBQUlaQyxjQUFVLEVBSkU7QUFLWkMsU0FBSztBQUxPLElBUEQ7QUFjWkMsZ0JBQWEsS0FkRDtBQWVaQyxlQUFZLEVBZkE7QUFnQlpDLGVBQVlmLE1BQU1nQixPQUFOLENBQWNBLE9BaEJkO0FBaUJaQyxZQUFTLEVBakJHO0FBa0JaQyxhQUFVLFNBbEJFO0FBbUJaQyxhQUFVLFFBbkJFO0FBb0JaQyxVQUFPO0FBcEJLLEdBQWI7QUFzQkEsUUFBS0Msa0JBQUwsR0FBMEIsTUFB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QWlCQyx5QkFBQyxNQUFEO0FBakJEO0FBWEQsSUFERDtBQWlDQTs7OztFQTlPZ0J3RSxNQUFNQyxTOztBQWlQeEJsRyxJQUFJbUcsU0FBSixHQUFnQjtBQUNmbEYsVUFBU21GLFVBQVVDLEtBQVYsQ0FBZ0I7QUFDeEJMLFdBQVNJLFVBQVVFLE1BQVYsQ0FBaUJDLFVBREY7QUFFeEJDLFlBQVVKLFVBQVVuRSxNQUZJO0FBR3hCaEIsV0FBU21GLFVBQVVLLEtBQVYsQ0FBZ0JGO0FBSEQsRUFBaEIsRUFJTkE7QUFMWSxDQUFoQjs7QUFRQUcsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELElBQUssU0FBU3hDLE9BQU9DLFVBQXJCLEdBQWhCLEVBQXFEd0MsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFyRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjZXJ0aWZpY2F0aW9uQ2hlY2tlZDoge1xuXHRcdFx0XHRjb21tZXJjaWFsOiBmYWxzZSxcblx0XHRcdFx0aW5zdGFsbGF0aW9uOiBmYWxzZSxcblx0XHRcdFx0cmVzaWRlbnRpYWw6IGZhbHNlLFxuXHRcdFx0XHRzZXJ2aWNlOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGNvbnRhY3RGb3JtOiB7XG5cdFx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0XHRudW1iZXI6ICcnLFxuXHRcdFx0XHRhZGRyZXNzOiAnJyxcblx0XHRcdFx0Y29tbWVudHM6ICcnLFxuXHRcdFx0XHRvd246IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0aXNNb2RhbE9wZW46IGZhbHNlLFxuXHRcdFx0ZGVhbGVyTmFtZTogJycsXG5cdFx0XHRkZWFsZXJMaXN0OiBwcm9wcy5kZWFsZXJzLmRlYWxlcnMsXG5cdFx0XHR0b2dnbGVkOiAnJyxcblx0XHRcdHNob3dNZW51OiAnc2hvd2luZycsXG5cdFx0XHRoaWRlTWVudTogJ2hpZGluZycsXG5cdFx0XHRob3ZlcjogZmFsc2Vcblx0XHR9O1xuXHRcdHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUZvcm1JbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2sgPSB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50b2dnbGVNZW51ID0gdGhpcy50b2dnbGVNZW51LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5ob3ZlcmluZyA9IHRoaXMuaG92ZXJpbmcuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBkZWFsZXJzV2l0aFVwZGF0ZWRIb3VycyA9IHRoaXMuc3RhdGUuZGVhbGVyTGlzdC5tYXAoZGVhbGVyID0+IHtcblx0XHRcdGxldCB0ZW1wRGVhbGVyID0gT2JqZWN0LmFzc2lnbih7fSwgZGVhbGVyKTtcblx0XHRcdHRlbXBEZWFsZXIuZGF0YS5waG9uZTEgPSB0ZW1wRGVhbGVyLmRhdGEucGhvbmUxLnNwbGl0KCctJykuam9pbignLicpO1xuXHRcdFx0dGVtcERlYWxlci5kYXRhLndlZWtIb3VycyA9IHRoaXMuZ3JvdXBEYXlzT2Z3ZWVrKHRlbXBEZWFsZXIuZGF0YS53ZWVrSG91cnMpO1xuXHRcdFx0dGVtcERlYWxlci5kYXRhLmNlcnRpZmljYXRpb25zID0gdGhpcy5hZGRDbGFzc05hbWUodGVtcERlYWxlci5kYXRhLmNlcnRpZmljYXRpb25zKTtcblx0XHRcdHJldHVybiB0ZW1wRGVhbGVyO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkZWFsZXJMaXN0OiBkZWFsZXJzV2l0aFVwZGF0ZWRIb3Vycyxcblx0XHRcdHRvdGFsRGVhbGVyczogdGhpcy5zdGF0ZS5kZWFsZXJMaXN0Lmxlbmd0aFxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlRm9ybUlucHV0Q2hhbmdlKGUpIHtcblx0XHRsZXQgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG5cdFx0bGV0IGNvbnRhY3RGb3JtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5jb250YWN0Rm9ybSk7XG5cblx0XHRjb250YWN0Rm9ybVtuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjb250YWN0Rm9ybTogY29udGFjdEZvcm1cblx0XHR9KTtcblx0fVxuXG5cdGhvdmVyaW5nKCkge1xuXHRcdGNvbnNvbGUubG9nKCdob3ZlciBzdGF0ZTogJywgdGhpcy5zdGF0ZS5ob3Zlcik7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiAhdGhpcy5zdGF0ZS5ob3ZlciB9KTtcblx0fVxuXG5cdG9wZW5Nb2RhbChkZWFsZXJOYW1lKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpc01vZGFsT3BlbjogdHJ1ZSxcblx0XHRcdGRlYWxlck5hbWU6IGRlYWxlck5hbWVcblx0XHR9KTtcblx0fVxuXG5cdGNsb3NlTW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBmYWxzZSB9KTtcblx0fVxuXG5cdHRvZ2dsZU1lbnUoKSB7XG5cdFx0bGV0IHNob3duU3RhdGUgPSB0aGlzLnN0YXRlLnNob3dNZW51ID09PSAnc2hvd2luZycgPyAnaGlkaW5nJyA6ICdzaG93aW5nJztcblx0XHRsZXQgaGlkZGVuU3RhdGUgPSB0aGlzLnN0YXRlLmhpZGVNZW51ID09PSAnaGlkaW5nJyA/ICdzaG93aW5nJyA6ICdoaWRpbmcnO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzaG93TWVudTogc2hvd25TdGF0ZSxcblx0XHRcdGhpZGVNZW51OiBoaWRkZW5TdGF0ZVxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlRmlsdGVyQ2hhbmdlKGUpIHtcblx0XHRsZXQgY2VydGlmaWNhdGlvblN0YXRlcyA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWQpO1xuXHRcdGxldCBjZXJ0aWZpY2F0aW9uQ2hlY2tlZCA9IHt9O1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkKS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGtleSA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWQpW2ldO1xuXHRcdFx0bGV0IHZhbHVlID0gdGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZFtrZXldO1xuXHRcdFx0Y2VydGlmaWNhdGlvbkNoZWNrZWRba2V5XSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdGNlcnRpZmljYXRpb25DaGVja2VkW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQuY2hlY2tlZDtcblxuXHRcdHRoaXMuZmlsdGVyQnlDZXJ0aWZpY2F0aW9uKGNlcnRpZmljYXRpb25DaGVja2VkKTtcblx0fVxuXG5cdGpvaW5DZXJ0aWZpY2F0aW9ucyhjZXJ0aWZpY2F0aW9uQXJyYXkpIHtcblx0XHRsZXQgam9pbmVkVmFsdWVzID0gY2VydGlmaWNhdGlvbkFycmF5LnJlZHVjZSgocnVubmluZ1dvcmQsIGN1cnJlbnRXb3JkKSA9PiB7XG5cdFx0XHRyZXR1cm4gKHJ1bm5pbmdXb3JkICs9IGAgJHtjdXJyZW50V29yZC5jZXJ0aWZpY2F0aW9ufWApO1xuXHRcdH0sICcnKTtcblxuXHRcdHJldHVybiBqb2luZWRWYWx1ZXM7XG5cdH1cblxuXHRmaWx0ZXJCeUNlcnRpZmljYXRpb24oY2VydGlmaWNhdGlvbkNoZWNrZWQpIHtcblx0XHRsZXQgZmlsdGVyZWREZWFsZXJzID0gd2luZG93LmRlYWxlckRhdGEuZGVhbGVycy5maWx0ZXIoZGVhbGVyID0+IHtcblx0XHRcdGxldCBqb2luZWRDZXJ0aWZpY2F0aW9ucyA9IHRoaXMuam9pbkNlcnRpZmljYXRpb25zKGRlYWxlci5kYXRhLmNlcnRpZmljYXRpb25zKTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0KCFjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5zZXJ2aWNlICYmXG5cdFx0XHRcdFx0IWNlcnRpZmljYXRpb25DaGVja2VkLmluc3RhbGxhdGlvbiAmJlxuXHRcdFx0XHRcdCFjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5yZXNpZGVudGlhbCAmJlxuXHRcdFx0XHRcdCFjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5jb21tZXJjaWFsKSB8fFxuXHRcdFx0XHQoY2VydGlmaWNhdGlvbkNoZWNrZWQuc2VydmljZSAmJiBqb2luZWRDZXJ0aWZpY2F0aW9ucy5pbmRleE9mKCdTZXJ2aWNlIFBybycpID49IDApIHx8XG5cdFx0XHRcdChjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5pbnN0YWxsYXRpb24gJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignSW5zdGFsbGF0aW9uIFBybycpID49IDApIHx8XG5cdFx0XHRcdChjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5yZXNpZGVudGlhbCAmJiBqb2luZWRDZXJ0aWZpY2F0aW9ucy5pbmRleE9mKCdSZXNpZGVudGlhbCBQcm8nKSA+PSAwKSB8fFxuXHRcdFx0XHQoY2VydGlmaWNhdGlvbkNoZWNrZWQuY29tbWVyY2lhbCAmJiBqb2luZWRDZXJ0aWZpY2F0aW9ucy5pbmRleE9mKCdDb21tZXJjaWFsIFBybycpID49IDApXG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjZXJ0aWZpY2F0aW9uQ2hlY2tlZDogY2VydGlmaWNhdGlvbkNoZWNrZWQsXG5cdFx0XHRkZWFsZXJMaXN0OiBmaWx0ZXJlZERlYWxlcnNcblx0XHR9KTtcblx0fVxuXG5cdGFkZENsYXNzTmFtZShjZXJ0aWZpY2F0aW9uQXJyKSB7XG5cdFx0bGV0IGNlcnRpZmljYXRpb25DbGFzc0Fzc29jaWF0aW9ucyA9IHtcblx0XHRcdFsnSW5zdGFsbGF0aW9uIFBybyddOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyJyxcblx0XHRcdFsnQ29tbWVyY2lhbCBQcm8nXTogJ2dseXBoaWNvbiBnbHlwaGljb24tdXNlcicsXG5cdFx0XHRbJ1Jlc2lkZW50aWFsIFBybyddOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJyxcblx0XHRcdFsnU2VydmljZSBQcm8nXTogJ2dseXBoaWNvbiBnbHlwaGljb24tY29nJ1xuXHRcdH07XG5cblx0XHRsZXQgY2VydGlmaWNhdGlvbkNsYXNzZXMgPSBjZXJ0aWZpY2F0aW9uQXJyLm1hcChjZXJ0aWZpY2F0aW9uID0+IHtcblx0XHRcdGxldCBjZXJ0T2JqID0ge307XG5cdFx0XHRjZXJ0T2JqLmNlcnRpZmljYXRpb24gPSBjZXJ0aWZpY2F0aW9uO1xuXHRcdFx0Y2VydE9iai5jbGFzc05hbWUgPSBjZXJ0aWZpY2F0aW9uQ2xhc3NBc3NvY2lhdGlvbnNbY2VydGlmaWNhdGlvbl07XG5cdFx0XHRyZXR1cm4gY2VydE9iajtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjZXJ0aWZpY2F0aW9uQ2xhc3Nlcztcblx0fVxuXG5cdGdyb3VwRGF5c09md2Vlayh3ZWVrKSB7XG5cdFx0bGV0IG1vZGlmaWVkV2VlayA9IHtcblx0XHRcdG1vbjogJ01vbmRheXMnLFxuXHRcdFx0dHVlOiAnVHVlc2RheXMnLFxuXHRcdFx0d2VkOiAnV2VkbmVzZGF5cycsXG5cdFx0XHR0aHU6ICdUaHVyc2RheXMnLFxuXHRcdFx0ZnJpOiAnRnJpZGF5cycsXG5cdFx0XHRzYXQ6ICdTYXR1cmRheXMnLFxuXHRcdFx0c3VuOiAnU3VuZGF5cydcblx0XHR9O1xuXG5cdFx0bGV0IGZpbmFsRGF5cyA9IFtdO1xuXHRcdGxldCBiYXNlID0gd2Vlay5tb247XG5cdFx0bGV0IHNhbWUgPSB0cnVlO1xuXG5cdFx0ZmluYWxEYXlzWzBdID0gYE1vbmRheXMgJHt3ZWVrLm1vbn1gO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcblx0XHRcdGxldCBkYXkgPSBgJHtPYmplY3Qua2V5cyh3ZWVrKVtpXX1gO1xuXHRcdFx0bGV0IGhvdXJzID0gd2Vla1tkYXldID09PSAnT24gQ2FsbCcgPyAnLSBPbiBDYWxsJyA6IHdlZWtbZGF5XSB8fCAnLSBDTE9TRUQnO1xuXG5cdFx0XHRmaW5hbERheXMucHVzaChgJHtbbW9kaWZpZWRXZWVrW2RheV1dfSAke2hvdXJzfWApO1xuXHRcdFx0aWYgKHdlZWtbT2JqZWN0LmtleXMod2VlaylbaV1dICE9PSBiYXNlKSB7XG5cdFx0XHRcdHNhbWUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoc2FtZSkge1xuXHRcdFx0ZmluYWxEYXlzLnNwbGljZSgwKTtcblx0XHRcdGZpbmFsRGF5c1swXSA9IGBXZWVrZGF5cyAke2Jhc2V9YDtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gNTsgaSA8IDc7IGkrKykge1xuXHRcdFx0bGV0IGRheSA9IGkgPT09IDUgPyAnc2F0JyA6ICdzdW4nO1xuXHRcdFx0bGV0IGhvdXJzID0gd2Vla1tkYXldID09PSAnT24gQ2FsbCcgPyAnLSBPbiBDYWxsJyA6IHdlZWtbZGF5XSB8fCAnLSBDTE9TRUQnO1xuXG5cdFx0XHRmaW5hbERheXMucHVzaChgJHtbbW9kaWZpZWRXZWVrW2RheV1dfSAke2hvdXJzfWApO1xuXHRcdH1cblx0XHRyZXR1cm4gZmluYWxEYXlzO1xuXHR9XG5cblx0aGFuZGxlQnV0dG9uQ2xpY2socmVzcG9uc2UsIGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKHJlc3BvbnNlID09PSAneWVzJykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvZ2dsZWQ6IHRydWVcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0dG9nZ2xlZDogZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdXRlci1jb250YWluZXJcIj5cblx0XHRcdFx0PE1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5pc01vZGFsT3Blbn0gb25DbG9zZT17KCkgPT4gdGhpcy5jbG9zZU1vZGFsKCl9PlxuXHRcdFx0XHRcdDxDb250YWN0XG5cdFx0XHRcdFx0XHRkZWFsZXJOYW1lPXt0aGlzLnN0YXRlLmRlYWxlck5hbWV9XG5cdFx0XHRcdFx0XHRjb250YWN0UHJvcGVydGllcz17dGhpcy5zdGF0ZS5jb250YWN0Rm9ybX1cblx0XHRcdFx0XHRcdGhhbmRsZUZvcm1JbnB1dENoYW5nZT17dGhpcy5oYW5kbGVGb3JtSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHRvd25Qb29sT3JTcGE9e3RoaXMuaGFuZGxlQnV0dG9uQ2xpY2t9XG5cdFx0XHRcdFx0XHR0b2dnbGVkPXt0aGlzLnN0YXRlLnRvZ2dsZWR9XG5cdFx0XHRcdFx0XHRjbG9zZU1vZGFsPXt0aGlzLmNsb3NlTW9kYWx9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdXRlci1wb3NpdGlvbmluZy1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8VG9wQmFyIC8+XG5cdFx0XHRcdFx0PE5hdiB0b2dnbGVNZW51PXt0aGlzLnRvZ2dsZU1lbnV9IHNob3dNZW51PXt0aGlzLnN0YXRlLnNob3dNZW51fSBoaWRlTWVudT17dGhpcy5zdGF0ZS5oaWRlTWVudX0gLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtaW1hZ2UtbWFpblwiIC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY3VzdG9tXCI+XG5cdFx0XHRcdFx0XHQ8RmlsdGVyXG5cdFx0XHRcdFx0XHRcdGRlYWxlcj17dGhpcy5wcm9wcy5kZWFsZXJzLmRlYWxlcnN9XG5cdFx0XHRcdFx0XHRcdHppcD17dGhpcy5wcm9wcy5kZWFsZXJzLnppcGNvZGV9XG5cdFx0XHRcdFx0XHRcdGhhbmRsZUZpbHRlckNoYW5nZT17dGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PERlYWxlckxpc3Rcblx0XHRcdFx0XHRcdFx0ZGVhbGVycz17dGhpcy5zdGF0ZS5kZWFsZXJMaXN0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkSXRlbXM9e3RoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWR9XG5cdFx0XHRcdFx0XHRcdG9wZW5Nb2RhbD17dGhpcy5vcGVuTW9kYWx9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxUb3BGb290ZXIgLz5cblx0XHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuXHRkZWFsZXJzOiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdHppcGNvZGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRsb2NhdGlvbjogUHJvcFR5cGVzLk9iamVjdCxcblx0XHRkZWFsZXJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuXHR9KS5pc1JlcXVpcmVkXG59O1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBkZWFsZXJzPXt3aW5kb3cuZGVhbGVyRGF0YX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=