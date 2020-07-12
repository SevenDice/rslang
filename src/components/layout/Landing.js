import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section id='banner'>
        <div className='inner'>
          <h2 className='landing-logo'>RS Lang</h2>
          <p>
            Улучши свой английский <br />
            вместе с нами
          </p>
          <ul className='actions special'>
            <li>
              <Link to='/register' className='button'>
                Регистрация
              </Link>
            </li>
            <li>
              <Link to='/login' className='button primary'>
                Вход
              </Link>
            </li>
          </ul>
        </div>
        <a href='#one' className='more scrolly'>
          Узнать больше
        </a>
      </section>
      <section id='one' className='wrapper style1 special'>
        <div className='inner'>
          <header className='major'>
            <h2 className='landing-logo'>
              RS Lang представляет собой максимально эффективный и комфортный способ изучения
              английского языка
            </h2>
            <p>
              Стань одним из пользователей стремительно набирающего популярность приложения RS Lang
            </p>
          </header>
          <ul className='icons major'>
            <li>
              <span className='icon fa-gem major style1'>
                <span className='label'>R</span>
              </span>
            </li>
            <li>
              <span className='icon fa-heart major style2'>
                <span className='label'>S</span>
              </span>
            </li>
            <li>
              <span className='icon solid fa-code major style3'>
                <span className='label'>L</span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section id='two' className='wrapper alt style2'>
        <section className='spotlight'>
          <div className='image'>
            <img src='11.jpg' alt='' />
          </div>
          <div className='content'>
            <h2 className='landing-logo'>
              If you fall asleep now, you will dream. If you study now, you will live your dream.
            </h2>
            <p>
              Если ты сейчас уснешь, то тебе, конечно, приснится твоя мечта, но если же ты сейчас
              выучишься, то воплотишь свою мечту в жизнь.
            </p>
          </div>
        </section>
        <section className='spotlight'>
          <div className='image'>
            <img src='22.jpg' alt='' />
          </div>
          <div className='content'>
            <h2 className='landing-logo'>
              You are always a student, never a master. You have to keep moving forward.
            </h2>
            <p>Вы всегда ученик, и никогда — мастер. Вы должны продолжать двигаться вперед.</p>
          </div>
        </section>
        <section className='spotlight'>
          <div className='image'>
            <img src='33.jpg' alt='' />
          </div>
          <div className='content'>
            <h2 className='landing-logo'>
              When you think it’s too late, the truth is, it’s still early.
            </h2>
            <p>Когда ты думаешь, что уже слишком поздно, на самом деле, все еще рано.</p>
          </div>
        </section>
      </section>

      <section id='three' className='wrapper style3 special'>
        <div className='inner'>
          <header className='major'>
            <h2 className='landing-logo'>Основные преимущества RS Lang</h2>
            <p>
              RS Lang сочетает в себе множество форм обучения
              <br />
              для вашего всестороннего развития английского языка.
            </p>
          </header>
          <ul className='features'>
            <li className='icon solid fa-headphones-alt'>
              <h3 className='landing-logo'>Слушайте</h3>
              <p>
                Благодаря возможности прослушивания английских слов на языке оригинала ваше
                произношение сразу же формируется корректным образом.
              </p>
            </li>
            <li className='icon solid fa-microphone'>
              <h3 className='landing-logo'>Говорите</h3>
              <p>
                Тренируйте ваше произношение в игре SpeakIt, произнося слова в микрофон, и получайте
                обратную связь о вашем произношении.
              </p>
            </li>
            <li className='icon solid fa-gamepad'>
              <h3 className='landing-logo'>Играйте</h3>
              <p>
                Доказано, что игровая форма обучения является одной из самых эффективных. А также
                весёлых и увлекательных!
              </p>
            </li>
            <li className='icon solid fa-graduation-cap'>
              <h3 className='landing-logo'>Повышайте уровень</h3>
              <p>
                В приложении существует несколько уровней сложности обучения. Повышайте уровень
                постепенно. В таком случае процесс обучения будет максимально комфортным.
              </p>
            </li>
            <li className='icon solid fa-mobile'>
              <h3 className='landing-logo'>Учитесь с любого девайся</h3>
              <p>
                Нет компьютера под рукой? Не проблема! Приложением можно пользоваться также с
                телефона и планшета.
              </p>
            </li>
            <li className='icon solid fa-code'>
              <h3 className='landing-logo'>Активная разработка</h3>
              <p>
                Команда разработчиков на постоянной основе улучшает функционал приложения и создает
                новые формы обучения для вашего удобства.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id='cta' className='wrapper style4'>
        <div className='inner'>
          <header>
            <h2 className='landing-logo'>Сейчас самое время</h2>
            <p>
              Сделайте шаг навстречу свободному владению английским прямо сейчас – начните изучение
              языка с RS Lang{' '}
            </p>
          </header>
          <ul className='actions stacked'>
            <li>
              <Link to='/login' className='button primary'>
                Войти в аккаунт
              </Link>
            </li>
            <li>
              <Link to='/register' className='button'>
                Создать аккаунт
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <footer id='footer'>
        <ul className='icons'>
          <a href='https://rs.school/'>
            <i className='fa fa-bell-o' aria-hidden='true'></i>
            Rolling Scopes School
          </a>
        </ul>
        <ul className='copyright'>
          <li>&copy; Untitled</li>
          <li>
            Design: <a href='http://html5up.net'>HTML5 UP</a>
          </li>
        </ul>
      </footer>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
