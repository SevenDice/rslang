import React, { Fragment, useEffect } from 'react';
import { getAggregatedUserWords, updateUserWordById } from '../../actions/words';
import { getUserSettings } from '../../actions/profile';
import store from '../../store';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

const Dictionary = (words) => {
  const userId = useSelector((state) => state.auth.user.id);
  const username = useSelector((state) => state.auth.user.name);
  const level = useSelector((state) => state.profile.settings.optional.level);
  const newWords = useSelector((state) => state.profile.settings.optional.newWords);
  const filternew='{"userWord.difficulty":"new"}';
  const filtereasy='{"userWord.difficulty":"easy"}';
  const filtermedium='{"userWord.difficulty":"medium"}';
  const filterhard='{"userWord.difficulty":"hard"}';
  const filterdeleted='{"userWord.difficulty":"deleted"}';
  const wordsarrnew = useSelector((state) => state.words.newwords);
  const wordsarreasy = useSelector((state) => state.words.easywords);
  const wordsarrmedium = useSelector((state) => state.words.mediumwords);
  const wordsarrhard = useSelector((state) => state.words.hardwords);
  const wordsarrdeleted = useSelector((state) => state.words.deletedwords);

  useEffect(() => {
    store.dispatch(getUserSettings(userId));
    store.dispatch(getAggregatedUserWords(userId, level, newWords, filternew));
    store.dispatch(getAggregatedUserWords(userId, level, newWords, filtereasy));
    store.dispatch(getAggregatedUserWords(userId, level, newWords, filtermedium));
    store.dispatch(getAggregatedUserWords(userId, level, newWords, filterhard));
    store.dispatch(getAggregatedUserWords(userId, level, newWords, filterdeleted));
  }, [userId, level, newWords, filternew, filtereasy,filtermedium, filterhard, filterdeleted]);  

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
   // listItems2.push(`${wordsarr1[i].word} ${wordsarr1[i].transcription} ${wordsarr1[i].wordTranslate} ${wordsarr1[i].userWord.optional.periodDays} ${wordsarr1[i].userWord.optional.successCount} ${wordsarr1[i].userWord.optional.lastSuccessDay}`);
  const onclickdelete = (wordId) => {
    store.dispatch(updateUserWordById(userId, wordId, '{"difficulty":"deleted"}'));
    render();
    
  };
  const onclickrestore = (wordId) => {
    store.dispatch(updateUserWordById(userId, wordId, '{"difficulty":"new"}'));
    render();
  };

  let wordsarrnew1 ={};
  wordsarrnew1= Object.values(wordsarrnew);
  let wordsarreasy1 ={};
  wordsarreasy1= Object.values(wordsarreasy);
  let wordsarrmedium1 ={};
  wordsarrmedium1= Object.values(wordsarrmedium);
  let wordsarrhard1 ={};
  wordsarrhard1= Object.values(wordsarrhard);
  let wordsarrdeleted1 ={};
  wordsarrdeleted1= Object.values(wordsarrdeleted);
  return (
    <section className='wrapper style5'>
      <div className='inner'>
      <h1 className='large text-primary'>Словарь пользователя {username}</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active"  data-toggle="tab" href="#newwords">Новые слова</a>
            <div id="new_words">
            {wordsarrnew1!=={} && typeof wordsarrnew1!=='undefined' ? 
            (<Fragment>
             <table>
              <thead>
                <tr>
                  <th>Слово</th>
                  <th>Транскрипция</th>
                  <th>Перевод</th>
                  <th>Период повторения</th>
                  <th>Успешных повторений</th>
                  <th>День последнего успешного повторения</th>
                  <th>Удалить?</th>
                </tr>
              </thead>
              <tbody>
                {
                  wordsarrnew1.map(record => (
                  <tr key={record._id}>  
                  <td>{record.word}</td>
                  <td>{record.transcription}</td>
                  <td>{record.wordTranslate}</td>
                  <td>{record.userWord.optional.periodDays}</td>
                  <td>{record.userWord.optional.successCount}</td>
                  <td>{record.userWord.optional.lastSuccessDay}</td>
                  <td>
                    <button className='button primary delete' onClick={() => onclickdelete(record._id)}>
    
                      <i /> Удалить
                    </button>
                  </td>
                  </tr>
                  ))
                }
              </tbody>
            </table>
            </Fragment>):
            (<Spinner />)
            }
              
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#easywords">Легкие слова</a>
            <div id="easy_words">
            {wordsarreasy1!=={} && typeof wordsarreasy1!=='undefined' ? 
            (<Fragment>
            <table>
              <thead>
                <tr>
                  <th>Слово</th>
                  <th>Транскрипция</th>
                  <th>Перевод</th>
                  <th>Период повторения</th>
                  <th>Успешных повторений</th>
                  <th>День последнего успешного повторения</th>
                  <th>Удалить?</th>
                </tr>
              </thead>
              <tbody>
                {
                  wordsarreasy1.map(record => (
                  <tr key={record._id}>  
                  <td>{record.word}</td>
                  <td>{record.transcription}</td>
                  <td>{record.wordTranslate}</td>
                  <td>{record.userWord.optional.periodDays}</td>
                  <td>{record.userWord.optional.successCount}</td>
                  <td>{record.userWord.optional.lastSuccessDay}</td>
                  <td>
                    <button className='button primary delete' onClick={() => onclickdelete(record._id)}>
    
                      <i /> Удалить
                    </button>
                  </td>
                  </tr>
                  ))
                }
              </tbody>
            </table>
            </Fragment>):
            (<Spinner />)
            }
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#mediumwords">Слова средней сложности</a>
            <div id="medium_words">
            {wordsarrmedium1!=={} && typeof wordsarrmedium1!=='undefined'? 
            (<Fragment>
            <table>
              <thead>
                <tr>
                  <th>Слово</th>
                  <th>Транскрипция</th>
                  <th>Перевод</th>
                  <th>Период повторения</th>
                  <th>Успешных повторений</th>
                  <th>День последнего успешного повторения</th>
                  <th>Удалить?</th>
                </tr>
              </thead>
              <tbody>
                {
                  wordsarrmedium1.map(record => (
                  <tr key={record._id}>  
                  <td>{record.word}</td>
                  <td>{record.transcription}</td>
                  <td>{record.wordTranslate}</td>
                  <td>{record.userWord.optional.periodDays}</td>
                  <td>{record.userWord.optional.successCount}</td>
                  <td>{record.userWord.optional.lastSuccessDay}</td>
                  <td>
                    <button className='button primary delete' onClick={() => onclickdelete(record._id)}>
    
                      <i /> Удалить
                    </button>
                  </td>
                  </tr>
                  ))
                }
              </tbody>
            </table>
            </Fragment>):
            (<Spinner />)
            }
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#hardwords">Трудные слова</a>
            <div id="hard_words">
            {typeof wordsarrhard1!=='undefined' ? 
            (<Fragment>
            <table>
              <thead>
                <tr>
                  <th>Слово</th>
                  <th>Транскрипция</th>
                  <th>Перевод</th>
                  <th>Период повторения</th>
                  <th>Успешных повторений</th>
                  <th>День последнего успешного повторения</th>
                  <th>Удалить?</th>
                </tr>
              </thead>
              <tbody>
                {
                  wordsarrhard1.map(record => (
                  <tr key={record._id}>  
                  <td>{record.word}</td>
                  <td>{record.transcription}</td>
                  <td>{record.wordTranslate}</td>
                  <td>{record.userWord.optional.periodDays}</td>
                  <td>{record.userWord.optional.successCount}</td>
                  <td>{record.userWord.optional.lastSuccessDay}</td>
                  <td>
                    <button className='button primary delete' onClick={() => onclickdelete(record._id)}>
    
                      <i /> Удалить
                    </button>
                  </td>
                  </tr>
                  ))
                }
              </tbody>
            </table>
            </Fragment>):
            (<Spinner />)
            }
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#deletedwords">Удаленные слова</a>
            <div id="deleted_words">
            {typeof wordsarrdeleted1!=='undefined' ? 
            (<Fragment>
            <table>
              <thead>
                <tr>
                  <th>Слово</th>
                  <th>Транскрипция</th>
                  <th>Перевод</th>
                  <th>Период повторения</th>
                  <th>Успешных повторений</th>
                  <th>День последнего успешного повторения</th>
                  <th>Восстановить?</th>
                </tr>
              </thead>
              <tbody>
                {
                  wordsarrdeleted1.map(record => (
                  <tr key={record._id}>  
                  <td>{record.word}</td>
                  <td>{record.transcription}</td>
                  <td>{record.wordTranslate}</td>
                  <td>{record.userWord.optional.periodDays}</td>
                  <td>{record.userWord.optional.successCount}</td>
                  <td>{record.userWord.optional.lastSuccessDay}</td>
                  <td>
                    <button className='button primary' onClick={() => onclickrestore(record._id)}>
    
                      <i /> Восстановить
                    </button>
                  </td>
                  </tr>
                  ))
                }
              </tbody>
            </table>
            </Fragment>):
            (<Spinner />)
            }
            </div>
          </li>  
        </ul>
      </div>
    </section>
  );
}


Dictionary.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  words: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  words: state.words,
});

export default connect(mapStateToProps, { getAggregatedUserWords, updateUserWordById, getUserSettings })(
  Dictionary
);
