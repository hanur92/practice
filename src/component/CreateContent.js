import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    console.log("CREATE CONTENT RENDER");
    return (
      <article>
        <h2>CreateContent</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
            alert("submit TEXT");
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit" name="전송"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
