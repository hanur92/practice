import CounterList from "../components/CounterList";
import * as actions from "../actions";
import { connect } from "react-redux";
import { getRandomColor } from "../utils";

// store 안의 state 값을 props 로 연결
const mapStateToProps = (state) => ({
  counters: state.get("counters"),
});

/* 
    액션 생성자를 사용하여 액션을 생성,
    해당 액션을 dispatch 하는 함수를 생성,
    이를 props 로 연결.
*/

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (index) => dispatch(actions.increment(index)),
  onDecrement: (index) => dispatch(actions.decrement(index)),
  onSetColor: (index) => {
    const color = getRandomColor();
    dispatch(actions.setColor({ index, color }));
  },
});

const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);
// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
export default CounterListContainer;
