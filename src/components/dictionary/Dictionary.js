import React/*, { useEffect }*/ from 'react';
import { getChunkOfWords, getAggregatedUserWords, createUserWord, deleteUserWordById } from '../../actions/words';
import store from '../../store';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';

//store.dispatch(getChunkOfWords(0,1));

const Dictionary = (words) => {
  const settings = useSelector((state) => state.profile.settings);
  const userId = localStorage.getItem('id');
  const level = settings.optional.level;
  const newWords = settings.optional.newWords;
  const filter1='{"userWord.difficulty":"new"}';
  const onclick = (e) => {
    e.preventDefault();
    store.dispatch(getAggregatedUserWords(userId, level, newWords, filter1));
  };
  const wordsarr = useSelector((state) => state.words);  
  console.log(wordsarr.words[0]);   
 /* let userId = localStorage.getItem('id');  
  const wordsarr = useSelector((state) => state.words);
  console.log(wordsarr.words.length);
  for (let i=0; i<wordsarr.words.length; i+=1){
    //console.log(wordsarr.words[i].audio);
    let request ={'difficulty': 'new',
                  'optional': {userid: i, 
                   wordsPerExampleSentence: wordsarr.words[i].length,
                   successCount: 0,
                   periodDays: 0,
                   lastSuccessDay: 0
                  }};
    //console.log(userId);
    //console.log(wordsarr.words[i].id);
    //console.log(request);              
    store.dispatch(createUserWord( userId, wordsarr.words[i].id, request));
    //console.log(wordsarr.words[i].id);
  };*/
  //let wordsarr1 =['1','2','3']

  let wordsarr1=['1','2','3'];
  if (typeof wordsarr.words!=='undefined'){
    wordsarr1=wordsarr.words;
    console.log(wordsarr1);
    
  }
  
  //const listItems = wordsarr1.map((number) =>
    //<li>{number}</li>)
  //console.log(listItems);
  let listItems2=[];
  if (typeof wordsarr1!=='undefined'){
  for (let i=0; i<wordsarr1.length; i+=1 ){
    console.log(wordsarr1[i]);
    listItems2.push(`${wordsarr1[i].word} ${wordsarr1[i].transcription} ${wordsarr1[i].wordTranslate} ${wordsarr1[i].userWord.optional.periodDays} ${wordsarr1[i].userWord.optional.successCount} ${wordsarr1[i].userWord.optional.lastSuccessDay}`);
  }
};
  listItems2 = listItems2.map((number) =>
<li>{number}</li>)
  /*const listItems = wordsarr1.map((number) =>
  //<li>{number}</li>
  console.log(number)
  );
*/
  return (
    <section className='wrapper style5'>
      <div className='inner'>
        <h1 className='large text-primary'>Словарь пользователя</h1>
        <button id='b1' onClick={onclick}> Открыть словарь</button>
        <ul class="nav nav-tabs">
          
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#description">Новые слова</a>
            <ol>
              {listItems2}
            </ol>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#characteristics">Легкие слова</a>
          </li>
          
        </ul>

        

      </div>
    </section>
  );
};

Dictionary.propTypes = {
  createUserWord: PropTypes.func.isRequired,
  deleteUserWordById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  words: PropTypes.object,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  words: state.words,
});

export default connect(mapStateToProps, { getChunkOfWords, getAggregatedUserWords, createUserWord, deleteUserWordById })(
  Dictionary,
);
