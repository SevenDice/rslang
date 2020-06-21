import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile, deleteAccount } from '../../actions/profile';

const initialState = {
  level: '',
  wordsperday: '',
  newwords: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
  deleteAccount
}) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

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
    wordsperday,
    newwords,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
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
            name="wordsperday"
            value={wordsperday}
            onChange={onChange}
          />
          <small className="form-text">
            Укажите количество изучаемых слов в день
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="newwords"
            value={newwords}
            onChange={onChange}
          />
          <small className="form-text">
            Укажите количество новых изучаемых слов в день
          </small>
        </div>
        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Добавить ссылки на страницы в социальных сетях
          </button>
          <span>Необязательно</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" value="Сохранить"/>
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
