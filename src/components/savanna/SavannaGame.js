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
    } else {
      setCurrPosition(currPosition + 1);
      setMistakes(mistakes + 1);
      if (mistakes < 5) {
        document
          .querySelector(".life:nth-child(" + (mistakes + 1) + "n)")
          .classList.add("disabled");
      }
    }
    if (currPosition + 1 < questions) {
      console.log(currPosition);
      showNextQuestion();
    }
    if (currPosition === questions - 1 || mistakes === 4) {
      checkPercentage();

      setTimeout(() => {
        props.stopGame();
      }, 3000);
    }
  }

  function checkPercentage() {
    if (trueAnswers === 0) {
      console.log(
        "true answers percentage: " + (trueAnswers / questions) * 100 + "%"
      );
    } else {
      alert(
        "true answers percentage: " +
          ((trueAnswers + 1) / questions) * 100 +
          "%"
      );
      console.log(
        "true answers percentage: " +
          ((trueAnswers + 1) / questions) * 100 +
          "%"
      );
    }
  }

  function showNextQuestion() {
    const currentItem = document.querySelector(".case-" + currPosition);
    const nextItem = document.querySelector(".case-" + (currPosition + 1));
    // console.log(currentItem.classList);
    // console.log(nextItem.classList);
    currentItem.classList.remove("enabled");
    currentItem.classList.add("answered");
    nextItem.classList.add("enabled");
    nextItem.classList.remove("disabled");
  }

  return (
    <div className="questions">
      <div className="lifes">
        <div className="life"></div>
        <div className="life"></div>
        <div className="life"></div>
        <div className="life"></div>
        <div className="life"></div>
      </div>

      {props.words.words.map((word, index) => {
        if (index < props.words.words.length - 3) {
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
              <button
                className="button primary answer"
                id={"answer-" + word.id}
                onClick={checkAnswer}
              >
                {word.wordTranslate}
              </button>
              <button
                className="button primary answer"
                id={"answer-" + props.words.words[index + 1].id}
                onClick={checkAnswer}
              >
                {props.words.words[index + 1].wordTranslate}
              </button>
              <button
                className="button primary answer"
                id={"answer-" + props.words.words[index + 2].id}
                onClick={checkAnswer}
              >
                {props.words.words[index + 2].wordTranslate}
              </button>
              <button
                className="button primary answer"
                id={"answer-" + props.words.words[index + 3].id}
                onClick={checkAnswer}
              >
                {props.words.words[index + 3].wordTranslate}
              </button>
            </div>
          );
        } else {
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
              <button
                className="button primary answer"
                id={"answer-" + word.id}
                onClick={checkAnswer}
              >
                {word.wordTranslate}
              </button>
              <button
                className="button primary answer"
                id={"answer-" + props.words.words[index - 1].id}
                onClick={checkAnswer}
              >
                {props.words.words[index - 1].wordTranslate}
              </button>
              <button
                className="button primary answer"
                id={"answer-" + props.words.words[index - 2].id}
                onClick={checkAnswer}
              >
                {props.words.words[index - 2].wordTranslate}
              </button>
              <button
                className="button primary answer"
                id={"answer-" + props.words.words[index - 3].id}
                onClick={checkAnswer}
              >
                {props.words.words[index - 3].wordTranslate}
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SavannaGame;
