import React, { Component } from "react";
import Buttons from "../components/Buttons";
import CounterListContainer from "./CounterListContainer";
import Counter from "../reducers/index";
import { connect } from "react-redux";
import * as actions from "../actions";

import { getRandomColor } from "../utils";
class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div>
        <div className="App">
          <Buttons onCreate={onCreate} onRemove={onRemove}></Buttons>
        </div>
        <CounterListContainer />
        {/* <Counter></Counter> */}
      </div>
    );
  }
}

// 액션함수 준비
const mapToDispatch = (dispatch) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: (index) => dispatch(actions.remove(index)),
});

// 리덕스에 연결을 시키고 내보낸다
export default connect(null, mapToDispatch)(App);
