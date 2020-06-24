import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./pages/header";
import Footer from "./pages/footer";

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
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// serviceWorker.unregister();
