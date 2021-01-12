import "./CSS/App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import React, { Component } from "react";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      //state값이  바뀌면   렌더가 다시 실행
      mode: "WELCOME",
      selected_content_id: 2,
      WELCOME: { title: "welcome!!", desc: "HELLO REACT!!!" },
      subject: { title: "WEB", sub: "world wide web" },
      contents: [
        { id: 1, title: "제목-1", desc: "내용-1" },
        { id: 2, title: "제목-2", desc: "내용-2" },
        { id: 3, title: "제목-3", desc: "내용-3" },
      ],
    };
  }
  //랜더보다 먼저 실행되며 초기화하는 코드
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent() {
    console.log("APP RENDER");
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === "WELCOME") {
      _title = this.state.WELCOME.title;
      _desc = this.state.WELCOME.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "READ") {
      var _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode === "CREATE") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            console.log(_title, _desc);
            this.max_content_id = this.max_content_id + 1;
            //배열일시 Array.from(this.state.contents);복사
            //객체일시 Object.assign({},대상객체); 객체복사
            var _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            // let result = this.state.contents.concat({
            //   //push는 오리지널을 변경하므로 concat사용(성능개선)
            //   id: this.max_content_id,
            //   title: _title,
            //   contents: _desc,
            // });
            this.setState({
              contents: _contents,
              mode: "READ",
              selected_content_id: this.max_content_id,
            });
            console.log("---콘텐츠확인---", this.state.contents);
            //add content to this.state.contents
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "UPDATE") {
      _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            console.log(_title, _desc);
            //배열일시 Array.from(this.state.contents);복사
            //객체일시 Object.assign({},대상객체); 객체복사
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i = i + 1;
            }

            this.setState({
              contents: _contents,
              mode: "READ",
            });
            console.log("---콘텐츠확인---", this.state.contents);
            //add content to this.state.contents
          }.bind(this)}
        ></UpdateContent>
      );
    }

    return _article;
  }
  render() {
    console.log("Apprender");
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
              if (_mode === "DELETE") {
                if (window.confirm("정말 삭제하시겠습니까?")) {
                  var _contents = Array.from(this.state.contents);
                  var i = 0;
                  while (i < _contents.length) {
                    if (_contents[i].id === this.state.selected_content_id) {
                      _contents.splice(i, 1);
                      break;
                    }
                    i = i + 1;
                  }
                  this.setState({ contents: _contents, mode: "WELCOME" });
                  alert("삭제가 완료되었습니다.");
                }
              }
              this.setState({ mode: _mode });
            }.bind(this)}
          ></Control>
          {this.getContent()}
        </header>
      </div>
    );
  }
}

// export default App;
