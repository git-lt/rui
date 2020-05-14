import "antd/es/button/style";
import _Button from "antd/es/button";
import React from 'react';

var Alert = function Alert(_ref) {
  var message = _ref.message,
      type = _ref.type;
  return /*#__PURE__*/React.createElement("div", {
    className: "rui-alert"
  }, /*#__PURE__*/React.createElement("div", {
    className: type === 'error' ? 'red' : 'blue'
  }, message), /*#__PURE__*/React.createElement(_Button, {
    type: "primary"
  }, "\u786E\u5B9A"));
};

export default Alert;