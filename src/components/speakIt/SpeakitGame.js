import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRandomPage, playWord } from './utils';
import { getWords } from './requiests';
import Word from './Word';
import Loading from './Loading';
import cloneDeep from 'lodash.clonedeep';
import Star from './Star';

const initialWord = {
  word: null,
  image: 'files/microphones.png',
  translation: null,
};

let array = [];
let imgSrc = 'files/microphones.png';
let stop = false;
let clone = {};
let strs = [];

function SpeakitGame() {
  const level = useSelector((state) => state.profile.settings.optional.level) || 0;
  const [words, setWords] = React.useState([]);
  const [isTraining, setIsTraining] = React.useState(true);
  const [currentWord, setCurrentWord] = React.useState(initialWord);
  let [gameResults, setGameResults] = React.useState({});
  const img = React.useRef(null);
  const [stars, setStars] = React.useState([]);

  const input = React.useRef(null);

  React.useEffect(() => {
    const page = getRandomPage(29);
    getWords(page, level).then((res) => {
      const gameRes = {};
      res.forEach(
        (el) =>
          (gameRes[el.word] = {
            done: false,
            image: el['image'],
            audio: el['audio'],
            transcription: el['transcription'],
            translation: el['wordTranslate'],
          }),
      );
      clone = cloneDeep(gameRes);
      setGameResults({ ...gameRes });
      setWords(res);
      array = gameRes;
    });
  }, [level]);

  const clickHandler = (e) => {
    if (!isTraining) return;
    const el = e.target.closest('.word-container');
    const word = el.getAttribute('word');
    const audio = el.getAttribute('audio');
    const image = el.getAttribute('image');
    const translation = el.getAttribute('translation');
    setCurrentWord({ ...currentWord, word, image, translation });
    playWord(audio);
  };

  const StartHandler = () => {
    stop = false;
    recognition.start();
    setCurrentWord(initialWord);
    console.log(currentWord);
    if (isTraining) {
      setIsTraining(!isTraining);
    }
    setGameResults({ ...array });
    setStars(strs);
  };

  const restartHandler = () => {
    stop = true;
    setIsTraining(true);
    setCurrentWord(initialWord);
    recognition.abort(); // это не работает?
    setGameResults(clone);
    setStars([]);
  };

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new window.SpeechRecognition();
  recognition.interimResults = false;
  recognition.continuous = false;
  recognition.lang = 'en-US';

  recognition.addEventListener('result', (e) => {
    if (stop) return;

    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript.toLowerCase())
      .join('');

    input.current.value = transcript;

    if (gameResults[transcript] !== undefined) {
      console.log('такое слово есть');
      imgSrc = gameResults[transcript].image;
      if (gameResults[transcript].done === false) {
        console.log('слово названо впервые');
        /* const newRes = {
          ...gameResults,
          [transcript]: { ...gameResults[transcript], done: true },
        }; */

        // setGameResults(newRes); эта строчка не работает
        array[transcript].done = true; //обновление происходит за счет array
        //почему так?

        const word = transcript;
        const image = gameResults[transcript].image;
        const translation = gameResults[transcript].translation;
        setCurrentWord({ word, image, translation });
        //это тоже на самом деле не работает

        strs.push('*');
        setStars([...strs]);
        //и опять же. зачем нужна промежуточная переменная?

        setGameResults({ ...array });
      }
    }
  });

  recognition.addEventListener('end', () => {
    console.log('stop? ', stop);
    console.log('конец');
    if (strs.length === 10) {
      console.log('10 угадано');
      recognition.abort();
      return;
    }
    if (!stop) {
      recognition.start();
    }
  });

  React.useEffect(() => {
    if (!isTraining) {
      img.current.src = `https://raw.githubusercontent.com/AlinaKutya/rslang-data/master/` + imgSrc;
    }
  }, [currentWord, isTraining]);

  return (
    <div>
      {words.length === 0 ? (
        <Loading />
      ) : (
        <div className='speakit-game-wrapper'>
          <div className='speakit-game-header'>
            <p style={{ marginBottom: '0' }}>
              Уровень сложности слов (0-5): {level} (можно изменить в{' '}
              <Link to='/edit-profile' className='btn btn-light'>
                <i className='text-primary' /> Настройках)
              </Link>
            </p>
            <div className='speakit-stars'>
              {' '}
              {stars.length !== 0 && stars.map((el, i) => <Star key={i} />)}
            </div>
          </div>
          <div className='currentWord-container'>
            <img
              ref={img}
              className='currentWord-img'
              alt=''
              src={
                `https://raw.githubusercontent.com/AlinaKutya/rslang-data/master/` +
                currentWord.image
              }></img>
            {isTraining ? (
              <div className='currentWord-translation'>{currentWord.translation}</div>
            ) : (
              <input
                ref={input}
                type='text'
                className='speakit-input'
                placeholder='Говорите...'
                readOnly></input>
            )}
          </div>
          <div className='speakit-game-container'>
            {words.map((el) => (
              <Word
                {...el}
                onClick={clickHandler}
                currentWord={currentWord}
                isTraining={isTraining}
                gameResults={gameResults}
                key={el.id}
              />
            ))}
          </div>
          <div className='speakit-game-controls'>
            <button className='button primary' onClick={restartHandler}>
              Повторить слова
            </button>
            <button className='button primary' onClick={StartHandler}>
              Начать говорить
            </button>
            <button className='button primary'>Результат</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpeakitGame;
