import React from "react";
import SavannaGame from "./SavannaGame";

import { shuffleArray } from "./shuffleArray";

const Savanna = () => {
  const [gamingMode, setGamingMode] = React.useState({
    isStarted: false,
  });

  const [countingDown, setCountingDown] = React.useState({
    isTimer: false,
  });

  const [timer, setTimer] = React.useState({
    timer: 3,
  });

  const [words, setWords] = React.useState({
    words: [],
  });

  const [buttons, setButtons] = React.useState({
    buttons: [],
  });

  function makeButtons(arr) {
    let newArr = [];
    arr.forEach((item, index) => {
      if (index < arr.length - 3) {
        let toIncert = [index, index + 1, index + 2, index + 3];
        toIncert = shuffleArray(toIncert);
        newArr.push(toIncert);
      } else {
        let toIncert = [index, index - 1, index - 2, index - 3];
        toIncert = shuffleArray(toIncert);
        newArr.push(toIncert);
      }
    });
    return newArr;
  }

  function toggleGamingMode() {
    setGamingMode({
      isStarted: !gamingMode.isStarted,
    });
    setCountingDown({
      isTimer: !countingDown.timer,
    });
  }

  function startGame() {
    toggleGamingMode();
    countDown();
    setTimeout(() => {
      setCountingDown({
        isTimer: false,
      });
      setTimer({
        timer: 3,
      });
    }, 4000);
    getWords();
  }

  function countDown() {
    let clock = setInterval(() => {
      setTimer({
        timer: --timer.timer,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(clock);
    }, 3000);
    return;
  }

  async function getWords() {
    const url =
      "https://afternoon-falls-25894.herokuapp.com/words?page=0&group=0";

    const data = await fetch(url);
    const res = await data.json();

    setWords({
      words: res,
    });

    setButtons({
      buttons: makeButtons(res),
    });

    return res;
  }

  return (
    <section className="wrapper style5 savanna">
      {gamingMode.isStarted === false ? (
        <div className="inner">
          <h1 className="landing-logo">САВАННА</h1>
          <p>
            Правила игры: за 5 секунд необходимо выбрать правильный вариант
            ответа из четырех предложенных. Всего необходимо будет ответить на
            30 вопросов. Ошибиться можно будет всего 5 раз за всю игру.
          </p>
          <button className="primary" id="button-start" onClick={startGame}>
            Начать игру
          </button>
        </div>
      ) : countingDown.isTimer ? (
        <div className="inner">
          <p className="counter">{timer.timer}</p>
        </div>
      ) : (
        <div className="inner">
          <button
            className="button-close button primary"
            onClick={toggleGamingMode}
          >
            Сбросить игру
          </button>
          <SavannaGame
            words={words}
            buttons={buttons}
            stopGame={toggleGamingMode}
          ></SavannaGame>
        </div>
      )}
    </section>
  );
};

export default Savanna;
