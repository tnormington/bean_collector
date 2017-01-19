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

},{"./Tip.jsx":5,"react":"react"}],2:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                red_bean_potions: 1000,
                green_bean_potions: 1000,
                blue_bean_potions: 1000,
                black_bean_potions: 1000
            };
        } else {
            _this.state = {
                beans: 0,
                bean_plants: null,
                bean_plant_level: 1,
                bps: null,
                bean_extract: null,
                bean_potion: null,
                red_bean_potions: null,
                green_bean_potions: null,
                blue_bean_potions: null,
                black_bean_potions: null
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
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'game-buttons' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Purchases'
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
                                    _this3.decrementValue(5, 'bean_extract');
                                    _this3.incrementValue(1, 'mystery_bean_potion');
                                },
                                text: 'Mystery',
                                classes: 'bean-potion button-small bean-potion--mystery',
                                tip: 'Mystery potions harness the power of the unknown.',
                                canAfford: this.canIAfford(5, 'bean_extract')
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
                            'div',
                            { className: 'upgrade-group' },
                            _react2.default.createElement(
                                'section',
                                { className: 'upgrade-group_controls' },
                                _react2.default.createElement(_Button2.default, {
                                    onClick: function onClick() {
                                        _this3.upgradeCollector('bean_plant_level', 0.05);
                                        _this3.decrementValue(100, 'beans');
                                    },
                                    icon: 'plus',
                                    classes: 'button-icon-only',
                                    canAfford: this.canIAfford(100, 'beans')
                                }),
                                _react2.default.createElement(_Button2.default, {
                                    onClick: function onClick() {
                                        _this3.upgradeCollector('bean_plant_level', 0.05);
                                        _this3.decrementValue(100, 'beans');
                                    },
                                    icon: 'minus',
                                    classes: 'button-icon-only',
                                    canAfford: this.canIAfford(100, 'beans')
                                })
                            ),
                            _react2.default.createElement(
                                'section',
                                { className: 'upgrade-group_details' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'upgrade-group_details_desc' },
                                    'Upgrade Bean Plant Collection Rate by 5%'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'upgrade-group_details_cost' },
                                    'Cost 100 Beans'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'upgrade-group_details_level' },
                                    'Level',
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'value' },
                                        ((this.state.bean_plant_level - 1) / 0.05).toFixed()
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Game;
}(_react2.default.Component);

exports.default = Game;

},{"./Button.jsx":1,"./Model.jsx":3,"./TriButton.jsx":6,"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Model = {
  potions: [{
    name: 'Red',
    type: 'red',
    cost: 5
  }, {
    name: 'Blue',
    type: 'blue',
    cost: 5
  }, {
    name: 'Green',
    type: 'green',
    cost: 5
  }]
};

