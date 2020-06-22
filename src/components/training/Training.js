import React from 'react';
import LingvistModel from '../training/train-comp/LingvistModel';



const Training = props => {
  const data = {
    "words": [
      {
        "foreignWord": "trabajo",
        "foreignPhrase": "El * duro",
        "nativePhrase": "The hard work",
        "nativeWord": ["the work", "the job"],
        "wordStrength": 1,
        "wordDetails": "masculine, singular",
        "partOfSpeech": "Noun"
      },
      {
        "foreignWord": "tengo",
        "foreignPhrase": "No * ni idea",
        "nativePhrase": "I have no idea!",
        "nativeWord": ["I have"],
        "wordStrength": 3,
        "wordDetails": "",
        "partOfSpeech": "Verb"
      },
      {
        "foreignWord": "malo",
        "foreignPhrase": "Mi español es *",
        "nativePhrase": "My Spanish is bad",
        "nativeWord": ["bad"],
        "wordStrength": 3,
        "wordDetails": "masculine",
        "partOfSpeech": "Noun"
      },
      {
        "foreignWord": "ayuda",
        "foreignPhrase": "Necesito *",
        "nativePhrase": "I need help",
        "nativeWord": ["help"],
        "wordStrength": 4,
        "wordDetails": "feminine",
        "partOfSpeech": "Noun"
      },
      {
        "foreignWord": "suerte",
        "foreignPhrase": "Buena *",
        "nativePhrase": "Good luck",
        "nativeWord": ["luck"],
        "wordStrength": 1,
        "wordDetails": "",
        "partOfSpeech": "Noun"
      }
    ]
  }
  return (
    <div>
      <h1 className="large text-primary">Изучение новых слов</h1>
      <h2>How to Use:</h2>
        <p>
          Complete the foreign language phrase by entering in the foreign
          language word that completes the sentence.
        </p>
        <p>
          If you get the word wrong, the correct word will appear to help you
          remember next time.
        </p>
        <p>
          Linguistic details regarding the target word are at the bottom of the
          card.
        </p>
        <p>
          Note that the full sentence translation does NOT appear by default.
        </p>
        <p>
          This is to help you fill in the foreign word without translating the
          whole phrase into your native language.
        </p>
        <p>
          However, if you are stuck and think you would benefit from seeing the
          translation, click the arrow in the upper right corner of the card to
          display the translation.
        </p>
      <LingvistModel foreignWords={data.words} />
    </div>
  );
};


export default Training;
