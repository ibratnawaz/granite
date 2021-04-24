import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "components/Dashboard";
import CreateTask from "components/Tasks/CreateTask";

const App = () => {
  return (
    <Router>
      <h1>Welcome</h1>
      <Switch>
        <Route exact path="/tasks/create" component={CreateTask} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
