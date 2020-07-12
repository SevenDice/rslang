import React from 'react';
import PropTypes from 'prop-types';
import WordInputField from './WordInputField';

export default function WordInput({
  wordImage,
  wordForeign = '',
  wordTextExample = '',
  handleSuccess,
  isCorrect
}) {
  const [front, end] = wordTextExample.replace(/<b.*>.*?<\/b>/ig,'*').split('*')
  return (
    <div className="card-upper">
      <div className="card-eng-sentense">
        <span className="front-sentence-part">{front}</span>
        {isCorrect ? (
          <span className="word-input--correct-word">{wordForeign}</span>
        ) : (
          <WordInputField
            foreignWord={wordForeign}
            handleSuccess={handleSuccess}
          />
        )}
       <span className="back-sentence-part">{end}</span>
      </div>
      <img
        className="card-img"
        src={wordImage}
        alt=""
      />
    </div>
  );
}

WordInput.propTypes = {
  wordForeign: PropTypes.string,
  wordTextExample: PropTypes.string,
  handleSuccess: PropTypes.func,
  isCorrect: PropTypes.bool
};
