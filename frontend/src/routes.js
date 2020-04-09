import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NewProject from './pages/NewProject';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/project/new" component={NewProject} />
      </Switch>
    </BrowserRouter>
  );
}
