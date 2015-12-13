import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import launcherApp from './reducers'
import Launcher from './components/launcher';

let store = createStore(launcherApp);

render(
  <Provider store={store}>
    <Launcher />
  </Provider>,
  document.getElementById('app')
);
