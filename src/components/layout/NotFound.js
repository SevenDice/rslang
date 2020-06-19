import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> Страница не найдена
      </h1>
      <p className='large'>Такой страницы не существует :(</p>
    </Fragment>
  );
};

export default NotFound;
