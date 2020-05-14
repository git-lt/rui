"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

var Alert = function Alert(_ref) {
  var message = _ref.message,
      type = _ref.type;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rui-alert"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: type === 'error' ? 'red' : 'blue'
  }, message), /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "primary"
  }, "\u786E\u5B9A"));
};

var _default = Alert;
exports.default = _default;