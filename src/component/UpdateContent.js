import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      desc: this.props.data.desc,
      id: this.props.data.id,
    };
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e) {
    console.log(this.state);
    e.preventDefault();
    console.log("----", e.target.name);
    console.log("----", [e.target.name]);
    console.log("----", e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  }
  render() {
    console.log("UPDATE CONTENT RENDER");
    console.log(this.props.data);
    return (
      <article>
        <h2>Update Content</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              this.state.title,
              this.state.desc,
              this.state.id
            );
            alert("submit TEXT");
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
            ></input>
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}
            ></textarea>
          </p>
          <p>
            <input type="submit" name="전송"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
