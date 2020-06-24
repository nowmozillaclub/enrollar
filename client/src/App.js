import React from "react";

// import "./App.css";

import { BrowserRouter, Route, Switch, useLocation, NavLink } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import SingnIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import signup from "./assets/signup.svg";
import login from "./assets/login.svg";
import { AnimatePresence, motion } from 'framer-motion';

const Routes = ()=>{
  const location = useLocation();
  const change = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1
    }
  }
  const homeVariant = {
    hidden:{
      x:'-100vw'
    },
    visible:{
      x:0,
      transition: { type:'spring', stiffness: 80 }
    },
    exit:{
      x:'-100vw',
      transition:{ ease:'easeInOut' }
    }
  }
  return (
          <div className="App">
            <motion.div className="App__Aside"
              variants={ change }
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              { 
                location && location.pathname === '/sign-in' ? (
                  <motion.img
                    key={1}
                    variants={ change }
                    className="signupimg"
                    src={login}
                    width="500"
                    height="500"
                    alt="cover"
                    />
                ) : (
                  <motion.img
                    key = {2}
                    variants={ change }
                    className="signupimg"
                    src={signup}
                    width="500"
                    height="500"
                    alt="cover"
                    />
                )
              }
              
            </motion.div>
            
            <div className="App__Form"
                variants={ homeVariant }
                initial="hidden"
                animate="visible"
                exit="exit"
            >
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
                </NavLink>{" "}or{" "}
                
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
      <AnimatePresence exitBeforeEnter>
        <Routes />
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App;
