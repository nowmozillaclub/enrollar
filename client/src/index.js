import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


const routing = (
  <Router>
    <div>

      <hr />
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
	
    </div>

  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
