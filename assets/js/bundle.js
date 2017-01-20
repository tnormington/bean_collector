(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tip = require('./Tip.jsx');

var _Tip2 = _interopRequireDefault(_Tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.state = {
            tipShown: false,
            options: _this.props.options
        };
        return _this;
    }

    _createClass(Button, [{
        key: 'classNames',
        value: function classNames() {
            return this.props.classes + ' button';
        }
    }, {
        key: 'toggleTip',
        value: function toggleTip(e) {
            e.stopPropagation();
            this.setState(function (prevState) {
                return {
                    tipShown: !prevState.tipShown
                };
            });
        }
    }, {
        key: 'costClassNames',
        value: function costClassNames() {
            if (this.props.canAfford) {
                return 'cost';
            } else {
                return 'cost cannot-afford';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'button',
                {
                    className: this.classNames(),
                    onClick: this.props.onClick,
                    disabled: !this.props.canAfford
                },
                this.props.cost && _react2.default.createElement(
                    'span',
                    { className: this.costClassNames() },
                    this.props.cost
                ),
                this.props.text,
                this.props.level && _react2.default.createElement(
                    'span',
                    { className: 'level' },
                    'Level: ',
                    ((this.props.level - 1) / 0.05).toFixed()
                ),
                this.props.tip && _react2.default.createElement(_Tip2.default, {
                    tip: this.props.tip,
                    tipShown: this.state.tipShown,
                    onClick: function onClick(e) {
                        return _this2.toggleTip(e);
                    }
                }),
                this.props.icon && _react2.default.createElement('i', { className: "fa fa-" + this.props.icon })
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

exports.default = Button;

},{"./Tip.jsx":6,"react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button.jsx');

var _Button2 = _interopRequireDefault(_Button);

var _TriButton = require('./TriButton.jsx');

var _TriButton2 = _interopRequireDefault(_TriButton);

var _Model = require('./Model.jsx');

var _Model2 = _interopRequireDefault(_Model);

var _UpgradeGroup = require('./UpgradeGroup.jsx');

var _UpgradeGroup2 = _interopRequireDefault(_UpgradeGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Incrementor from './Incrementor.jsx';


var debug = false;

var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    if (debug) {
      _this.state = {
        beans: 10000,
        bean_plants: 10000,
        bean_plant_level: 10,
        bps: null,
        bean_extract: 10000,
        bean_potion: 10000,
        red_bean_potions: 0,
        green_bean_potions: 0,
        blue_bean_potions: 0,
        black_bean_potions: 0,
        mystery_bean_potions: 0
      };
    } else {
      _this.state = {
        beans: _Model2.default.beans,
        bean_plants: _Model2.default.bean_plants,
        bean_plant_level: _Model2.default.bean_plant_level,
        bps: _Model2.default.bps,
        bean_extract: _Model2.default.bean_extract,
        bean_potion: _Model2.default.bean_potion,
        red_bean_potions: _Model2.default.red_bean_potions,
        green_bean_potions: _Model2.default.green_bean_potions,
        blue_bean_potions: _Model2.default.blue_bean_potions,
        black_bean_potions: _Model2.default.black_bean_potions,
        mystery_bean_potions: _Model2.default.mystery_bean_potions
      };
    }
    return _this;
  }

  _createClass(Game, [{
    key: 'incrementValue',
    value: function incrementValue(i, value) {
      this.setState(function (prevState) {
        return _defineProperty({}, value, prevState[value] + i);
      });
    }
  }, {
    key: 'decrementValue',
    value: function decrementValue(i, value) {
      this.setState(function (prevState) {
        return _defineProperty({}, value, prevState[value] - i);
      });
    }
  }, {
    key: 'upgradeCollector',
    value: function upgradeCollector(collector, rate) {
      this.setState(function (prevState) {
        return _defineProperty({}, collector, prevState[collector] + rate);
      });
    }
  }, {
    key: 'downgradeCollector',
    value: function downgradeCollector(collector, rate) {
      this.setState(function (prevState) {
        return _defineProperty({}, collector, prevState[collector] - rate);
      });
    }
  }, {
    key: 'calculateBps',
    value: function calculateBps() {
      var bps = 0;
      var bean_plants = 0;

      if (this.state.bean_plants !== null) {
        bean_plants = this.state.bean_plants;
      }
      bps += bean_plants * this.state.bean_plant_level;
      this.setState({
        bps: bps
      });
      return bps;
    }
  }, {
    key: 'canIAfford',
    value: function canIAfford(cost, item) {
      if (this.state[item] >= cost) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      console.log('component mounted!');
      setInterval(function () {
        _this2.setState(function (prevState) {
          return {
            beans: prevState.beans + _this2.calculateBps() / 10
          };
        });
      }, 100);
    }
  }, {
    key: 'toggleHelpMessages',
    value: function toggleHelpMessages() {
      $('.tip-content').toggle();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var mystery_bean_potion_available = false;
      if (this.state.red_bean_potions !== null && this.state.blue_bean_potions !== null && this.state.green_bean_potions !== null && this.state.black_bean_potions !== null) {
        mystery_bean_potion_available = true;
      }

      var can_afford_mystery_bean_potion = false;
      if (this.state.red_bean_potions >= 1 && this.state.blue_bean_potions >= 1 && this.state.green_bean_potions >= 1 && this.state.black_bean_potions >= 1) {
        can_afford_mystery_bean_potion = true;
      }

      return _react2.default.createElement(
        'div',
        { className: 'game container' },
        _react2.default.createElement(
          'section',
          { className: 'game_settings' },
          _react2.default.createElement(_Button2.default, {
            classes: 'button-icon-only',
            icon: 'question-circle-o',
            onClick: function onClick() {
              _this3.toggleHelpMessages();
            },
            canAfford: true
          })
        ),
        _react2.default.createElement(
          'section',
          { className: 'game-details' },
          _react2.default.createElement(
            'div',
            { className: 'beans detail' },
            'Beans: ',
            _react2.default.createElement(
              'span',
              { className: 'value' },
              this.state.beans.toFixed(2)
            )
          ),
          this.state.bps !== null && _react2.default.createElement(
            'div',
            { className: 'bps detail' },
            'BPS: ',
            _react2.default.createElement(
              'span',
              { className: 'value' },
              this.state.bps.toFixed(2)
            )
          ),
          this.state.bean_plants !== null && _react2.default.createElement(
            'div',
            { className: 'bean-plants detail' },
            'Bean Plants: ',
            _react2.default.createElement(
              'span',
              { className: 'value' },
              this.state.bean_plants
            )
          ),
          this.state.bean_extract !== null && _react2.default.createElement(
            'div',
            { className: 'bean-extract detail' },
            'Bean Extract: ',
            _react2.default.createElement(
              'span',
              { className: 'value' },
              this.state.bean_extract
            )
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Potions'
          ),
          _react2.default.createElement(
            'div',
            { className: 'grid-4' },
            this.state.red_bean_potions !== null && _react2.default.createElement(
              'div',
              { className: 'red-bean-potions' },
              'Red: ',
              _react2.default.createElement(
                'span',
                { className: 'value' },
                this.state.red_bean_potions
              )
            ),
            this.state.green_bean_potions !== null && _react2.default.createElement(
              'div',
              { className: 'green-bean-potions' },
              'Green: ',
              _react2.default.createElement(
                'span',
                { className: 'value' },
                this.state.green_bean_potions
              )
            ),
            this.state.blue_bean_potions !== null && _react2.default.createElement(
              'div',
              { className: 'blue-bean-potions' },
              'Blue: ',
              _react2.default.createElement(
                'span',
                { className: 'value' },
                this.state.blue_bean_potions
              )
            ),
            this.state.black_bean_potions !== null && _react2.default.createElement(
              'div',
              { className: 'black-bean-potions' },
              'Black: ',
              _react2.default.createElement(
                'span',
                { className: 'value' },
                this.state.black_bean_potions
              )
            ),
            this.state.mystery_bean_potions !== null && _react2.default.createElement(
              'div',
              { className: 'black-bean-potions' },
              'Mystery: ',
              _react2.default.createElement(
                'span',
                { className: 'value' },
                this.state.mystery_bean_potions
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'game-buttons' },
          _react2.default.createElement(
            'h2',
            null,
            'Actions'
          ),
          _react2.default.createElement(_Button2.default, {
            onClick: function onClick() {
              _this3.incrementValue(1, 'beans');
            },
            text: 'Collect Beans',
            classes: 'beans',
            canAfford: true
          }),
          this.state.beans !== null && _react2.default.createElement(_Button2.default, {
            onClick: function onClick() {
              _this3.decrementValue(10, 'beans');
              _this3.incrementValue(1, 'bean_plants');
            },
            text: 'Plant Beans',
            cost: '10 Beans',
            classes: 'bean-plants',
            tip: 'Bean Plants create 1 bean per second.',
            canAfford: this.canIAfford(10, 'beans')
          }),
          this.state.bean_plants !== null && _react2.default.createElement(_Button2.default, {
            onClick: function onClick() {
              _this3.decrementValue(5, 'bean_plants');
              _this3.incrementValue(1, 'bean_extract');
            },
            text: 'Create Bean Extract',
            cost: '5 Bean Plants',
            classes: 'bean-extract',
            tip: 'Bean Extract is harvested from 5 bean plants, and used to create various potions.',
            canAfford: this.canIAfford(5, 'bean_plants')
          }),
          this.state.bean_extract !== null && _react2.default.createElement(
            'section',
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Potions'
            ),
            _react2.default.createElement(
              'div',
              { className: 'potions grid' },
              this.state.bean_extract !== null && _react2.default.createElement(_Button2.default, {
                onClick: function onClick() {
                  _this3.decrementValue(5, 'bean_extract');
                  _this3.incrementValue(1, 'red_bean_potions');
                },
                text: 'Red',
                classes: 'bean-potion button-small bean-potion--red',
                tip: 'Red potions harness the power of the angry bean.',
                canAfford: this.canIAfford(5, 'bean_extract')
              }),
              this.state.bean_extract !== null && _react2.default.createElement(_Button2.default, {
                onClick: function onClick() {
                  _this3.decrementValue(5, 'bean_extract');
                  _this3.incrementValue(1, 'green_bean_potions');
                },
                text: 'Green',
                classes: 'bean-potion button-small bean-potion--green',
                tip: 'Green potions harness the power of the mellow bean.',
                canAfford: this.canIAfford(5, 'bean_extract')
              }),
              this.state.bean_extract !== null && _react2.default.createElement(_Button2.default, {
                onClick: function onClick() {
                  _this3.decrementValue(5, 'bean_extract');
                  _this3.incrementValue(1, 'blue_bean_potions');
                },
                text: 'Blue',
                classes: 'bean-potion button-small bean-potion--blue',
                tip: 'Blue potions harness the power of the magic bean.',
                canAfford: this.canIAfford(5, 'bean_extract')
              }),
              this.state.bean_extract !== null && _react2.default.createElement(_Button2.default, {
                onClick: function onClick() {
                  _this3.decrementValue(5, 'bean_extract');
                  _this3.incrementValue(1, 'black_bean_potions');
                },
                text: 'Black',
                classes: 'bean-potion button-small bean-potion--black',
                tip: 'Black potions harness the power of the dark bean.',
                canAfford: this.canIAfford(5, 'bean_extract')
              }),
              mystery_bean_potion_available && _react2.default.createElement(_Button2.default, {
                onClick: function onClick() {
                  _this3.decrementValue(1, 'red_bean_potions');
                  _this3.decrementValue(1, 'blue_bean_potions');
                  _this3.decrementValue(1, 'green_bean_potions');
                  _this3.decrementValue(1, 'black_bean_potions');
                  _this3.incrementValue(1, 'mystery_bean_potions');
                },
                text: 'Mystery',
                classes: 'bean-potion button-small bean-potion--mystery',
                tip: 'Mystery potions harness the power of the unknown.',
                canAfford: can_afford_mystery_bean_potion
              })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'upgrades' },
          this.state.bean_plants !== null && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Upgrades'
            ),
            _react2.default.createElement(
              'span',
              { className: 'hint' },
              '(Downgrade for 50% cost return)'
            ),
            _react2.default.createElement(_UpgradeGroup2.default, {
              upgrade: function upgrade() {
                _this3.upgradeCollector('bean_plant_level', 0.05);
              },
              downgrade: function downgrade() {
                _this3.downgradeCollector('bean_plant_level', 0.05);
              },
              canUpgrade: function canUpgrade() {
                _this3.decrementValue(100, 'beans');
              },
              canDowngrade: this.state.bean_plant_level > 0,
              desc: 'Upgrade Bean Plant Collection Rate by 5%',
              cost: 'Cost 100 Beans',
              level: ((this.state.bean_plant_level - 1) / 0.05).toFixed()
            })
          )
        )
      );
    }
  }]);

  return Game;
}(_react2.default.Component);

exports.default = Game;

},{"./Button.jsx":1,"./Model.jsx":4,"./TriButton.jsx":7,"./UpgradeGroup.jsx":8,"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button.jsx');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Incrementor = function (_React$Component) {
  _inherits(Incrementor, _React$Component);

  function Incrementor() {
    _classCallCheck(this, Incrementor);

    return _possibleConstructorReturn(this, (Incrementor.__proto__ || Object.getPrototypeOf(Incrementor)).apply(this, arguments));
  }

  _createClass(Incrementor, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'incrementor' },
        _react2.default.createElement(_Button2.default, {
          icon: 'plus',
          classes: 'button-icon-only',
          canAfford: this.props.canUpgrade,
          onClick: this.props.upgrade
        }),
        _react2.default.createElement(_Button2.default, {
          icon: 'minus',
          classes: 'button-icon-only',
          canAfford: this.props.canDowngrade,
          onClick: this.props.downgrade
        })
      );
    }
  }]);

  return Incrementor;
}(_react2.default.Component);

