import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar({ num }) {
  return (
    <div className="sf-progress-bar">
      <div className="sf-progress-bar--num">
        {num < 10 ? '0' + num : '' + num}
      </div>
      <div className="sf-progress-bar--bar">
        <div className="sf-progress-bar--bar---fill" />
      </div>
      <div className="sf-progress-bar--num">100</div>
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
  num: PropTypes.number
};
