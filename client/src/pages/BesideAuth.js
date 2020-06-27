import React from "react";
import { motion } from 'framer-motion'
import SingnIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import {  Route, Switch, useLocation, NavLink } from "react-router-dom";
import Test from './test';
import TestAgain from './test2';

const Routes = (props) => {
    const location = useLocation();
    // const change = {
    //   hidden: {
    //     opacity: 0
    //   },
    //   visible: {
    //     opacity: 1
    //   }
    // }
    // const image = {
    //   hidden: {
    //     opacity: 0,
    //     y:'-100vw'
    //   },
    //   visible: {
    //     opacity: 1,
    //     y:'0'
    //   },
    //   exit:{
    //     y:'100vw',
    //     transition: { ease: 'easeInOut' }
    //   }
    // }
    const homeVariant = {
      hidden: {
        x: '-100vw'
      },
      visible: {
        x: 0,
        transition: { type: 'spring', stiffness: 80 }
      },
      exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
      }
    }
    return (
      <div className="App">
        <motion.div className="App__Aside"
          
        >
          {
            location && location.pathname === '/sign-in' ? (
              <Test />
            ) : (
                <TestAgain />
              )
          }
  
        </motion.div>
  
        <div className="App__Form"
          variants={homeVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="PageSwitcher">
            <div className="switch">
              <label>
                <NavLink
                  to="/sign-in"
                  activeClassName="clicked"
                  className="switcher"
                  id="signin-switch"
                >
                  Sign In
                      </NavLink>
                <input type="checkbox" onClick={()=>{
                    props.match.path === "/sign-up" ? 
                        props.history.push('/sign-in') : props.history.push('/sign-up') 
                }}/>
                <span className="lever"></span>
                <NavLink
                  to="/sign-up"
                  className="switcher"
                  activeClassName="clicked"
                  id="signup-switch"
                >
                  Sign Up
                      </NavLink>
              </label>
            </div>
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

export default Routes