exports.default = Incrementor;

},{"./Button.jsx":1,"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Model = {
  beans: 0,
  bean_plants: null,
  bean_plant_level: 1,
  bps: null,
  bean_extract: null,
  bean_potion: null,
  red_bean_potions: null,
  green_bean_potions: null,
  blue_bean_potions: null,
  black_bean_potions: null,
  mystery_bean_potions: null
};

exports.default = Model;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubButton = function (_React$Component) {
    _inherits(SubButton, _React$Component);

    function SubButton(props) {
        _classCallCheck(this, SubButton);

        var _this = _possibleConstructorReturn(this, (SubButton.__proto__ || Object.getPrototypeOf(SubButton)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(SubButton, [{
        key: 'classNames',
        value: function classNames() {
            var classes = 'sub-button';
            if (this.props.classes) {}
            return classes;
        }
    }, {
        key: 'costClassNames',
        value: function costClassNames() {
            if (this.props.canAfford) {
                return 'cost';
            } else {
                return 'cost cannot-afford';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                {
                    className: this.classNames(),
                    onClick: this.props.onClick,
                    disabled: !this.props.canAfford
                },
                this.props.text
            );
        }
    }]);

    return SubButton;
}(_react2.default.Component);

exports.default = SubButton;

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tip = function (_React$Component) {
    _inherits(Tip, _React$Component);

    function Tip(props) {
        _classCallCheck(this, Tip);

        return _possibleConstructorReturn(this, (Tip.__proto__ || Object.getPrototypeOf(Tip)).call(this, props));
    }

    _createClass(Tip, [{
        key: 'calculateContentClass',
        value: function calculateContentClass() {
            if (this.props.tipShown) {
                return 'active tip-content';
            } else {
                return 'tip-content';
            }
        }
    }, {
        key: 'calculateIconClass',
        value: function calculateIconClass() {
            if (this.props.tipShown) {
                return 'tip-toggle fa fa-close';
            } else {
                return 'tip-toggle fa fa-info-circle';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                { className: 'tip' },
                _react2.default.createElement(
                    'p',
                    { className: this.calculateContentClass() },
                    this.props.tip
                )
            );
        }
    }]);

    return Tip;
}(_react2.default.Component);

exports.default = Tip;

},{"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tip = require('./Tip.jsx');

var _Tip2 = _interopRequireDefault(_Tip);

var _SubButton = require('./SubButton.jsx');

var _SubButton2 = _interopRequireDefault(_SubButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TriButton = function (_React$Component) {
    _inherits(TriButton, _React$Component);

    function TriButton(props) {
        _classCallCheck(this, TriButton);

        var _this = _possibleConstructorReturn(this, (TriButton.__proto__ || Object.getPrototypeOf(TriButton)).call(this, props));

        _this.state = {
            tipShown: false,
            options: _this.props.options,
            currentOption: _this.props.options[0].type,
            optionsDom: null
        };
        return _this;
    }

    _createClass(TriButton, [{
        key: 'classNames',
        value: function classNames() {
            return this.props.classes + ' button tri-button';
        }
    }, {
        key: 'toggleTip',
        value: function toggleTip(e) {
            e.stopPropagation();
            this.setState(function (prevState) {
                return {
                    tipShown: !prevState.tipShown
                };
            });
        }
    }, {
        key: 'costClassNames',
        value: function costClassNames() {
            if (this.props.canAfford) {
                return 'cost';
            } else {
                return 'cost cannot-afford';
            }
        }
    }, {
        key: 'setCurrentOption',
        value: function setCurrentOption(option) {
            this.setState(function () {
                currentOption: option;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'button',
                { className: this.classNames(), onClick: this.props.onClick, disabled: !this.props.canAfford },
                this.props.cost && _react2.default.createElement(
                    'span',
                    { className: this.costClassNames() },
                    this.props.cost
                ),
                this.props.text,
                this.props.level && _react2.default.createElement(
                    'span',
                    { className: 'level' },
                    'Level: ',
                    ((this.props.level - 1) / 0.05).toFixed()
                ),
                this.state.options && _react2.default.createElement('div', { className: 'options' }),
                this.props.tip && _react2.default.createElement(_Tip2.default, { tip: this.props.tip, tipShown: this.state.tipShown, onClick: function onClick(e) {
                        return _this2.toggleTip(e);
                    } })
            );
        }
    }]);

    return TriButton;
}(_react2.default.Component);

exports.default = TriButton;

},{"./SubButton.jsx":5,"./Tip.jsx":6,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Incrementor = require('./Incrementor.jsx');

var _Incrementor2 = _interopRequireDefault(_Incrementor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpgradeGroup = function (_React$Component) {
    _inherits(UpgradeGroup, _React$Component);

    function UpgradeGroup() {
        _classCallCheck(this, UpgradeGroup);

        return _possibleConstructorReturn(this, (UpgradeGroup.__proto__ || Object.getPrototypeOf(UpgradeGroup)).apply(this, arguments));
    }

    _createClass(UpgradeGroup, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'upgrade-group' },
                _react2.default.createElement(_Incrementor2.default, {
                    upgrade: this.props.upgrade,
                    downgrade: this.props.downgrade,
                    canUpgrade: this.props.canUpgrade,
                    canDowngrade: this.props.canDowngrade
                }),
                _react2.default.createElement(
                    'section',
                    { className: 'upgrade-group_details' },
                    _react2.default.createElement(
                        'div',
                        { className: 'upgrade-group_details_desc' },
                        this.props.desc
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'upgrade-group_details_cost' },
                        this.props.cost
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'upgrade-group_details_level' },
                        'Level',
                        _react2.default.createElement(
                            'span',
                            { className: 'value' },
                            this.props.level
                        )
                    )
                )
            );
        }
    }]);

    return UpgradeGroup;
}(_react2.default.Component);

