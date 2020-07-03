import React from "react";

const SavannaGame = (props) => {
  //   console.log(props.words.words);
  //   async function getWords() {
  //     const url =
  //       "https://afternoon-falls-25894.herokuapp.com/words?page=0&group=0";

  //     const data = await fetch(url);
  //     const res = await data.json();
  //     console.log(res);
  //     setWords({
  //         words: res,
  //       });
  //     return res;
  //   }

  //   getWords()

  //   const [words, setWords] = React.useState({
  //     words: [],
  //   });

  const questions = props.words.words.length;

  const [currPosition, setCurrPosition] = React.useState(0);

  const [trueAnswers, setTrueAnswers] = React.useState(0);

  function checkAnswer(event) {
    console.log(event.target.id);
    const answeredID = event.target.id.replace("answer-", "");
    const currentID = props.words.words[currPosition].id;
    console.log(answeredID === currentID);
    if (answeredID === currentID) {
      setCurrPosition(currPosition + 1);
      setTrueAnswers(trueAnswers + 1);
    } else {
      setCurrPosition(currPosition + 1);
    }
    if (currPosition === questions - 1) {
      console.log(trueAnswers, currPosition, questions);
      checkPercentage();
    }
  }

  function checkPercentage() {
    if (trueAnswers === 0) {
      console.log(
        "true answers percentage: " + (trueAnswers / questions) * 100 + "%"
      );
    } else {
      console.log(
        "true answers percentage: " +
          ((trueAnswers + 1) / questions) * 100 +
          "%"
      );
    }
  }

  return (
    <div>
      {props.words.words.map((word, index) => {
        if (index < props.words.words.length - 3) {
          return (
            <div key={word.id} id={"question-" + word.id}>
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
            <div key={word.id} id={"question-" + word.id}>
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
