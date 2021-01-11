import Counter from "../component/Counter";
import * as actions from "../actions";
import { connect } from "react-redux";
import getRandomColor from "../utils/index";
// store 안의 state 값을 props 로 연결해줍니다./*컴포넌트에 상태를 연결*/
const mapStateToProps = (state) => ({
  color: state.color,
  number: state.number,
});
/* 
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
    컴포넌트에 액션함수 연결*/
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    dispatch(actions.set_color(getRandomColor()));
  },
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const CounterContainer = connect(
  mapStateToProps /*컴포넌트에 상태를 연결*/,
  mapDispatchToProps /*컴포넌트에 액션함수 연결*/
)(Counter);
export default CounterContainer;
