import React from 'react';
import LingvistModel from '../training/train-comp/LingvistModel';

const Training = (props) => {
  
  // const data1 = {
  //   words: [
  //     {
  //       foreignWord: 'trabajo',
  //       foreignPhrase: 'El * duro',
  //       nativePhrase: 'The hard work',
  //       nativeWord: ['the work', 'the job'],
  //       wordStrength: 1,
  //       wordDetails: 'masculine, singular',
  //       partOfSpeech: 'Noun',
  //     }
  //   ]
  // };

  const data = {
    words: [
      {
        "id": "5e9f5ee35eb9e72bc21af4a0",
        "group": 0,
        "page": 0,
        "word": "alcohol",
        "image": "files/01_0002.jpg",
        "audio": "files/01_0002.mp3",
        "audioMeaning": "files/01_0002_meaning.mp3",
        "audioExample": "files/01_0002_example.mp3",
        "textMeaning": "<i>Alcohol</i> is a type of drink that can make people drunk.",
        "textExample": "A person should not drive a car after he or she has been drinking <b>alcohol</b>.",
        "transcription": "[ǽlkəhɔ̀ːl]",
        "textExampleTranslate": "Человек не должен водить машину после того, как он выпил алкоголь",
        "textMeaningTranslate": "Алкоголь - это тип напитка, который может сделать людей пьяными",
        "wordTranslate": "алкоголь",
        "wordsPerExampleSentence": 15
      },
      // {
      //   "id": "5e9f5ee35eb9e72bc21af4a2",
      //   "group": 0,
      //   "page": 0,
      //   "word": "boat",
      //   "image": "files/01_0005.jpg",
      //   "audio": "files/01_0005.mp3",
      //   "audioMeaning": "files/01_0005_meaning.mp3",
      //   "audioExample": "files/01_0005_example.mp3",
      //   "textMeaning": "A <i>boat</i> is a vehicle that moves across water.",
      //   "textExample": "There is a small <b>boat</b> on the lake.",
      //   "transcription": "[bout]",
      //   "textExampleTranslate": "На озере есть маленькая лодка",
      //   "textMeaningTranslate": "Лодка - это транспортное средство, которое движется по воде",
      //   "wordTranslate": "лодка",
      //   "wordsPerExampleSentence": 8
      // },
      // {
      //   "id": "5e9f5ee35eb9e72bc21af4a1",
      //   "group": 0,
      //   "page": 0,
      //   "word": "agree",
      //   "image": "files/01_0001.jpg",
      //   "audio": "files/01_0001.mp3",
      //   "audioMeaning": "files/01_0001_meaning.mp3",
      //   "audioExample": "files/01_0001_example.mp3",
      //   "textMeaning": "To <i>agree</i> is to have the same opinion or belief as another person.",
      //   "textExample": "The students <b>agree</b> they have too much homework.",
      //   "transcription": "[əgríː]",
      //   "textExampleTranslate": "Студенты согласны, что у них слишком много домашней работы",
      //   "textMeaningTranslate": "Согласиться - значит иметь то же мнение или убеждение, что и другой человек",
      //   "wordTranslate": "согласна",
      //   "wordsPerExampleSentence": 8
      // },
      // {
      //   "id": "5e9f5ee35eb9e72bc21af4a3",
      //   "group": 0,
      //   "page": 0,
      //   "word": "arrive",
      //   "image": "files/01_0003.jpg",
      //   "audio": "files/01_0003.mp3",
      //   "audioMeaning": "files/01_0003_meaning.mp3",
      //   "audioExample": "files/01_0003_example.mp3",
      //   "textMeaning": "To <i>arrive</i> is to get somewhere.",
      //   "textExample": "They <b>arrived</b> at school at 7 a.m.",
      //   "transcription": "[əráiv]",
      //   "textExampleTranslate": "Они прибыли в школу в 7 часов утра",
      //   "textMeaningTranslate": "Приехать значит попасть куда-то",
      //   "wordTranslate": "прибыть",
      //   "wordsPerExampleSentence": 7
      // },
      // {
      //   "id": "5e9f5ee35eb9e72bc21af4a4",
      //   "group": 0,
      //   "page": 0,
      //   "word": "August",
      //   "image": "files/01_0004.jpg",
      //   "audio": "files/01_0004.mp3",
      //   "audioMeaning": "files/01_0004_meaning.mp3",
      //   "audioExample": "files/01_0004_example.mp3",
      //   "textMeaning": "<i>August</i> is the eighth month of the year.",
      //   "textExample": "Is your birthday in <b>August</b>?",
      //   "transcription": "[ɔ́ːgəst]",
      //   "textExampleTranslate": "У тебя день рождения в августе?",
      //   "textMeaningTranslate": "Август - восьмой месяц года",
      //   "wordTranslate": "август",
      //   "wordsPerExampleSentence": 5
      // },
    ]
  }
  return (
    <section className='wrapper style5'>
      <div className='inner'>
        <h1 className='large text-primary'>Изучение новых слов</h1>
        {/* <h2>How to Use:</h2>
        <p>
          Complete the foreign language phrase by entering in the foreign language word that
          completes the sentence.
        </p>
        <p>
          If you get the word wrong, the correct word will appear to help you remember next time.
        </p>
        <p>Linguistic details regarding the target word are at the bottom of the card.</p>
        <p>Note that the full sentence translation does NOT appear by default.</p>
        <p>
          This is to help you fill in the foreign word without translating the whole phrase into
          your native language.
        </p>
        <p>
          However, if you are stuck and think you would benefit from seeing the translation, click
          the arrow in the upper right corner of the card to display the translation.
        </p> */}
        <LingvistModel foreignWords={data.words} />
      </div>
    </section>
    
  );
};

export default Training;
