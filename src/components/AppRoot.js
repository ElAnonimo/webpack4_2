import React, { Component } from 'react';
import '../main.scss';

class AppRoot extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <src src={require("../images/400.jpg")} alt="" />
        <h1>{this.props.heading}</h1>
        <div className="content">{this.props.bio}</div>
      </div>
    );
  }
}

export default AppRoot;
