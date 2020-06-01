import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import NewProject from "../src/pages/NewProject";
import ConfirmProject from "../src/pages/ConfirmProject";
import Projects from "../src/pages/Projects";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/register" component={Register} />
        <Route path="/project/new" exact component={NewProject} />
        <Route path="/project/new/confirm" component={ConfirmProject} />
      </Switch>
    </BrowserRouter>
  );
}
