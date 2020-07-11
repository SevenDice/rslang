import React, { Fragment, useEffect } from 'react';
// import { Link } from 'react-router-dom';
//import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  auth: { user }
}) => {
  useEffect(() => {
    getCurrentProfile(localStorage.getItem('id'));
  }, [getCurrentProfile]);
  return (
    <section className='wrapper style5'>
      <div className='inner'>
        <h1 className='large text-primary'>Главная</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Добро пожаловать, {user?.name ?? user?.email}
        </p>
        <Fragment>
          <DashboardActions />
        </Fragment>
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
