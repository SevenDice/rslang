import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleNativePhrase({ isShow, toggleShow }) {
  const handleClick = () => {
    toggleShow();
  };
  return (
    <div
      className={`toggle-native-phrase ${isShow &&
        'toggle-native-phrase--flip'}`}
      onClick={handleClick}
    >
      ^
    </div>
  );
}

ToggleNativePhrase.propTypes = {
  isShow: PropTypes.bool,
  toggleShow: PropTypes.func
};
