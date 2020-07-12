import React, { Fragment, useEffect } from 'react';
import LingvistModel from '../training/train-comp/LingvistModel';
//import dataWords from '../../assets/words';
import store from '../../store';
import Spinner from '../layout/Spinner';
import { getChunkOfWords, getAggregatedUserWords, createUserWord } from '../../actions/words';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserSettings } from '../../actions/profile';
import './Training.scss'
//import words from '../../reducers/words';

const Training = (words) => {
  const userId = useSelector((state) => state.auth.user.id);
  const wordsarrnew = useSelector((state) => state.words.newwords);
  console.log(wordsarrnew);
  const level = useSelector((state) => state.profile.settings.optional.level);
  const newWords = useSelector((state) => state.profile.settings.optional.newWords);
  const filternew='{"userWord.difficulty":"new"}';
  useEffect(() => {
    store.dispatch(getUserSettings(userId));
    store.dispatch(getAggregatedUserWords(userId, level, newWords, filternew));
  }, [userId, level, newWords, filternew]);

  let wordsarrnew1 ={};
  wordsarrnew1= Object.values(wordsarrnew);
   console.log( wordsarrnew1);

  return (
    <section className='wrapper style5'>
    <div className='inner'>
    <div>
    {wordsarrnew1==={} && typeof wordsarrnew1==='undefined' ? (<Spinner />): 
      (<Fragment>
        <LingvistModel foreignWords={ wordsarrnew1 } />
      </Fragment>)
     
    }
    </div>
    </div>
    </section>    
  );
};

Training.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  words: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  words: state.words
});


export default connect(mapStateToProps, {getChunkOfWords, getUserSettings, getAggregatedUserWords, createUserWord })(Training);
