import React from "react";
import PropTypes from "prop-types";
import WordInput from "./WordInput";
import ProgressBar from "./ProgressBar";
import Sound from "react-sound";

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
  
  function playAudio(src) {
    let audio = new Audio(src);

    const start = () => {
      audio.play();
    };
    return start;
  }

  return (
    <div className="training-card">
      <Sound url={wordAudioExample} playStatus={Sound.status.PLAYING} />
      <WordInput
        wordForeign={wordForeign}
        wordTextExample={wordTextExample}
        wordImage={wordImage}
        handleSuccess={handleSuccess}
        isCorrect={isCorrect}
      />

      <div className="card-divider"></div>
      <div className="card-lower">
        <div className="card-word-translation cardP">
          <i class="fas fa-volume-up" onClick={playAudio(wordAudio)}></i>
          {wordTranslate}
        </div>
        <div className="card-sentense-translation cardP">
          <i class="fas fa-volume-up" onClick={playAudio(wordAudioExample)}></i>
          {wordTextExampleTranslate}
        </div>
        <div className="card-word-meaning cardP">
          <i class="fas fa-volume-up" onClick={playAudio(wordAudioMeaning)}></i>
          {wordTextMeaningTranslate}
        </div>
        <div className="card-transcription cardP">{wordTranscription}</div>
      </div>
      <ProgressBar num={currentIndex + 1} />
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
