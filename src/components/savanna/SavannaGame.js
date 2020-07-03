import React from "react";

const SavannaGame = (props) => {
    console.log(props.words.words)
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

  return (
    <div>
      
        {
            props.words.words.map(word => {
                return(
                    <div key = {word.id}>
                        <p>{word.word}</p>
                    </div>
                )
            })
        }
      
    </div>
  );
};

export default SavannaGame;
