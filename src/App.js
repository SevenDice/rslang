import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './assets/sass/main.scss';

document.querySelector('body').className = 'landing is-preload';

setTimeout(() => {
  document.querySelector('body').className = 'landing';
}, 500);

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    if(localStorage.token) {
      store.dispatch(loadUser(localStorage.getItem('id')));
    }
    
  }, []);

  return (
    <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route component={Routes} />
            </Switch>
          </Fragment>
        </Router>
    </Provider>
  );
};

export default App;
