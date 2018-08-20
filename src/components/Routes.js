import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import universal from 'react-universal-component';
/* import About from './About';
import Gallery from './Gallery';
import Article from './Article'; */

const UniversalComponent = universal(props => import(`./${props.page}`));

export default () => <div>
  <div className="nav">
    <Link to='/about'>About</Link>
    <Link to='/'>Gallery</Link>
    <Link to='/article'>Article</Link>
  </div>
  {/* <Route path='/about' component={About} />
  <Route exact path='/' component={Gallery} />
  <Route path='/article' component={Article} /> */}
  <Switch>
    <Route path='/about' render={({ staticContext }) => {
      const site = staticContext ? staticContext.site : location.hostname.split('.')[0];
      return <UniversalComponent page='About' site={site} />}}
    />
    <Route exact path='/'>
      <UniversalComponent page='Gallery' />
    </Route>
    <Route path='/article/:slug' render={({ staticContext, match }) => {
      const site = staticContext ? staticContext.site : location.hostname.split('.')[0];
      return <UniversalComponent page='Article' site={site} match={match} />}}
    />
    {/* <Route path='/article'>
      <UniversalComponent page='Article' />
    </Route> */}
  </Switch>
</div>
