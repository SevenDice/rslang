import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Пароли не совпадают', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='section-first'>
      <h4 className='auth'>Регистрация</h4>
      <p>
        <i className='fas fa-user' /> Создать аккаунт
      </p>
      <form className='form' onSubmit={onSubmit}>
      <div>
          <input
            type='email'
            placeholder='Имя пользователя'
            name='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Электронный адрес'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Пароль'
            name='password'
            value={password}
            onChange={onChange}
          />
          <p className='password-info'>
            Обратите внимание! Пароль должен содержать не менее 8 символов, как минимум одну
            прописную букву, одну заглавную букву, одну цифру и один спецсимвол из{' '}
            <b>+-_@$!%*?&#.,;:[]{}</b>
          </p>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Подтвердите пароль'
            name='password2'
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type='submit' className='button primary' value='Создать' />
      </form>
      <p className='my-1'>
        Уже есть аккаунт? <Link to='/login'>Войти</Link>
      </p>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
