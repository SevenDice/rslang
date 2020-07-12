import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import {
  createProfile,
  getCurrentProfile,
  deleteAccount,
  getUserSettings,
  updateUserSettings,
} from '../../actions/profile';
import store from '../../store';
import { setAlert } from '../../actions/alert';

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
  deleteAccount,
}) => {

  const userId = useSelector((state) => state.auth.user.id);
  const settings = useSelector((state) => state.profile.settings);
  useEffect(() => {
    store.dispatch(getUserSettings(userId));

  // Зачем это?
  /* useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...formData };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
    }
  }, [loading, getCurrentProfile, profile]); */


  }, [userId]);

  const [formData, setFormData] = useState(settings);
  //setFormData(settings);
  const username = useSelector((state) => state.auth.user.name);
  const {
    level,
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
  } = formData.optional;

  const onChange = (e) => {
    if (e.target.name === 'wordsPerDay') {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else if (e.target.name === 'newWords' || e.target.name === 'level') {
      setFormData({
        ...formData,
        optional: { ...formData.optional, [e.target.name]: e.target.value },
      });
    } else {
      setFormData({
        ...formData,
        optional: { ...formData.optional, [e.target.name]: e.target.checked },
      });
    }
  };

  const userHistory = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    const newSettings = { ...formData };
    delete newSettings.id;

    store.dispatch(updateUserSettings(userId, newSettings));
    store.dispatch(setAlert('Настройки сохранены'));
    userHistory.go(-2);
  };

  return (
    <section className='wrapper style5'>
      <div className='inner'>
        <h1 className='large text-primary'> <i className='fas fa-user' /> Изменение настроек пользователя {username}</h1>
        <p className='lead'>
        </p>

        <small>Уровень сложности</small>
        <form className='form' onSubmit={onSubmit}>
          <div className='form-group'>
            <select name='level' value={level} onChange={onChange} className='level-select'>
              <option value='0'>Начальный</option>
              <option value='1'>Элементарный</option>
              <option value='2'>Средний</option>
              <option value='3'>Средне-продвинутый</option>
              <option value='4'>Продвинутый</option>
              <option value='5'>В совершенстве</option>
            </select>
          </div>
          <div className='form-group'>
            <small className='form-text'>Укажите количество изучаемых слов в день:</small>
            <input
              type='number'
              min='5'
              max='50'
              name='wordsPerDay'
              value={formData.wordsPerDay}
              onChange={onChange}
              className='number-input'
            />
          </div>
          <div className='form-group'>
            <small className='form-text'>Укажите количество новых изучаемых слов в день:</small>
            <input
              type='number'
              min='5'
              max='25'
              name='newWords'
              value={newWords}
              onChange={onChange}
              className='number-input'
            />
          </div>
          <br />
          <div className='form-group'>
            <p className='p600'>На карточках будет отображаться:</p>
            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='wordTranslate'
                name='wordTranslate'
                checked={wordTranslate}
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
                checked={sentenceWithMeaning}
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
                checked={sentenceWithCurrentWord}
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
                checked={wordTranscription}
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
                checked={wordPicture}
                value={wordPicture}
                onChange={onChange}
              />
              <label htmlFor='wordPicture'>Картинка-ассоциация</label>
            </div>
            <br />
          </div>

          <div className='form-group'>
            <p className='p600'>Настройки автовоспроизведения:</p>
            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='wordAutoPlay'
                name='wordAutoPlay'
                checked={wordAutoPlay}
                value={wordAutoPlay}
                onChange={onChange}
              />
              <label htmlFor='wordAutoPlay'>Автоматическое воспроизведение звука</label>
            </div>
            <br />
          </div>

          <div className='form-group'>
            <p className='p600'>После правильного ввода слова будут показаны:</p>
            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='currentWordTranslate'
                name='currentWordTranslate'
                checked={currentWordTranslate}
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
                checked={translateSentenceWithWord}
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
            <p className='p600'>Дополнительные настройки:</p>

            <div className='col-6 col-12-small'>
              <input
                type='checkbox'
                id='deleteFromTrainList'
                name='deleteFromTrainList'
                checked={deleteFromTrainList}
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
                checked={moveToHardWordsGroup}
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
                checked={getCustomWordsForTrain}
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
                checked={skipToNextCard}
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
                checked={moveToGroups}
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
          <Link className='cancel' to='/dashboard'>
            Отмена
          </Link>
        </form>

        <div className='my-2'>
          <button
            className='button primary delete'
            onClick={() => deleteAccount(localStorage.getItem('id'))}>
            <i className='fas fa-user-minus' /> Удалить мой аккаунт
          </button>
        </div>
      </div>
    </section>
  );
};

ProfileForm.propTypes = {
  auth: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile, getUserSettings, deleteAccount })(
  ProfileForm,
);
