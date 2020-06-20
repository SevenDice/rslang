import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const {email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Пароли не совпадают', 'danger');
    } else {
      register({email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Регистрация</h1>
      <p className="lead">
        <i className="fas fa-user" /> Создать аккаунт
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Электронный адрес"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            value={password}
            onChange={onChange}
          />
          <small className="form-text">
            Обратите внимание! <br />
            Пароль должен содержать не менее 8 символов, как минимум одну прописную букву,
            одну заглавную букву, одну цифру и один спецсимвол из <b>+-_@$!%*?&#.,;:[]{}</b>
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Подтвердите пароль"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Создать" />
      </form>
      <p className="my-1">
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
