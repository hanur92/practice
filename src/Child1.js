import React from "react";

const Child1 = (props1_1) => {
  const handleClick = () => {
    return alert("핸들클릭실행되었습니다");
  };
  return (
    <div>
      {console.log(props1_1)}
      <div>{props1_1.first} is Child1 - props_1's FirstProps </div>
      <div>{props1_1.second} is Child1's - props_1 SecondProps </div>
      <div>{props1_1.third}is Child1's - props_1 SecondProps </div>
      <button onClick={handleClick}>Click me</button>
      {console.log(props1_1)}
    </div>
  );
};

export default Child1;
