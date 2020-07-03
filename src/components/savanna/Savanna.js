import React from "react";
import SavannaGame from "./SavannaGame";

const Savanna = () => {
  const [gamingMode, setGamingMode] = React.useState({
    isStarted: false, // поменять на false
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
    console.log(res);
    setWords({
      words: res,
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
          <SavannaGame words={words}></SavannaGame>
        </div>
      )}
    </section>
  );
};

export default Savanna;
