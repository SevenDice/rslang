import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import DashboardActions from './DashboardActions';
import Spinner from '../layout/Spinner';


const Dashboard = ({ props
}) => {
  
  const username = useSelector((state) => state.auth.user.name)
  return (
    username === null ? (<Spinner />):(
    <section className='wrapper style5'>
        <div className='inner'>
          <h1 className='large text-primary'>Главная</h1>
          <p className='lead'>
            <i className='fas fa-user' /> Добро пожаловать,{username}
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
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);