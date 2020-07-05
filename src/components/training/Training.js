import React from 'react';
import LingvistModel from '../training/train-comp/LingvistModel';
import dataWords from '../../assets/words';
import './Training.scss'

const Training = (props) => {

  return (
        <LingvistModel foreignWords={dataWords.words} />
  );
};

export default Training;
