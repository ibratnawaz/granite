import React from "react";
import Dashboard from "components/Dashboard";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <h1>This is app.jsx component</h1>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
