import React from 'react';
import classNames from 'classnames';

function Word({
  word,
  transcription,
  audio,
  image,
  onClick,
  wordTranslate,
  currentWord,
  isTraining,
  gameResults,
}) {
  return (
    <div
      className={classNames('word-container', {
        correct: gameResults[word].done || currentWord.word === word,
        training: isTraining,
      })}
      onClick={onClick}
      audio={audio}
      image={image}
      word={word}
      translation={wordTranslate}>
      <div className='word-container__micro' />
      <div className='word-container__desc'>
        <div className='word-container__eng'>{word}</div>
        <div className='word-container__tr'>{transcription}</div>
      </div>
    </div>
  );
}

export default Word;
