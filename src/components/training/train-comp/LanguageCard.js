import React from 'react';
import PropTypes from 'prop-types';
import WordInput from './WordInput';
import LanguageCardHeader from './LanguageCardHeader';

export default function LanguageCard({
  wordId,
  wordGroup,
  wordPage,
  wordForeign,
  wordImage,
  wordAudio,
  wordAudioMeaning,
  wordAudioExample,
  wordTextMeaning,
  wordTextExample,
  wordTranscription,
  wordTextExampleTranslate,
  wordTextMeaningTranslate,
  wordTranslate,
  wordsPerExampleSentence,
  handleSuccess,
  isCorrect
}) {
  return (
    <div className="language-card">
      <LanguageCardHeader
        wordTextExampleTranslate={wordTextExampleTranslate}
      />
      <WordInput
        wordForeign={wordForeign}
        wordTextExample={wordTextExample}
        wordTranslate={wordTranslate}
        handleSuccess={handleSuccess}
        isCorrect={isCorrect}
      />
    </div>
  );
}

LanguageCard.propTypes = {
  wordId: PropTypes.string,
  wordGroup: PropTypes.number,
  wordPage: PropTypes.number,
  wordForeign: PropTypes.string,
  wordImage: PropTypes.string,
  wordAudio: PropTypes.string,
  wordAudioMeaning: PropTypes.string,
  wordAudioExample: PropTypes.string,
  wordTextMeaning: PropTypes.string,
  wordTextExample: PropTypes.string,
  wordTranscription: PropTypes.string,
  wordTextExampleTranslate: PropTypes.string,
  wordTextMeaningTranslate: PropTypes.string,
  wordTranslate: PropTypes.string,
  wordsPerExampleSentence: PropTypes.number,
  partOfSpeech: PropTypes.string,
  handleSuccess: PropTypes.func,
  isCorrect: PropTypes.bool
};
