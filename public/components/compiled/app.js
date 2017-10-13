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
			console.log('this.state.showMenu: ', this.state.showMenu, 'this.state.hideMenu: ', this.state.hideMenu);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImNlcnRpZmljYXRpb25DaGVja2VkIiwiY29tbWVyY2lhbCIsImluc3RhbGxhdGlvbiIsInJlc2lkZW50aWFsIiwic2VydmljZSIsImNvbnRhY3RGb3JtIiwibmFtZSIsIm51bWJlciIsImFkZHJlc3MiLCJjb21tZW50cyIsIm93biIsImlzTW9kYWxPcGVuIiwiZGVhbGVyTmFtZSIsImRlYWxlckxpc3QiLCJ3aW5kb3ciLCJkZWFsZXJEYXRhIiwiZGVhbGVycyIsInRvdGFsRGVhbGVycyIsInRvZ2dsZWQiLCJzaG93TWVudSIsImhpZGVNZW51IiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiYmluZCIsImhhbmRsZUZvcm1JbnB1dENoYW5nZSIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJoYW5kbGVCdXR0b25DbGljayIsInRvZ2dsZU1lbnUiLCJkZWFsZXJzV2l0aFVwZGF0ZWRIb3VycyIsIm1hcCIsInRlbXBEZWFsZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWFsZXIiLCJkYXRhIiwicGhvbmUxIiwic3BsaXQiLCJqb2luIiwid2Vla0hvdXJzIiwiZ3JvdXBEYXlzT2Z3ZWVrIiwiY2VydGlmaWNhdGlvbnMiLCJhZGRDbGFzc05hbWUiLCJzZXRTdGF0ZSIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzaG93blN0YXRlIiwiaGlkZGVuU3RhdGUiLCJjZXJ0aWZpY2F0aW9uU3RhdGVzIiwia2V5cyIsImkiLCJrZXkiLCJjaGVja2VkIiwiZmlsdGVyQnlDZXJ0aWZpY2F0aW9uIiwiY2VydGlmaWNhdGlvbkFycmF5Iiwiam9pbmVkVmFsdWVzIiwicmVkdWNlIiwicnVubmluZ1dvcmQiLCJjdXJyZW50V29yZCIsImNlcnRpZmljYXRpb24iLCJmaWx0ZXJlZERlYWxlcnMiLCJmaWx0ZXIiLCJqb2luZWRDZXJ0aWZpY2F0aW9ucyIsImpvaW5DZXJ0aWZpY2F0aW9ucyIsImluZGV4T2YiLCJjZXJ0aWZpY2F0aW9uQXJyIiwiY2VydGlmaWNhdGlvbkNsYXNzQXNzb2NpYXRpb25zIiwiY2VydGlmaWNhdGlvbkNsYXNzZXMiLCJjZXJ0T2JqIiwiY2xhc3NOYW1lIiwid2VlayIsIm1vZGlmaWVkV2VlayIsIm1vbiIsInR1ZSIsIndlZCIsInRodSIsImZyaSIsInNhdCIsInN1biIsImZpbmFsRGF5cyIsImJhc2UiLCJzYW1lIiwiZGF5IiwiaG91cnMiLCJwdXNoIiwic3BsaWNlIiwicmVzcG9uc2UiLCJwcmV2ZW50RGVmYXVsdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUdsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMseUJBQXNCO0FBQ3JCQyxnQkFBWSxLQURTO0FBRXJCQyxrQkFBYyxLQUZPO0FBR3JCQyxpQkFBYSxLQUhRO0FBSXJCQyxhQUFTO0FBSlksSUFEVjtBQU9aQyxnQkFBYTtBQUNaQyxVQUFNLEVBRE07QUFFWkMsWUFBUSxFQUZJO0FBR1pDLGFBQVMsRUFIRztBQUlaQyxjQUFVLEVBSkU7QUFLWkMsU0FBSztBQUxPLElBUEQ7QUFjWkMsZ0JBQWEsS0FkRDtBQWVaQyxlQUFZLEVBZkE7QUFnQlpDLGVBQVlDLE9BQU9DLFVBQVAsQ0FBa0JDLE9BaEJsQjtBQWlCWkMsaUJBQWMsQ0FqQkY7QUFrQlpDLFlBQVMsRUFsQkc7QUFtQlpDLGFBQVUsU0FuQkU7QUFvQlpDLGFBQVU7QUFwQkUsR0FBYjtBQXNCQSxRQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkMsSUFBeEIsT0FBMUI7QUFDQSxRQUFLQyxxQkFBTCxHQUE2QixNQUFLQSxxQkFBTCxDQUEyQkQsSUFBM0IsT0FBN0I7QUFDQSxRQUFLRSxTQUFMLEdB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bmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNlcnRpZmljYXRpb25DaGVja2VkOiB7XG5cdFx0XHRcdGNvbW1lcmNpYWw6IGZhbHNlLFxuXHRcdFx0XHRpbnN0YWxsYXRpb246IGZhbHNlLFxuXHRcdFx0XHRyZXNpZGVudGlhbDogZmFsc2UsXG5cdFx0XHRcdHNlcnZpY2U6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0Y29udGFjdEZvcm06IHtcblx0XHRcdFx0bmFtZTogJycsXG5cdFx0XHRcdG51bWJlcjogJycsXG5cdFx0XHRcdGFkZHJlc3M6ICcnLFxuXHRcdFx0XHRjb21tZW50czogJycsXG5cdFx0XHRcdG93bjogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRpc01vZGFsT3BlbjogZmFsc2UsXG5cdFx0XHRkZWFsZXJOYW1lOiAnJyxcblx0XHRcdGRlYWxlckxpc3Q6IHdpbmRvdy5kZWFsZXJEYXRhLmRlYWxlcnMsXG5cdFx0XHR0b3RhbERlYWxlcnM6IDAsXG5cdFx0XHR0b2dnbGVkOiAnJyxcblx0XHRcdHNob3dNZW51OiAnc2hvd2luZycsXG5cdFx0XHRoaWRlTWVudTogJ2hpZGluZydcblx0XHR9O1xuXHRcdHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUZvcm1JbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2sgPSB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50b2dnbGVNZW51ID0gdGhpcy50b2dnbGVNZW51LmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgZGVhbGVyc1dpdGhVcGRhdGVkSG91cnMgPSB0aGlzLnN0YXRlLmRlYWxlckxpc3QubWFwKGRlYWxlciA9PiB7XG5cdFx0XHRsZXQgdGVtcERlYWxlciA9IE9iamVjdC5hc3NpZ24oe30sIGRlYWxlcik7XG5cdFx0XHR0ZW1wRGVhbGVyLmRhdGEucGhvbmUxID0gdGVtcERlYWxlci5kYXRhLnBob25lMS5zcGxpdCgnLScpLmpvaW4oJy4nKTtcblx0XHRcdHRlbXBEZWFsZXIuZGF0YS53ZWVrSG91cnMgPSB0aGlzLmdyb3VwRGF5c09md2Vlayh0ZW1wRGVhbGVyLmRhdGEud2Vla0hvdXJzKTtcblx0XHRcdHRlbXBEZWFsZXIuZGF0YS5jZXJ0aWZpY2F0aW9ucyA9IHRoaXMuYWRkQ2xhc3NOYW1lKHRlbXBEZWFsZXIuZGF0YS5jZXJ0aWZpY2F0aW9ucyk7XG5cdFx0XHRyZXR1cm4gdGVtcERlYWxlcjtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGVhbGVyTGlzdDogZGVhbGVyc1dpdGhVcGRhdGVkSG91cnMsXG5cdFx0XHR0b3RhbERlYWxlcnM6IHRoaXMuc3RhdGUuZGVhbGVyTGlzdC5sZW5ndGhcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUZvcm1JbnB1dENoYW5nZShlKSB7XG5cdFx0bGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuXHRcdGxldCBjb250YWN0Rm9ybSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuY29udGFjdEZvcm0pO1xuXG5cdFx0Y29udGFjdEZvcm1bbmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y29udGFjdEZvcm06IGNvbnRhY3RGb3JtXG5cdFx0fSk7XG5cdH1cblxuXHRvcGVuTW9kYWwoZGVhbGVyTmFtZSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aXNNb2RhbE9wZW46IHRydWUsXG5cdFx0XHRkZWFsZXJOYW1lOiBkZWFsZXJOYW1lXG5cdFx0fSk7XG5cdH1cblxuXHRjbG9zZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogZmFsc2UgfSk7XG5cdH1cblxuXHR0b2dnbGVNZW51KCkge1xuXHRcdGNvbnNvbGUubG9nKCd0aGlzLnN0YXRlLnNob3dNZW51OiAnLCB0aGlzLnN0YXRlLnNob3dNZW51LCAndGhpcy5zdGF0ZS5oaWRlTWVudTogJywgdGhpcy5zdGF0ZS5oaWRlTWVudSk7XG5cdFx0bGV0IHNob3duU3RhdGUgPSB0aGlzLnN0YXRlLnNob3dNZW51ID09PSAnc2hvd2luZycgPyAnaGlkaW5nJyA6ICdzaG93aW5nJztcblx0XHRsZXQgaGlkZGVuU3RhdGUgPSB0aGlzLnN0YXRlLmhpZGVNZW51ID09PSAnaGlkaW5nJyA/ICdzaG93aW5nJyA6ICdoaWRpbmcnO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzaG93TWVudTogc2hvd25TdGF0ZSxcblx0XHRcdGhpZGVNZW51OiBoaWRkZW5TdGF0ZVxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlRmlsdGVyQ2hhbmdlKGUpIHtcblx0XHRsZXQgY2VydGlmaWNhdGlvblN0YXRlcyA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWQpO1xuXHRcdGxldCBjZXJ0aWZpY2F0aW9uQ2hlY2tlZCA9IHt9O1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkKS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGtleSA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWQpW2ldO1xuXHRcdFx0bGV0IHZhbHVlID0gdGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZFtrZXldO1xuXHRcdFx0Y2VydGlmaWNhdGlvbkNoZWNrZWRba2V5XSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdGNlcnRpZmljYXRpb25DaGVja2VkW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQuY2hlY2tlZDtcblxuXHRcdHRoaXMuZmlsdGVyQnlDZXJ0aWZpY2F0aW9uKGNlcnRpZmljYXRpb25DaGVja2VkKTtcblx0fVxuXG5cdGpvaW5DZXJ0aWZpY2F0aW9ucyhjZXJ0aWZpY2F0aW9uQXJyYXkpIHtcblx0XHRsZXQgam9pbmVkVmFsdWVzID0gY2VydGlmaWNhdGlvbkFycmF5LnJlZHVjZSgocnVubmluZ1dvcmQsIGN1cnJlbnRXb3JkKSA9PiB7XG5cdFx0XHRyZXR1cm4gKHJ1bm5pbmdXb3JkICs9IGAgJHtjdXJyZW50V29yZC5jZXJ0aWZpY2F0aW9ufWApO1xuXHRcdH0sICcnKTtcblxuXHRcdHJldHVybiBqb2luZWRWYWx1ZXM7XG5cdH1cblxuXHRmaWx0ZXJCeUNlcnRpZmljYXRpb24oY2VydGlmaWNhdGlvbkNoZWNrZWQpIHtcblx0XHRsZXQgZmlsdGVyZWREZWFsZXJzID0gd2luZG93LmRlYWxlckRhdGEuZGVhbGVycy5maWx0ZXIoZGVhbGVyID0+IHtcblx0XHRcdGxldCBqb2luZWRDZXJ0aWZpY2F0aW9ucyA9IHRoaXMuam9pbkNlcnRpZmljYXRpb25zKGRlYWxlci5kYXRhLmNlcnRpZmljYXRpb25zKTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0KCFjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5zZXJ2aWNlICYmXG5cdFx0XHRcdFx0IWNlcnRpZmljYXRpb25DaGVja2VkLmluc3RhbGxhdGlvbiAmJlxuXHRcdFx0XHRcdCFjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5yZXNpZGVudGlhbCAmJlxuXHRcdFx0XHRcdCFjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5jb21tZXJjaWFsKSB8fFxuXHRcdFx0XHQoY2VydGlmaWNhdGlvbkNoZWNrZWQuc2VydmljZSAmJiBqb2luZWRDZXJ0aWZpY2F0aW9ucy5pbmRleE9mKCdTZXJ2aWNlIFBybycpID49IDApIHx8XG5cdFx0XHRcdChjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5pbnN0YWxsYXRpb24gJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignSW5zdGFsbGF0aW9uIFBybycpID49IDApIHx8XG5cdFx0XHRcdChjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5yZXNpZGVudGlhbCAmJiBqb2luZWRDZXJ0aWZpY2F0aW9ucy5pbmRleE9mKCdSZXNpZGVudGlhbCBQcm8nKSA+PSAwKSB8fFxuXHRcdFx0XHQoY2VydGlmaWNhdGlvbkNoZWNrZWQuY29tbWVyY2lhbCAmJiBqb2luZWRDZXJ0aWZpY2F0aW9ucy5pbmRleE9mKCdDb21tZXJjaWFsIFBybycpID49IDApXG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjZXJ0aWZpY2F0aW9uQ2hlY2tlZDogY2VydGlmaWNhdGlvbkNoZWNrZWQsXG5cdFx0XHRkZWFsZXJMaXN0OiBmaWx0ZXJlZERlYWxlcnNcblx0XHR9KTtcblx0fVxuXG5cdGFkZENsYXNzTmFtZShjZXJ0aWZpY2F0aW9uQXJyKSB7XG5cdFx0bGV0IGNlcnRpZmljYXRpb25DbGFzc0Fzc29jaWF0aW9ucyA9IHtcblx0XHRcdFsnSW5zdGFsbGF0aW9uIFBybyddOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyJyxcblx0XHRcdFsnQ29tbWVyY2lhbCBQcm8nXTogJ2dseXBoaWNvbiBnbHlwaGljb24tdXNlcicsXG5cdFx0XHRbJ1Jlc2lkZW50aWFsIFBybyddOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJyxcblx0XHRcdFsnU2VydmljZSBQcm8nXTogJ2dseXBoaWNvbiBnbHlwaGljb24tY29nJ1xuXHRcdH07XG5cblx0XHRsZXQgY2VydGlmaWNhdGlvbkNsYXNzZXMgPSBjZXJ0aWZpY2F0aW9uQXJyLm1hcChjZXJ0aWZpY2F0aW9uID0+IHtcblx0XHRcdGxldCBjZXJ0T2JqID0ge307XG5cdFx0XHRjZXJ0T2JqLmNlcnRpZmljYXRpb24gPSBjZXJ0aWZpY2F0aW9uO1xuXHRcdFx0Y2VydE9iai5jbGFzc05hbWUgPSBjZXJ0aWZpY2F0aW9uQ2xhc3NBc3NvY2lhdGlvbnNbY2VydGlmaWNhdGlvbl07XG5cdFx0XHRyZXR1cm4gY2VydE9iajtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjZXJ0aWZpY2F0aW9uQ2xhc3Nlcztcblx0fVxuXG5cdGdyb3VwRGF5c09md2Vlayh3ZWVrKSB7XG5cdFx0bGV0IG1vZGlmaWVkV2VlayA9IHtcblx0XHRcdG1vbjogJ01vbmRheXMnLFxuXHRcdFx0dHVlOiAnVHVlc2RheXMnLFxuXHRcdFx0d2VkOiAnV2VkbmVzZGF5cycsXG5cdFx0XHR0aHU6ICdUaHVyc2RheXMnLFxuXHRcdFx0ZnJpOiAnRnJpZGF5cycsXG5cdFx0XHRzYXQ6ICdTYXR1cmRheXMnLFxuXHRcdFx0c3VuOiAnU3VuZGF5cydcblx0XHR9O1xuXG5cdFx0bGV0IGZpbmFsRGF5cyA9IFtdO1xuXHRcdGxldCBiYXNlID0gd2Vlay5tb247XG5cdFx0bGV0IHNhbWUgPSB0cnVlO1xuXG5cdFx0ZmluYWxEYXlzWzBdID0gYE1vbmRheXMgJHt3ZWVrLm1vbn1gO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcblx0XHRcdGxldCBkYXkgPSBgJHtPYmplY3Qua2V5cyh3ZWVrKVtpXX1gO1xuXHRcdFx0bGV0IGhvdXJzID0gd2Vla1tkYXldID09PSAnT24gQ2FsbCcgPyAnLSBPbiBDYWxsJyA6IHdlZWtbZGF5XSB8fCAnLSBDTE9TRUQnO1xuXG5cdFx0XHRmaW5hbERheXMucHVzaChgJHtbbW9kaWZpZWRXZWVrW2RheV1dfSAke2hvdXJzfWApO1xuXHRcdFx0aWYgKHdlZWtbT2JqZWN0LmtleXMod2VlaylbaV1dICE9PSBiYXNlKSB7XG5cdFx0XHRcdHNhbWUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoc2FtZSkge1xuXHRcdFx0ZmluYWxEYXlzLnNwbGljZSgwKTtcblx0XHRcdGZpbmFsRGF5c1swXSA9IGBXZWVrZGF5cyAke2Jhc2V9YDtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gNTsgaSA8IDc7IGkrKykge1xuXHRcdFx0bGV0IGRheSA9IGkgPT09IDUgPyAnc2F0JyA6ICdzdW4nO1xuXHRcdFx0bGV0IGhvdXJzID0gd2Vla1tkYXldID09PSAnT24gQ2FsbCcgPyAnLSBPbiBDYWxsJyA6IHdlZWtbZGF5XSB8fCAnLSBDTE9TRUQnO1xuXG5cdFx0XHRmaW5hbERheXMucHVzaChgJHtbbW9kaWZpZWRXZWVrW2RheV1dfSAke2hvdXJzfWApO1xuXHRcdH1cblx0XHRyZXR1cm4gZmluYWxEYXlzO1xuXHR9XG5cblx0aGFuZGxlQnV0dG9uQ2xpY2socmVzcG9uc2UsIGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKHJlc3BvbnNlID09PSAneWVzJykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvZ2dsZWQ6IHRydWVcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0dG9nZ2xlZDogZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PE1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5pc01vZGFsT3Blbn0gb25DbG9zZT17KCkgPT4gdGhpcy5jbG9zZU1vZGFsKCl9PlxuXHRcdFx0XHRcdDxDb250YWN0XG5cdFx0XHRcdFx0XHRkZWFsZXJOYW1lPXt0aGlzLnN0YXRlLmRlYWxlck5hbWV9XG5cdFx0XHRcdFx0XHRjb250YWN0UHJvcGVydGllcz17dGhpcy5zdGF0ZS5jb250YWN0Rm9ybX1cblx0XHRcdFx0XHRcdGhhbmRsZUZvcm1JbnB1dENoYW5nZT17dGhpcy5oYW5kbGVGb3JtSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHRvd25Qb29sT3JTcGE9e3RoaXMuaGFuZGxlQnV0dG9uQ2xpY2t9XG5cdFx0XHRcdFx0XHR0b2dnbGVkPXt0aGlzLnN0YXRlLnRvZ2dsZWR9XG5cdFx0XHRcdFx0XHRjbG9zZU1vZGFsPXt0aGlzLmNsb3NlTW9kYWx9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdXRlci1wb3NpdGlvbmluZy1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8VG9wQmFyIC8+XG5cdFx0XHRcdFx0PE5hdiB0b2dnbGVNZW51PXt0aGlzLnRvZ2dsZU1lbnV9IHNob3dNZW51PXt0aGlzLnN0YXRlLnNob3dNZW51fSBoaWRlTWVudT17dGhpcy5zdGF0ZS5oaWRlTWVudX0gLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtaW1hZ2UtbWFpblwiIC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY3VzdG9tXCI+XG5cdFx0XHRcdFx0XHQ8RmlsdGVyXG5cdFx0XHRcdFx0XHRcdGRlYWxlclRvdGFsPXt0aGlzLnN0YXRlLnRvdGFsRGVhbGVyc31cblx0XHRcdFx0XHRcdFx0ZGVhbGVyPXt0aGlzLnByb3BzLmRlYWxlcnN9XG5cdFx0XHRcdFx0XHRcdGhhbmRsZUZpbHRlckNoYW5nZT17dGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PERlYWxlckxpc3Rcblx0XHRcdFx0XHRcdFx0ZGVhbGVycz17dGhpcy5zdGF0ZS5kZWFsZXJMaXN0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkSXRlbXM9e3RoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWR9XG5cdFx0XHRcdFx0XHRcdG9wZW5Nb2RhbD17dGhpcy5vcGVuTW9kYWx9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxUb3BGb290ZXIgLz5cblx0XHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBkZWFsZXJzPXt3aW5kb3cuZGVhbGVyRGF0YX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=