import React from 'react';
import LingvistModel from '../training/train-comp/LingvistModel';
import store from '../../store';
//import Spinner from '../layout/Spinner';
import dataWords from '../../assets/words';
import { getChunkOfWords, getAggregatedUserWords, createUserWord } from '../../actions/words';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
//import { setAlert } from '../../actions/alert';


const Training = (props) => {
  const userId = localStorage.getItem('id');
  const settings = useSelector((state) => state.profile.settings);
  const level = settings.optional.level;
//  const wordsPerDay = settings.wordsPerDay;
  const newWords = settings.optional.newWords;
  /*const wordTranslate = settings.optional.wordTranslate;
  const sentenceWithMeaning = settings.optional.sentenceWithMeaning;
  const sentenceWithCurrentWord = settings.optional.sentenceWithCurrentWord;
  const wordTranscription = settings.optional.wordTranscription;
  const wordPicture = settings.optional.wordPicture;
  const wordAutoPlay = settings.optional.wordAutoPlay;
  const currentWordTranslate = settings.optional.currentWordTranslate;
  const translateSentenceWithWord = settings.optional.translateSentenceWithWord;
  const skipToNextCard = settings.optional.skipToNextCard;
  const deleteFromTrainList = settings.optional.deleteFromTrainList;
  const moveToHardWordsGroup = settings.optional.moveToHardWordsGroup;
  const getCustomWordsForTrain = settings.optional.getCustomWordsForTrain;
  const moveToGroups = settings.optional.moveToGroups;*/
  const filter1='{"userWord.difficulty":"new"}';
 
  //getChunkOfWords(0,1);
  const onclick = (e) => {
    e.preventDefault();
    store.dispatch(getAggregatedUserWords(userId, level, newWords, filter1)); 
    //dataWords1=(wordsarr);
  }
  //let dataWords={words: {}};
  const wordsarr = useSelector((state) => state.words);  
  console.log(wordsarr);

  //dataWords = wordsarr ;

  return (
    <section className='wrapper style5'>
      <div className='inner'>
        <button id='b1' onClick={onclick}> Получить слова</button>
        <h1 className='large text-primary'>Изучение новых слов</h1>
        {/* <h2>How to Use:</h2>
        <p>
          Complete the foreign language phrase by entering in the foreign language word that
          completes the sentence.
        </p>
        <p>
          If you get the word wrong, the correct word will appear to help you remember next time.
        </p>
        <p>Linguistic details regarding the target word are at the bottom of the card.</p>
        <p>Note that the full sentence translation does NOT appear by default.</p>
        <p>
          This is to help you fill in the foreign word without translating the whole phrase into
          your native language.
        </p>
        <p>
          However, if you are stuck and think you would benefit from seeing the translation, click
          the arrow in the upper right corner of the card to display the translation.
        </p> */}
        {
       <LingvistModel foreignWords={dataWords.words} /> 
        }
        
      </div>
    </section>
  );
};


Training.propTypes = {
  getChunkOfWords: PropTypes.func.isRequired,
  getAggregatedUserWords: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  words: PropTypes.object
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  words: state.words
});

/*const mapDispatchToProps = (dispatch) => ({
  getAggregatedUserWords: (userId, group, wordsPerPage, filter) => dispatch(getAggregatedUserWords(userId, group, wordsPerPage, filter)),
})*/

export default connect(mapStateToProps, {getChunkOfWords, getAggregatedUserWords, createUserWord })(Training);
