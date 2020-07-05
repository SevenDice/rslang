import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';

const Profile = ({ getCurrentProfile, profile: { profile }, auth, match }) => {
  
  useEffect(() => {

    getCurrentProfile(localStorage.getItem('id'));
  }, [getCurrentProfile]);

  return (
    <section className='wrapper style5'>
      <div className='inner'>
        {
          //здесь при перезагрузке некорректно работает
          //данная проверка
          profile === null ? (
            <Spinner />
          ) : (
            <Fragment>
              <h1 className='large text-primary'>Профиль пользователя</h1>
              {
                <div className='dash-buttons'>
                  <Link to='/edit-profile' className='btn btn-light'>
                    Редактировать настройки
                  </Link>
                </div>
              }
              {
                <div className='dash-buttons'>
                  <Link to='/stats' className='btn btn-light'>
                    Посмотреть статистику
                  </Link>
                </div>
              }
              {
                <div className='dash-buttons'>
                  <Link to='/dictionary' className='btn btn-light'>
                    Словарь
                  </Link>
                </div>
              }
            </Fragment>
          )
        }
      </div>
    </section>
  );
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
