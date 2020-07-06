import React from "react";
import { Route, useLocation, withRouter } from "react-router-dom";
import Auth from "./pages/BesideAuth";
import Homepage from './pages/HomePage';
import Search from './pages/searchLayout/search';
// import Navbar from './pages/layout/Navbar';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <span location={ location } key={ location.key }>
        <Route exact path="/sign-up" component={ withRouter(Auth) } />
        <Route exact path="/sign-in" component={ withRouter(Auth) } />
        <Route path="/home" component={ withRouter(Search) } />
        <Route exact path="/" component={ withRouter(Homepage) } />
      </span>
    </AnimatePresence>
  )
}

export default App;
