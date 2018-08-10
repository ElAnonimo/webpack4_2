import React, { Component } from 'react';
import post from '../../data/post.md';
import '../main.scss';

class AppRoot extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <img src={require("../images/400.jpg")} alt="" />
        <h1>{post.title}</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.__content }} />
      </div>
    );
  }
}

export default AppRoot;
