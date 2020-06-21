import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser, login } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";
import "./templates/mycss.css";
import Burgermenue from "./components/layout/Burgermenue";

const App = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthToken(localStorage.getItem("token"));
    }
    if (localStorage.getItem("id")) {
      store.dispatch(loadUser(localStorage.getItem("id")));
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          {/* <Burgermenue /> */}
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
