import React from "react";

// import "./App.css";

import { BrowserRouter, Route, Switch, useLocation, NavLink } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import SingnIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import signup from "./assets/signup.svg";
import login from "./assets/login.svg";

const Routes = ()=>{
  const location = useLocation();
  return (
          <div className="App">
            <div className="App__Aside">
              { 
                location && location.pathname === '/sign-in' ? (
                  <img
                  className="signupimg"
                  src={login}
                  width="500"
                  height="500"
                  alt="cover"
                  ></img>
                ) : (
                  <img
                  className="signupimg"
                  src={signup}
                  width="500"
                  height="500"
                  alt="cover"
                  ></img>
                )
              }
              
            </div>
            
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
                  to="/sign-up"
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
                </NavLink>
                
                <NavLink
                  to="/sign-up"
                  activeClassName="FormTitle__Link--Active"
                  className="FormTitle__Link"
                >
                  Sign Up
                </NavLink>
              </div>
              <Switch>
                <Route path="/sign-up" component={SignUp}></Route>
                <Route path="/sign-in" component={SingnIn}></Route>
              </Switch>
            </div>
          </div>


  );
}
function App() {
  return(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App;
