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

var debug = true;

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
                bean_plant_level: 0,
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
                        canAfford: this.canIAfford(100, 'beans')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNfc3JjL2pzL0J1dHRvbi5qc3giLCJhc3NldHNfc3JjL2pzL0dhbWUuanN4IiwiYXNzZXRzX3NyYy9qcy9Nb2RlbC5qc3giLCJhc3NldHNfc3JjL2pzL1N1YkJ1dHRvbi5qc3giLCJhc3NldHNfc3JjL2pzL1RpcC5qc3giLCJhc3NldHNfc3JjL2pzL1RyaUJ1dHRvbi5qc3giLCJhc3NldHNfc3JjL2pzL2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQixNOzs7QUFDakIsb0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNULEtBRFM7O0FBRWYsY0FBSyxLQUFMLEdBQWE7QUFDVCxzQkFBVSxLQUREO0FBRVQscUJBQVMsTUFBSyxLQUFMLENBQVc7QUFGWCxTQUFiO0FBRmU7QUFNbEI7Ozs7cUNBRVk7QUFDVCxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLFNBQTVCO0FBQ0g7OztrQ0FFUyxDLEVBQUc7QUFDVCxjQUFFLGVBQUY7QUFDQSxpQkFBSyxRQUFMLENBQWMsVUFBQyxTQUFEO0FBQUEsdUJBQWdCO0FBQzFCLDhCQUFVLENBQUMsVUFBVTtBQURLLGlCQUFoQjtBQUFBLGFBQWQ7QUFHSDs7O3lDQUVnQjtBQUNiLGdCQUFHLEtBQUssS0FBTCxDQUFXLFNBQWQsRUFBeUI7QUFDckIsdUJBQU8sTUFBUDtBQUNILGFBRkQsTUFFTztBQUNILHVCQUFPLG9CQUFQO0FBQ0g7QUFDSjs7O2lDQUtRO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksK0JBQVcsS0FBSyxVQUFMLEVBRGY7QUFFSSw2QkFBUyxLQUFLLEtBQUwsQ0FBVyxPQUZ4QjtBQUdJLDhCQUFVLENBQUMsS0FBSyxLQUFMLENBQVc7QUFIMUI7QUFLTSxxQkFBSyxLQUFMLENBQVcsSUFBWCxJQUNFO0FBQUE7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LEtBQVgsR0FBbUIsQ0FBcEIsSUFBeUIsSUFBMUIsRUFBZ0MsT0FBaEM7QUFEUyxpQkFKekI7QUFRSyxxQkFBSyxLQUFMLENBQVcsT0FBWCxJQUFzQix1Q0FBSyxXQUFVLFNBQWYsR0FSM0I7QUFXSyxxQkFBSyxLQUFMLENBQVcsR0FBWCxJQUFrQiwrQ0FBSyxLQUFLLEtBQUssS0FBTCxDQUFXLEdBQXJCLEVBQTBCLFVBQVUsS0FBSyxLQUFMLENBQVcsUUFBL0MsRUFBeUQsU0FBUyxpQkFBQyxDQUFEO0FBQUEsK0JBQU8sT0FBSyxTQUFMLENBQWUsQ0FBZixDQUFQO0FBQUEscUJBQWxFO0FBWHZCLGFBREo7QUFnQkg7Ozs7RUFyRGtDLGdCQUFNLFM7O2tCQUF4QixTOzs7OztBQ0pyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUlBLG1CQUFTLE1BQVQsQ0FDSSxtREFESixFQUVJLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUZKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGlwIGZyb20gJy4vVGlwLmpzeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGlwU2hvd246IGZhbHNlLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5wcm9wcy5vcHRpb25zXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2xhc3NOYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2xhc3NlcyArICcgYnV0dG9uJztcbiAgICB9XG5cbiAgICB0b2dnbGVUaXAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICB0aXBTaG93bjogIXByZXZTdGF0ZS50aXBTaG93blxuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBjb3N0Q2xhc3NOYW1lcygpIHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jYW5BZmZvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiAnY29zdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Nvc3QgY2Fubm90LWFmZm9yZCc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZXMoKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmNhbkFmZm9yZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNvc3QgJiZcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLmNvc3RDbGFzc05hbWVzKCl9Pnt0aGlzLnByb3BzLmNvc3R9PC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fVxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5sZXZlbCAmJlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGV2ZWw6IHsoKHRoaXMucHJvcHMubGV2ZWwgLSAxKSAvIDAuMDUpLnRvRml4ZWQoKSB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnRpcCAmJlxuICAgICAgICAgICAgICAgICAgICA8VGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXA9e3RoaXMucHJvcHMudGlwfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwU2hvd249e3RoaXMuc3RhdGUudGlwU2hvd259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy50b2dnbGVUaXAoZSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pY29uICYmXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e1wiZmEgZmEtXCIgKyB0aGlzLnByb3BzLmljb259IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24uanN4JztcbmltcG9ydCBUcmlCdXR0b24gZnJvbSAnLi9UcmlCdXR0b24uanN4JztcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsLmpzeCc7XG5cbmNvbnN0IGRlYnVnID0gdHJ1ZTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgaWYoZGVidWcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgYmVhbnM6IDEwMDAwLFxuICAgICAgICAgICAgICAgIGJlYW5fcGxhbnRzOiAxMDAwMCxcbiAgICAgICAgICAgICAgICBiZWFuX3BsYW50X2xldmVsOiAxMCxcbiAgICAgICAgICAgICAgICBicHM6IG51bGwsXG4gICAgICAgICAgICAgICAgYmVhbl9leHRyYWN0OiAxMDAwMCxcbiAgICAgICAgICAgICAgICBiZWFuX3BvdGlvbjogMTAwMDAsXG4gICAgICAgICAgICAgICAgcmVkX2JlYW5fcG90aW9uczogMTAwMCxcbiAgICAgICAgICAgICAgICBncmVlbl9iZWFuX3BvdGlvbnM6IDEwMDAsXG4gICAgICAgICAgICAgICAgYmx1ZV9iZWFuX3BvdGlvbnM6IDEwMDAsXG4gICAgICAgICAgICAgICAgYmxhY2tfYmVhbl9wb3Rpb25zOiAxMDAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBiZWFuczogMCxcbiAgICAgICAgICAgICAgICBiZWFuX3BsYW50czogbnVsbCxcbiAgICAgICAgICAgICAgICBiZWFuX3BsYW50X2xldmVsOiAwLFxuICAgICAgICAgICAgICAgIGJwczogbnVsbCxcbiAgICAgICAgICAgICAgICBiZWFuX2V4dHJhY3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgYmVhbl9wb3Rpb246IG51bGwsXG4gICAgICAgICAgICAgICAgcmVkX2JlYW5fcG90aW9uczogbnVsbCxcbiAgICAgICAgICAgICAgICBncmVlbl9iZWFuX3BvdGlvbnM6IG51bGwsXG4gICAgICAgICAgICAgICAgYmx1ZV9iZWFuX3BvdGlvbnM6IG51bGwsXG4gICAgICAgICAgICAgICAgYmxhY2tfYmVhbl9wb3Rpb25zOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5jcmVtZW50VmFsdWUoaSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgW3ZhbHVlXTogcHJldlN0YXRlW3ZhbHVlXSArIGlcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZGVjcmVtZW50VmFsdWUoaSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgW3ZhbHVlXTogcHJldlN0YXRlW3ZhbHVlXSAtIGlcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgdXBncmFkZUNvbGxlY3Rvcihjb2xsZWN0b3IsIHJhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgW2NvbGxlY3Rvcl06IChwcmV2U3RhdGVbY29sbGVjdG9yXSArIHJhdGUpXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZUJwcygpIHtcbiAgICAgICAgbGV0IGJwcyA9IDA7XG4gICAgICAgIGxldCBiZWFuX3BsYW50cyA9IDA7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5iZWFuX3BsYW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgYmVhbl9wbGFudHMgPSB0aGlzLnN0YXRlLmJlYW5fcGxhbnRzO1xuICAgICAgICB9XG4gICAgICAgIGJwcyArPSBiZWFuX3BsYW50cyAqIHRoaXMuc3RhdGUuYmVhbl9wbGFudF9sZXZlbDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBicHM6IGJwc1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJwcztcbiAgICB9XG5cbiAgICBjYW5JQWZmb3JkKGNvc3QsIGl0ZW0pIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZVtpdGVtXSA+PSBjb3N0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50IG1vdW50ZWQhJyk7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIGJlYW5zOiBwcmV2U3RhdGUuYmVhbnMgKyB0aGlzLmNhbGN1bGF0ZUJwcygpLzEwLFxuICAgICAgICB9KSl9LCAxMDApO1xuXG4gICAgfVxuXG4gICAgdG9nZ2xlSGVscE1lc3NhZ2VzKCkge1xuICAgICAgICAkKCcudGlwLWNvbnRlbnQnKS50b2dnbGUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cblxuXG4gICAgICAgIGxldCBteXN0ZXJ5X2JlYW5fcG90aW9uX2F2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgICBpZihcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucmVkX2JlYW5fcG90aW9ucyAhPT0gbnVsbFxuICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5ibHVlX2JlYW5fcG90aW9ucyAhPT0gbnVsbFxuICAgICAgICAgICAgJiYgdGhpcy5zdGF0ZS5ncmVlbl9iZWFuX3BvdGlvbnMgIT09IG51bGxcbiAgICAgICAgICAgICYmIHRoaXMuc3RhdGUuYmxhY2tfYmVhbl9wb3Rpb25zICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgICAgbXlzdGVyeV9iZWFuX3BvdGlvbl9hdmFpbGFibGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZSBjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJnYW1lX3NldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJidXR0b24taWNvbi1vbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInF1ZXN0aW9uLWNpcmNsZS1vXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVIZWxwTWVzc2FnZXMoKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjYW5BZmZvcmQ9e3RoaXMuY2FuSUFmZm9yZCgxMDAsICdiZWFucycpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ2FtZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVhbnMgZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBCZWFuczogPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj57dGhpcy5zdGF0ZS5iZWFucy50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5icHMgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnBzIGRldGFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJQUzogPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj57dGhpcy5zdGF0ZS5icHMudG9GaXhlZCgyKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYmVhbl9wbGFudHMgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVhbi1wbGFudHMgZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVhbiBQbGFudHM6IDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+e3RoaXMuc3RhdGUuYmVhbl9wbGFudHN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJlYW5fZXh0cmFjdCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZWFuLWV4dHJhY3QgZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVhbiBFeHRyYWN0OiA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPnt0aGlzLnN0YXRlLmJlYW5fZXh0cmFjdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8aDQ+UG90aW9uczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUucmVkX2JlYW5fcG90aW9ucyAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVkLWJlYW4tcG90aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWQ6IDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+e3RoaXMuc3RhdGUucmVkX2JlYW5fcG90aW9uc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuZ3JlZW5fYmVhbl9wb3Rpb25zICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmVlbi1iZWFuLXBvdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JlZW46IDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+e3RoaXMuc3RhdGUuZ3JlZW5fYmVhbl9wb3Rpb25zfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5ibHVlX2JlYW5fcG90aW9ucyAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZS1iZWFuLXBvdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmx1ZTogPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj57dGhpcy5zdGF0ZS5ibHVlX2JlYW5fcG90aW9uc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYmxhY2tfYmVhbl9wb3Rpb25zICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFjay1iZWFuLXBvdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxhY2s6IDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+e3RoaXMuc3RhdGUuYmxhY2tfYmVhbl9wb3Rpb25zfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdhbWUtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+UHVyY2hhc2VzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50VmFsdWUoMSwgJ2JlYW5zJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkNvbGxlY3QgQmVhbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz1cImJlYW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbkFmZm9yZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJlYW5zICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudFZhbHVlKDEwLCAnYmVhbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRWYWx1ZSgxLCAnYmVhbl9wbGFudHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJQbGFudCBCZWFuc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29zdD1cIjEwIEJlYW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwiYmVhbi1wbGFudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcD1cIkJlYW4gUGxhbnRzIGNyZWF0ZSAxIGJlYW4gcGVyIHNlY29uZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkFmZm9yZD17dGhpcy5jYW5JQWZmb3JkKDEwLCAnYmVhbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJlYW5fcGxhbnRzICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudFZhbHVlKDUsICdiZWFuX3BsYW50cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudFZhbHVlKDEsICdiZWFuX2V4dHJhY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJDcmVhdGUgQmVhbiBFeHRyYWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3N0PVwiNSBCZWFuIFBsYW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz1cImJlYW4tZXh0cmFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwPVwiQmVhbiBFeHRyYWN0IGlzIGhhcnZlc3RlZCBmcm9tIDUgYmVhbiBwbGFudHMsIGFuZCB1c2VkIHRvIGNyZWF0ZSB2YXJpb3VzIHBvdGlvbnMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5BZmZvcmQ9e3RoaXMuY2FuSUFmZm9yZCg1LCAnYmVhbl9wbGFudHMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJlYW5fZXh0cmFjdCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlBvdGlvbnM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG90aW9ucyBncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJlYW5fZXh0cmFjdCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50VmFsdWUoNSwgJ2JlYW5fZXh0cmFjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRWYWx1ZSgxLCAncmVkX2JlYW5fcG90aW9ucycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiUmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz1cImJlYW4tcG90aW9uIGJ1dHRvbi1zbWFsbCBiZWFuLXBvdGlvbi0tcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwPVwiUmVkIHBvdGlvbnMgaGFybmVzcyB0aGUgcG93ZXIgb2YgdGhlIGFuZ3J5IGJlYW4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuQWZmb3JkPXt0aGlzLmNhbklBZmZvcmQoNSwgJ2JlYW5fZXh0cmFjdCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYmVhbl9leHRyYWN0ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnRWYWx1ZSg1LCAnYmVhbl9leHRyYWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudFZhbHVlKDEsICdncmVlbl9iZWFuX3BvdGlvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz1cImJlYW4tcG90aW9uIGJ1dHRvbi1zbWFsbCBiZWFuLXBvdGlvbi0tZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXA9XCJHcmVlbiBwb3Rpb25zIGhhcm5lc3MgdGhlIHBvd2VyIG9mIHRoZSBtZWxsb3cgYmVhbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5BZmZvcmQ9e3RoaXMuY2FuSUFmZm9yZCg1LCAnYmVhbl9leHRyYWN0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5iZWFuX2V4dHJhY3QgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudFZhbHVlKDUsICdiZWFuX2V4dHJhY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50VmFsdWUoMSwgJ2JsdWVfYmVhbl9wb3Rpb25zJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJCbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz1cImJlYW4tcG90aW9uIGJ1dHRvbi1zbWFsbCBiZWFuLXBvdGlvbi0tYmx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcD1cIkJsdWUgcG90aW9ucyBoYXJuZXNzIHRoZSBwb3dlciBvZiB0aGUgbWFnaWMgYmVhbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5BZmZvcmQ9e3RoaXMuY2FuSUFmZm9yZCg1LCAnYmVhbl9leHRyYWN0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5iZWFuX2V4dHJhY3QgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudFZhbHVlKDUsICdiZWFuX2V4dHJhY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50VmFsdWUoMSwgJ2JsYWNrX2JlYW5fcG90aW9ucycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwiYmVhbi1wb3Rpb24gYnV0dG9uLXNtYWxsIGJlYW4tcG90aW9uLS1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcD1cIkJsYWNrIHBvdGlvbnMgaGFybmVzcyB0aGUgcG93ZXIgb2YgdGhlIGRhcmsgYmVhbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5BZmZvcmQ9e3RoaXMuY2FuSUFmZm9yZCg1LCAnYmVhbl9leHRyYWN0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbXlzdGVyeV9iZWFuX3BvdGlvbl9hdmFpbGFibGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudFZhbHVlKDUsICdiZWFuX2V4dHJhY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50VmFsdWUoMSwgJ215c3RlcnlfYmVhbl9wb3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIk15c3RlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwiYmVhbi1wb3Rpb24gYnV0dG9uLXNtYWxsIGJlYW4tcG90aW9uLS1teXN0ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwPVwiTXlzdGVyeSBwb3Rpb25zIGhhcm5lc3MgdGhlIHBvd2VyIG9mIHRoZSB1bmtub3duLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkFmZm9yZD17dGhpcy5jYW5JQWZmb3JkKDUsICdiZWFuX2V4dHJhY3QnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidXBncmFkZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJlYW5fcGxhbnRzICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5VcGdyYWRlczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGdyYWRlLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInVwZ3JhZGUtZ3JvdXBfY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBncmFkZUNvbGxlY3RvcignYmVhbl9wbGFudF9sZXZlbCcsIDAuMDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlY3JlbWVudFZhbHVlKDEwMCwgJ2JlYW5zJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz1cImJ1dHRvbi1pY29uLW9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkFmZm9yZD17dGhpcy5jYW5JQWZmb3JkKDEwMCwgJ2JlYW5zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGdyYWRlQ29sbGVjdG9yKCdiZWFuX3BsYW50X2xldmVsJywgMC4wNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50VmFsdWUoMTAwLCAnYmVhbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJtaW51c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz1cImJ1dHRvbi1pY29uLW9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkFmZm9yZD17dGhpcy5jYW5JQWZmb3JkKDEwMCwgJ2JlYW5zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInVwZ3JhZGUtZ3JvdXBfZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGdyYWRlLWdyb3VwX2RldGFpbHNfZGVzY1wiPlVwZ3JhZGUgQmVhbiBQbGFudCBDb2xsZWN0aW9uIFJhdGUgYnkgNSU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBncmFkZS1ncm91cF9kZXRhaWxzX2Nvc3RcIj5Db3N0IDEwMCBCZWFuczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGdyYWRlLWdyb3VwX2RldGFpbHNfbGV2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXZlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKHRoaXMuc3RhdGUuYmVhbl9wbGFudF9sZXZlbCAtIDEpIC8gMC4wNSkudG9GaXhlZCgpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxufVxuIiwiY29uc3QgTW9kZWwgPSB7XG4gIHBvdGlvbnM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnUmVkJyxcbiAgICAgIHR5cGU6ICdyZWQnLFxuICAgICAgY29zdDogNVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0JsdWUnLFxuICAgICAgdHlwZTogJ2JsdWUnLFxuICAgICAgY29zdDogNVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0dyZWVuJyxcbiAgICAgIHR5cGU6ICdncmVlbicsXG4gICAgICBjb3N0OiA1XG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjbGFzc05hbWVzKCkge1xuICAgICAgICBsZXQgY2xhc3NlcyA9ICdzdWItYnV0dG9uJztcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jbGFzc2VzKSB7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBjb3N0Q2xhc3NOYW1lcygpIHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jYW5BZmZvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiAnY29zdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Nvc3QgY2Fubm90LWFmZm9yZCc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lcygpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMucHJvcHMuY2FuQWZmb3JkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUNvbnRlbnRDbGFzcygpIHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy50aXBTaG93bikge1xuICAgICAgICAgICAgcmV0dXJuICdhY3RpdmUgdGlwLWNvbnRlbnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICd0aXAtY29udGVudCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVJY29uQ2xhc3MoKSB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMudGlwU2hvd24pIHtcbiAgICAgICAgICAgIHJldHVybiAndGlwLXRvZ2dsZSBmYSBmYS1jbG9zZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RpcC10b2dnbGUgZmEgZmEtaW5mby1jaXJjbGUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGlwXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXsgdGhpcy5jYWxjdWxhdGVDb250ZW50Q2xhc3MoKX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpcH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpcCBmcm9tICcuL1RpcC5qc3gnO1xuaW1wb3J0IFN1YkJ1dHRvbiBmcm9tICcuL1N1YkJ1dHRvbi5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpcFNob3duOiBmYWxzZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMucHJvcHMub3B0aW9ucyxcbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb246IHRoaXMucHJvcHMub3B0aW9uc1swXS50eXBlLFxuICAgICAgICAgICAgb3B0aW9uc0RvbTogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjbGFzc05hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jbGFzc2VzICsgJyBidXR0b24gdHJpLWJ1dHRvbic7XG4gICAgfVxuXG4gICAgdG9nZ2xlVGlwKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgdGlwU2hvd246ICFwcmV2U3RhdGUudGlwU2hvd25cbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgY29zdENsYXNzTmFtZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNhbkFmZm9yZCkge1xuICAgICAgICAgICAgcmV0dXJuICdjb3N0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnY29zdCBjYW5ub3QtYWZmb3JkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEN1cnJlbnRPcHRpb24ob3B0aW9uKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudE9wdGlvbjogb3B0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZXMoKX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfSBkaXNhYmxlZD17IXRoaXMucHJvcHMuY2FuQWZmb3JkfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb3N0ICYmIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5jb3N0Q2xhc3NOYW1lcygpfT57dGhpcy5wcm9wcy5jb3N0fTwvc3Bhbj5cbn1cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fVxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxldmVsICYmIDxzcGFuIGNsYXNzTmFtZT1cImxldmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIExldmVsOiB7KCh0aGlzLnByb3BzLmxldmVsIC0gMSkgLyAwLjA1KS50b0ZpeGVkKCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxufVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm9wdGlvbnMgJiYgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG59XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGlwICYmIDxUaXAgdGlwPXt0aGlzLnByb3BzLnRpcH0gdGlwU2hvd249e3RoaXMuc3RhdGUudGlwU2hvd259IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZVRpcChlKX0vPlxufVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lLmpzeCc7XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPEdhbWUgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuIl19
