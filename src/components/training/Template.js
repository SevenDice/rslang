import React from "react";

function Template() {
  return (
    <div className='cards-startpage'>
      <div className='arrow arrow-left' />
      <div className='training-card'>
        <div className='card-upper'>
          <div className='card-eng-sentense'>
            The students
            <input type='text' className='word-input' style={{ width: '60px' }} autoFocus></input>
            they have too much homework
          </div>

          <img
            className='card-img'
            src='https://raw.githubusercontent.com/AlinaKutya/rslang-data/master/files/27_0523.jpg'
            alt=''
          />
        </div>
        <div className='card-divider'></div>
        <div className='card-lower'>
          <div className='card-word-translation cardP'>согласны</div>
          <div className='card-sentense-translation cardP'>
            Студенты согласны, что у них слишком большое задание на реакте
          </div>
          <div className='card-word-meaning cardP'>
            Согласиться - значит иметь такое же убеждение, как и другой человек
          </div>
          <div className='card-transcription cardP'>[agriiee]</div>
        </div>
        <div className='card-audio' />
      </div>
      <div className='arrow arrow-right' />
    </div>
  );
}

export default Template;
