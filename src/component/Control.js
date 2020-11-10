import React, { Component } from "react";

class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("CREATE");
            }.bind(this)}
          >
            CREATE
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("UPDATE");
            }.bind(this)}
          >
            UPDATE
          </a>
        </li>
        <li>
          <input
            type="button"
            value="DELETE"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("DELETE");
            }.bind(this)}
          ></input>
        </li>
      </ul>
    );
  }
}

export default Control;
