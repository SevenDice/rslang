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
import Speakit from '../speakIt/Speakit';
import Statistics from '../statistics/Statistics';
import StatisticsDay from '../statistics/StatisticsDay';
import Dictionary from '../dictionary/Dictionary';
import Training from '../training/Training';
import Audiocall from '../audiocall/Audiocall';

const Routes = (props) => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/aboutus' component={AboutUs} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/edit-profile' component={ProfileForm} />
        <PrivateRoute exact path='/statistics' component={Statistics} />
        <PrivateRoute exact path='/statisticsday' component={StatisticsDay} />
        <PrivateRoute exact path='/dictionary' component={Dictionary} />
        <PrivateRoute exact path='/savanna' component={Savanna} />
        <PrivateRoute exact path='/audiocall' component={Audiocall} />
        <PrivateRoute exact path='/speakIt' component={Speakit} />
        <PrivateRoute exact path='/training' component={Training} />

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
