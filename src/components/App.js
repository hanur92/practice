import React, { Component } from "react";
import Counter from "./Counter";
import CounterContainer from "../containers/CounterContainer";

class App extends Component {
  render() {
    console.log({ Counter });
    return (
      <div>
        <Counter />

        <CounterContainer />
      </div>
    );
  }
}

export default App;
