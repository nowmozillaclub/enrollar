import React from "react";
import { motion } from 'framer-motion'
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import {  useLocation, NavLink } from "react-router-dom";
import Test from './test';
import TestAgain from './test2';
import Navbar from './layout/Navbar';

const Routes = (props) => {
    const location = useLocation();
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
    const elem = props.match.path ==="/sign-up" ? <SignUp/> : <SignIn/>

    return (
      <>
      <Navbar props={props}/>
      <div className="row App">
        <motion.div className="col s12 l6 App__Aside">
          {
            location && location.pathname === '/sign-in' ? (
              <Test />
            ) : (
                <TestAgain />
              )
          }
        </motion.div>
  
        <div className="col s12 l6 App__Form"
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
          {
            elem
          }
        </div>
      </div>
      </>
    );
  }

export default Routes;