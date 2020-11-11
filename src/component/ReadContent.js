import React, { Component } from "react";

class ReadContent extends Component {
  render() {
    console.log("READ CONTENT RENDER");
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
        {console.log(this.props.title)}
        {console.log(this.props.desc)}
      </article>
    );
  }
}

export default ReadContent;
