import React, { Fragment } from 'react';


// import "./App.css";

import {
BrowserRouter,
Route,
Switch
} from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
return (
<Fragment>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={SearchPage} />
        </Switch>
    </BrowserRouter>
</Fragment>
);
}


export default App;