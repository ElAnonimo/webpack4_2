import React from 'react';
import post from '../../data/post.md';

export default () => <div>
  <img src={require("../images/400.jpg")} alt="" />
  <h1>{post.title}</h1>
  <div className="content" dangerouslySetInnerHTML={{ __html: post.__content }} />
</div>;
