import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import universal from 'react-universal-component';
import About from './About';
import Gallery from './Gallery';
import Article from './Article';

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
    <Route path='/about'>
      <UniversalComponent page='About' />
    </Route>
    <Route exact path='/'>
      <UniversalComponent page='Gallery' />
    </Route>
    <Route path='/article'>
      <UniversalComponent page='Article' />
    </Route>
  </Switch>
</div>
