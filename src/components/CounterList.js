import React from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";
import { Map, List } from "immutable";
import "../CSS/CounterList.css";

const CounterList = ({ counters, onSetColor, onIncrement, onDecrement }) => {
  const counterList = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      {...counter.toJS()}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
      onSetColor={onSetColor}
    ></Counter>
  ));

  return <div className="CounterList">{counterList}</div>;
};

CounterList.propTypes = {
  // counters: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     color: PropTypes.string,
  //     number: PropTypes.number,
  //   })
  // ),
  counters: PropTypes.instanceOf(List),
  onSetColor: PropTypes.func,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

CounterList.defaultProps = {
  counters: {},
  onIncrement: () => console.warn("onIncrement not defined"),
  onDecrement: () => console.warn("onDecrement not defined"),
  onSetColor: () => console.warn("onSetColor not defined"),
};

export default CounterList;
