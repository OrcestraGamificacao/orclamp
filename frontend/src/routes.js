import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";
import ConfirmProject from "./pages/ConfirmProject";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/project/new" exact component={NewProject} />
        <Route path="/project/new/confirm" component={ConfirmProject} />
      </Switch>
    </BrowserRouter>
  );
}
