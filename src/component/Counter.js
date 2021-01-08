import React from "react";
import PropTypes from "prop-types";
import "../CSS/Counter.css";

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
  <div
    className="Counter"
    onClick={onIncrement}
    onContextMenu={(e) => {
      e.preventDefault();
      onDecrement();
    }}
    onDoubleClick={onSetColor}
    style={{ backgroundColor: color }}
  >
    {number}
  </div>;
};

Counter.prototype = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
};

Counter.defaultProps = {
  number: 0,
  color: "black",
  onIncrement: () => {
    console.warn("onIncNotDefined");
  },
  onDecrement: () => {
    console.warn("onDecNotDefined");
  },
  onSetColor: () => {
    console.warn("onSetColorNotDefined");
  },
};

export default Counter;