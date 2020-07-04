import React from 'react';
import PropTypes from 'prop-types';
import WordInputField from './WordInputField';

export default function WordInput({
  wordForeign = '',
  wordTextExample = '',
  handleSuccess,
  isCorrect
}) {
  const [front, end] = wordTextExample.replace(/<b.*>.*?<\/b>/ig,'*').split('*')
  return (
    <div className="word-input">
      <div className="word-input--article">
        <span>{front}</span>
        {isCorrect ? (
          <span className="word-input--correct-word">{wordForeign}</span>
        ) : (
          <WordInputField
            foreignWord={wordForeign}
            handleSuccess={handleSuccess}
          />
        )}
        <span>{end}</span>
      </div>
    </div>
  );
}

WordInput.propTypes = {
  wordForeign: PropTypes.string,
  wordTextExample: PropTypes.string,
  handleSuccess: PropTypes.func,
  isCorrect: PropTypes.bool
};
