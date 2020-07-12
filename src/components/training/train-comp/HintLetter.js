import React from 'react';
import PropTypes from 'prop-types';

export default function HintLetter({ letter, isCorrect }) {
  return (
    <span
      className={`hint-letter ${
        isCorrect ? 'hint-letter--correct' : 'hint-letter--incorrect'
      }`}
    >
      {letter}
    </span>
  );
}

HintLetter.propTypes = {
  letter: PropTypes.string,
  isCorrect: PropTypes.bool
};
