import React, { Component } from "react";
const handleClick = () => {
  return alert("핸들클릭실행되었습니다");
};
class Subject extends Component {
  render() {
    console.log("SUBJECT RENDER");
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
              alert("Hi there!");
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
            {/* 컴포넌트에서 자기로 전달된 프롭스의 값을 바꾸는 것은 금지, 컴포넌트 밖에서 프롭스를 바꾸는 것은 가능 */}
            {/* 상위컴포넌트가 하위컴포넌트로 명령할때는 프롭스 하위가 상위로 명령할때는 이벤트*/}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
