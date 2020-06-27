import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Auth from "./pages/BesideAuth";
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter>
        <Switch location={ location } key={ location.key }>
          <Route path="/sign-up" component={ Auth } />
          <Route path="/sign-in" component={ Auth } />
        </Switch>
      </AnimatePresence>
  )
}

export default App;
