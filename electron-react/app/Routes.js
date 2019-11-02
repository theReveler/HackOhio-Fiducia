import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import RecordPage from './containers/RecordPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.RECORD} component={RecordPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
