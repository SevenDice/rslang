import React from "react";

const Savanna = () => {
  const [gamingMode, setGamingMode] = React.useState({
    isStarted: false,
  });

  const [countingDown, setCountingDown] = React.useState({
    isTimer: false,
  })

  const [timer, setTimer] = React.useState({
    timer: 3,
  });

  function toggleGamingMode() {
    setGamingMode({
      isStarted: !gamingMode.isStarted,
    });
    setCountingDown({
      isTimer: !countingDown.timer,
    })
  }

  function startGame(){
    toggleGamingMode();
    countDown()
    setTimeout(() => {
      setCountingDown({
        isTimer: false,
      })
      setTimer({
        timer: 3,
      });
    }, 4000)
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

  }

  return (
    <section className="wrapper style5 savanna">
      {(gamingMode.isStarted === false ? (
        <div className="inner">
          <h1 className="landing-logo">САВАННА</h1>
          <p>
            Правила игры: за 5 секунд необходимо выбрать правильный вариант
            ответа из четырех предложенных. Всего необходимо будет ответить на
            30 вопросов. Ошибиться можно будет всего 5 раз за всю игру.
          </p>
          <button
            className="primary"
            id="button-start"
            onClick={startGame}
          >
            Начать игру
          </button>
        </div>
      ) : (
        countingDown.isTimer ? (
          <div className="inner">
            <p className="counter">{timer.timer}</p>
          </div>
        ) : (
          <div className="inner">
          <button className='button-close button primary' onClick={toggleGamingMode}>Сбросить игру</button>
            <p className="counter">lolkek</p>
          </div>
        )
      ))
      }
    </section>
  );
};

export default Savanna;
