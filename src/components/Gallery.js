import React from 'react';
import '../css/Gallery.scss';

const getBundle = () => {
  import(/* webpackChunkName: 'lodash' */ 'lodash').then((_) => {
    console.log('lodash imported:', _);
  });
};

export default () => <div>
  <h1 onClick={getBundle}>Gallery</h1>
</div>;
