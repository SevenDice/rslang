import React from "react";
import Lingvist from "./Lingvist";
// import { Redirect } from 'react-router-dom';

const DATA_URL = 'https://raw.githubusercontent.com/AlinaKutya/rslang-data/master/';

class LingvistData {
  
  constructor(words = {}, index = 0) {
    this.words = words;
    this._index = index;
  }

  get index() {
    return this._index;
  }
  set index(newIndex) {
    // need to check if newIndex valid or other methods will break
    this._index = newIndex;

  }

  // "id": "5e9f5ee35eb9e72bc21af4a0",
  // "group": 0,
  // "page": 0,
  // "word": "alcohol",
  // "image": "files/01_0002.jpg",
  // "audio": "files/01_0002.mp3",
  // "audioMeaning": "files/01_0002_meaning.mp3",
  // "audioExample": "files/01_0002_example.mp3",
  // "textMeaning": "<i>Alcohol</i> is a type of drink that can make people drunk.",
  // "textExample": "A person should not drive a car after he or she has been drinking <b>alcohol</b>.",
  // "transcription": "[ǽlkəhɔ̀ːl]",
  // "textExampleTranslate": "Человек не должен водить машину после того, как он выпил алкоголь",
  // "textMeaningTranslate": "Алкоголь - это тип напитка, который может сделать людей пьяными",
  // "wordTranslate": "алкоголь",
  // "wordsPerExampleSentence": 15

  get wordId() {
    return this.words[this.index].id;
  }
  get wordGroup() {
    return this.words[this.index].group;
  }
  get wordPage() {
    return this.words[this.index].page;
  }
  get wordForeign() {
    return this.words[this.index].word;
  }
  get wordImage() {
    return DATA_URL + this.words[this.index].image;
  }
  get wordAudio() {
    return DATA_URL + this.words[this.index].audio;
  }
  get wordAudioMeaning() {
    return DATA_URL + this.words[this.index].audioMeaning;
  }
  get wordAudioExample() {
    return DATA_URL + this.words[this.index].audioExample;
  }
  get wordTextMeaning() {
    return this.words[this.index].textMeaning;
  }
  get wordTextExample() {
    return this.words[this.index].textExample;
  }
  get wordTranscription() {
    return this.words[this.index].transcription;
  }
  get wordTextExampleTranslate() {
    return this.words[this.index].textExampleTranslate;
  }
  get wordTextMeaningTranslate() {
    return this.words[this.index].textMeaningTranslate;
  }
  get wordTranslate() {
    return this.words[this.index].wordTranslate;
  }
  get wordsPerExampleSentence() {
    return this.words[this.index].wordsPerExampleSentence;
  }
}
export default class LingvistContainer extends React.Component {
  state = {
    model: new LingvistData(this.props.foreignWords, 0),
  };

  updateIndex = (newIndex) => {
    let m = this.state.model;
    m.index = newIndex;
    this.setState({ model: m });
  };

  render() {
    const { model } = this.state;
    return (
      <Lingvist
        wordId={model.wordId}
        wordGroup={model.wordGroup}
        wordPage={model.wordPage}
        wordForeign={model.wordForeign}
        wordImage={model.wordImage}
        wordAudio={model.wordAudio}
        wordAudioMeaning={model.wordAudioMeaning}
        wordAudioExample={model.wordAudioExample}
        wordTextMeaning={model.wordTextMeaning}
        wordTextExample={model.wordTextExample}
        wordTranscription={model.wordTranscription}
        wordTextExampleTranslate={model.wordTextExampleTranslate}
        wordTextMeaningTranslate={model.wordTextMeaningTranslate}
        wordTranslate={model.wordTranslate}
        wordsPerExampleSentence={model.wordsPerExampleSentence}
        currentIndex={model.index}
        updateIndex={this.updateIndex}
      />
    );
  }
}
