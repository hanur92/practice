import React from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";
import { List } from "immutable";
import "../CSS/CounterList.css";
const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }) => {
  const counterList = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      {...counter.toJS()}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
    ></Counter>
  ));
  console.log(counters);
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
