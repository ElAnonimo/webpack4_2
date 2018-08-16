import React from 'react';
import '../css/About.scss';

export default (props) => {
  const siteConfig = require(`../../data/${props.site}/siteConfig`);
  // const post = require('../../data/post.md');
  const post = require(`../../data/${props.site}/bio.md`);
  // const imagePath = require('../images/400.jpg');
  const imagePath = require(`../images/${siteConfig.aboutImage}`);

  return (
    <div>
      <img src={ imagePath } alt="" />
      <h1>{ post.title }</h1>
      <div className="content" dangerouslySetInnerHTML={ {__html: post.__content} } />
    </div>
  );
};
