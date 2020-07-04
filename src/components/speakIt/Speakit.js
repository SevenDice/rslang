import React from 'react';
import SpeakitGame from './SpeakitGame';

const Speakit = () => {
  const [isStarted, setIsStarted] = React.useState(false);

  const startHandler = () => {
    setIsStarted(!isStarted);
  };

  return (
    <div className='speakit-startpage'>
      {isStarted ? (
        <SpeakitGame />
      ) : (
        <div className='speakit-decs'>
          <p className='speakit-rules'>
            Кликайте по словам, чтобы услышать их произношение.
            <br /> Когда будете готовы, кликнете по кнопке "Начать говорить" и произносите слова.
            <br /> Порядок произношения не важен.
            <br />
            Как только вы произнесете присутствующее слово, оно будет подсвечено.
            <br /> Постарайтесь подсветить все слова.
            <br /> Удачи :)
          </p>
          <button onClick={startHandler} className='button primary'>
            Начать игру
          </button>
        </div>
      )}
    </div>
  );
};

export default Speakit;
