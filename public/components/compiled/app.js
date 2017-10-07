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
			toggled: ''
		};
		_this.handleFilterChange = _this.handleFilterChange.bind(_this);
		_this.handleFormInputChange = _this.handleFormInputChange.bind(_this);
		_this.openModal = _this.openModal.bind(_this);
		_this.closeModal = _this.closeModal.bind(_this);
		_this.handleButtonClick = _this.handleButtonClick.bind(_this);
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
					React.createElement(Nav, null),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImNlcnRpZmljYXRpb25DaGVja2VkIiwiY29tbWVyY2lhbCIsImluc3RhbGxhdGlvbiIsInJlc2lkZW50aWFsIiwic2VydmljZSIsImNvbnRhY3RGb3JtIiwibmFtZSIsIm51bWJlciIsImFkZHJlc3MiLCJjb21tZW50cyIsIm93biIsImlzTW9kYWxPcGVuIiwiZGVhbGVyTmFtZSIsImRlYWxlckxpc3QiLCJ3aW5kb3ciLCJkZWFsZXJEYXRhIiwiZGVhbGVycyIsInRvdGFsRGVhbGVycyIsInRvZ2dsZWQiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlRm9ybUlucHV0Q2hhbmdlIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZGVhbGVyc1dpdGhVcGRhdGVkSG91cnMiLCJtYXAiLCJ0ZW1wRGVhbGVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVhbGVyIiwiZGF0YSIsInBob25lMSIsInNwbGl0Iiwiam9pbiIsIndlZWtIb3VycyIsImdyb3VwRGF5c09md2VlayIsImNlcnRpZmljYXRpb25zIiwiYWRkQ2xhc3NOYW1lIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjZXJ0aWZpY2F0aW9uU3RhdGVzIiwia2V5cyIsImkiLCJrZXkiLCJjaGVja2VkIiwiZmlsdGVyQnlDZXJ0aWZpY2F0aW9uIiwiY2VydGlmaWNhdGlvbkFycmF5Iiwiam9pbmVkVmFsdWVzIiwicmVkdWNlIiwicnVubmluZ1dvcmQiLCJjdXJyZW50V29yZCIsImNlcnRpZmljYXRpb24iLCJmaWx0ZXJlZERlYWxlcnMiLCJmaWx0ZXIiLCJqb2luZWRDZXJ0aWZpY2F0aW9ucyIsImpvaW5DZXJ0aWZpY2F0aW9ucyIsImluZGV4T2YiLCJjZXJ0aWZpY2F0aW9uQXJyIiwiY2VydGlmaWNhdGlvbkNsYXNzQXNzb2NpYXRpb25zIiwiY2VydGlmaWNhdGlvbkNsYXNzZXMiLCJjZXJ0T2JqIiwiY2xhc3NOYW1lIiwid2VlayIsIm1vZGlmaWVkV2VlayIsIm1vbiIsInR1ZSIsIndlZCIsInRodSIsImZyaSIsInNhdCIsInN1biIsImZpbmFsRGF5cyIsImJhc2UiLCJzYW1lIiwiZGF5IiwiaG91cnMiLCJwdXNoIiwic3BsaWNlIiwicmVzcG9uc2UiLCJwcmV2ZW50RGVmYXVsdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUdsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMseUJBQXNCO0FBQ3JCQyxnQkFBWSxLQURTO0FBRXJCQyxrQkFBYyxLQUZPO0FBR3JCQyxpQkFBYSxLQUhRO0FBSXJCQyxhQUFTO0FBSlksSUFEVjtBQU9aQyxnQkFBYTtBQUNaQyxVQUFNLEVBRE07QUFFWkMsWUFBUSxFQUZJO0FBR1pDLGFBQVMsRUFIRztBQUlaQyxjQUFVLEVBSkU7QUFLWkMsU0FBSztBQUxPLElBUEQ7QUFjWkMsZ0JBQWEsS0FkRDtBQWVaQyxlQUFZLEVBZkE7QUFnQlpDLGVBQVlDLE9BQU9DLFVBQVAsQ0FBa0JDLE9BaEJsQjtBQWlCWkMsaUJBQWMsQ0FqQkY7QUFrQlpDLFlBQVM7QUFsQkcsR0FBYjtBQW9CQSxRQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkMsSUFBeEIsT0FBMUI7QUFDQSxRQUFLQyxxQkFBTCxHQUE2QixNQUFLQSxxQkFBTCxDQUEyQkQsSUFBM0IsT0FBN0I7QUFDQSxRQUFLRSxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUYsSUFBZixPQUFqQjtBQUNBLFFBQUtHLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkgsSUFBaEIsT0FBbEI7QUFDQSxRQUFLSSxpQkFBTCxHQUF5QixNQUFLQSxp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LEtBQUwsQ0FBV0Msb0JBRjFCO0FBR0Msa0JBQVcsS0FBS3NCO0FBSGpCO0FBTkQsTUFKRDtBQWdCQyx5QkFBQyxTQUFELE9BaEJEO0FBaUJDLHlCQUFDLE1BQUQ7QUFqQkQ7QUFYRCxJQUREO0FBaUNBOzs7O0VBNU5nQjhELE1BQU1DLFM7O0FBK054QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELElBQUssU0FBU3pFLE9BQU9DLFVBQXJCLEdBQWhCLEVBQXFEeUUsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFyRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjZXJ0aWZpY2F0aW9uQ2hlY2tlZDoge1xuXHRcdFx0XHRjb21tZXJjaWFsOiBmYWxzZSxcblx0XHRcdFx0aW5zdGFsbGF0aW9uOiBmYWxzZSxcblx0XHRcdFx0cmVzaWRlbnRpYWw6IGZhbHNlLFxuXHRcdFx0XHRzZXJ2aWNlOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGNvbnRhY3RGb3JtOiB7XG5cdFx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0XHRudW1iZXI6ICcnLFxuXHRcdFx0XHRhZGRyZXNzOiAnJyxcblx0XHRcdFx0Y29tbWVudHM6ICcnLFxuXHRcdFx0XHRvd246IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0aXNNb2RhbE9wZW46IGZhbHNlLFxuXHRcdFx0ZGVhbGVyTmFtZTogJycsXG5cdFx0XHRkZWFsZXJMaXN0OiB3aW5kb3cuZGVhbGVyRGF0YS5kZWFsZXJzLFxuXHRcdFx0dG90YWxEZWFsZXJzOiAwLFxuXHRcdFx0dG9nZ2xlZDogJydcblx0XHR9O1xuXHRcdHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUZvcm1JbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2sgPSB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgZGVhbGVyc1dpdGhVcGRhdGVkSG91cnMgPSB0aGlzLnN0YXRlLmRlYWxlckxpc3QubWFwKGRlYWxlciA9PiB7XG5cdFx0XHRsZXQgdGVtcERlYWxlciA9IE9iamVjdC5hc3NpZ24oe30sIGRlYWxlcik7XG5cdFx0XHR0ZW1wRGVhbGVyLmRhdGEucGhvbmUxID0gdGVtcERlYWxlci5kYXRhLnBob25lMS5zcGxpdCgnLScpLmpvaW4oJy4nKTtcblx0XHRcdHRlbXBEZWFsZXIuZGF0YS53ZWVrSG91cnMgPSB0aGlzLmdyb3VwRGF5c09md2Vlayh0ZW1wRGVhbGVyLmRhdGEud2Vla0hvdXJzKTtcblx0XHRcdHRlbXBEZWFsZXIuZGF0YS5jZXJ0aWZpY2F0aW9ucyA9IHRoaXMuYWRkQ2xhc3NOYW1lKHRlbXBEZWFsZXIuZGF0YS5jZXJ0aWZpY2F0aW9ucyk7XG5cdFx0XHRyZXR1cm4gdGVtcERlYWxlcjtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGVhbGVyTGlzdDogZGVhbGVyc1dpdGhVcGRhdGVkSG91cnMsXG5cdFx0XHR0b3RhbERlYWxlcnM6IHRoaXMuc3RhdGUuZGVhbGVyTGlzdC5sZW5ndGhcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUZvcm1JbnB1dENoYW5nZShlKSB7XG5cdFx0bGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuXG5cdFx0bGV0IGNvbnRhY3RGb3JtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5jb250YWN0Rm9ybSk7XG5cblx0XHRjb250YWN0Rm9ybVtuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjb250YWN0Rm9ybTogY29udGFjdEZvcm1cblx0XHR9KTtcblx0fVxuXG5cdG9wZW5Nb2RhbChkZWFsZXJOYW1lKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpc01vZGFsT3BlbjogdHJ1ZSxcblx0XHRcdGRlYWxlck5hbWU6IGRlYWxlck5hbWVcblx0XHR9KTtcblx0fVxuXG5cdGNsb3NlTW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBmYWxzZSB9KTtcblx0fVxuXG5cdGhhbmRsZUZpbHRlckNoYW5nZShlKSB7XG5cdFx0bGV0IGNlcnRpZmljYXRpb25TdGF0ZXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkKTtcblx0XHRsZXQgY2VydGlmaWNhdGlvbkNoZWNrZWQgPSB7fTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5jZXJ0aWZpY2F0aW9uQ2hlY2tlZCkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBrZXkgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNlcnRpZmljYXRpb25DaGVja2VkKVtpXTtcblx0XHRcdGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWRba2V5XTtcblx0XHRcdGNlcnRpZmljYXRpb25DaGVja2VkW2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRjZXJ0aWZpY2F0aW9uQ2hlY2tlZFtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cblx0XHR0aGlzLmZpbHRlckJ5Q2VydGlmaWNhdGlvbihjZXJ0aWZpY2F0aW9uQ2hlY2tlZCk7XG5cdH1cblxuXHRqb2luQ2VydGlmaWNhdGlvbnMoY2VydGlmaWNhdGlvbkFycmF5KSB7XG5cdFx0bGV0IGpvaW5lZFZhbHVlcyA9IGNlcnRpZmljYXRpb25BcnJheS5yZWR1Y2UoKHJ1bm5pbmdXb3JkLCBjdXJyZW50V29yZCkgPT4ge1xuXHRcdFx0cmV0dXJuIChydW5uaW5nV29yZCArPSBgICR7Y3VycmVudFdvcmQuY2VydGlmaWNhdGlvbn1gKTtcblx0XHR9LCAnJyk7XG5cblx0XHRyZXR1cm4gam9pbmVkVmFsdWVzO1xuXHR9XG5cblx0ZmlsdGVyQnlDZXJ0aWZpY2F0aW9uKGNlcnRpZmljYXRpb25DaGVja2VkKSB7XG5cdFx0bGV0IGZpbHRlcmVkRGVhbGVycyA9IHdpbmRvdy5kZWFsZXJEYXRhLmRlYWxlcnMuZmlsdGVyKGRlYWxlciA9PiB7XG5cdFx0XHRsZXQgam9pbmVkQ2VydGlmaWNhdGlvbnMgPSB0aGlzLmpvaW5DZXJ0aWZpY2F0aW9ucyhkZWFsZXIuZGF0YS5jZXJ0aWZpY2F0aW9ucyk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdCghY2VydGlmaWNhdGlvbkNoZWNrZWQuc2VydmljZSAmJlxuXHRcdFx0XHRcdCFjZXJ0aWZpY2F0aW9uQ2hlY2tlZC5pbnN0YWxsYXRpb24gJiZcblx0XHRcdFx0XHQhY2VydGlmaWNhdGlvbkNoZWNrZWQucmVzaWRlbnRpYWwgJiZcblx0XHRcdFx0XHQhY2VydGlmaWNhdGlvbkNoZWNrZWQuY29tbWVyY2lhbCkgfHxcblx0XHRcdFx0KGNlcnRpZmljYXRpb25DaGVja2VkLnNlcnZpY2UgJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignU2VydmljZSBQcm8nKSA+PSAwKSB8fFxuXHRcdFx0XHQoY2VydGlmaWNhdGlvbkNoZWNrZWQuaW5zdGFsbGF0aW9uICYmIGpvaW5lZENlcnRpZmljYXRpb25zLmluZGV4T2YoJ0luc3RhbGxhdGlvbiBQcm8nKSA+PSAwKSB8fFxuXHRcdFx0XHQoY2VydGlmaWNhdGlvbkNoZWNrZWQucmVzaWRlbnRpYWwgJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignUmVzaWRlbnRpYWwgUHJvJykgPj0gMCkgfHxcblx0XHRcdFx0KGNlcnRpZmljYXRpb25DaGVja2VkLmNvbW1lcmNpYWwgJiYgam9pbmVkQ2VydGlmaWNhdGlvbnMuaW5kZXhPZignQ29tbWVyY2lhbCBQcm8nKSA+PSAwKVxuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y2VydGlmaWNhdGlvbkNoZWNrZWQ6IGNlcnRpZmljYXRpb25DaGVja2VkLFxuXHRcdFx0ZGVhbGVyTGlzdDogZmlsdGVyZWREZWFsZXJzXG5cdFx0fSk7XG5cdH1cblxuXHRhZGRDbGFzc05hbWUoY2VydGlmaWNhdGlvbkFycikge1xuXHRcdGxldCBjZXJ0aWZpY2F0aW9uQ2xhc3NBc3NvY2lhdGlvbnMgPSB7XG5cdFx0XHRbJ0luc3RhbGxhdGlvbiBQcm8nXTogJ2dseXBoaWNvbiBnbHlwaGljb24tc3RhcicsXG5cdFx0XHRbJ0NvbW1lcmNpYWwgUHJvJ106ICdnbHlwaGljb24gZ2x5cGhpY29uLXVzZXInLFxuXHRcdFx0WydSZXNpZGVudGlhbCBQcm8nXTogJ2dseXBoaWNvbiBnbHlwaGljb24taG9tZScsXG5cdFx0XHRbJ1NlcnZpY2UgUHJvJ106ICdnbHlwaGljb24gZ2x5cGhpY29uLWNvZydcblx0XHR9O1xuXG5cdFx0bGV0IGNlcnRpZmljYXRpb25DbGFzc2VzID0gY2VydGlmaWNhdGlvbkFyci5tYXAoY2VydGlmaWNhdGlvbiA9PiB7XG5cdFx0XHRsZXQgY2VydE9iaiA9IHt9O1xuXHRcdFx0Y2VydE9iai5jZXJ0aWZpY2F0aW9uID0gY2VydGlmaWNhdGlvbjtcblx0XHRcdGNlcnRPYmouY2xhc3NOYW1lID0gY2VydGlmaWNhdGlvbkNsYXNzQXNzb2NpYXRpb25zW2NlcnRpZmljYXRpb25dO1xuXHRcdFx0cmV0dXJuIGNlcnRPYmo7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY2VydGlmaWNhdGlvbkNsYXNzZXM7XG5cdH1cblxuXHRncm91cERheXNPZndlZWsod2Vlaykge1xuXHRcdGxldCBtb2RpZmllZFdlZWsgPSB7XG5cdFx0XHRtb246ICdNb25kYXlzJyxcblx0XHRcdHR1ZTogJ1R1ZXNkYXlzJyxcblx0XHRcdHdlZDogJ1dlZG5lc2RheXMnLFxuXHRcdFx0dGh1OiAnVGh1cnNkYXlzJyxcblx0XHRcdGZyaTogJ0ZyaWRheXMnLFxuXHRcdFx0c2F0OiAnU2F0dXJkYXlzJyxcblx0XHRcdHN1bjogJ1N1bmRheXMnXG5cdFx0fTtcblxuXHRcdGxldCBmaW5hbERheXMgPSBbXTtcblx0XHRsZXQgYmFzZSA9IHdlZWsubW9uO1xuXHRcdGxldCBzYW1lID0gdHJ1ZTtcblxuXHRcdGZpbmFsRGF5c1swXSA9IGBNb25kYXlzICR7d2Vlay5tb259YDtcblxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG5cdFx0XHRsZXQgZGF5ID0gYCR7T2JqZWN0LmtleXMod2VlaylbaV19YDtcblx0XHRcdGxldCBob3VycyA9IHdlZWtbZGF5XSA9PT0gJ09uIENhbGwnID8gJy0gT24gQ2FsbCcgOiB3ZWVrW2RheV0gfHwgJy0gQ0xPU0VEJztcblxuXHRcdFx0ZmluYWxEYXlzLnB1c2goYCR7W21vZGlmaWVkV2Vla1tkYXldXX0gJHtob3Vyc31gKTtcblx0XHRcdGlmICh3ZWVrW09iamVjdC5rZXlzKHdlZWspW2ldXSAhPT0gYmFzZSkge1xuXHRcdFx0XHRzYW1lID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHNhbWUpIHtcblx0XHRcdGZpbmFsRGF5cy5zcGxpY2UoMCk7XG5cdFx0XHRmaW5hbERheXNbMF0gPSBgV2Vla2RheXMgJHtiYXNlfWA7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDU7IGkgPCA3OyBpKyspIHtcblx0XHRcdGxldCBkYXkgPSBpID09PSA1ID8gJ3NhdCcgOiAnc3VuJztcblx0XHRcdGxldCBob3VycyA9IHdlZWtbZGF5XSA9PT0gJ09uIENhbGwnID8gJy0gT24gQ2FsbCcgOiB3ZWVrW2RheV0gfHwgJy0gQ0xPU0VEJztcblxuXHRcdFx0ZmluYWxEYXlzLnB1c2goYCR7W21vZGlmaWVkV2Vla1tkYXldXX0gJHtob3Vyc31gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZpbmFsRGF5cztcblx0fVxuXG5cdGhhbmRsZUJ1dHRvbkNsaWNrKHJlc3BvbnNlLCBlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmIChyZXNwb25zZSA9PT0gJ3llcycpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVkOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvZ2dsZWQ6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUuaXNNb2RhbE9wZW59IG9uQ2xvc2U9eygpID0+IHRoaXMuY2xvc2VNb2RhbCgpfT5cblx0XHRcdFx0XHQ8Q29udGFjdFxuXHRcdFx0XHRcdFx0ZGVhbGVyTmFtZT17dGhpcy5zdGF0ZS5kZWFsZXJOYW1lfVxuXHRcdFx0XHRcdFx0Y29udGFjdFByb3BlcnRpZXM9e3RoaXMuc3RhdGUuY29udGFjdEZvcm19XG5cdFx0XHRcdFx0XHRoYW5kbGVGb3JtSW5wdXRDaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0b3duUG9vbE9yU3BhPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrfVxuXHRcdFx0XHRcdFx0dG9nZ2xlZD17dGhpcy5zdGF0ZS50b2dnbGVkfVxuXHRcdFx0XHRcdFx0Y2xvc2VNb2RhbD17dGhpcy5jbG9zZU1vZGFsfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItcG9zaXRpb25pbmctY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PFRvcEJhciAvPlxuXHRcdFx0XHRcdDxOYXYgLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtaW1hZ2UtbWFpblwiIC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY3VzdG9tXCI+XG5cdFx0XHRcdFx0XHQ8RmlsdGVyXG5cdFx0XHRcdFx0XHRcdGRlYWxlclRvdGFsPXt0aGlzLnN0YXRlLnRvdGFsRGVhbGVyc31cblx0XHRcdFx0XHRcdFx0ZGVhbGVyPXt0aGlzLnByb3BzLmRlYWxlcnN9XG5cdFx0XHRcdFx0XHRcdGhhbmRsZUZpbHRlckNoYW5nZT17dGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PERlYWxlckxpc3Rcblx0XHRcdFx0XHRcdFx0ZGVhbGVycz17dGhpcy5zdGF0ZS5kZWFsZXJMaXN0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkSXRlbXM9e3RoaXMuc3RhdGUuY2VydGlmaWNhdGlvbkNoZWNrZWR9XG5cdFx0XHRcdFx0XHRcdG9wZW5Nb2RhbD17dGhpcy5vcGVuTW9kYWx9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxUb3BGb290ZXIgLz5cblx0XHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBkZWFsZXJzPXt3aW5kb3cuZGVhbGVyRGF0YX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=