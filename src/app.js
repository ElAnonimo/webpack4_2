import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// import Counter from './counter';
import AppRoot from './components/AppRoot';
import bio from '../data/bio';
import store from './server/store';
import { testAction } from './server/actions';

const render = (Component) => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <AppContainer>
        <Component heading={bio.heading} bio={bio.bio} />
      </AppContainer>
    </Provider>,
    document.getElementById('react-root')
  );
};

/* render(Counter);

if (module.hot) {
  module.hot.accept('./counter', () => {
    render(require('./counter'));
  });
} */

store.dispatch(testAction('Hiya!'));

render(AppRoot);

if (module.hot) {
  module.hot.accept('./components/AppRoot', () => {
    render(require('./components/AppRoot'));
  });
}
