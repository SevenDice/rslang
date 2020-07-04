import React from 'react';
import LingvistModel from '../training/train-comp/LingvistModel';
import dataWords from '../../assets/words';
import './Training.scss'

const Training = (props) => {

  return (
    <section className='wrapper style5'>
      <div className='inner'>
        <h1 className='large text-primary'>Изучение новых слов</h1>
        <LingvistModel foreignWords={dataWords.words} />
      </div>
    </section>
    
  );
};

export default Training;
