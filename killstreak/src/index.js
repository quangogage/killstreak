import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route component={App} /> {/* Always render this */}
    </div>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
