import React, { Component } from "react";
const handleClick = () => {
  return alert("핸들클릭실행되었습니다");
};
class Subject extends Component {
  render() {
    console.log("Subject", this);
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
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
