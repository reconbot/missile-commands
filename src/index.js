import React from 'react';
import ReactDOM from 'react-dom';
import Launcher from './components/launcher';
import launcherStore from './stores/launcher'

ReactDOM.render(
  <div>
    <Launcher store={launcherStore} />
  </div>,
  document.getElementById('app')
);
