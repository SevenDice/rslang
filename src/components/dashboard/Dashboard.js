import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import DashboardActions from './DashboardActions';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';


const Dashboard = ({
  getCurrentProfile,
}) => {
  
  const username = useSelector((state) => state.auth.user.name)
  //const username = localStorage.getItem('name');
  const userid = localStorage.getItem('id');
  useEffect(() => {
    getCurrentProfile(userid);
  }, [getCurrentProfile, userid]);
  
  return (
    username === null ? (<Spinner />):(
    <section className='wrapper style5'>
        <div className='inner'>
          <h1 className='large text-primary'>Главная</h1>
          <p className='lead'>
            <i className='fas fa-user' /> Добро пожаловать, {username}
          </p>
          {
           <Fragment>
              <DashboardActions />
            </Fragment>
          }  
        </div>
    </section>
  ))
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

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);