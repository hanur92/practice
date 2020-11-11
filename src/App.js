import "./CSS/App.css";
import Subject from "./component/Subject";
import TOC from "./component/TOC";
import ReadContent from "./component/ReadContent";
import React, { Component } from "react";
import Control from "./component/Control";
import CreateContent from "./component/CreateContent";
class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      //state값이  바뀌면   렌더가 다시 실행
      mode: "CREATE",
      selected_content_id: 2,
      WELCOME: { title: "welcome!!", desc: "HELLO REACT!!!" },
      subject: { title: "WEB", sub: "world wide web" },
      contents: [
        { id: 1, title: "김동석", desc: "섹스보지털" },
        { id: 2, title: "강한얼", desc: "섹스" },
        { id: 3, title: "이민혁", desc: "쌉돼지" },
      ],
    };
  }
  //랜더보다 먼저 실행되며 초기화하는 코드
  render() {
    console.log("APP RENDER");
    let _title,
      _desc,
      _article = null;
    if (this.state.mode === "WELCOME") {
      _title = this.state.WELCOME.title;
      _desc = this.state.WELCOME.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "READ") {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          console.log("타이틀", _title);
          _desc = data.desc;
          console.log("디슼", _desc);
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "CREATE") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            console.log(_title, _desc);
            this.max_content_id = this.max_content_id + 1;
            //배열일시 Array.from(this.state.contents);복사
            //객체일시 Object.assign({},대상객체); 객체복사
            let result = this.state.contents.concat({
              //push는 오리지널을 변경하므로 concat사용(성능개선)
              id: this.max_content_id,
              title: _title,
              contents: _desc,
            });
            this.setState({
              contents: result,
            });
            console.log("---콘텐츠확인---", this.state.contents);
            //add content to this.state.contents
          }.bind(this)}
        ></CreateContent>
      );
    }
    console.log("render", this);
    return (
      <div className="App">
        <header className="App-header">
          <Subject
            title={this.state.subject.title}
            sub={this.state.subject.sub}
            onChangePage={function () {
              this.setState({
                mode: "WELCOME",
              });
            }.bind(this)}
          ></Subject>
          {/* <Subject title="React" sub="for UI"></Subject> */}
          <TOC
            onChangePage={function (id) {
              // alert("Hiiii");
              this.setState({
                mode: "READ",
                selected_content_id: Number(id),
              });
            }.bind(this)}
            data={this.state.contents}
          ></TOC>
          <Control
            onChangeMode={function (_mode) {
              this.setState({ mode: _mode });
            }.bind(this)}
          ></Control>
          {_article}
        </header>
      </div>
    );
  }
}

export default App;
