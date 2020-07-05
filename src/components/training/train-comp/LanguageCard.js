import React from 'react';
import PropTypes from 'prop-types';
import WordInput from './WordInput';
import LanguageCardHeader from './LanguageCardHeader';
import LanguageCardFooter from './LanguageCardFooter';
import { polar1 } from './Colors';

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
        //wordStrength={5}
      />
      <WordInput
        wordForeign={wordForeign}
        wordTextExample={wordTextExample}
        wordTranslate={wordTranslate}
        handleSuccess={handleSuccess}
        isCorrect={isCorrect}
      />
      <LanguageCardFooter
      wordImage={wordImage}
       // wordDetails={wordDetails}
       // partOfSpeech={partOfSpeech}
      />
      <img className = "word-image" src={wordImage} alt=""/>
      <style jsx="true">{`
        .language-card {
          position: relative;
          background: ${polar1};
          width: 700px;
          height: 200px;
          border: solid 1px;
          box-shadow: 2px 8px 6px -6px black;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 0px 10px;
          border-radius: 10px;
        }
        .word-image {
          margin: auto;
        }
      `}</style>
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
