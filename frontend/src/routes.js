import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NewProject from './pages/NewProject';
import ConfirmProject from './pages/ConfirmProject';
import Register from './pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/project/new" exact component={NewProject} />
        <Route path="/project/new/confirm" component={ConfirmProject} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
