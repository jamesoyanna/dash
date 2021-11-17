import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Route, Switch } from "react-router-dom";

// Layout
import Layout from './components/Layout';

// Import scss
import './assets/scss/theme.scss';


const App = props =>  {

  return (
      <Router>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
  );
}

export default App;
