import React from "react";
import Transaction from "./components/Transaction";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

const Routes = () => {
  const history = useHistory();
  return (
    <Router>
      <Switch history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/transaction" component={Transaction} />
      </Switch>
    </Router>
  );
};

export default Routes;