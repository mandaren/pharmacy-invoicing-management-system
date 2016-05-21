'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _action = require('./action');

var actions = _interopRequireWildcard(_action);

var _reactImmutableRenderMixin = require('react-immutable-render-mixin');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        counter: state.counter.present
    };
}, function (dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)(actions, dispatch));
}), _dec(_class = (0, _reactImmutableRenderMixin.immutableRenderDecorator)(_class = function (_Component) {
    _inherits(Counter, _Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Counter).call(this, props));
    }

    _createClass(Counter, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var incrementCounter = _props.incrementCounter;
            var decrementCounter = _props.decrementCounter;
            var counter = _props.counter;

            return _react2.default.createElement(
                'div',
                { className: 'posts' },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Counter'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'This counter is here to show the state is conserved as you navigate through the app.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'b',
                        null,
                        'Counter: ',
                        counter,
                        ' times'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: incrementCounter },
                        '+'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: decrementCounter },
                        '-'
                    )
                )
            );
        }
    }]);

    return Counter;
}(_react.Component)) || _class) || _class);
exports.default = Counter;