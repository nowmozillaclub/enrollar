import React, { Fragment } from "react";

// import "./App.css";

import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingnIn from "./pages/SignIn";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <div className="App">
            <div className="App__Aside"></div>
            <div className="App__Form">
              <div className="PageSwitcher">
                <NavLink
                  to="/sign-in"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign In
                </NavLink>
                <NavLink
                  exact
                  to="/"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign Up
                </NavLink>
              </div>

              <div className="FormTitle">
                <NavLink
                  to="/sign-in"
                  activeClassName="FormTitle__Link--Active"
                  className="FormTitle__Link"
                >
                  Sign In
                </NavLink>{" "}
                or{" "}
                <NavLink
                  exact
                  to="/"
                  activeClassName="FormTitle__Link--Active"
                  className="FormTitle__Link"
                >
                  Sign Up
                </NavLink>
              </div>

              {/* <Route exact path="/" component={SignUpForm}></Route> */}
              <Route path="/sign-in" component={SingnIn}></Route>
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
