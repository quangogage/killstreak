import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import PageHandler from './components/Pages/PageHandler';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route component={App} /> {/* Always render this */}
      <Route path='/' component={PageHandler} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
