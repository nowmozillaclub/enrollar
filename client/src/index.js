import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import * as serviceWorker from "./serviceWorker";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// const routing = (

//     <div>
//       {/* <Header />
//       <hr /> */}
//       <Switch>
//         <Route exact path="/" component={App} />
//       </Switch>
//       {/* <Footer /> */}
//     </div>
// );
ReactDOM.render(
    <App />
  , document.getElementById("root")
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// serviceWorker.unregister();
