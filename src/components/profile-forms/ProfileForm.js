import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile, deleteAccount } from '../../actions/profile';

const initialState = {
  level: '',
  wordsPerDay: '',
  newWords: '',
  wordTranslate: true,
  sentenceWithMeaning: false,
  sentenceWithCurrentWord: true,
  wordTranscription: false,
  wordPicture: true,
  wordAutoPlay: false,
  currentWordTranslate: true,
  translateSentenceWithWord: false,
  skipToNextCard: false,
  deleteFromTrainList: true,
  moveToHardWordsGroup: false,
  getCustomWordsForTrain: true,
  moveToGroups: true,
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
  deleteAccount,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    console.log('first mount');
    console.log(formData);
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    level,
    wordsPerDay,
    newWords,
    wordTranslate,
    sentenceWithMeaning,
    sentenceWithCurrentWord,
    wordTranscription,
    wordPicture,
    wordAutoPlay,
    currentWordTranslate,
    translateSentenceWithWord,
    skipToNextCard,
    deleteFromTrainList,
    moveToHardWordsGroup,
    getCustomWordsForTrain,
    moveToGroups,
  } = formData;

  const onChange = (e) => {
    console.log('change');
    setFormData({ ...formData, [e.target.name]: e.target.checked });
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <section className='wrapper style5'>
      <div className='inner'>
        <h1 className='large text-primary'>Редактировать настройки</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Изменение настроек пользователя
        </p>
        <small>* = Обязательное поле</small>
        <form className='form' onSubmit={onSubmit}>
          <div className='form-group'>
            <select name='level' value={level} onChange={onChange}>
              <option>* Выберите уровень сложности изучения</option>
              <option value='Beginner'>Начальный</option>
              <option value='Elementary'>Элементарный</option>
              <option value='Intermediate'>Средний</option>
              <option value='Upper Intermediate'>Средне-продвинутый</option>
              <option value='Advanced'>Продвинутый</option>
              <option value='Proficiency'>В совершенстве</option>
            </select>
          </div>
          <div className='form-group'>
            <input type='text' name='wordsPerDay' value={wordsPerDay} onChange={onChange} />
            <small className='form-text'>Укажите количество изучаемых слов в день</small>
          </div>
          <div className='form-group'>
            <input type='text' name='newWords' value={newWords} onChange={onChange} />
            <small className='form-text'>Укажите количество новых изучаемых слов в день</small>
          </div>
          <div className='form-group'>
            <p>Настройка информации, отображаемой на карточках со словами</p>
            <p>На карточках будет отображаться:</p>
            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='wordTranslate'
                name='wordTranslate'
                checked={formData.wordTranslate}
                value={wordTranslate}
                onChange={onChange}
              />
              <label htmlFor='wordTranslate'>Перевод слова</label>
            </div>
            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='sentenceWithMeaning'
                name='sentenceWithMeaning'
                checked={formData.sentenceWithMeaning}
                value={sentenceWithMeaning}
                onChange={onChange}
              />
              <label htmlFor='sentenceWithMeaning'>Предложение с объяснением значения слова</label>
            </div>
            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='sentenceWithCurrentWord'
                name='sentenceWithCurrentWord'
                checked={formData.sentenceWithCurrentWord}
                value={sentenceWithCurrentWord}
                onChange={onChange}
              />
              <label htmlFor='sentenceWithCurrentWord'>
                Предложение с примером использования изучаемого слова
              </label>
            </div>
            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='wordTranscription'
                name='wordTranscription'
                checked={formData.wordTranscription}
                value={wordTranscription}
                onChange={onChange}
              />
              <label htmlFor='wordTranscription'>Транскрипция слова</label>
            </div>

            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='wordPicture'
                name='wordPicture'
                checked={formData.wordPicture}
                value={wordPicture}
                onChange={onChange}
              />
              <label htmlFor='wordPicture'>Картинка-ассоциация</label>
            </div>
            <br />
          </div>

          <div className='form-group'>
            <p>Настройки автовоспроизведения:</p>
            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='wordAutoPlay'
                name='wordAutoPlay'
                checked={formData.wordAutoPlay}
                value={wordAutoPlay}
                onChange={onChange}
              />
              <label htmlFor='wordAutoPlay'>Автоматическое воспроизведение звука</label>
            </div>
            <br />
          </div>

          <div className='form-group'>
            <p>После правильного ввода слова будут показаны:</p>
            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='currentWordTranslate'
                name='currentWordTranslate'
                checked={formData.currentWordTranslate}
                value={currentWordTranslate}
                onChange={onChange}
              />
              <label htmlFor='currentWordTranslate'>Перевод этого слова</label>
            </div>

            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='translateSentenceWithWord'
                name='translateSentenceWithWord'
                checked={formData.translateSentenceWithWord}
                value={translateSentenceWithWord}
                onChange={onChange}
              />
              <label htmlFor='translateSentenceWithWord'>
                Перевод предложений с использованием этого слова
              </label>
            </div>
            <br />
          </div>

          <div className='form-group'>
            <p>Дополнительные настройки:</p>

            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='deleteFromTrainList'
                name='deleteFromTrainList'
                checked={formData.deleteFromTrainList}
                value={deleteFromTrainList}
                onChange={onChange}
              />
              <label htmlFor='deleteFromTrainList'>
                Возможность удалить слово из списка изучаемых
              </label>
            </div>

            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='moveToHardWordsGroup'
                name='moveToHardWordsGroup'
                checked={formData.moveToHardWordsGroup}
                value={moveToHardWordsGroup}
                onChange={onChange}
              />
              <label htmlFor='moveToHardWordsGroup'>
                Возможность поместить слово в группу сложных
              </label>
            </div>

            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='getCustomWordsForTrain'
                name='getCustomWordsForTrain'
                checked={formData.getCustomWordsForTrain}
                value={getCustomWordsForTrain}
                onChange={onChange}
              />
              <label htmlFor='getCustomWordsForTrain'>Возможность выбирать слова к изучению</label>
            </div>

            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='skipToNextCard'
                name='skipToNextCard'
                checked={formData.skipToNextCard}
                value={skipToNextCard}
                onChange={onChange}
              />
              <label htmlFor='skipToNextCard'>
                Можно перейти к другому вопросу, не ответив на предыдущий
              </label>
            </div>

            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='moveToGroups'
                name='moveToGroups'
                checked={formData.moveToGroups}
                value={moveToGroups}
                onChange={onChange}
              />
              <label htmlFor='moveToGroups'>
                Возможность относить слова к категориям "Снова", "Трудно", "Хорошо", "Легко"
              </label>
            </div>
            <br />
          </div>

          <input type='submit' className='button primary' value='Сохранить' />
          <Link className='btn btn-light my-1' to='/dashboard'>
            Отмена
          </Link>
        </form>

        <div className='my-2'>
          <button
            className='btn btn-danger'
            onClick={() => deleteAccount(localStorage.getItem('id'))}>
            <i className='fas fa-user-minus' /> Удалить мой аккаунт
          </button>
        </div>
      </div>
    </section>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile, deleteAccount })(
  ProfileForm,
);
