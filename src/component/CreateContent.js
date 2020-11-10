import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    console.log("Content", this);
    return (
      <article>
        <h2>CreateContent</h2>
        {/* {this.props.desc}
        {console.log(this.props.title)}
        {console.log(this.props.desc)} */}
      </article>
    );
  }
}

export default CreateContent;
