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
				null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImNlcnRpZmljYXRpb25DaGVja2VkIiwiY29tbWVyY2lhbCIsImluc3RhbGxhdGlvbiIsInJlc2lkZW50aWFsIiwic2VydmljZSIsImNvbnRhY3RGb3JtIiwibmFtZSIsIm51bWJlciIsImFkZHJlc3MiLCJjb21tZW50cyIsIm93biIsImlzTW9kYWxPcGVuIiwiZGVhbGVyTmFtZSIsImRlYWxlckxpc3QiLCJ3aW5kb3ciLCJkZWFsZXJEYXRhIiwiZGVhbGVycyIsInRvdGFsRGVhbGVycyIsInRvZ2dsZWQiLCJzaG93TWVudSIsImhpZGVNZW51IiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiYmluZCIsImhhbmRsZUZvcm1JbnB1dENoYW5nZSIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJoYW5kbGVCdXR0b25DbGljayIsInRvZ2dsZU1lbnUiLCJkZWFsZXJzV2l0aFVwZGF0ZWRIb3VycyIsIm1hcCIsInRlbXBEZWFsZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWFsZXIiLCJkYXRhIiwicGhvbmUxIiwic3BsaXQiLCJqb2luIiwid2Vla0hvdXJzIiwiZ3JvdXBEYXlzT2Z3ZWVrIiwiY2VydGlmaWNhdGlvbnMiLCJhZGRDbGFzc05hbWUiLCJzZXRTdGF0ZSIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNob3duU3RhdGUiLCJoaWRkZW5TdGF0ZSIsImNlcnRpZmljYXRpb25TdGF0ZXMiLCJrZXlzIiwiaSIsImtleSIsImNoZWNrZWQiLCJmaWx0ZXJCeUNlcnRpZmljYXRpb24iLCJjZXJ0aWZpY2F0aW9uQXJyYXkiLCJqb2luZWRWYWx1ZXMiLCJyZWR1Y2UiLCJydW5uaW5nV29yZCIsImN1cnJlbnRXb3JkIiwiY2VydGlmaWNhdGlvbiIsImZpbHRlcmVkRGVhbGVycyIsImZpbHRlciIsImpvaW5lZENlcnRpZmljYXRpb25zIiwiam9pbkNlcnRpZmljYXRpb25zIiwiaW5kZXhPZiIsImNlcnRpZmljYXRpb25BcnIiLCJjZXJ0aWZpY2F0aW9uQ2xhc3NBc3NvY2lhdGlvbnMiLCJjZXJ0aWZpY2F0aW9uQ2xhc3NlcyIsImNlcnRPYmoiLCJjbGFzc05hbWUiLCJ3ZWVrIiwibW9kaWZpZWRXZWVrIiwibW9uIiwidHVlIiwid2VkIiwidGh1IiwiZnJpIiwic2F0Iiwic3VuIiwiZmluYWxEYXlzIiwiYmFzZSIsInNhbWUiLCJkYXkiLCJob3VycyIsInB1c2giLCJzcGxpY2UiLCJyZXNwb25zZSIsInByZXZlbnREZWZhdWx0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBR2xCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyx5QkFBc0I7QUFDckJDLGdCQUFZLEtBRFM7QUFFckJDLGtCQUFjLEtBRk87QUFHckJDLGlCQUFhLEtBSFE7QUFJckJDLGFBQVM7QUFKWSxJQURWO0FBT1pDLGdCQUFhO0FBQ1pDLFVBQU0sRUFETTtBQUVaQyxZQUFRLEVBRkk7QUFHWkMsYUFBUyxFQUhHO0FBSVpDLGNBQVUsRUFKRTtBQUtaQyxTQUFLO0FBTE8sSUFQRDtBQWNaQyxnQkFBYSxLQWREO0FBZVpDLGVBQVksRUFmQTtBQWdCWkMsZUFBWUMsT0FBT0MsVUFBUCxDQUFrQkMsT0FoQmxCO0FBaUJaQyxpQkFBYyxDQWpCRjtBQWtCWkMsWUFBUyxFQWxCRztBQW1CWkMsYUFBVSxTQW5CRTtBQW9CWkMsYUFBVTtBQXBCRSxHQUFiO0FBc0JBLFFBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QixPQUExQjtBQUNBLFFBQUtDLHFCQUFMLEdBQTZCLE1BQUtBLHFCQUFMLENBQTJCRCxJQUEzQixPQUE3QjtBQUNBLFFBQUtFLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxD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QUFLQyxlQUFTLEtBQUszQixLQUFMLENBQVdtQixPQUxyQjtBQU1DLGtCQUFZLEtBQUtPO0FBTmxCO0FBREQsS0FERDtBQVdDO0FBQUE7QUFBQSxPQUFLLFdBQVUsNkJBQWY7QUFDQyx5QkFBQyxNQUFELE9BREQ7QUFFQyx5QkFBQyxHQUFELElBQUssWUFBWSxLQUFLRSxVQUF0QixFQUFrQyxVQUFVLEtBQUs1QixLQUFMLENBQVdvQixRQUF2RCxFQUFpRSxVQUFVLEtBQUtwQixLQUFMLENBQVdxQixRQUF0RixHQUZEO0FBR0Msa0NBQUssV0FBVSx1QkFBZixHQUhEO0FBSUM7QUFBQTtBQUFBLFFBQUssV0FBVSxrQkFBZjtBQUNDLDBCQUFDLE1BQUQ7QUFDQyxvQkFBYSxLQUFLckIsS0FBTCxDQUFXa0IsWUFEekI7QUFFQyxlQUFRLEtBQUtuQixLQUFMLENBQVdrQixPQUZwQjtBQUdDLDJCQUFvQixLQUFLSztBQUgxQixRQUREO0FBTUMsMEJBQUMsVUFBRDtBQUNDLGdCQUFTLEtBQUt0QixLQUFMLENBQVdjLFVBRHJCO0FBRUMscUJBQWMsS0FBS2QsS0FBTCxDQUFXQyxvQkFGMUI7QUFHQyxrQkFBVyxLQUFLd0I7QUFIakI7QUFORCxNQUpEO0FBZ0JDLHlCQUFDLFNBQUQsT0FoQkQ7QUFpQkMseUJBQUMsTUFBRDtBQWpCRDtBQVhELElBREQ7QUFpQ0E7Ozs7RUF4T2dCaUUsTUFBTUMsUzs7QUEyT3hCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsSUFBSyxTQUFTOUUsT0FBT0MsVUFBckIsR0FBaEIsRUFBcUQ4RSxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXJEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNlcnRpZmljYXRpb25DaGVja2VkOiB7XG5cdFx0XHRcdGNvbW1lcmNpYWw6IGZhbHNlLFxuXHRcdFx0XHRpbnN0YWxsYXRpb246IGZhbHNlLFxuXHRcdFx0XHRyZXNpZGVudGlhbDogZmFsc2UsXG5cdFx0XHRcdHNlcnZpY2U6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0Y29udGFjdEZvcm06IHtcblx0XHRcdFx0bmFtZTogJycsXG5cdFx0XHRcdG51bWJlcjogJycsXG5cdFx0XHRcdGFkZHJlc3M6ICcnLFxuXHRcdFx0XHRjb21tZW50czogJycsXG5cdFx0XHRcdG93bjogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRpc01vZGFsT3BlbjogZmFsc2UsXG5cdFx0XHRkZWFsZXJOYW1lOiAnJyxcblx0XHRcdGRlYWxlckxpc3Q6IHdpbmRvdy5kZWFsZXJEYXRhLmRlYWxlcnMsXG5cdFx0XHR0b3RhbERlYWxlcnM6IDAsXG5cdFx0XHR0b2dnbGVkOiAnJyxcblx0XHRcdHNob3dNZW51OiAnc2hvd2luZycsXG5cdFx0XHRoaWRlTWVudTogJ2hpZGluZydcblx0XHR9O1xuXHRcdHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUZvcm1JbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2sgPSB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50b2dnbGVNZW51ID0gdGhpcy50b2dnbGVNZW51LmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgZGVhbGVyc1dpdGhVcGRhdGVkSG91cnMgPSB0aGlzLnN0YXRlLmRlYWxlckxpc3QubWFwKGRlYWxlciA9PiB7XG5cdFx0XHRsZXQgdGVtcERlYWxlciA9IE9iamVjdC5hc3NpZ24oe30sIGRlYWxlcik7XG5cdFx0XHR0ZW1wRGVhbGVyLmRhdGEucGhvbmUxID0gdGVtcERlYWxlci5kYXRhLnBob25lMS5zcGxpdCgnLScpLmpvaW4oJy4nKTtcblx0XHRcdHRlbXBEZWFsZXIuZGF0YS53ZWVrSG91cnMgPSB0aGlzLmdyb3VwRGF5c09md2Vlayh0ZW1wRGVhbGVyLmRhdGEud2Vla0hvdXJzKTtcblx0XHRcdHRlbXBEZWFsZXIuZGF0YS5jZXJ0aWZpY2F0aW9ucyA9IHRoaXMuYWRkQ2xhc3NOYW1lKHRlbXBEZWFsZXIuZGF0YS5jZXJ0aWZpY2F0aW9ucyk7XG5cdFx0XHRyZXR1cm4gdGVtcERlYWxlcjtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGVhbGVyTGlzdDogZGVhbGVyc1dpdGhVcGRhdGVkSG91cnMsXG5cdFx0XHR0b3RhbERlYWxlcnM6IHRoaXMuc3RhdGUuZGVhbGVyTGlzdC5sZW5ndGhcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUZvcm1JbnB1dENoYW5nZShlKSB7XG5cdFx0bGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuXHRcdGxldCBjb250YWN0Rm9ybSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuY29udGFjdEZvcm0pO1xuXG5cdFx0Y29udGFjdEZvcm1bbmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y29udGFjdEZvcm06IGNvbnRhY3RGb3JtXG5cdFx0fSk7XG5cdH1cblxuXHRvcGVuTW9kYWwoZGVhbGVyTmFtZSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aXNNb2RhbE9wZW46IHRydWUsXG5cdFx0XHRkZWFsZXJOYW1lOiBkZWFsZXJOYW1lXG5cdFx0fSk7XG5cdH1cblxuXHRjbG9zZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogZmFsc2UgfSk7XG5cdH1cblxuXHR0b2dnbGVNZW51KCkge1xuXHRcdGxldCBzaG93blN0YXRlID0gdGhpcy5zdGF0ZS5zaG93TWVudSA9PT0gJ3Nob3dpbmcnID8gJ2hpZGluZycgOiAnc2hvd2luZyc7XG5cdFx0bGV0IGhpZGRlblN0YXRlID0gdGhpcy5zdGF0ZS5oaWRlTWVudSA9PT0gJ2hpZGluZycgPyAnc2hvd2luZycgOiAnaGlkaW5nJztcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2hvd01lbnU6IHNob3duU3RhdGUsXG5cdFx0XHRoaWRlTWVudTogaGlkZGVuU3RhdGVcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUZpbHRlckNoYW5nZShlKSB7XG5cdFx0bGV0IGNlcnRpZmljYXRpb25TdGF0ZXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkKTtcblx0XHRsZXQgY2VydGlmaWNhdGlvbkNoZWNrZWQgPSB7fTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZCkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBrZXkgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkKVtpXTtcblx0XHRcdGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWRba2V5XTtcblx0XHRcdGNlcnRpZmljYXRpb25DaGVja2VkW2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRjZXJ0aWZpY2F0aW9uQ2hlY2tlZFtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cblx0XHR0aGlzLmZpbHRlckJ5Q2VydGlmaWNhdGlvbihjZXJ0aWZpY2F0aW9uQ2hlY2tlZCk7XG5cdH1cblxuXHRqb2luQ2VydGlmaWNhdGlvbnMoY2VydGlmaWNhdGlvbkFycmF5KSB7XG5cdFx0bGV0IGpvaW5lZFZhbHVlcyA9IGNlcnRpZmljYXRpb25BcnJheS5yZWR1Y2UoKHJ1bm5pbmdXb3JkLCBjdXJyZW50V29yZCkgPT4ge1xuXHRcdFx0cmV0dXJuIChydW5uaW5nV29yZCArPSBgICR7Y3VycmVudFdvcmQuY2VydGlmaWNhdGlvbn1gKTtcblx0XHR9LCAnJyk7XG5cblx0XHRyZXR1cm4gam9pbmVkVmFsdWVzO1xuXHR9XG5cblx0ZmlsdGVyQnlDZXJ0aWZpY2F0aW9uKGNlcnRpZmljYXRpb25DaGVja2VkKSB7XG5cdFx0bGV0IGZpbHRlcmVkRGVhbGVycyA9IHdpbmRvdy5kZWFsZXJEYXRhLmRlYWxlcnMuZmlsdGVyKGRlYWxlciA9PiB7XG5cdFx0XHRsZXQgam9pbmVkQ2VydGlmaWNhdGlvbnMgPSB0aGlzLmpvaW5DZXJ0aWZpY2F0aW9ucyhkZWFsZXIuZGF0YS5jZXJ0aWZpY2F0aW9ucyk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdCghY2VydGlmaWNhdGlvbkNoZWNrZWQuc2VydmljZSAmJlxuXHRcdFx0XHRcdCFjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5pbnN0YWxsYXRpb24gJiZcblx0XHRcdFx0XHQhY2VydGlmaWNhdGlvbkNoZWNrZWQucmVzaWRlbnRpYWwgJiZcblx0XHRcdFx0XHQhY2VydGlmaWNhdGlvbkNoZWNrZWQuY29tbWVyY2lhbCkgfHxcblx0XHRcdFx0KGNlcnRpZmljYXRpb25DaGVja2VkLnNlcnZpY2UgJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignU2VydmljZSBQcm8nKSA+PSAwKSB8fFxuXHRcdFx0XHQoY2VydGlmaWNhdGlvbkNoZWNrZWQuaW5zdGFsbGF0aW9uICYmIGpvaW5lZENlcnRpZmljYXRpb25zLmluZGV4T2YoJ0luc3RhbGxhdGlvbiBQcm8nKSA+PSAwKSB8fFxuXHRcdFx0XHQoY2VydGlmaWNhdGlvbkNoZWNrZWQucmVzaWRlbnRpYWwgJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignUmVzaWRlbnRpYWwgUHJvJykgPj0gMCkgfHxcblx0XHRcdFx0KGNlcnRpZmljYXRpb25DaGVja2VkLmNvbW1lcmNpYWwgJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignQ29tbWVyY2lhbCBQcm8nKSA+PSAwKVxuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y2VydGlmaWNhdGlvbkNoZWNrZWQ6IGNlcnRpZmljYXRpb25DaGVja2VkLFxuXHRcdFx0ZGVhbGVyTGlzdDogZmlsdGVyZWREZWFsZXJzXG5cdFx0fSk7XG5cdH1cblxuXHRhZGRDbGFzc05hbWUoY2VydGlmaWNhdGlvbkFycikge1xuXHRcdGxldCBjZXJ0aWZpY2F0aW9uQ2xhc3NBc3NvY2lhdGlvbnMgPSB7XG5cdFx0XHRbJ0luc3RhbGxhdGlvbiBQcm8nXTogJ2dseXBoaWNvbiBnbHlwaGljb24tc3RhcicsXG5cdFx0XHRbJ0NvbW1lcmNpYWwgUHJvJ106ICdnbHlwaGljb24gZ2x5cGhpY29uLXVzZXInLFxuXHRcdFx0WydSZXNpZGVudGlhbCBQcm8nXTogJ2dseXBoaWNvbiBnbHlwaGljb24taG9tZScsXG5cdFx0XHRbJ1NlcnZpY2UgUHJvJ106ICdnbHlwaGljb24gZ2x5cGhpY29uLWNvZydcblx0XHR9O1xuXG5cdFx0bGV0IGNlcnRpZmljYXRpb25DbGFzc2VzID0gY2VydGlmaWNhdGlvbkFyci5tYXAoY2VydGlmaWNhdGlvbiA9PiB7XG5cdFx0XHRsZXQgY2VydE9iaiA9IHt9O1xuXHRcdFx0Y2VydE9iai5jZXJ0aWZpY2F0aW9uID0gY2VydGlmaWNhdGlvbjtcblx0XHRcdGNlcnRPYmouY2xhc3NOYW1lID0gY2VydGlmaWNhdGlvbkNsYXNzQXNzb2NpYXRpb25zW2NlcnRpZmljYXRpb25dO1xuXHRcdFx0cmV0dXJuIGNlcnRPYmo7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY2VydGlmaWNhdGlvbkNsYXNzZXM7XG5cdH1cblxuXHRncm91cERheXNPZndlZWsod2Vlaykge1xuXHRcdGxldCBtb2RpZmllZFdlZWsgPSB7XG5cdFx0XHRtb246ICdNb25kYXlzJyxcblx0XHRcdHR1ZTogJ1R1ZXNkYXlzJyxcblx0XHRcdHdlZDogJ1dlZG5lc2RheXMnLFxuXHRcdFx0dGh1OiAnVGh1cnNkYXlzJyxcblx0XHRcdGZyaTogJ0ZyaWRheXMnLFxuXHRcdFx0c2F0OiAnU2F0dXJkYXlzJyxcblx0XHRcdHN1bjogJ1N1bmRheXMnXG5cdFx0fTtcblxuXHRcdGxldCBmaW5hbERheXMgPSBbXTtcblx0XHRsZXQgYmFzZSA9IHdlZWsubW9uO1xuXHRcdGxldCBzYW1lID0gdHJ1ZTtcblxuXHRcdGZpbmFsRGF5c1swXSA9IGBNb25kYXlzICR7d2Vlay5tb259YDtcblxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG5cdFx0XHRsZXQgZGF5ID0gYCR7T2JqZWN0LmtleXMod2VlaylbaV19YDtcblx0XHRcdGxldCBob3VycyA9IHdlZWtbZGF5XSA9PT0gJ09uIENhbGwnID8gJy0gT24gQ2FsbCcgOiB3ZWVrW2RheV0gfHwgJy0gQ0xPU0VEJztcblxuXHRcdFx0ZmluYWxEYXlzLnB1c2goYCR7W21vZGlmaWVkV2Vla1tkYXldXX0gJHtob3Vyc31gKTtcblx0XHRcdGlmICh3ZWVrW09iamVjdC5rZXlzKHdlZWspW2ldXSAhPT0gYmFzZSkge1xuXHRcdFx0XHRzYW1lID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHNhbWUpIHtcblx0XHRcdGZpbmFsRGF5cy5zcGxpY2UoMCk7XG5cdFx0XHRmaW5hbERheXNbMF0gPSBgV2Vla2RheXMgJHtiYXNlfWA7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDU7IGkgPCA3OyBpKyspIHtcblx0XHRcdGxldCBkYXkgPSBpID09PSA1ID8gJ3NhdCcgOiAnc3VuJztcblx0XHRcdGxldCBob3VycyA9IHdlZWtbZGF5XSA9PT0gJ09uIENhbGwnID8gJy0gT24gQ2FsbCcgOiB3ZWVrW2RheV0gfHwgJy0gQ0xPU0VEJztcblxuXHRcdFx0ZmluYWxEYXlzLnB1c2goYCR7W21vZGlmaWVkV2Vla1tkYXldXX0gJHtob3Vyc31gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZpbmFsRGF5cztcblx0fVxuXG5cdGhhbmRsZUJ1dHRvbkNsaWNrKHJlc3BvbnNlLCBlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmIChyZXNwb25zZSA9PT0gJ3llcycpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVkOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvZ2dsZWQ6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUuaXNNb2RhbE9wZW59IG9uQ2xvc2U9eygpID0+IHRoaXMuY2xvc2VNb2RhbCgpfT5cblx0XHRcdFx0XHQ8Q29udGFjdFxuXHRcdFx0XHRcdFx0ZGVhbGVyTmFtZT17dGhpcy5zdGF0ZS5kZWFsZXJOYW1lfVxuXHRcdFx0XHRcdFx0Y29udGFjdFByb3BlcnRpZXM9e3RoaXMuc3RhdGUuY29udGFjdEZvcm19XG5cdFx0XHRcdFx0XHRoYW5kbGVGb3JtSW5wdXRDaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0b3duUG9vbE9yU3BhPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrfVxuXHRcdFx0XHRcdFx0dG9nZ2xlZD17dGhpcy5zdGF0ZS50b2dnbGVkfVxuXHRcdFx0XHRcdFx0Y2xvc2VNb2RhbD17dGhpcy5jbG9zZU1vZGFsfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItcG9zaXRpb25pbmctY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PFRvcEJhciAvPlxuXHRcdFx0XHRcdDxOYXYgdG9nZ2xlTWVudT17dGhpcy50b2dnbGVNZW51fSBzaG93TWVudT17dGhpcy5zdGF0ZS5zaG93TWVudX0gaGlkZU1lbnU9e3RoaXMuc3RhdGUuaGlkZU1lbnV9IC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWltYWdlLW1haW5cIiAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWN1c3RvbVwiPlxuXHRcdFx0XHRcdFx0PEZpbHRlclxuXHRcdFx0XHRcdFx0XHRkZWFsZXJUb3RhbD17dGhpcy5zdGF0ZS50b3RhbERlYWxlcnN9XG5cdFx0XHRcdFx0XHRcdGRlYWxlcj17dGhpcy5wcm9wcy5kZWFsZXJzfVxuXHRcdFx0XHRcdFx0XHRoYW5kbGVGaWx0ZXJDaGFuZ2U9e3RoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxEZWFsZXJMaXN0XG5cdFx0XHRcdFx0XHRcdGRlYWxlcnM9e3RoaXMuc3RhdGUuZGVhbGVyTGlzdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZEl0ZW1zPXt0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkfVxuXHRcdFx0XHRcdFx0XHRvcGVuTW9kYWw9e3RoaXMub3Blbk1vZGFsfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8VG9wRm9vdGVyIC8+XG5cdFx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgZGVhbGVycz17d2luZG93LmRlYWxlckRhdGF9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19