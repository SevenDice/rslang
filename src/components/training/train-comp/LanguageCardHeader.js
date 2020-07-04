import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import ProgressInfo from './ProgressInfo';
import ToggleNativePhrase from './ToggleNativePhrase';

export default function LanguageCardHeader({ wordTextExampleTranslate, wordImage/*, wordStrength */}) {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="language-card-header">
      <p className={`header ${isShow || 'hide-header'}`}>
        {wordTextExampleTranslate && wordTextExampleTranslate}
      </p>
      
      <ToggleNativePhrase isShow={isShow} toggleShow={toggleShow} />
    </div>
  );
}

LanguageCardHeader.propTypes = {
  nativePhrase: PropTypes.string,
  wordStrength: PropTypes.number
};
