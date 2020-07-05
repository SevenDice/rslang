import React from 'react';
import SpeakitGame from './SpeakitGame';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUserSettings } from '../../actions/profile';
import { connect } from 'react-redux';

const Speakit = ({ getUserSettings, profile: { settings } }) => {
  const [isStarted, setIsStarted] = React.useState(false);

  const startHandler = () => {
    setIsStarted(!isStarted);
  };

  React.useEffect(() => {
    getUserSettings(localStorage.getItem('id'));
  }, [getUserSettings]);

  return (
    <div>
      {settings === null ? (
        <div className='speakit-startpage'>
          <Loading />
        </div>
      ) : (
        <div className='speakit-startpage'>
          {' '}
          <Link to='/dashboard'>
            <div className='speakit-exit' title='Выйти на главную страницу' />
          </Link>
          {isStarted ? (
            <SpeakitGame />
          ) : (
            <div className='speakit-decs'>
              <p className='speakit-rules'>
                Кликайте по словам, чтобы услышать их произношение.
                <br /> Когда будете готовы, кликнете по кнопке "Начать говорить" и произносите
                слова.
                <br /> Порядок произношения не важен.
                <br />
                Как только вы произнесете присутствующее слово, оно будет подсвечено.
                <br /> Постарайтесь подсветить все слова.
                <br /> Удачи :)
              </p>
              <button onClick={startHandler} className='button primary'>
                Начать игру
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getUserSettings })(Speakit);
