import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import Counter from './counter';
import AppRoot from './components/AppRoot';
import bio from '../data/bio';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component heading={bio.heading} bio={bio.bio} />
    </AppContainer>,
    document.getElementById('react-root')
  );
};

/* render(Counter);

if (module.hot) {
  module.hot.accept('./counter', () => {
    render(require('./counter'));
  });
} */

render(AppRoot);

if (module.hot) {
  module.hot.accept('./components/AppRoot', () => {
    render(require('./components/AppRoot'));
  });
}
