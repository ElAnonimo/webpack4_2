import React from 'react';
import { connect } from 'react-redux';
import '../css/Article.scss';
import NotFound from './NotFound';
import { fetchArticle } from '../server/actions';

class Article extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // site and slug come from ./Routes, see <UniversalComponent page='Article' site={site} match={match} />
    this.props.dispatch(fetchArticle(this.props.site, this.props.match.params.slug));
  }

  render() {
    const siteConfig = require(`../../data/${this.props.site}/siteConfig`);
    // const post = require('../../data/post.md');
    try {     // try for when slug in props.match.params.slug isn't 'post' or 'post2'
      // const post = require(`../../data/${props.site}/${props.match.params.slug}.md`);
      // const imagePath = require('../images/400.jpg');
      const imagePath = require(`../images/${siteConfig.aboutImage}`);
      /* const posterStyle = {
        backgroundImage: `url(${post.posterImage})`
      }; */

      // import(`../css/${props.site}/theme.scss`);
      // for HMR require is needed in place of import
      require(`../css/${this.props.site}/theme.scss`);

      return (
        <div className='article'>
          {/* <img src={ imagePath } alt="" /> */}
          {/* <div className="poster" style={posterStyle} /> */}
          {/* <h1>{ post.title }</h1> */}
          <h1>{ this.props.title }</h1>
          {/* <div className="content" dangerouslySetInnerHTML={{__html: post.__content}} /> */}
          <div className="content" dangerouslySetInnerHTML={{__html: this.props.__content}} />
        </div>
      );
    } catch(ex) {
      return <NotFound />
    }
  }
}

export default connect((state) => ({
  title: state.text,
  __content: state.content
}))(Article);
