import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import ProfileForm from '../profile-forms/ProfileForm';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

//rs-land components
import Learn from '../rs-lang_pages/Learn'
import Games from '../rs-lang_pages/Games'
import Vocabulary from '../rs-lang_pages/Vocabulary'
import Settings from '../rs-lang_pages/Settings'
import Statistics from '../rs-lang_pages/Statistics'
import About from '../rs-lang_pages/About'
import Promopage from '../rs-lang_pages/Promopage'

const Routes = props => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />

        <PrivateRoute exact path="/learn" component={Learn} />
        <PrivateRoute exact path="/games" component={Games} />
        <PrivateRoute exact path="/vocabulary" component={Vocabulary} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <PrivateRoute exact path="/statistics" component={Statistics} />
        <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute exact path="/promopage" component={Promopage} />

        <Route component={NotFound} />

        
      </Switch>
    </section>
  );
};

export default Routes;
