import React from "react";

const SavannaGame = (props) => {
  const questions = props.words.words.length;

  const [currPosition, setCurrPosition] = React.useState(0);

  const [trueAnswers, setTrueAnswers] = React.useState(0);

  const [mistakes, setMistakes] = React.useState(0);

  function checkAnswer(event) {
    const answeredID = event.target.id.replace("answer-", "");
    const currentID = props.words.words[currPosition].id;

    if (answeredID === currentID) {
      setCurrPosition(currPosition + 1);
      setTrueAnswers(trueAnswers + 1);

      event.target.classList.add("true");
    } else {
      setCurrPosition(currPosition + 1);
      setMistakes(mistakes + 1);
      if (mistakes < 5) {
        document
          .querySelector(".life:nth-child(" + (mistakes + 1) + "n)")
          .classList.add("disabled");
      }

      event.target.classList.add("false");
      document
        .querySelector(".case.enabled #answer-" + currentID)
        .classList.add("true");
    }
    if (currPosition + 1 < questions) {
      setTimeout(() => {
        showNextQuestion();
      }, 2000);
    }
    if (mistakes === 4 || currPosition === questions - 1) {
      checkPercentage();

      props.stopGame();
    }
  }

  function checkPercentage() {
    if (trueAnswers === 0) {
      alert(
        "true answers percentage: " + (trueAnswers / questions) * 100 + "%"
      );
    } else {
      alert(
        "true answers percentage: " +
          ((trueAnswers + 1) / questions) * 100 +
          "%"
      );
    }
  }

  function showNextQuestion() {
    const currentItem = document.querySelector(".case-" + currPosition);
    const nextItem = document.querySelector(".case-" + (currPosition + 1));

    if (currentItem === null) {
      return;
    }

    currentItem.classList.remove("enabled");
    currentItem.classList.add("answered");
    nextItem.classList.add("enabled");
    nextItem.classList.remove("disabled");
  }

  let q = document.querySelectorAll(".question");

  q.forEach((item) => {
    item.addEventListener("animationend", watchTimeForAnswer, { once: true });
  });

  function watchTimeForAnswer(event) {
    const currentID = props.words.words[currPosition].id;

    setCurrPosition(currPosition + 1);

    setMistakes(mistakes + 1);
    if (mistakes < 5) {
      if (
        document.querySelector(".life:nth-child(" + (mistakes + 1) + "n)") ===
        null
      ) {
        return;
      }
      document
        .querySelector(".life:nth-child(" + (mistakes + 1) + "n)")
        .classList.add("disabled");
    }

    if (document.querySelector(".case.enabled #answer-" + currentID) === null) {
      return;
    }

    document
      .querySelector(".case.enabled #answer-" + currentID)
      .classList.add("true");

    if (currPosition + 1 < questions) {
      setTimeout(() => {
        showNextQuestion();
      }, 2000);
    }
    if (mistakes === 4 || currPosition === questions - 1) {
      checkPercentage();

      props.stopGame();
    }
  }

  return (
    <div className="questions" onChange={watchTimeForAnswer}>
      <div className="lifes">
        <div className="life"></div>
        <div className="life"></div>
        <div className="life"></div>
        <div className="life"></div>
        <div className="life"></div>
      </div>

      {props.words.words.map((word, index) => {
        return (
          <div
            className={
              "case" +
              " " +
              "case-" +
              index +
              " " +
              (index === 0 ? "enabled" : "disabled")
            }
            key={word.id}
            id={"question-" + word.id}
          >
            <p className="question">
              {index + 1}. {word.word}
            </p>

            {props.buttons.buttons[index].map((btn) => {
              return (
                <button
                  key = {'btn-' + btn}
                  className="button primary answer"
                  id={"answer-" + props.words.words[btn].id}
                  onClick={checkAnswer}
                >
                  {props.words.words[btn].wordTranslate}
                </button>
              );
            })}
          </div>
        );
        
      })}
    </div>
  );
};

export default SavannaGame;