exports.default = Model;

},{}],4:[function(require,module,exports){
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

},{"react":"react"}],5:[function(require,module,exports){
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

},{"react":"react"}],6:[function(require,module,exports){
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

},{"./SubButton.jsx":4,"./Tip.jsx":5,"react":"react"}],7:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Game = require('./Game.jsx');

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Game2.default, null), document.getElementById('app'));

},{"./Game.jsx":2,"react":"react","react-dom":"react-dom"}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNfc3JjL2pzL0J1dHRvbi5qc3giLCJhc3NldHNfc3JjL2pzL0dhbWUuanN4IiwiYXNzZXRzX3NyYy9qcy9Nb2RlbC5qc3giLCJhc3NldHNfc3JjL2pzL1N1YkJ1dHRvbi5qc3giLCJhc3NldHNfc3JjL2pzL1RpcC5qc3giLCJhc3NldHNfc3JjL2pzL1RyaUJ1dHRvbi5qc3giLCJhc3NldHNfc3JjL2pzL2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQixNOzs7QUFDakIsb0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNULEtBRFM7O0FBRWYsY0FBSyxLQUFMLEdBQWE7QUFDVCxzQkFBVSxLQUREO0FBRVQscUJBQVMsTUFBSyxLQUFMLENBQVc7QUFGWCxTQUFiO0FBRmU7QUFNbEI7Ozs7cUNBRVk7QUFDVCxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLFNBQTVCO0FBQ0g7OztrQ0FFUyxDLEVBQUc7QUFDVCxjQUFFLGVBQUY7QUFDQSxpQkFBSyxRQUFMLENBQWMsVUFBQyxTQUFEO0FBQUEsdUJBQWdCO0FBQzFCLDhCQUFVLENBQUMsVUFBVTtBQURLLGlCQUFoQjtBQUFBLGFBQWQ7QUFHSDs7O3lDQUVnQjtBQUNiLGdCQUFHLEtBQUssS0FBTCxDQUFXLFNBQWQsRUFBeUI7QUFDckIsdUJBQU8sTUFBUDtBQUNILGFBRkQsTUFFTztBQUNILHVCQUFPLG9CQUFQO0FBQ0g7QUFDSjs7O2lDQUtRO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksK0JBQVcsS0FBSyxVQUFMLEVBRGY7QUFFSSw2QkFBUyxLQUFLLEtBQUwsQ0FBVyxPQUZ4QjtBQUdJLDhCQUFVLENBQUMsS0FBSyxLQUFMLENBQVc7QUFIMUI7QUFLTSxxQkFBSyxLQUFMLENBQVcsSUFBWCxJQUNFO0FBQUE7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QyxPQUFoQztBQURTLGlCQUp6QjtBQVFLLHFCQUFLLEtBQUwsQ0FBVyxPQUFYLElBQXNCLHVDQUFLLFdBQVUsU0FBZixHQVIzQjtBQVdLLHFCQUFLLEtBQUwsQ0FBVyxHQUFYLElBQWtCLCtDQUFLLEtBQUssS0FBSyxLQUFMLENBQVcsR0FBckIsRUFBMEIsVUFBVSxLQUFLLEtBQUwsQ0FBVyxRQUEvQyxFQUF5RCxTQUFTLGlCQUFDLENBQUQ7QUFBQSwrQkFBTyxPQUFLLFNBQUwsQ0FBZSxDQUFmLENBQVA7QUFBQSxxQkFBbEU7QUFYdkIsYUFESjtBQWdCSDs7OztFQXJEa0MsZ0JBQU0sUzs7a0JBQXhCLFM7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSUEsbUJBQVMsTUFBVCxDQUNJLG1EQURKLEVBRUksU0FBUyxjQUFULENBQXdCLEtBQXhCLENBRkoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaXAgZnJvbSAnLi9UaXAuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXBTaG93bjogZmFsc2UsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLnByb3BzLm9wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjbGFzc05hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jbGFzc2VzICsgJyBidXR0b24nO1xuICAgIH1cblxuICAgIHRvZ2dsZVRpcChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIHRpcFNob3duOiAhcHJldlN0YXRlLnRpcFNob3duXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGNvc3RDbGFzc05hbWVzKCkge1xuICAgICAgICBpZih0aGlzLnByb3BzLmNhbkFmZm9yZCkge1xuICAgICAgICAgICAgcmV0dXJuICdjb3N0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnY29zdCBjYW5ub3QtYWZmb3JkJztcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lcygpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMucHJvcHMuY2FuQWZmb3JkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY29zdCAmJlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMuY29zdENsYXNzTmFtZXMoKX0+e3RoaXMucHJvcHMuY29zdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRleHR9XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmxldmVsICYmXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxldmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBMZXZlbDogeygodGhpcy5wcm9wcy5sZXZlbCAtIDEpIC8gMC4wNSkudG9GaXhlZCgpIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMudGlwICYmXG4gICAgICAgICAgICAgICAgICAgIDxUaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcD17dGhpcy5wcm9wcy50aXB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXBTaG93bj17dGhpcy5zdGF0ZS50aXBTaG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZVRpcChlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmljb24gJiZcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17XCJmYSBmYS1cIiArIHRoaXMucHJvcHMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi5qc3gnO1xuaW1wb3J0IFRyaUJ1dHRvbiBmcm9tICcuL1RyaUJ1dHRvbi5qc3gnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwuanN4JztcblxuY29uc3QgZGVidWcgPSBmYWxzZTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgaWYoZGVidWcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgYmVhbnM6IDEwMDAwLFxuICAgICAgICAgICAgICAgIGJlYW5fcGxhbnRzOiAxMDAwMCxcbiAgICAgICAgICAgICAgICBiZWFuX3BsYW50X2xldmVsOiAxMCxcbiAgICAgICAgICAgICAgICBicHM6IG51bGwsXG4gICAgICAgICAgICAgICAgYmVhbl9leHRyYWN0OiAxMDAwMCxcbiAgICAgICAgICAgICAgICBiZWFuX3BvdGlvbjogMTAwMDAsXG4gICAgICAgICAgICAgICAgcmVkX2JlYW5fcG90aW9uczogMTAwMCxcbiAgICAgICAgICAgICAgICBncmVlbl9iZWFuX3BvdGlvbnM6IDEwMDAsXG4gICAgICAgICAgICAgICAgYmx1ZV9iZWFuX3BvdGlvbnM6IDEwMDAsXG4gICAgICAgICAgICAgICAgYmxhY2tfYmVhbl9wb3Rpb25zOiAxMDAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBiZWFuczogMCxcbiAgICAgICAgICAgICAgICBiZWFuX3BsYW50czogbnVsbCxcbiAgICAgICAgICAgICAgICBiZWFuX3BsYW50X2xldmVsOiAxLFxuICAgICAgICAgICAgICAgIGJwczogbnVsbCxcbiAgICAgICAgICAgICAgICBiZWFuX2V4dHJhY3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgYmVhbl9wb3Rpb246IG51bGwsXG4gICAgICAgICAgICAgICAgcmVkX2JlYW5fcG90aW9uczogbnVsbCxcbiAgICAgICAgICAgICAgICBncmVlbl9iZWFuX3BvdGlvbnM6IG51bGwsXG4gICAgICAgICAgICAgICAgYmx1ZV9iZWFuX3BvdGlvbnM6IG51bGwsXG4gICAgICAgICAgICAgICAgYmxhY2tfYmVhbl9wb3Rpb25zOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5jcmVtZW50VmFsdWUoaSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgW3ZhbHVlXTogcHJldlN0YXRlW3ZhbHVlXSArIGlcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZGVjcmVtZW50VmFsdWUoaSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgW3ZhbHVlXTogcHJldlN0YXRlW3ZhbHVlXSAtIGlcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgdXBncmFkZUNvbGxlY3Rvcihjb2xsZWN0b3IsIHJhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgW2NvbGxlY3Rvcl06IChwcmV2U3RhdGVbY29sbGVjdG9yXSArIHJhdGUpXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZUJwcygpIHtcbiAgICAgICAgbGV0IGJwcyA9IDA7XG4gICAgICAgIGxldCBiZWFuX3BsYW50cyA9IDA7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5iZWFuX3BsYW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgYmVhbl9wbGFudHMgPSB0aGlzLnN0YXRlLmJlYW5fcGxhbnRzO1xuICAgICAgICB9XG4gICAgICAgIGJwcyArPSBiZWFuX3BsYW50cyAqIHRoaXMuc3RhdGUuYmVhbl9wbGFudF9sZXZlbDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBicHM6IGJwc1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJwcztcbiAgICB9XG5cbiAgICBjYW5JQWZmb3JkKGNvc3QsIGl0ZW0pIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZVtpdGVtXSA+PSBjb3N0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50IG1vdW50ZWQhJyk7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIGJlYW5zOiBwcmV2U3RhdGUuYmVhbnMgKyB0aGlzLmNhbGN1bGF0ZUJwcygpLzEwLFxuICAgICAgICB9KSl9LCAxMDApO1xuXG4gICAgfVxuXG4gICAgdG9nZ2xlSGVscE1lc3NhZ2VzKCkge1xuICAgICAgICAkKCcudGlwLWNvbnRlbnQnKS50b2dnbGUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cblxuXG4gICAgICAgIGxldCBteXN0ZXJ5X2JlYW5fcG90aW9uX2F2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgICBpZihcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucmVkX2JlYW5fcG90aW9ucyAhPT0gbnVsbFxuICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5ibHVlX2JlYW5fcG90aW9ucyAhPT0gbnVsbFxuICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5ncmVlbl9iZWFuX3BvdGlvbnMgIT09IG51bGxcbiAgICAgICAgICAgICYmIHRoaXMuc3RhdGUuYmxhY2tfYmVhbl9wb3Rpb25zICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgICAgbXlzdGVyeV9iZWFuX3BvdGlvbl9hdmFpbGFibGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZSBjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJnYW1lX3NldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJidXR0b24taWNvbi1vbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInF1ZXN0aW9uLWNpcmNsZS1vXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVIZWxwTWVzc2FnZXMoKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjYW5BZmZvcmQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJnYW1lLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZWFucyBkZXRhaWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJlYW5zOiA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPnt0aGlzLnN0YXRlLmJlYW5zLnRvRml4ZWQoMil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJwcyAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicHMgZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQlBTOiA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPnt0aGlzLnN0YXRlLmJwcy50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5iZWFuX3BsYW50cyAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZWFuLXBsYW50cyBkZXRhaWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZWFuIFBsYW50czogPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj57dGhpcy5zdGF0ZS5iZWFuX3BsYW50c308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYmVhbl9leHRyYWN0ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlYW4tZXh0cmFjdCBkZXRhaWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZWFuIEV4dHJhY3Q6IDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+e3RoaXMuc3RhdGUuYmVhbl9leHRyYWN0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxoND5Qb3Rpb25zPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5yZWRfYmVhbl9wb3Rpb25zICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWQtYmVhbi1wb3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZDogPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj57dGhpcy5zdGF0ZS5yZWRfYmVhbl9wb3Rpb25zfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5ncmVlbl9iZWFuX3BvdGlvbnMgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyZWVuLWJlYW4tcG90aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmVlbjogPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj57dGhpcy5zdGF0ZS5ncmVlbl9iZWFuX3BvdGlvbnN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJsdWVfYmVhbl9wb3Rpb25zICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVlLWJlYW4tcG90aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbHVlOiA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPnt0aGlzLnN0YXRlLmJsdWVfYmVhbl9wb3Rpb25zfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5ibGFja19iZWFuX3BvdGlvbnMgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsYWNrLWJlYW4tcG90aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbGFjazogPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj57dGhpcy5zdGF0ZS5ibGFja19iZWFuX3BvdGlvbnN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ2FtZS1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5QdXJjaGFzZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRWYWx1ZSgxLCAnYmVhbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQ29sbGVjdCBCZWFuc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwiYmVhbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuQWZmb3JkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYmVhbnMgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50VmFsdWUoMTAsICdiZWFucycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudFZhbHVlKDEsICdiZWFuX3BsYW50cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlBsYW50IEJlYW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3N0PVwiMTAgQmVhbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJiZWFuLXBsYW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwPVwiQmVhbiBQbGFudHMgY3JlYXRlIDEgYmVhbiBwZXIgc2Vjb25kLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuQWZmb3JkPXt0aGlzLmNhbklBZmZvcmQoMTAsICdiZWFucycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYmVhbl9wbGFudHMgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50VmFsdWUoNSwgJ2JlYW5fcGxhbnRzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50VmFsdWUoMSwgJ2JlYW5fZXh0cmFjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkNyZWF0ZSBCZWFuIEV4dHJhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvc3Q9XCI1IEJlYW4gUGxhbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwiYmVhbi1leHRyYWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXA9XCJCZWFuIEV4dHJhY3QgaXMgaGFydmVzdGVkIGZyb20gNSBiZWFuIHBsYW50cywgYW5kIHVzZWQgdG8gY3JlYXRlIHZhcmlvdXMgcG90aW9ucy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkFmZm9yZD17dGhpcy5jYW5JQWZmb3JkKDUsICdiZWFuX3BsYW50cycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYmVhbl9leHRyYWN0ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UG90aW9uczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3Rpb25zIGdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYmVhbl9leHRyYWN0ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnRWYWx1ZSg1LCAnYmVhbl9leHRyYWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudFZhbHVlKDEsICdyZWRfYmVhbl9wb3Rpb25zJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJSZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwiYmVhbi1wb3Rpb24gYnV0dG9uLXNtYWxsIGJlYW4tcG90aW9uLS1yZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXA9XCJSZWQgcG90aW9ucyBoYXJuZXNzIHRoZSBwb3dlciBvZiB0aGUgYW5ncnkgYmVhbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5BZmZvcmQ9e3RoaXMuY2FuSUFmZm9yZCg1LCAnYmVhbl9leHRyYWN0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5iZWFuX2V4dHJhY3QgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudFZhbHVlKDUsICdiZWFuX2V4dHJhY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50VmFsdWUoMSwgJ2dyZWVuX2JlYW5fcG90aW9ucycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiR3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwiYmVhbi1wb3Rpb24gYnV0dG9uLXNtYWxsIGJlYW4tcG90aW9uLS1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcD1cIkdyZWVuIHBvdGlvbnMgaGFybmVzcyB0aGUgcG93ZXIgb2YgdGhlIG1lbGxvdyBiZWFuLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkFmZm9yZD17dGhpcy5jYW5JQWZmb3JkKDUsICdiZWFuX2V4dHJhY3QnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJlYW5fZXh0cmFjdCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50VmFsdWUoNSwgJ2JlYW5fZXh0cmFjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRWYWx1ZSgxLCAnYmx1ZV9iZWFuX3BvdGlvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkJsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwiYmVhbi1wb3Rpb24gYnV0dG9uLXNtYWxsIGJlYW4tcG90aW9uLS1ibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwPVwiQmx1ZSBwb3Rpb25zIGhhcm5lc3MgdGhlIHBvd2VyIG9mIHRoZSBtYWdpYyBiZWFuLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkFmZm9yZD17dGhpcy5jYW5JQWZmb3JkKDUsICdiZWFuX2V4dHJhY3QnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJlYW5fZXh0cmFjdCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50VmFsdWUoNSwgJ2JlYW5fZXh0cmFjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRWYWx1ZSgxLCAnYmxhY2tfYmVhbl9wb3Rpb25zJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJCbGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJiZWFuLXBvdGlvbiBidXR0b24tc21hbGwgYmVhbi1wb3Rpb24tLWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwPVwiQmxhY2sgcG90aW9ucyBoYXJuZXNzIHRoZSBwb3dlciBvZiB0aGUgZGFyayBiZWFuLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkFmZm9yZD17dGhpcy5jYW5JQWZmb3JkKDUsICdiZWFuX2V4dHJhY3QnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBteXN0ZXJ5X2JlYW5fcG90aW9uX2F2YWlsYWJsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50VmFsdWUoNSwgJ2JlYW5fZXh0cmFjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRWYWx1ZSgxLCAnbXlzdGVyeV9iZWFuX3BvdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiTXlzdGVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJiZWFuLXBvdGlvbiBidXR0b24tc21hbGwgYmVhbi1wb3Rpb24tLW15c3RlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXA9XCJNeXN0ZXJ5IHBvdGlvbnMgaGFybmVzcyB0aGUgcG93ZXIgb2YgdGhlIHVua25vd24uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuQWZmb3JkPXt0aGlzLmNhbklBZmZvcmQoNSwgJ2JlYW5fZXh0cmFjdCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ1cGdyYWRlc1wiPlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYmVhbl9wbGFudHMgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlVwZ3JhZGVzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwZ3JhZGUtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidXBncmFkZS1ncm91cF9jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGdyYWRlQ29sbGVjdG9yKCdiZWFuX3BsYW50X2xldmVsJywgMC4wNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50VmFsdWUoMTAwLCAnYmVhbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwiYnV0dG9uLWljb24tb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuQWZmb3JkPXt0aGlzLmNhbklBZmZvcmQoMTAwLCAnYmVhbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZ3JhZGVDb2xsZWN0b3IoJ2JlYW5fcGxhbnRfbGV2ZWwnLCAwLjA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnRWYWx1ZSgxMDAsICdiZWFucycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm1pbnVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwiYnV0dG9uLWljb24tb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuQWZmb3JkPXt0aGlzLmNhbklBZmZvcmQoMTAwLCAnYmVhbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidXBncmFkZS1ncm91cF9kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwZ3JhZGUtZ3JvdXBfZGV0YWlsc19kZXNjXCI+VXBncmFkZSBCZWFuIFBsYW50IENvbGxlY3Rpb24gUmF0ZSBieSA1JTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGdyYWRlLWdyb3VwX2RldGFpbHNfY29zdFwiPkNvc3QgMTAwIEJlYW5zPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwZ3JhZGUtZ3JvdXBfZGV0YWlsc19sZXZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygodGhpcy5zdGF0ZS5iZWFuX3BsYW50X2xldmVsIC0gMSkgLyAwLjA1KS50b0ZpeGVkKCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG4iLCJjb25zdCBNb2RlbCA9IHtcbiAgcG90aW9uczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdSZWQnLFxuICAgICAgdHlwZTogJ3JlZCcsXG4gICAgICBjb3N0OiA1XG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQmx1ZScsXG4gICAgICB0eXBlOiAnYmx1ZScsXG4gICAgICBjb3N0OiA1XG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnR3JlZW4nLFxuICAgICAgdHlwZTogJ2dyZWVuJyxcbiAgICAgIGNvc3Q6IDVcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNsYXNzTmFtZXMoKSB7XG4gICAgICAgIGxldCBjbGFzc2VzID0gJ3N1Yi1idXR0b24nO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNsYXNzZXMpIHtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGNvc3RDbGFzc05hbWVzKCkge1xuICAgICAgICBpZih0aGlzLnByb3BzLmNhbkFmZm9yZCkge1xuICAgICAgICAgICAgcmV0dXJuICdjb3N0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnY29zdCBjYW5ub3QtYWZmb3JkJztcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWVzKCl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5wcm9wcy5jYW5BZmZvcmR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRleHR9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlQ29udGVudENsYXNzKCkge1xuICAgICAgICBpZih0aGlzLnByb3BzLnRpcFNob3duKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2FjdGl2ZSB0aXAtY29udGVudCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RpcC1jb250ZW50JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZUljb25DbGFzcygpIHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy50aXBTaG93bikge1xuICAgICAgICAgICAgcmV0dXJuICd0aXAtdG9nZ2xlIGZhIGZhLWNsb3NlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAndGlwLXRvZ2dsZSBmYSBmYS1pbmZvLWNpcmNsZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXBcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eyB0aGlzLmNhbGN1bGF0ZUNvbnRlbnRDbGFzcygpfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGlwfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGlwIGZyb20gJy4vVGlwLmpzeCc7XG5pbXBvcnQgU3ViQnV0dG9uIGZyb20gJy4vU3ViQnV0dG9uLmpzeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGlwU2hvd246IGZhbHNlLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5wcm9wcy5vcHRpb25zLFxuICAgICAgICAgICAgY3VycmVudE9wdGlvbjogdGhpcy5wcm9wcy5vcHRpb25zWzBdLnR5cGUsXG4gICAgICAgICAgICBvcHRpb25zRG9tOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNsYXNzTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNsYXNzZXMgKyAnIGJ1dHRvbiB0cmktYnV0dG9uJztcbiAgICB9XG5cbiAgICB0b2dnbGVUaXAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICB0aXBTaG93bjogIXByZXZTdGF0ZS50aXBTaG93blxuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBjb3N0Q2xhc3NOYW1lcygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2FuQWZmb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Nvc3QnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdjb3N0IGNhbm5vdC1hZmZvcmQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudE9wdGlvbihvcHRpb24pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9uOiBvcHRpb25cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lcygpfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9IGRpc2FibGVkPXshdGhpcy5wcm9wcy5jYW5BZmZvcmR9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvc3QgJiYgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLmNvc3RDbGFzc05hbWVzKCl9Pnt0aGlzLnByb3BzLmNvc3R9PC9zcGFuPlxufVxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRleHR9XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGV2ZWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwibGV2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgTGV2ZWw6IHsoKHRoaXMucHJvcHMubGV2ZWwgLSAxKSAvIDAuMDUpLnRvRml4ZWQoKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG59XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3B0aW9ucyAmJiA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbn1cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXAgJiYgPFRpcCB0aXA9e3RoaXMucHJvcHMudGlwfSB0aXBTaG93bj17dGhpcy5zdGF0ZS50aXBTaG93bn0gb25DbGljaz17KGUpID0+IHRoaXMudG9nZ2xlVGlwKGUpfS8+XG59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUuanN4JztcblxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8R2FtZSAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG4iXX0=