exports.default = UpgradeGroup;

},{"./Incrementor.jsx":3,"react":"react"}],9:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Game = require('./Game.jsx');

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Game2.default, null), document.getElementById('app'));

},{"./Game.jsx":2,"react":"react","react-dom":"react-dom"}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNfc3JjL2pzL0J1dHRvbi5qc3giLCJhc3NldHNfc3JjL2pzL0dhbWUuanN4IiwiYXNzZXRzX3NyYy9qcy9JbmNyZW1lbnRvci5qc3giLCJhc3NldHNfc3JjL2pzL01vZGVsLmpzeCIsImFzc2V0c19zcmMvanMvU3ViQnV0dG9uLmpzeCIsImFzc2V0c19zcmMvanMvVGlwLmpzeCIsImFzc2V0c19zcmMvanMvVHJpQnV0dG9uLmpzeCIsImFzc2V0c19zcmMvanMvVXBncmFkZUdyb3VwLmpzeCIsImFzc2V0c19zcmMvanMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCLE07OztBQUNqQixvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1QsS0FEUzs7QUFFZixjQUFLLEtBQUwsR0FBYTtBQUNULHNCQUFVLEtBREQ7QUFFVCxxQkFBUyxNQUFLLEtBQUwsQ0FBVztBQUZYLFNBQWI7QUFGZTtBQU1sQjs7OztxQ0FFWTtBQUNULG1CQUFPLEtBQUssS0FBTCxDQUFXLE9BQVgsR0FBcUIsU0FBNUI7QUFDSDs7O2tDQUVTLEMsRUFBRztBQUNULGNBQUUsZUFBRjtBQUNBLGlCQUFLLFFBQUwsQ0FBYyxVQUFDLFNBQUQ7QUFBQSx1QkFBZ0I7QUFDMUIsOEJBQVUsQ0FBQyxVQUFVO0FBREssaUJBQWhCO0FBQUEsYUFBZDtBQUdIOzs7eUNBRWdCO0FBQ2IsZ0JBQUcsS0FBSyxLQUFMLENBQVcsU0FBZCxFQUF5QjtBQUNyQix1QkFBTyxNQUFQO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsdUJBQU8sb0JBQVA7QUFDSDtBQUNKOzs7aUNBS1E7QUFBQTs7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSSwrQkFBVyxLQUFLLFVBQUwsRUFEZjtBQUVJLDZCQUFTLEtBQUssS0FBTCxDQUFXLE9BRnhCO0FBR0ksOEJB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Q0FBUDtBQUFBLHFCQUFsRTtBQVh2QixhQURKO0FBZ0JIOzs7O0VBckRrQyxnQkFBTSxTOztrQkFBeEIsUzs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCLFk7Ozs7Ozs7Ozs7O2lDQUNWO0FBQ1AsbUJBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsZUFBZjtBQUNJO0FBQ0EsNkJBQVMsS0FBSyxLQUFMLENBQVcsT0FEcEI7QUFFQSwrQkFBVyxLQUFLLEtBQUwsQ0FBVyxTQUZ0QjtBQUdBLGdDQUFZLEtBQUssS0FBTCxDQUFXLFVBSHZCO0FBSUEsa0NBQWMsS0FBSyxLQUFMLENBQVc7QUFKekIsa0JBREo7QUFPSTtBQUFBO0FBQUEsc0JBQVMsV0FBVSx1QkFBbkI7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSw0QkFBZjtBQUNLLDZCQUFLLEtBQUwsQ0FBVztBQURoQixxQkFESjtBQUlJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLDRCQUFmO0FBQTZDLDZCQUFLLEtBQUwsQ0FBVztBQUF4RCxxQkFKSjtBQUtJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLDZCQUFmO0FBQUE7QUFFSTtBQUFBO0FBQUEsOEJBQU0sV0FBVSxPQUFoQjtBQUNLLGlDQUFLLEtBQUwsQ0FBVztBQURoQjtBQUZKO0FBTEo7QUFQSixhQURGO0FBc0JEOzs7O0VBeEJ1QyxnQkFBTSxTOztrQkFBM0IsWTs7Ozs7QUNIckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFJQSxtQkFBUyxNQUFULENBQ0ksbURBREosRUFFSSxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpcCBmcm9tICcuL1RpcC5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpcFNob3duOiBmYWxzZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMucHJvcHMub3B0aW9uc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNsYXNzTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNsYXNzZXMgKyAnIGJ1dHRvbic7XG4gICAgfVxuXG4gICAgdG9nZ2xlVGlwKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgdGlwU2hvd246ICFwcmV2U3RhdGUudGlwU2hvd25cbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgY29zdENsYXNzTmFtZXMoKSB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2FuQWZmb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Nvc3QnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdjb3N0IGNhbm5vdC1hZmZvcmQnO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWVzKCl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5wcm9wcy5jYW5BZmZvcmR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jb3N0ICYmXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5jb3N0Q2xhc3NOYW1lcygpfT57dGhpcy5wcm9wcy5jb3N0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGV4dH1cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMubGV2ZWwgJiZcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGV2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExldmVsOiB7KCh0aGlzLnByb3BzLmxldmVsIC0gMSkgLyAwLjA1KS50b0ZpeGVkKCkgfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy50aXAgJiZcbiAgICAgICAgICAgICAgICAgICAgPFRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwPXt0aGlzLnByb3BzLnRpcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcFNob3duPXt0aGlzLnN0YXRlLnRpcFNob3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMudG9nZ2xlVGlwKGUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuaWNvbiAmJlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtcImZhIGZhLVwiICsgdGhpcy5wcm9wcy5pY29ufSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uLmpzeCc7XG5pbXBvcnQgVHJpQnV0dG9uIGZyb20gJy4vVHJpQnV0dG9uLmpzeCc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9Nb2RlbC5qc3gnO1xuLy8gaW1wb3J0IEluY3JlbWVudG9yIGZyb20gJy4vSW5jcmVtZW50b3IuanN4JztcbmltcG9ydCBVcGdyYWRlR3JvdXAgZnJvbSAnLi9VcGdyYWRlR3JvdXAuanN4JztcblxuY29uc3QgZGVidWcgPSBmYWxzZTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBpZihkZWJ1Zykge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgYmVhbnM6IDEwMDAwLFxuICAgICAgICBiZWFuX3BsYW50czogMTAwMDAsXG4gICAgICAgIGJlYW5fcGxhbnRfbGV2ZWw6IDEwLFxuICAgICAgICBicHM6IG51bGwsXG4gICAgICAgIGJlYW5fZXh0cmFjdDogMTAwMDAsXG4gICAgICAgIGJlYW5fcG90aW9uOiAxMDAwMCxcbiAgICAgICAgcmVkX2JlYW5fcG90aW9uczogMCxcbiAgICAgICAgZ3JlZW5fYmVhbl9wb3Rpb25zOiAwLFxuICAgICAgICBibHVlX2JlYW5fcG90aW9uczogMCxcbiAgICAgICAgYmxhY2tfYmVhbl9wb3Rpb25zOiAwLFxuICAgICAgICBteXN0ZXJ5X2JlYW5fcG90aW9uczogMCxcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgYmVhbnM6IE1vZGVsLmJlYW5zLFxuICAgICAgICBiZWFuX3BsYW50czogTW9kZWwuYmVhbl9wbGFudHMsXG4gICAgICAgIGJlYW5fcGxhbnRfbGV2ZWw6IE1vZGVsLmJlYW5fcGxhbnRfbGV2ZWwsXG4gICAgICAgIGJwczogTW9kZWwuYnBzLFxuICAgICAgICBiZWFuX2V4dHJhY3Q6IE1vZGVsLmJlYW5fZXh0cmFjdCxcbiAgICAgICAgYmVhbl9wb3Rpb246IE1vZGVsLmJlYW5fcG90aW9uLFxuICAgICAgICByZWRfYmVhbl9wb3Rpb25zOiBNb2RlbC5yZWRfYmVhbl9wb3Rpb25zLFxuICAgICAgICBncmVlbl9iZWFuX3BvdGlvbnM6IE1vZGVsLmdyZWVuX2JlYW5fcG90aW9ucyxcbiAgICAgICAgYmx1ZV9iZWFuX3BvdGlvbnM6IE1vZGVsLmJsdWVfYmVhbl9wb3Rpb25zLFxuICAgICAgICBibGFja19iZWFuX3BvdGlvbnM6IE1vZGVsLmJsYWNrX2JlYW5fcG90aW9ucyxcbiAgICAgICAgbXlzdGVyeV9iZWFuX3BvdGlvbnM6IE1vZGVsLm15c3RlcnlfYmVhbl9wb3Rpb25zLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluY3JlbWVudFZhbHVlKGksIHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgW3ZhbHVlXTogcHJldlN0YXRlW3ZhbHVlXSArIGlcbiAgICB9KSlcbiAgfVxuXG4gIGRlY3JlbWVudFZhbHVlKGksIHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgW3ZhbHVlXTogcHJldlN0YXRlW3ZhbHVlXSAtIGlcbiAgICB9KSlcbiAgfVxuXG4gIHVwZ3JhZGVDb2xsZWN0b3IoY29sbGVjdG9yLCByYXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgW2NvbGxlY3Rvcl06IChwcmV2U3RhdGVbY29sbGVjdG9yXSArIHJhdGUpXG4gICAgfSkpXG4gIH1cbiAgZG93bmdyYWRlQ29sbGVjdG9yKGNvbGxlY3RvciwgcmF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgIFtjb2xsZWN0b3JdOiAocHJldlN0YXRlW2NvbGxlY3Rvcl0gLSByYXRlKVxuICAgIH0pKVxuICB9XG5cbiAgY2FsY3VsYXRlQnBzKCkge1xuICAgIGxldCBicHMgPSAwO1xuICAgIGxldCBiZWFuX3BsYW50cyA9IDA7XG5cbiAgICBpZih0aGlzLnN0YXRlLmJlYW5fcGxhbnRzICE9PSBudWxsKSB7XG4gICAgICBiZWFuX3BsYW50cyA9IHRoaXMuc3RhdGUuYmVhbl9wbGFudHM7XG4gICAgfVxuICAgIGJwcyArPSBiZWFuX3BsYW50cyAqIHRoaXMuc3RhdGUuYmVhbl9wbGFudF9sZXZlbDtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGJwczogYnBzXG4gICAgfSk7XG4gICAgcmV0dXJuIGJwcztcbiAgfVxuXG4gIGNhbklBZmZvcmQoY29zdCwgaXRlbSkge1xuICAgIGlmKHRoaXMuc3RhdGVbaXRlbV0gPj0gY29zdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZygnY29tcG9uZW50IG1vdW50ZWQhJyk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICBiZWFuczogcHJldlN0YXRlLmJlYW5zICsgdGhpcy5jYWxjdWxhdGVCcHMoKS8xMCxcbiAgICAgIH0pKX0sIDEwMCk7XG5cbiAgICB9XG5cbiAgICB0b2dnbGVIZWxwTWVzc2FnZXMoKSB7XG4gICAgICAkKCcudGlwLWNvbnRlbnQnKS50b2dnbGUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cblxuXG4gICAgICBsZXQgbXlzdGVyeV9iZWFuX3BvdGlvbl9hdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgIGlmKFxuICAgICAgICB0aGlzLnN0YXRlLnJlZF9iZWFuX3BvdGlvbnMgIT09IG51bGxcbiAgICAgICAgJiYgdGhpcy5zdGF0ZS5ibHVlX2JlYW5fcG90aW9ucyAhPT0gbnVsbFxuICAgICAgICAmJiB0aGlzLnN0YXRlLmdyZWVuX2JlYW5fcG90aW9ucyAhPT0gbnVsbFxuICAgICAgICAmJiB0aGlzLnN0YXRlLmJsYWNrX2JlYW5fcG90aW9ucyAhPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIG15c3RlcnlfYmVhbl9wb3Rpb25fYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGNhbl9hZmZvcmRfbXlzdGVyeV9iZWFuX3BvdGlvbiA9IGZhbHNlO1xuICAgICAgaWYoXG4gICAgICAgIHRoaXMuc3RhdGUucmVkX2JlYW5fcG90aW9ucyA+PSAxXG4gICAgICAgICYmIHRoaXMuc3RhdGUuYmx1ZV9iZWFuX3BvdGlvbnMgPj0gMVxuICAgICAgICAmJiB0aGlzLnN0YXRlLmdyZWVuX2JlYW5fcG90aW9ucyA+PSAxXG4gICAgICAgICYmIHRoaXMuc3RhdGUuYmxhY2tfYmVhbl9wb3Rpb25zID49IDFcbiAgICAgICkge1xuICAgICAgICBjYW5fYWZmb3JkX215c3RlcnlfYmVhbl9wb3Rpb24gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUgY29udGFpbmVyXCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ2FtZV9zZXR0aW5nc1wiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc2VzPVwiYnV0dG9uLWljb24tb25seVwiXG4gICAgICAgICAgICAgIGljb249XCJxdWVzdGlvbi1jaXJjbGUtb1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUhlbHBNZXNzYWdlcygpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNhbkFmZm9yZD17dHJ1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ2FtZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlYW5zIGRldGFpbFwiPlxuICAgICAgICAgICAgICBCZWFuczogPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj57dGhpcy5zdGF0ZS5iZWFucy50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7IHRoaXMuc3RhdGUuYnBzICE9PSBudWxsICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJwcyBkZXRhaWxcIj5cbiAgICAgICAgICAgICAgQlBTOiA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPnt0aGlzLnN0YXRlLmJwcy50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7IHRoaXMuc3RhdGUuYmVhbl9wbGFudHMgIT09IG51bGwgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlYW4tcGxhbnRzIGRldGFpbFwiPlxuICAgICAgICAgICAgQmVhbiBQbGFudHM6IDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+e3RoaXMuc3RhdGUuYmVhbl9wbGFudHN9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIHsgdGhpcy5zdGF0ZS5iZWFuX2V4dHJhY3QgIT09IG51bGwgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZWFuLWV4dHJhY3QgZGV0YWlsXCI+XG4gICAgICAgICAgQmVhbiBFeHRyYWN0OiA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPnt0aGlzLnN0YXRlLmJlYW5fZXh0cmFjdH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgPGg0PlBvdGlvbnM8L2g0PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC00XCI+XG4gICAgICB7IHRoaXMuc3RhdGUucmVkX2JlYW5fcG90aW9ucyAhPT0gbnVsbCAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZC1iZWFuLXBvdGlvbnNcIj5cbiAgICAgICAgICBSZWQ6IDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+e3RoaXMuc3RhdGUucmVkX2JlYW5fcG90aW9uc308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgeyB0aGlzLnN0YXRlLmdyZWVuX2JlYW5fcG90aW9ucyAhPT0gbnVsbCAmJlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmVlbi1iZWFuLXBvdGlvbnNcIj5cbiAgICAgICAgR3JlZW46IDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+e3RoaXMuc3RhdGUuZ3JlZW5fYmVhbl9wb3Rpb25zfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgfVxuICB7IHRoaXMuc3RhdGUuYmx1ZV9iZWFuX3BvdGlvbnMgIT09IG51bGwgJiZcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdWUtYmVhbi1wb3Rpb25zXCI+XG4gICAgICBCbHVlOiA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPnt0aGlzLnN0YXRlLmJsdWVfYmVhbl9wb3Rpb25zfTwvc3Bhbj5cbiAgPC9kaXY+XG59XG57IHRoaXMuc3RhdGUuYmxhY2tfYmVhbl9wb3Rpb25zICE9PSBudWxsICYmXG4gIDxkaXYgY2xhc3NOYW1lPVwiYmxhY2stYmVhbi1wb3Rpb25zXCI+XG4gICAgQmxhY2s6IDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+e3RoaXMuc3RhdGUuYmxhY2tfYmVhbl9wb3Rpb25zfTwvc3Bhbj5cbjwvZGl2PlxufVxueyB0aGlzLnN0YXRlLm15c3RlcnlfYmVhbl9wb3Rpb25zICE9PSBudWxsICYmXG4gIDxkaXYgY2xhc3NOYW1lPVwiYmxhY2stYmVhbi1wb3Rpb25zXCI+XG4gICAgTXlzdGVyeTogPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj5cbiAgICB7dGhpcy5zdGF0ZS5teXN0ZXJ5X2JlYW5fcG90aW9uc31cbiAgPC9zcGFuPlxuPC9kaXY+XG59XG48L2Rpdj5cbjwvc2VjdGlvbj5cbjxzZWN0aW9uIGNsYXNzTmFtZT1cImdhbWUtYnV0dG9uc1wiPlxuICA8aDI+QWN0aW9uczwvaDI+XG4gIDxCdXR0b25cbiAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICB0aGlzLmluY3JlbWVudFZhbHVlKDEsICdiZWFucycpO1xuICAgIH19XG4gICAgdGV4dD1cIkNvbGxlY3QgQmVhbnNcIlxuICAgIGNsYXNzZXM9XCJiZWFuc1wiXG4gICAgY2FuQWZmb3JkPXt0cnVlfVxuICAgIC8+XG4gIHsgdGhpcy5zdGF0ZS5iZWFucyAhPT0gbnVsbCAmJlxuICAgIDxCdXR0b25cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgdGhpcy5kZWNyZW1lbnRWYWx1ZSgxMCwgJ2JlYW5zJyk7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50VmFsdWUoMSwgJ2JlYW5fcGxhbnRzJyk7XG4gICAgICB9fVxuICAgICAgdGV4dD1cIlBsYW50IEJlYW5zXCJcbiAgICAgIGNvc3Q9XCIxMCBCZWFuc1wiXG4gICAgICBjbGFzc2VzPVwiYmVhbi1wbGFudHNcIlxuICAgICAgdGlwPVwiQmVhbiBQbGFudHMgY3JlYXRlIDEgYmVhbiBwZXIgc2Vjb25kLlwiXG4gICAgICBjYW5BZmZvcmQ9e3RoaXMuY2FuSUFmZm9yZCgxMCwgJ2JlYW5zJyl9XG4gICAgICAvPlxuICB9XG4gIHsgdGhpcy5zdGF0ZS5iZWFuX3BsYW50cyAhPT0gbnVsbCAmJlxuICAgIDxCdXR0b25cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgdGhpcy5kZWNyZW1lbnRWYWx1ZSg1LCAnYmVhbl9wbGFudHMnKTtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnRWYWx1ZSgxLCAnYmVhbl9leHRyYWN0Jyk7XG4gICAgICB9fVxuICAgICAgdGV4dD1cIkNyZWF0ZSBCZWFuIEV4dHJhY3RcIlxuICAgICAgY29zdD1cIjUgQmVhbiBQbGFudHNcIlxuICAgICAgY2xhc3Nlcz1cImJlYW4tZXh0cmFjdFwiXG4gICAgICB0aXA9XCJCZWFuIEV4dHJhY3QgaXMgaGFydmVzdGVkIGZyb20gNSBiZWFuIHBsYW50cywgYW5kIHVzZWQgdG8gY3JlYXRlIHZhcmlvdXMgcG90aW9ucy5cIlxuICAgICAgY2FuQWZmb3JkPXt0aGlzLmNhbklBZmZvcmQoNSwgJ2JlYW5fcGxhbnRzJyl9XG4gICAgICAvPlxuICB9XG4gIHsgdGhpcy5zdGF0ZS5iZWFuX2V4dHJhY3QgIT09IG51bGwgJiZcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Qb3Rpb25zPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG90aW9ucyBncmlkXCI+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5iZWFuX2V4dHJhY3QgIT09IG51bGwgJiZcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50VmFsdWUoNSwgJ2JlYW5fZXh0cmFjdCcpO1xuICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudFZhbHVlKDEsICdyZWRfYmVhbl9wb3Rpb25zJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGV4dD1cIlJlZFwiXG4gICAgICAgICAgICBjbGFzc2VzPVwiYmVhbi1wb3Rpb24gYnV0dG9uLXNtYWxsIGJlYW4tcG90aW9uLS1yZWRcIlxuICAgICAgICAgICAgdGlwPVwiUmVkIHBvdGlvbnMgaGFybmVzcyB0aGUgcG93ZXIgb2YgdGhlIGFuZ3J5IGJlYW4uXCJcbiAgICAgICAgICAgIGNhbkFmZm9yZD17dGhpcy5jYW5JQWZmb3JkKDUsICdiZWFuX2V4dHJhY3QnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgICAgeyB0aGlzLnN0YXRlLmJlYW5fZXh0cmFjdCAhPT0gbnVsbCAmJlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnRWYWx1ZSg1LCAnYmVhbl9leHRyYWN0Jyk7XG4gICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50VmFsdWUoMSwgJ2dyZWVuX2JlYW5fcG90aW9ucycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRleHQ9XCJHcmVlblwiXG4gICAgICAgICAgICBjbGFzc2VzPVwiYmVhbi1wb3Rpb24gYnV0dG9uLXNtYWxsIGJlYW4tcG90aW9uLS1ncmVlblwiXG4gICAgICAgICAgICB0aXA9XCJHcmVlbiBwb3Rpb25zIGhhcm5lc3MgdGhlIHBvd2VyIG9mIHRoZSBtZWxsb3cgYmVhbi5cIlxuICAgICAgICAgICAgY2FuQWZmb3JkPXt0aGlzLmNhbklBZmZvcmQoNSwgJ2JlYW5fZXh0cmFjdCcpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgICB7IHRoaXMuc3RhdGUuYmVhbl9leHRyYWN0ICE9PSBudWxsICYmXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudFZhbHVlKDUsICdiZWFuX2V4dHJhY3QnKTtcbiAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRWYWx1ZSgxLCAnYmx1ZV9iZWFuX3BvdGlvbnMnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0ZXh0PVwiQmx1ZVwiXG4gICAgICAgICAgICBjbGFzc2VzPVwiYmVhbi1wb3Rpb24gYnV0dG9uLXNtYWxsIGJlYW4tcG90aW9uLS1ibHVlXCJcbiAgICAgICAgICAgIHRpcD1cIkJsdWUgcG90aW9ucyBoYXJuZXNzIHRoZSBwb3dlciBvZiB0aGUgbWFnaWMgYmVhbi5cIlxuICAgICAgICAgICAgY2FuQWZmb3JkPXt0aGlzLmNhbklBZmZvcmQoNSwgJ2JlYW5fZXh0cmFjdCcpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgICB7IHRoaXMuc3RhdGUuYmVhbl9leHRyYWN0ICE9PSBudWxsICYmXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudFZhbHVlKDUsICdiZWFuX2V4dHJhY3QnKTtcbiAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRWYWx1ZSgxLCAnYmxhY2tfYmVhbl9wb3Rpb25zJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGV4dD1cIkJsYWNrXCJcbiAgICAgICAgICAgIGNsYXNzZXM9XCJiZWFuLXBvdGlvbiBidXR0b24tc21hbGwgYmVhbi1wb3Rpb24tLWJsYWNrXCJcbiAgICAgICAgICAgIHRpcD1cIkJsYWNrIHBvdGlvbnMgaGFybmVzcyB0aGUgcG93ZXIgb2YgdGhlIGRhcmsgYmVhbi5cIlxuICAgICAgICAgICAgY2FuQWZmb3JkPXt0aGlzLmNhbklBZmZvcmQoNSwgJ2JlYW5fZXh0cmFjdCcpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgICB7IG15c3RlcnlfYmVhbl9wb3Rpb25fYXZhaWxhYmxlICYmXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudFZhbHVlKDEsICdyZWRfYmVhbl9wb3Rpb25zJyk7XG4gICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50VmFsdWUoMSwgJ2JsdWVfYmVhbl9wb3Rpb25zJyk7XG4gICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50VmFsdWUoMSwgJ2dyZWVuX2JlYW5fcG90aW9ucycpO1xuICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudFZhbHVlKDEsICdibGFja19iZWFuX3BvdGlvbnMnKTtcbiAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRWYWx1ZSgxLCAnbXlzdGVyeV9iZWFuX3BvdGlvbnMnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0ZXh0PVwiTXlzdGVyeVwiXG4gICAgICAgICAgICBjbGFzc2VzPVwiYmVhbi1wb3Rpb24gYnV0dG9uLXNtYWxsIGJlYW4tcG90aW9uLS1teXN0ZXJ5XCJcbiAgICAgICAgICAgIHRpcD1cIk15c3RlcnkgcG90aW9ucyBoYXJuZXNzIHRoZSBwb3dlciBvZiB0aGUgdW5rbm93bi5cIlxuICAgICAgICAgICAgY2FuQWZmb3JkPXtjYW5fYWZmb3JkX215c3RlcnlfYmVhbl9wb3Rpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIH1cbjwvc2VjdGlvbj5cbjxzZWN0aW9uIGNsYXNzTmFtZT1cInVwZ3JhZGVzXCI+XG4gIHsgdGhpcy5zdGF0ZS5iZWFuX3BsYW50cyAhPT0gbnVsbCAmJlxuICAgIDxkaXY+XG4gICAgICA8aDI+VXBncmFkZXM8L2gyPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGludFwiPlxuICAgICAgICAoRG93bmdyYWRlIGZvciA1MCUgY29zdCByZXR1cm4pXG4gICAgICA8L3NwYW4+XG4gICAgICA8VXBncmFkZUdyb3VwXG4gICAgICAgIHVwZ3JhZGU9eygpID0+IHt0aGlzLnVwZ3JhZGVDb2xsZWN0b3IoJ2JlYW5fcGxhbnRfbGV2ZWwnLCAwLjA1KX19XG4gICAgICAgIGRvd25ncmFkZT17KCkgPT4ge3RoaXMuZG93bmdyYWRlQ29sbGVjdG9yKCdiZWFuX3BsYW50X2xldmVsJywgMC4wNSl9fVxuICAgICAgICBjYW5VcGdyYWRlPXsoKSA9PiB7dGhpcy5kZWNyZW1lbnRWYWx1ZSgxMDAsICdiZWFucycpfX1cbiAgICAgICAgY2FuRG93bmdyYWRlPXsodGhpcy5zdGF0ZS5iZWFuX3BsYW50X2xldmVsID4gMCl9XG4gICAgICAgIGRlc2MgPSAnVXBncmFkZSBCZWFuIFBsYW50IENvbGxlY3Rpb24gUmF0ZSBieSA1JSdcbiAgICAgICAgY29zdCA9ICdDb3N0IDEwMCBCZWFucydcbiAgICAgICAgbGV2ZWwgPSB7KCh0aGlzLnN0YXRlLmJlYW5fcGxhbnRfbGV2ZWwgLSAxKSAvIDAuMDUpLnRvRml4ZWQoKSB9XG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4gIH1cbjwvc2VjdGlvbj5cbjwvZGl2PlxuKVxufVxuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNyZW1lbnRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluY3JlbWVudG9yXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICBjbGFzc2VzPVwiYnV0dG9uLWljb24tb25seVwiXG4gICAgICAgIGNhbkFmZm9yZD17dGhpcy5wcm9wcy5jYW5VcGdyYWRlfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnVwZ3JhZGV9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgaWNvbj1cIm1pbnVzXCJcbiAgICAgICAgY2xhc3Nlcz1cImJ1dHRvbi1pY29uLW9ubHlcIlxuICAgICAgICBjYW5BZmZvcmQ9e3RoaXMucHJvcHMuY2FuRG93bmdyYWRlfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmRvd25ncmFkZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIiwiY29uc3QgTW9kZWwgPSB7XG4gIGJlYW5zOiAwLFxuICBiZWFuX3BsYW50czogbnVsbCxcbiAgYmVhbl9wbGFudF9sZXZlbDogMSxcbiAgYnBzOiBudWxsLFxuICBiZWFuX2V4dHJhY3Q6IG51bGwsXG4gIGJlYW5fcG90aW9uOiBudWxsLFxuICByZWRfYmVhbl9wb3Rpb25zOiBudWxsLFxuICBncmVlbl9iZWFuX3BvdGlvbnM6IG51bGwsXG4gIGJsdWVfYmVhbl9wb3Rpb25zOiBudWxsLFxuICBibGFja19iZWFuX3BvdGlvbnM6IG51bGwsXG4gIG15c3RlcnlfYmVhbl9wb3Rpb25zOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2xhc3NOYW1lcygpIHtcbiAgICAgICAgbGV0IGNsYXNzZXMgPSAnc3ViLWJ1dHRvbic7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2xhc3Nlcykge1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgY29zdENsYXNzTmFtZXMoKSB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2FuQWZmb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Nvc3QnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdjb3N0IGNhbm5vdC1hZmZvcmQnO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZXMoKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmNhbkFmZm9yZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGV4dH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVDb250ZW50Q2xhc3MoKSB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMudGlwU2hvd24pIHtcbiAgICAgICAgICAgIHJldHVybiAnYWN0aXZlIHRpcC1jb250ZW50JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAndGlwLWNvbnRlbnQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlSWNvbkNsYXNzKCkge1xuICAgICAgICBpZih0aGlzLnByb3BzLnRpcFNob3duKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RpcC10b2dnbGUgZmEgZmEtY2xvc2UnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICd0aXAtdG9nZ2xlIGZhIGZhLWluZm8tY2lyY2xlJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpcFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17IHRoaXMuY2FsY3VsYXRlQ29udGVudENsYXNzKCl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXB9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaXAgZnJvbSAnLi9UaXAuanN4JztcbmltcG9ydCBTdWJCdXR0b24gZnJvbSAnLi9TdWJCdXR0b24uanN4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXBTaG93bjogZmFsc2UsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLnByb3BzLm9wdGlvbnMsXG4gICAgICAgICAgICBjdXJyZW50T3B0aW9uOiB0aGlzLnByb3BzLm9wdGlvbnNbMF0udHlwZSxcbiAgICAgICAgICAgIG9wdGlvbnNEb206IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2xhc3NOYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2xhc3NlcyArICcgYnV0dG9uIHRyaS1idXR0b24nO1xuICAgIH1cblxuICAgIHRvZ2dsZVRpcChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIHRpcFNob3duOiAhcHJldlN0YXRlLnRpcFNob3duXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGNvc3RDbGFzc05hbWVzKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jYW5BZmZvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiAnY29zdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Nvc3QgY2Fubm90LWFmZm9yZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDdXJyZW50T3B0aW9uKG9wdGlvbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb246IG9wdGlvblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWVzKCl9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30gZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmNhbkFmZm9yZH0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29zdCAmJiA8c3BhbiBjbGFzc05hbWU9e3RoaXMuY29zdENsYXNzTmFtZXMoKX0+e3RoaXMucHJvcHMuY29zdH08L3NwYW4+XG59XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGV4dH1cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sZXZlbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgICAgICBMZXZlbDogeygodGhpcy5wcm9wcy5sZXZlbCAtIDEpIC8gMC4wNSkudG9GaXhlZCgpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbn1cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcHRpb25zICYmIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxufVxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpcCAmJiA8VGlwIHRpcD17dGhpcy5wcm9wcy50aXB9IHRpcFNob3duPXt0aGlzLnN0YXRlLnRpcFNob3dufSBvbkNsaWNrPXsoZSkgPT4gdGhpcy50b2dnbGVUaXAoZSl9Lz5cbn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5jcmVtZW50b3IgZnJvbSAnLi9JbmNyZW1lbnRvci5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGdyYWRlR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBncmFkZS1ncm91cFwiPlxuICAgICAgICAgIDxJbmNyZW1lbnRvclxuICAgICAgICAgIHVwZ3JhZGU9e3RoaXMucHJvcHMudXBncmFkZX1cbiAgICAgICAgICBkb3duZ3JhZGU9e3RoaXMucHJvcHMuZG93bmdyYWRlfVxuICAgICAgICAgIGNhblVwZ3JhZGU9e3RoaXMucHJvcHMuY2FuVXBncmFkZX1cbiAgICAgICAgICBjYW5Eb3duZ3JhZGU9e3RoaXMucHJvcHMuY2FuRG93bmdyYWRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidXBncmFkZS1ncm91cF9kZXRhaWxzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBncmFkZS1ncm91cF9kZXRhaWxzX2Rlc2NcIj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlc2N9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwZ3JhZGUtZ3JvdXBfZGV0YWlsc19jb3N0XCI+e3RoaXMucHJvcHMuY29zdH08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGdyYWRlLWdyb3VwX2RldGFpbHNfbGV2ZWxcIj5cbiAgICAgICAgICAgICAgICAgIExldmVsXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxldmVsfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZS5qc3gnO1xuXG5cblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxHYW1lIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcbiJdfQ==
