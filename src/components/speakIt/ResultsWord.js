import React from 'react';
import { playWord } from './utils';

function ResultsWord({ word, transcription, translation, audio }) {
  const clickHandler = (src) => {
    playWord(src);
  };
  return (
    <div className='results-word-wrapper'>
      <div className='results-word-audio' onClick={() => clickHandler(audio)} />
      <div className='results-word'>{word}</div>
      <div className='results-word-transcr'>{transcription}</div>
      <div className='results-word-transl'>{translation}</div>
    </div>
  );
}

export default ResultsWord;
