import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile, deleteAccount } from '../../actions/profile';

const initialState = {
  level: '',
  wordsPerDay: '',
  newWords: '',
  wordTranslate: '',
  sentenceWithMeaning: '',
  sentenceWithCurrentWord: '',
  wordTranscription: '',
  wordPicture: '',
  wordAutoPlay: '',
  currentWordTranslate: '',
  translateSentenceWithWord: '',
  skipToNextCard: '',
  deleteFromTrainList: '',
  moveToHardWordsGroup: '',
  getCustomWordsForTrain: '',
  moveToGroups: ''
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
  deleteAccount
}) => {
  const [formData, setFormData] = useState(initialState);


  useEffect(() => {
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
    moveToGroups

  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Редактировать настройки</h1>
      <p className="lead">
        <i className="fas fa-user" /> Изменение настроек пользователя
      </p>
      <small>* = Обязательное поле</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="level" value={level} onChange={onChange}>
            <option>* Выберите уровень сложности изучения</option>
            <option value="Beginner">Начальный</option>
            <option value="Elementary">Элементарный</option>
            <option value="Intermediate">Средний</option>
            <option value="Upper Intermediate">Средне-продвинутый</option>
            <option value="Advanced">Продвинутый</option>
            <option value="Proficiency">В совершенстве</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="wordsPerDay"
            value={wordsPerDay}
            onChange={onChange}
          />
          <small className="form-text">
            Укажите количество изучаемых слов в день
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="newWords"
            value={newWords}
            onChange={onChange}
          />
          <small className="form-text">
            Укажите количество новых изучаемых слов в день
          </small>
        </div>
        <div className='form-group'>
          <p>Настройка информации, отображаемой на карточках со словами</p>
          <p>На карточках будет отображаться:</p>
          <p>
            <input
              type='checkbox'
              name='wordTranslate'
              checked={wordTranslate}
              value={wordTranslate}
              onChange={onChange}
            />{' '}
            Перевод слова
          </p>
          <p>
            <input
              type='checkbox'
              name='sentenceWithMeaning'
              checked={sentenceWithMeaning}
              value={sentenceWithMeaning}
              onChange={onChange}
            />{' '}
            Предложение с объяснением значения слова
          </p>
          <p>
            <input
              type='checkbox'
              name='sentenceWithCurrentWord'
              checked={sentenceWithCurrentWord}
              value={sentenceWithCurrentWord}
              onChange={onChange}
            />{' '}
            Предложение с примером использования изучаемого слова
          </p>
          <p>
            <input
              type='checkbox'
              name='wordTranscription'
              checked={wordTranscription}
              value={wordTranscription}
              onChange={onChange}
            />{' '}
            Транскрипция слова
          </p>
          <p>
            <input
              type='checkbox'
              name='wordPicture'
              checked={wordPicture}
              value={wordPicture}
              onChange={onChange}
            />{' '}
            Картинка-ассоциация
          </p>
        </div>

        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='wordAutoPlay'
              checked={wordAutoPlay}
              value={wordAutoPlay}
              onChange={onChange}
            />{' '}
            Автоматическое воспроизведение звука
          </p>
        </div>

        <div className='form-group'>
          <p>После правильного ввода слова будут показаны:</p>
          <p>
            <input
              type='checkbox'
              name='currentWordTranslate'
              checked={currentWordTranslate}
              value={currentWordTranslate}
              onChange={onChange}
            />{' '}
            Перевод этого слова
          </p>
          <p>
            <input
              type='checkbox'
              name='translateSentenceWithWord'
              checked={translateSentenceWithWord}
              value={translateSentenceWithWord}
              onChange={onChange}
            />{' '}
            Перевод предложений с использованием этого слова
          </p>
        </div>

        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='skipToNextCard'
              checked={skipToNextCard}
              value={skipToNextCard}
              onChange={onChange}
            />{' '}
            Можно перейти к другому вопросу, не ответив на предыдущий
          </p>
        </div>

        <div className='form-group'>
          <p>Настройка возможностей слов</p>
          <p>
            <input
              type='checkbox'
              name='deleteFromTrainList'
              checked={deleteFromTrainList}
              value={deleteFromTrainList}
              onChange={onChange}
            />{' '}
            Возможность удалить слово из списка изучаемых
          </p>
          <p>
            <input
              type='checkbox'
              name='moveToHardWordsGroup'
              checked={moveToHardWordsGroup}
              value={moveToHardWordsGroup}
              onChange={onChange}
            />{' '}
            Возможность поместить слово в группу сложных 
          </p>
          <p>
            <input
              type='checkbox'
              name='getCustomWordsForTrain'
              checked={getCustomWordsForTrain}
              value={getCustomWordsForTrain}
              onChange={onChange}
            />{' '}
            Возможность выбирать слова к изучению
          </p>
        </div>

        <div className='form-group'>
          <p>Группировка слов</p>
          <p>
            <input
              type='checkbox'
              name='moveToGroups'
              checked={moveToGroups}
              value={moveToGroups}
              onChange={onChange}
            />{' '}
            Возможность относить слова к категориям "Снова", "Трудно", "Хорошо", "Легко"
          </p>
        </div>

        <input type="submit" className="btn btn-primary my-1" value="Сохранить" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Отмена
        </Link>
      </form>

      <div className="my-2">
        <button className="btn btn-danger" onClick={() => deleteAccount(localStorage.getItem('id'))}>
          <i className="fas fa-user-minus" /> Удалить мой аккаунт
        </button>
      </div>
    </Fragment>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile, deleteAccount })(
  ProfileForm
);
