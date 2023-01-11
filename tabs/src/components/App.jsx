import React from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider } from "@fluentui/react-northstar";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";

import Privacy from "./Privacy";
import Tab from "./Tab";
import Tabb from "./Tabb";
import "./App.css";


/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  return (
    <Provider>
      <Router>
        <Route exact path="/">
          <Redirect to="/tab" />
        </Route>
        <>
          <Route exact path="/tab" component={Tab} />
          <Route exact path="/tabb" component={Tabb} />
          <Route exact path="/privacy" component={Privacy} />
        </>
      </Router>
    </Provider>
  );
}
