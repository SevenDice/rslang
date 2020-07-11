import React, { Fragment, useEffect } from 'react';
import { getStatistics } from '../../actions/statistics';
import store from '../../store';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect, useSelector } from 'react-redux';

const Statistics = (props) => {
  const userId = useSelector((state) => state.profile.profile.id);
  const username = useSelector((state) => state.auth.user.name);
  useEffect(() => {
    store.dispatch(getStatistics(userId));
  }, [userId]);
  const statistic = useSelector((state) => state.statistics.statistic);
  console.log(statistic);  
  
  return (
    <section className='wrapper style5'>
      <div className='inner'>
        <h1 className='large text-primary'>Статистика пользователя {username}</h1>
          <div id="statistics">
            {typeof statistic!=='undefined' ? 
            (<Fragment>
              <canvas width='700px' height='300px'>
                
              </canvas>
             </Fragment>)
            :(<Spinner />)
            }
          </div>    
      </div>        
    </section>
  );
}

Statistics.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  statistic: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  statistics: state.statistict
});

export default connect(mapStateToProps, { getStatistics })(
  Statistics
);
