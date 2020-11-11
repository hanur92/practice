import React, { Component } from "react";
//필요없는 렌더링을 방지하는 방법 + 성능향상 -> shouldComponentUpdate(){}
//특별한 를 사용하지 않으면 기본적으로 모든 컴포넌트들은 계속해서 랜더링된다.

class TOC extends Component {
  shouldComponentUpdate(
    newProps,
    /*대상 컴포넌트의 새로운 특성 값*/ newState /*대상 컴포넌트의 새로운 스테이트 값*/
  ) {
    console.log("newProps", newProps);
    console.log("this.props", this.props);
    console.log("TOC render SCU", newProps.data, this.props.data);
    return this.props.data === newProps.data ? false : true;
  }
  //SCU가 true를 반환하면 TOC컴포넌트의 부모컴포넌트의 스테이트 값이 바뀌면 부모컴포넌트의 자식컴포넌트들은 모두 랜더가 호출됨
  //SCU가 false를 반환하면 TOC컴포넌트의 랜더함수가 호출되지 않는다.
  render() {
    console.log("TOC RENDER");
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
            href={"/content/" + data[i].id}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
