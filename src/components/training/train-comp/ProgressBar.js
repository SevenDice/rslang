import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getUserSettings } from '../../../actions/profile';
import store from '../../../store';
export default function ProgressBar({ num }) {
  const userId = localStorage.getItem('id');//useSelector((state) => state.auth.user.id);
  const count = useSelector((state) => state.profile.settings.wordsPerDay);
  useEffect(() => {
    store.dispatch(getUserSettings(userId));
  }, [userId]);
  return (
    <div className="sf-progress-bar">
      <div className="sf-progress-bar--num">
        {num < 10 ? '0' + num : '' + num}
      </div>
      <div className="sf-progress-bar--bar">
        <div className="sf-progress-bar--bar---fill" />
      </div>
      <div className="sf-progress-bar--num">{count}</div>
      <style jsx="true">{`
        .sf-progress-bar--bar---fill {
          position: absolute;
          height: 10px;
          background: #A3BE8C;
          border-radius: 5px;
          width: calc(1% * ${num});
        }
      `}</style>
    </div>
  );
}

ProgressBar.propTypes = {
  num: PropTypes.number,
  profile: PropTypes.object
};
