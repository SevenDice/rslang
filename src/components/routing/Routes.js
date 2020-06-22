import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import ProfileForm from '../profile-forms/ProfileForm';
import AboutUs from '../aboutus/AboutUs';
import Profile from '../profile/Profile';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Savanna from '../savanna/Savanna';
import EnglishPuzzle from '../englishpuzzle/EnglishPuzzle';
import Sprint from '../sprint/Sprint';
import Speakit from '../speakIt/Speakit';
import Stats from '../stats/Stats';
import Dictionary from '../dictionary/Dictionary';
import Training from '../training/Training'
import Levels from '../training/Levels'

const Routes = props => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute exact path="/stats" component={Stats} />
        <PrivateRoute exact path="/dictionary" component={Dictionary} />
        <PrivateRoute exact path="/savanna" component={Savanna} />
        <PrivateRoute exact path="/englishpuzzle" component={EnglishPuzzle} />
        <PrivateRoute exact path="/sprint" component={Sprint} />
        <PrivateRoute exact path="/speakIt" component={Speakit} />
        <PrivateRoute exact path="/training" component={Training} />
        <PrivateRoute exact path="/training-levels" component={Levels} />

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
