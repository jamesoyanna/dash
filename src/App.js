import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';

import { Route, Switch } from "react-router-dom";


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
  );
}

export default App;
