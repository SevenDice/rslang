import React from 'react';
import PropTypes from 'prop-types';

export default function LanguageCardFooter({ wordDetails, partOfSpeech }) {

  return (
    <div className="language-card-footer">
      <div className="language-card-footer--word-data-container">
        {wordDetails ? `${wordDetails}, ${partOfSpeech}` : partOfSpeech}
      </div>

      <style jsx="true">{`
        .language-card-footer {
          display: flex;
          justify-content: space-between;
          padding: 10px 15px;
        }
        .language-card-footer--word-data-container {
          display: flex;
        }
      `}</style>
    </div>
  );
}

LanguageCardFooter.propTypes = {
  wordDetails: PropTypes.string,
  partOfSpeech: PropTypes.string
};
