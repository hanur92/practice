import React, { Component } from "react";
import Counter from "../components/Counter";
import CounterContainer from "./CounterContainer";

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
