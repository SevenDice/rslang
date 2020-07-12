import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import cloneDeep from 'lodash.clonedeep';

import { getRandomPage, playWord } from './utils';
import { getWords } from './requiests';
import Word from './Word';
import Loading from './Loading';
import Star from './Star';
import Results from './Results';
import recognition from './recognition';

// объявление переменных, нужных для хранения данных об игре
let imgSrc = 'files/m1.jpg';
let clone = {};
let strs = [];
let isListening = true;
let words = [];
let results = {};
const initialWord = {
  word: null,
  image: 'files/m1.jpg',
  translation: null,
};

function SpeakitGame() {
  const level = useSelector((state) => state.profile.settings.optional.level) || 0;

  const [isTraining, setIsTraining] = React.useState(true);
  const [currentWord, setCurrentWord] = React.useState(initialWord);
  const [gameResults, setGameResults] = React.useState(results);
  const [isResultsShown, setIsResultsShown] = React.useState(false);
  const [stars, setStars] = React.useState([]);

  const img = React.useRef(null);
  const input = React.useRef(null);

  const startNewGame = () => {
    if (!isTraining) recognition.abort();
    const page = getRandomPage(29);
    getWords(page, level).then((res) => {
      const gameRes = {};
      res.forEach(
        (el) =>
          (gameRes[el.word] = {
            word: el['word'],
            done: false,
            image: el['image'],
            audio: el['audio'],
            transcription: el['transcription'],
            translation: el['wordTranslate'],
          }),
      );
      words = [...res];
      clone = cloneDeep(gameRes);
      results = cloneDeep(gameRes);
      setGameResults({ ...gameRes });
    });

    isListening = false;
    strs = [];
    setIsResultsShown(false);
    setCurrentWord({ ...initialWord });
    setStars([...strs]);
    setIsTraining(true);
  };

  React.useEffect(() => {
    //действия после монтирования компонента, выполняемые единожды:
    //начало игры (т.е. асинхронный запрос слов, затем их сеттинг в переменные)
    startNewGame();

    //функции onResult и onEnd объявлены отдельно для того, чтобы при размонтировании
    //компонента можно было убрать ненужные листенеры
    const onResult = (e) => {
      if (!isListening) {
        recognition.abort();
        return;
      }
      setGameResults(results);
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript.toLowerCase())
        .join('');
      input.current.value = transcript;
      if (results[transcript] !== undefined) {
        console.log('такое слово есть');
        imgSrc = results[transcript].image;
        if (results[transcript].done === false) {
          console.log('слово названо впервые');
          results[transcript].done = true;
          const word = transcript;
          const image = results[transcript].image;
          const translation = results[transcript].translation;
          setCurrentWord({ word, image, translation });
          strs.push('*');
          setStars([...strs]);
          setGameResults({ ...gameResults, ...results });
        }
      }
    };

    const onEnd = () => {
      if (strs.length === 10) {
        recognition.abort();
        setIsResultsShown(true);
        return;
      }
      if (isListening) {
        recognition.start();
      }
    };

    //один раз вешаем листенер
    recognition.addEventListener('result', onResult);
    recognition.addEventListener('end', onEnd);

    //useEffect возвращает коллбек, который будет вызван в момент
    //размонтирования компонента (убираются лишние листенеры, прерывается распознавание речи
    //если необходимо, переменные обнуляются)
    return () => {
      recognition.removeEventListener('result', onResult);
      recognition.removeEventListener('end', onEnd);
      if (isListening) recognition.abort();
      isListening = false;
      strs = [];
      imgSrc = 'files/microphones.png';
      results = {};
      words = [];
    };
    //здесь реакт ругается, что ему не хватает списка зависимостей
    //пока не могу найти решение, которое бы устроило реакт, будет так как есть
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //обработка кликов в режиме тренировки:
  //выбранное слово(его картинка и перевод) отображаются в центральной области,
  //слово воспроизводится
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

  // функция, выполняемая при нажатии на кнопку "Начать говорить":
  // обнуляется центральная область, результаты игры и звездочки сетаются
  // в соответствии с тем, что уже было угадано
  const startHandler = () => {
    isListening = true;
    recognition.start();
    setCurrentWord(initialWord);
    if (isTraining) {
      setIsTraining(!isTraining);
    }
    setGameResults({ ...results });
    setStars(strs);
  };

  // функция, выполняемая при нажатии на кнопку "Остановиться":
  // центральная область обнуляется, угаданные слова тоже обнуляются
  // (до возвращения обратно к игре)
  const stopHandler = () => {
    recognition.abort();
    isListening = false;
    setIsTraining(true);
    setCurrentWord(initialWord);
    setGameResults({ ...clone });
    setStars([]);
  };

  // тоггл таблички с результатами
  const openResults = () => {
    setIsResultsShown(true);
  };
  const closeResults = () => {
    setIsResultsShown(false);
  };

  // установка актуального центрального изображения в режиме игры
  //ПОСМОТРИ ТУТ, ВОЗМОЖНО ЭТО ЛИШНЕЕ И МОЖНО ПО-ДРУГОМУ??
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
            {words.length &&
              words.map((el) => (
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
            <button className='button' onClick={stopHandler} disabled={isTraining ? true : false}>
              Остановиться и повторить
            </button>
            <button className='button' onClick={startHandler} disabled={isTraining ? false : true}>
              Начать говорить слова
            </button>
            <button className='button' onClick={openResults}>
              Результат
            </button>
          </div>
          {isResultsShown ? (
            <Results onClick={closeResults} results={gameResults} startNewGame={startNewGame} />
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
}

export default SpeakitGame;
