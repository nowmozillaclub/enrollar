import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Auth from "./pages/BesideAuth";
import Homepage from './pages/HomePage'
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter>
        <Switch location={ location } key={ location.key }>
          <Route exact path="/" component={ Homepage } />
          <Route path="/sign-up" component={ Auth } />
          <Route path="/sign-in" component={ Auth } />
        </Switch>
      </AnimatePresence>
  )
}

export default App;
