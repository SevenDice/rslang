import React, { Fragment, useEffect } from 'react';
// import { Link } from 'react-router-dom';
//import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile
  //deleteAccount,
  // auth: { user },
  // profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile(localStorage.getItem('id'));
  }, [getCurrentProfile]);
    return (
      <Fragment>
        <h1 className="large text-primary">Главная</h1>
        <p className="lead">
          <i /> Добро пожаловать, {localStorage.getItem('email')}
        </p>
        {(
          <Fragment>
            <DashboardActions />
          </Fragment>
        ) }
      </Fragment>
    )
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile})(
  Dashboard
);
