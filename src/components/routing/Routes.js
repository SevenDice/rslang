import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Register from '../auth/Register';
// import Login from '../auth/Login';
import Alert from '../layout/Alert';
// import Dashboard from '../dashboard/Dashboard';
// import ProfileForm from '../profile-forms/ProfileForm';
// import Profiles from '../profiles/Profiles';
// import Profile from '../profile/Profile';
// import NotFound from '../layout/NotFound';
// import PrivateRoute from '../routing/PrivateRoute';

//rs-land components
import Learn from '../rs-lang_pages/Learn'

const Routes = props => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        {/* <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <Route component={NotFound} /> */}

        <Route exact path="/learn" component={Learn} />
      </Switch>
    </section>
  );
};

export default Routes;
