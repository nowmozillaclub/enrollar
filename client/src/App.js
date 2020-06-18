import React, { Fragment } from 'react';


// import "./App.css";

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import HomePage  from './pages/HomePage';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}


export default App;


