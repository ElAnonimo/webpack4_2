import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Gallery from './Gallery';
import Article from './Article';

export default () => <div>
  <div className="nav">
    <Link to='/about'>About</Link>
    <Link to='/'>Gallery</Link>
    <Link to='/article'>Article</Link>
  </div>
  <Route path='/about' component={About} />
  <Route exact path='/' component={Gallery} />
  <Route path='/article' component={Article} />
</div>
