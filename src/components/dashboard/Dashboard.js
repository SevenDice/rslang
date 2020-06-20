import React, { Fragment, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
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
        <i className="fas fa-user" /> Добро пожаловать, {localStorage.getItem('email')}
      </p>
      {/* profile !== null ? */ (
        <Fragment>
          <DashboardActions />

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount(localStorage.getItem('id'))}>
              <i className="fas fa-user-minus" /> Удалить мой аккаунт
            </button>
          </div>
        </Fragment>
      ) /* : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      ) */}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
