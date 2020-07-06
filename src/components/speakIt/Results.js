import React from 'react';
import ResultsWord from './ResultsWord';

function Results({ onClick, results }) {
  let correctWords = [];
  let incorrectWords = [];
  for (const key in results) {
    if (results[key].done === true) {
      correctWords.push(results[key]);
    } else {
      incorrectWords.push(results[key]);
    }
  }

  return (
    <div className='results-wrapper'>
      <div className='results-body'>
        <div className='results-close' onClick={onClick} />
        <div className='incorrectWords'>
          <div className='incorrect-title'>
            Не знаю<div className='incorrect-amount amount'>{incorrectWords.length}</div>
          </div>
          {incorrectWords.map((el) => (
            <ResultsWord key={el.word} {...el} />
          ))}
        </div>
        <div className='correctWords'>
          <div className='correct-title'>
            Знаю<div className='correct-amount amount'>{correctWords.length}</div>
          </div>
          {correctWords.map((el) => (
            <ResultsWord key={el.word} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
