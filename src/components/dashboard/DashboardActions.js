import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div>
      {
        <div className='dash-buttons'>
          <Link to='/profile' className='btn btn-light'>
            <i className='fas fa-user-circle text-primary' /> Профиль пользователя
          </Link>
        </div>
      }
      {
        <div className='dash-buttons'>
          <Link to='/training' className='btn btn-light'>
            <i className='text-primary' /> Изучение новых слов
          </Link>
        </div>
      }
      {
        <div className='dash-buttons'>
          <Link to='/EnglishPuzzle' className='btn btn-light'>
            <i className='text-primary' /> Английский в пазлах
          </Link>
        </div>
      }
      {
        <div className='dash-buttons'>
          <Link to='/Savanna' className='btn btn-light'>
            <i className='text-primary' /> Саванна
          </Link>
        </div>
      }
      {
        <div className='dash-buttons'>
          <Link to='/Speakit' className='btn btn-light'>
            <i className='text-primary' /> SpeakIt
          </Link>
        </div>
      }
      {
        <div className='dash-buttons'>
          <Link to='/Sprint' className='btn btn-light'>
            <i className='text-primary' /> Спринт
          </Link>
        </div>
      }
    </div>
  );
};

export default DashboardActions;
