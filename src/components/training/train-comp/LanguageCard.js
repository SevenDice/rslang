import React from "react";
import PropTypes from "prop-types";
import WordInput from "./WordInput";
import ProgressBar from "./ProgressBar";

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
  isCorrect,
  currentIndex,
}) {
  return (
    <div className="training-card">
      <WordInput
        wordForeign={wordForeign}
        wordAudioExample={wordAudioExample}
        wordTextExample={wordTextExample}
        wordImage={wordImage}
        handleSuccess={handleSuccess}
        isCorrect={isCorrect}
      />
      <div className="card-divider"></div>
      <div className="card-lower">
        <div className="card-word-translation cardP">{wordTranslate}</div>
        <div className="card-sentense-translation cardP">
          {wordTextExampleTranslate}
        </div>
        <div className="card-word-meaning cardP">
          {wordTextMeaningTranslate}
        </div>
        <div className="card-transcription cardP">{wordTranscription}</div>
      </div>
      <ProgressBar num={currentIndex + 1} />
      <div className="card-audio" />
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
  isCorrect: PropTypes.bool,
};
