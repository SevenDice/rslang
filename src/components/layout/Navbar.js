import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const menuIcon = React.useRef();
  const menu = React.useRef();
  const closeIcon = React.useRef();

  React.useEffect(() => {
    const menuToggle = () => {
      menu.current && menu.current.classList.add('visible');
    };

    const closeToggle = () => {
      menu.current && menu.current.classList.remove('visible');
    };

    const clickHandler = (e) => {
      if (e.target.className === 'visible') {
        return;
      } else if (e.target.closest('.menuToggle')) {
        menuToggle();
      } else {
        closeToggle();
      }
    };

    document.addEventListener('click', clickHandler);
  }, []);

  const authLinks = (
    <ul>
      <li>
        <Link to='/aboutus'>Разработчики</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' /> <span className='hide-sm'>Главная</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' /> <span className='hide-sm'>Выйти</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/aboutus'>Разработчики</Link>
      </li>
      <li>
        <Link to='/register'>Регистрация</Link>
      </li>
      <li>
        <Link to='/login'>Войти</Link>
      </li>
    </ul>
  );

  return (
    <header id='header'>
      <h1 className='navbar-logo'>
        <Link to='/'>RS Lang</Link>
      </h1>
      <nav id='nav'>
        <ul>
          <li className='special'>
            <a href='#menu' className='menuToggle' ref={menuIcon}>
              <span>Меню</span>
            </a>
            <div id='menu' ref={menu}>
            {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
              <div href='#menu' className='close' ref={closeIcon}></div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
