import React, { Component } from "react";

class Content extends Component {
  render() {
    console.log("Content", this);
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

export default Content;
