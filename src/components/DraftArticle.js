import React from 'react';
import '../css/Article.scss';
import NotFound from './NotFound';

export default (props) => {
  const siteConfig = require(`../../data/${props.site}/siteConfig`);
  // const post = require('../../data/post.md');
  try {     // try for when slug in props.match.params.slug doesn't exist
    const post = require(`../../data/${props.site}/${props.match.params.slug}.md`);
    // const imagePath = require('../images/400.jpg');
    const imagePath = require(`../images/${siteConfig.aboutImage}`);
    const posterStyle = {
      backgroundImage: `url(${post.posterImage})`
    };

    // import(`../css/${props.site}/theme.scss`);
    // for HMR require is needed in place of import
    require(`../css/${props.site}/theme.scss`);

    return (
      <div className='article'>
        {/* <img src={ imagePath } alt="" /> */}
        <div className="poster" style={posterStyle} />
        <h1>{ post.title }</h1>
        <div className="content" dangerouslySetInnerHTML={{__html: post.__content}} />
      </div>
    );
  } catch(ex) {
    return <NotFound />
  }
};
