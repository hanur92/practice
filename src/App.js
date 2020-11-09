import "./App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Child1 props1_1="Child1-1"></Child1>
      </header>
    </div>
  );
};

export default App;
