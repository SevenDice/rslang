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
              Arcu aliquet vel lobortis ata nisl
              <br />
              eget augue amet aliquet nisl cep donec
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend
              <br />
              fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.
            </p>
          </header>
          <ul className='icons major'>
            <li>
              <span className='icon fa-gem major style1'>
                <span className='label'>Lorem</span>
              </span>
            </li>
            <li>
              <span className='icon fa-heart major style2'>
                <span className='label'>Ipsum</span>
              </span>
            </li>
            <li>
              <span className='icon solid fa-code major style3'>
                <span className='label'>Dolor</span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section id='two' className='wrapper alt style2'>
        <section className='spotlight'>
          <div className='image'>
            <img src='pic01.jpg' alt='' />
          </div>
          <div className='content'>
            <h2 className='landing-logo'>
              Magna primis lobortis
              <br />
              sed ullamcorper
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris
              eleifend fringilla nullam aenean mi ligula.
            </p>
          </div>
        </section>
        <section className='spotlight'>
          <div className='image'>
            <img src='pic02.jpg' alt='' />
          </div>
          <div className='content'>
            <h2 className='landing-logo'>
              Tortor dolore feugiat
              <br />
              elementum magna
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris
              eleifend fringilla nullam aenean mi ligula.
            </p>
          </div>
        </section>
        <section className='spotlight'>
          <div className='image'>
            <img src='pic03.jpg' alt='' />
          </div>
          <div className='content'>
            <h2 className='landing-logo'>
              Augue eleifend aliquet
              <br />
              sed condimentum
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris
              eleifend fringilla nullam aenean mi ligula.
            </p>
          </div>
        </section>
      </section>

      <section id='three' className='wrapper style3 special'>
        <div className='inner'>
          <header className='major'>
            <h2 className='landing-logo'>Accumsan mus tortor nunc aliquet</h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend
              <br />
              fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.
            </p>
          </header>
          <ul className='features'>
            <li className='icon fa-paper-plane'>
              <h3 className='landing-logo'>Arcu accumsan</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam
                amet leo Aenean ligula consequat consequat.
              </p>
            </li>
            <li className='icon solid fa-laptop'>
              <h3 className='landing-logo'>Ac Augue Eget</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam
                amet leo Aenean ligula consequat consequat.
              </p>
            </li>
            <li className='icon solid fa-code'>
              <h3 className='landing-logo'>Mus Scelerisque</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam
                amet leo Aenean ligula consequat consequat.
              </p>
            </li>
            <li className='icon solid fa-headphones-alt'>
              <h3 className='landing-logo'>Mauris Imperdiet</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam
                amet leo Aenean ligula consequat consequat.
              </p>
            </li>
            <li className='icon fa-heart'>
              <h3 className='landing-logo'>Aenean Primis</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam
                amet leo Aenean ligula consequat consequat.
              </p>
            </li>
            <li className='icon fa-flag'>
              <h3 className='landing-logo'>Tortor Ut</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam
                amet leo Aenean ligula consequat consequat.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id='cta' className='wrapper style4'>
        <div className='inner'>
          <header>
            <h2 className='landing-logo'>Arcue ut vel commodo</h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend
              fringilla.
            </p>
          </header>
          <ul className='actions stacked'>
            <li>
              <a href='https://rs.school/' className='button fit primary'>
                Activate
              </a>
            </li>
            <li>
              <a href='https://rs.school/' className='button fit'>
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer id='footer'>
        <ul className='icons'>
          <li>
            <a href='https://rs.school/' className='icon brands fa-twitter'>
              <span className='label'>Twitter</span>
            </a>
          </li>
          <li>
            <a href='https://rs.school/' className='icon brands fa-facebook-f'>
              <span className='label'>Facebook</span>
            </a>
          </li>
          <li>
            <a href='https://rs.school/' className='icon brands fa-instagram'>
              <span className='label'>Instagram</span>
            </a>
          </li>
          <li>
            <a href='https://rs.school/' className='icon brands fa-dribbble'>
              <span className='label'>Dribbble</span>
            </a>
          </li>
          <li>
            <a href='https://rs.school/' className='icon solid fa-envelope'>
              <span className='label'>Email</span>
            </a>
          </li>
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
